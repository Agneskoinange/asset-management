'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/app/components/ui/Button';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import MainLogo from '@/app/components/ui/Logo';
import { api } from '@/app/lib/api';

/**
 * LoginForm Component - Milestone 1
 *
 * This form handles user login by calling Djoser's /auth/jwt/create/ endpoint.
 * On successful login, JWT tokens (access & refresh) are stored in localStorage.
 */
const LoginForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Call Djoser's JWT login endpoint
            const tokens = await api.login({
                username: formData.username,
                password: formData.password
            });

            // Store tokens in localStorage
            localStorage.setItem('access_token', tokens.access);
            localStorage.setItem('refresh_token', tokens.refresh);

            console.log('Login successful!', tokens);

            // Redirect to a success page or dashboard
            alert('Login successful! Tokens saved to localStorage.');
            router.push('/auth/register'); // For now, redirect back to register (you can change this later)
        } catch (err: any) {
            setError(err.message || 'Login failed. Please check your credentials.');
            console.error('Login error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-[90%] max-w-[1500px] gap-8 items-center">
            {/* Left - Gradient Hero */}
            <div
                className="hidden bg-linear-to-b from-blue-400 to-indigo-900 rounded-l-xl
                        h-80 lg:h-[70vh] w-full lg:w-1/2 lg:flex flex-col justify-end items-start p-8 text-white"
            >
                {/* Logo */}
                <MainLogo />

                {/* Marketing Text */}
                <h3 className="font-extrabold lg:text-4xl md:text-xl">
                    Secure Access to Your Asset Manager
                </h3>
                <p className="pt-3 text-gray-300">
                    Access encrypted storage, smart asset tracking, and seamless
                    document management. Login to maintain control over your digital
                    essentials.
                </p>
            </div>

            {/* Right - Login / Form */}
            <div className="text-white w-full lg:w-1/2 flex flex-col items-start justify-center">
                <div className="flex flex-col justify-start items-start h-80 lg:h-[70vh] w-full">
                    <div className="p-6 w-full">
                        <h2 className="font-bold text-4xl">Welcome back</h2>
                        <p className="pt-3 text-gray-300 -mt-2">
                            log in to your account to continue
                        </p>
                        <form className="flex flex-col w-full space-y-4" onSubmit={handleSubmit} suppressHydrationWarning>
                            {/* Error message */}
                            {error && (
                                <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded">
                                    {error}
                                </div>
                            )}

                            {/* Username field */}
                            <div className="flex flex-col relative pt-7">
                                <label className="text-white mb-1">
                                    Username
                                </label>
                                <MdEmail className="absolute left-3 top-19 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="your_username"
                                    required
                                    className="w-full h-10 pl-10 pr-3 rounded border border-gray-800
                                            bg-black text-white placeholder-gray-400
                                            focus:outline-none focus:border-blue-500 focus:ring-2
                                            focus:ring-blue-500"
                    />
                            </div>
                            {/* Password field */}
                            <div className="flex flex-col relative pt-5">
                                <label className="text-white mb-1">
                                    Password
                                </label>
                                <FaLock className="absolute left-3 top-17 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full h-10 pl-10 pr-3 rounded border border-gray-800
                                        bg-black text-white placeholder-gray-400
                                        focus:outline-none focus:border-blue-500 focus:ring-2
                                        focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex items-center justify-between w-full mt-4">
                                {/* Left: Checkbox + Label */}
                                <label className="flex items-center space-x-2 text-gray-400 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-blue-500 border-gray-400 rounded focus:ring-blue-500"
                                    />
                                    <span>Remember me</span>
                                </label>

                                {/* Right: Forgot Password */}
                                <button type="button" className="text-blue-500 font-medium hover:underline">
                                    Forgot Password?
                                </button>
                            </div>


                            <Button
                                label={loading ? 'Logging in...' : 'Log in'}
                                variant='primary'
                                type='submit'
                                disabled={loading}
                                className='cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                            />
                        </form>
                        <p className="pt-4 text-gray-400 pl-[170px]">Don't have an account?
                            <span
                                className="pl-1 cursor-pointer text-blue-500 font-bold"
                                onClick={() => router.push('/auth/register')}
                            >
                                Sign up
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
