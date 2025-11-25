const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

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

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

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

  private getAuthHeader(token: string): Record<string, string> {
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  // Authentication endpoints
  async login(credentials: LoginCredentials): Promise<AuthTokens> {
    return this.request<AuthTokens>('/auth/jwt/create/', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(data: RegisterData): Promise<any> {
    return this.request('/auth/users/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async refreshToken(refreshToken: string): Promise<{ access: string }> {
    return this.request<{ access: string }>('/auth/jwt/refresh/', {
      method: 'POST',
      body: JSON.stringify({ refresh: refreshToken }),
    });
  }

  async verifyToken(token: string): Promise<any> {
    return this.request('/auth/jwt/verify/', {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
  }

  async activateAccount(uid: string, token: string): Promise<any> {
    return this.request('/auth/users/activation/', {
      method: 'POST',
      body: JSON.stringify({ uid, token }),
    });
  }

  async resendActivation(email: string): Promise<any> {
    return this.request('/auth/users/resend_activation/', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  async resetPassword(email: string): Promise<any> {
    return this.request('/auth/users/reset_password/', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  async resetPasswordConfirm(
    uid: string,
    token: string,
    new_password: string,
    re_new_password: string
  ): Promise<any> {
    return this.request('/auth/users/reset_password_confirm/', {
      method: 'POST',
      body: JSON.stringify({ uid, token, new_password, re_new_password }),
    });
  }

  async setPassword(
    accessToken: string,
    current_password: string,
    new_password: string,
    re_new_password: string
  ): Promise<any> {
    return this.request('/auth/users/set_password/', {
      method: 'POST',
      headers: this.getAuthHeader(accessToken),
      body: JSON.stringify({ current_password, new_password, re_new_password }),
    });
  }

  // Profile endpoints
  async getProfile(accessToken: string): Promise<any> {
    return this.request('/api/profile/me/', {
      method: 'GET',
      headers: this.getAuthHeader(accessToken),
    });
  }

  async updateProfile(accessToken: string, data: any): Promise<any> {
    return this.request('/api/profile/me/', {
      method: 'PATCH',
      headers: this.getAuthHeader(accessToken),
      body: JSON.stringify(data),
    });
  }

  // User endpoints
  async getMe(accessToken: string): Promise<any> {
    return this.request('/auth/users/me/', {
      method: 'GET',
      headers: this.getAuthHeader(accessToken),
    });
  }

  async updateMe(accessToken: string, data: any): Promise<any> {
    return this.request('/auth/users/me/', {
      method: 'PATCH',
      headers: this.getAuthHeader(accessToken),
      body: JSON.stringify(data),
    });
  }
}

export const api = new ApiClient(API_URL);
export type { LoginCredentials, RegisterData, AuthTokens, ApiError };
