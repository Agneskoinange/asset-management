### 🧾 Authentication & Profile API Endpoints

Below is the complete list of available endpoints for authentication, user management, and profile handling.

| **Endpoint** | **Method** | **Description** |
|---------------|-------------|-----------------|
| `/auth/jwt/create/` | **POST** | Obtain **access** and **refresh** JWT tokens (login). |
| `/auth/jwt/refresh/` | **POST** | Refresh an expired **access token** using the refresh token. |
| `/auth/jwt/verify/` | **POST** | Verify that a JWT token is valid. |
| `/auth/users/` | **POST** | Register a new user account. |
| `/auth/users/` | **GET** | List all users (**admin-only**). |
| `/auth/users/activation/` | **POST** | Activate a newly registered user using activation link (`uid` and `token`). |
| `/auth/users/resend_activation/` | **POST** | Resend activation email to user. |
| `/auth/users/me/` | **GET** | Retrieve the authenticated user’s own account data. |
| `/auth/users/me/` | **PUT / PATCH** | Update current user’s account data (e.g., name, phone). |
| `/auth/users/me/` | **DELETE** | Delete current user’s account. |
| `/auth/users/{id}/` | **GET** | Retrieve a specific user (**admin-only**). |
| `/auth/users/{id}/` | **PUT / PATCH / DELETE** | Update or delete a specific user (**admin-only**). |
| `/auth/users/reset_password/` | **POST** | Request a password reset email (sends `uid` and `token`). |
| `/auth/users/reset_password_confirm/` | **POST** | Confirm password reset and set new password. |
| `/auth/users/set_password/` | **POST** | Change password for logged-in user. |
| `/auth/users/reset_username/` | **POST** | Request username reset via email. |
| `/auth/users/reset_username_confirm/` | **POST** | Confirm username reset. |
| `/auth/users/set_username/` | **POST** | Change username for logged-in user. |
| `/api/profile/` | **GET** | List profiles — returns all users (**admin**) or only self (**regular user**). |
| `/api/profile/me/` | **GET** | Retrieve authenticated user’s profile details. |
| `/api/profile/me/` | **PUT / PATCH** | Update authenticated user’s profile (bio, avatar, phone, etc.). |

---

#### 🔐 Authentication
All protected endpoints require authentication using the JWT `access` token:

```http
Authorization: Bearer <your_access_token>
```