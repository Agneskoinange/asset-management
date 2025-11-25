'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { api } from '@/app/lib/api';
import MainLogo from '@/app/components/ui/Logo';
import Button from '@/app/components/ui/Button';

/**
 * Account Activation Page - Milestone 1
 *
 * This page handles email verification by:
 * 1. Extracting uid and token from URL query parameters
 * 2. Calling Djoser's /auth/users/activation/ endpoint
 * 3. Showing success or error message
 *
 * URL format: /auth/activate?uid=xxx&token=yyy
 */
export default function ActivatePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const activateAccount = async () => {
      // Get uid and token from URL query parameters
      const uid = searchParams.get('uid');
      const token = searchParams.get('token');

      if (!uid || !token) {
        setStatus('error');
        setMessage('Invalid activation link. Missing uid or token.');
        return;
      }

      try {
        // Call Djoser's activation endpoint
        await api.activateAccount(uid, token);
        setStatus('success');
        setMessage('Your account has been activated successfully! You can now log in.');
      } catch (error: any) {
        setStatus('error');
        setMessage(error.message || 'Activation failed. The link may be invalid or expired.');
        console.error('Activation error:', error);
      }
    };

    activateAccount();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-black flex justify-center items-center px-4">
      <div className="flex flex-col items-center w-full max-w-md space-y-10 text-white">
        {/* Logo */}
        <MainLogo />

        {/* Activation Status */}
        <div className="flex flex-col items-center space-y-6 w-full">
          <h2 className="text-3xl font-bold text-center">
            {status === 'loading' && 'Activating your account...'}
            {status === 'success' && 'Account Activated!'}
            {status === 'error' && 'Activation Failed'}
          </h2>

          {/* Loading Spinner */}
          {status === 'loading' && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}

          {/* Success Message */}
          {status === 'success' && (
            <div className="w-full space-y-4">
              <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded text-center">
                {message}
              </div>
              <Button
                label="Go to Login"
                variant="primary"
                className="w-full cursor-pointer"
                onClick={() => router.push('/auth/login')}
              />
            </div>
          )}

          {/* Error Message */}
          {status === 'error' && (
            <div className="w-full space-y-4">
              <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded text-center">
                {message}
              </div>
              <div className="flex flex-col space-y-2">
                <Button
                  label="Back to Register"
                  variant="primary"
                  className="w-full cursor-pointer"
                  onClick={() => router.push('/auth/register')}
                />
                <Button
                  label="Go to Login"
                  variant="secondary"
                  className="w-full cursor-pointer"
                  onClick={() => router.push('/auth/login')}
                />
              </div>
            </div>
          )}
        </div>

        {/* Helpful info */}
        <p className="text-gray-400 text-sm text-center">
          {status === 'loading' && 'Please wait while we verify your email address...'}
          {status === 'success' && 'Welcome to the platform! You can now access all features.'}
          {status === 'error' && 'If you need help, please contact support or try registering again.'}
        </p>
      </div>
    </div>
  );
}
