export const SESSION_EXPIRED_EVENT = 'urban-drainage:session-expired';

export function authHeaders(token, extraHeaders = {}) {
  return {
    ...extraHeaders,
    Authorization: `Bearer ${token}`,
  };
}

export async function authorizedFetch(url, token, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: authHeaders(token, options.headers),
  });
  const path = new URL(url, window.location.origin).pathname;
  if (response.status === 401 && !['/api/auth/login', '/api/auth/register', '/api/auth/logout'].includes(path)) {
    window.dispatchEvent(new CustomEvent(SESSION_EXPIRED_EVENT, { detail: { token } }));
  }
  return response;
}
