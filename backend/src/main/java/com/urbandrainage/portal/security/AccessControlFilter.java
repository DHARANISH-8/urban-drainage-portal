package com.urbandrainage.portal.security;

import com.urbandrainage.portal.service.AuthService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Set;

@Component
public class AccessControlFilter extends OncePerRequestFilter {
    private final AuthService authService;
    public AccessControlFilter(AuthService authService) { this.authService = authService; }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String path = request.getRequestURI();
        return HttpMethod.OPTIONS.matches(request.getMethod())
                || !path.startsWith("/api/")
                || path.equals("/api/auth/login")
                || path.equals("/api/auth/register");
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {
        String authorization = request.getHeader("Authorization");
        AuthenticatedUser user = authorization != null && authorization.startsWith("Bearer ")
                ? authService.getSession(authorization.substring(7)) : null;
        if (user == null) { deny(response, HttpServletResponse.SC_UNAUTHORIZED, "Authentication is required."); return; }
        if (!isAllowed(request, user)) { deny(response, HttpServletResponse.SC_FORBIDDEN, "You do not have permission for this action."); return; }
        request.setAttribute("authenticatedUser", user);
        chain.doFilter(request, response);
    }

    private boolean isAllowed(HttpServletRequest request, AuthenticatedUser user) {
        String path = request.getRequestURI();
        String method = request.getMethod();
        String role = user.role();
        if (path.startsWith("/api/auth/")) return true;
        if (path.equals("/api/drains") || path.startsWith("/api/drains/")) {
            if (HttpMethod.GET.matches(method)) return true;
            return path.matches("/api/drains/\\d+/complaints")
                && HttpMethod.POST.matches(method) && "CITIZEN".equals(role);
        }
        if (path.startsWith("/api/drainage/infrastructure")) return HttpMethod.GET.matches(method) || "ADMIN".equals(role);
        if (path.equals("/api/runoff") || path.equals("/api/storage")) return "ADMIN".equals(role);
        if (path.equals("/api/users/staff")) return Set.of("STAFF", "ADMIN").contains(role);
        if (path.equals("/api/users")) return "ADMIN".equals(role);
        if (path.startsWith("/api/notifications/user/")) return path.endsWith("/" + user.id());
        if (path.startsWith("/api/notifications/")) return true;
        if (path.equals("/api/complaints") && HttpMethod.POST.matches(method)) return "CITIZEN".equals(role);
        if (path.equals("/api/complaints")) return Set.of("STAFF", "ADMIN").contains(role);
        if (path.startsWith("/api/complaints/user/")) return Set.of("STAFF", "ADMIN").contains(role) || path.endsWith("/" + user.id());
        if (path.startsWith("/api/complaints/staff/")) return "ADMIN".equals(role) || ("STAFF".equals(role) && path.endsWith("/" + user.id()));
        if (path.equals("/api/complaints/stats") || path.equals("/api/complaints/map")) return Set.of("STAFF", "ADMIN").contains(role);
        if (path.matches("/api/complaints/\\d+/assign")) return "ADMIN".equals(role);
        if (path.matches("/api/complaints/\\d+/status")) return Set.of("STAFF", "ADMIN").contains(role);
        if (path.matches("/api/complaints/\\d+")) {
            return HttpMethod.GET.matches(method)
                    || ("ADMIN".equals(role) && HttpMethod.DELETE.matches(method));
        }
        if (path.equals("/api/drainage/map")) return Set.of("STAFF", "ADMIN").contains(role);
        return false;
    }

    private void deny(HttpServletResponse response, int status, String message) throws IOException {
        response.setStatus(status);
        response.setContentType("application/json");
        response.getWriter().write("{\"message\":\"" + message + "\"}");
    }
}
