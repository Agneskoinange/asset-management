'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MdEmail } from 'react-icons/md'
import { FaLock, FaUser } from 'react-icons/fa'
import Button from '@/app/components/ui/Button'
import MainLogo from '@/app/components/ui/Logo'
import { api } from '@/app/lib/api'

const RegisterForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        re_password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        // Validate passwords match
        if (formData.password !== formData.re_password) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            await api.register({
                username: formData.username,
                email: formData.email,
                password: formData.password,
                re_password: formData.re_password
            });

            setSuccess('Account created successfully! Redirecting to login...');
            console.log('Registration successful!');

            // Redirect to login after 3 seconds
            setTimeout(() => {
                router.push('/auth/login');
            }, 3000);
        } catch (err: any) {
            const errorMessage = err.errors
                ? Object.entries(err.errors).map(([key, value]: [string, any]) => `${key}: ${value.join(', ')}`).join('\n')
                : err.message || 'Registration failed. Please try again.';
            setError(errorMessage);
            console.error('Registration error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex justify-center items-start pt-20 px-4 sm:px-6 lg:px-0">
            <div className="flex flex-col items-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl space-y-10 text-white">
                
                {/* Logo */}
                <MainLogo />

                {/* Marketing */}
                <div className="flex flex-col items-center space-y-4 font-extrabold text-center">
                    <h2 className="capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Create your account</h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-normal">
                        Join thousands of users and get started today.
                    </p>
                </div>

                {/* Register form */}
                <form className="flex flex-col w-full space-y-4" onSubmit={handleSubmit} suppressHydrationWarning>

                    {/* Error message */}
                    {error && (
                        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded whitespace-pre-line">
                            {error}
                        </div>
                    )}

                    {/* Success message */}
                    {success && (
                        <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-2 rounded">
                            {success}
                        </div>
                    )}

                    {/* Email field */}
                    <div className="flex flex-col relative">
                        <label className="text-white mb-1">Email</label>
                        <MdEmail className="absolute left-3 top-12 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@example.com"
                            required
                            className="w-full h-10 pl-10 pr-3 rounded border border-gray-800
                                bg-black text-white placeholder-gray-400
                                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Username field */}
                    <div className="flex flex-col relative">
                        <label className="text-white mb-1">Username</label>
                        <FaUser className="absolute left-3 top-12 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="your_username"
                            required
                            className="w-full h-10 pl-10 pr-3 rounded border border-gray-800
                                bg-black text-white placeholder-gray-400
                                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password field */}
                    <div className="flex flex-col relative">
                        <label className="text-white mb-1">Password</label>
                        <FaLock className="absolute left-3 top-12 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                            className="w-full h-10 pl-10 pr-3 rounded border border-gray-800
                                bg-black text-white placeholder-gray-400
                                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Confirm password field */}
                    <div className="flex flex-col relative">
                        <label className="text-white mb-1">Confirm Password</label>
                        <FaLock className="absolute left-3 top-12 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="password"
                            name="re_password"
                            value={formData.re_password}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            required
                            className="w-full h-10 pl-10 pr-3 rounded border border-gray-800
                                bg-black text-white placeholder-gray-400
                                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Register button */}
                    <Button
                        label={loading ? 'Creating account...' : 'Register'}
                        variant='primary'
                        type='submit'
                        disabled={loading}
                        className='cursor-pointer w-full disabled:opacity-50 disabled:cursor-not-allowed'
                    />

                    {/* Login link */}
                    <p className="text-gray-400 text-sm sm:text-base text-center">
                        Already have an account?
                        <span className="pl-1 cursor-pointer text-blue-500 font-bold">Log in</span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm
