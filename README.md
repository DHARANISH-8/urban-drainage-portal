# urban-drainage-portal

## Initial administrator account

To bootstrap the first administrator, set `ADMIN_BOOTSTRAP_NAME`, `ADMIN_BOOTSTRAP_EMAIL`, and `ADMIN_BOOTSTRAP_PASSWORD` in the backend process environment before starting the application. The password must be 16–72 characters. The application stores only its BCrypt hash, creates the account only when the email is unused, and fails startup if the email belongs to a non-administrator account. If all three variables are unset, startup is unchanged.

Unset the bootstrap variables after the account has been created. A subsequent startup with the same email skips the existing administrator and does not change its password. To explicitly rotate an existing bootstrap administrator's password, also set `ADMIN_BOOTSTRAP_RESET_PASSWORD=true` for one startup; this does not change the account's name or role.