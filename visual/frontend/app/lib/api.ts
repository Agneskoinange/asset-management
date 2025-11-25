const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Type definitions for API requests/responses
interface LoginCredentials {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  re_password: string;
}

interface AuthTokens {
  access: string;
  refresh: string;
}

interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}

/**
 * Minimal API Client for Milestone 1: Authentication Basics
 *
 * This client handles only the essential authentication operations:
 * - User Registration
 * - User Login (JWT tokens)
 * - Email Activation
 */
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Generic request handler for all API calls
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
          message: errorData.detail || `HTTP error! status: ${response.status}`,
          errors: errorData,
        } as ApiError;
      }

      // Some endpoints return 204 No Content
      if (response.status === 204) {
        return {} as T;
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw {
          message: error.message,
        } as ApiError;
      }
      throw error;
    }
  }

  /**
   * Register a new user
   * Calls Djoser's /auth/users/ endpoint
   */
  async register(data: RegisterData): Promise<any> {
    return this.request('/auth/users/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Login user and get JWT tokens
   * Calls Djoser's /auth/jwt/create/ endpoint
   */
  async login(credentials: LoginCredentials): Promise<AuthTokens> {
    return this.request<AuthTokens>('/auth/jwt/create/', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  /**
   * Activate user account with uid and token from email
   * Calls Djoser's /auth/users/activation/ endpoint
   */
  async activateAccount(uid: string, token: string): Promise<any> {
    return this.request('/auth/users/activation/', {
      method: 'POST',
      body: JSON.stringify({ uid, token }),
    });
  }

  /**
   * Resend activation email if user didn't receive it
   * Calls Djoser's /auth/users/resend_activation/ endpoint
   */
  async resendActivation(email: string): Promise<any> {
    return this.request('/auth/users/resend_activation/', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }
}

export const api = new ApiClient(API_URL);
export type { LoginCredentials, RegisterData, AuthTokens, ApiError };
