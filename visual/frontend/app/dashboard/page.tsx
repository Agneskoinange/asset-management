'use client';

import { ProtectedRoute } from '@/app/components/ProtectedRoute';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/ui/Button';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold">Dashboard</h1>
              <Button
                label="Logout"
                variant="danger"
                onClick={handleLogout}
              />
            </div>

            {/* Welcome Section */}
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                Welcome back, {user?.username}! 👋
              </h2>
              <p className="text-gray-400">
                You have successfully logged in to your dashboard.
              </p>
            </div>

            {/* User Info Card */}
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Your Profile</h3>
              <div className="space-y-3">
                <div className="flex border-b border-gray-800 pb-3">
                  <span className="text-gray-400 w-32">Username:</span>
                  <span className="text-white font-medium">{user?.username}</span>
                </div>
                <div className="flex border-b border-gray-800 pb-3">
                  <span className="text-gray-400 w-32">Email:</span>
                  <span className="text-white font-medium">{user?.email}</span>
                </div>
                <div className="flex border-b border-gray-800 pb-3">
                  <span className="text-gray-400 w-32">User ID:</span>
                  <span className="text-white font-medium">{user?.id}</span>
                </div>
                {user?.first_name && (
                  <div className="flex border-b border-gray-800 pb-3">
                    <span className="text-gray-400 w-32">First Name:</span>
                    <span className="text-white font-medium">{user.first_name}</span>
                  </div>
                )}
                {user?.last_name && (
                  <div className="flex border-b border-gray-800 pb-3">
                    <span className="text-gray-400 w-32">Last Name:</span>
                    <span className="text-white font-medium">{user.last_name}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg text-left transition-colors">
                  <h4 className="font-semibold mb-1">Manage Assets</h4>
                  <p className="text-sm text-gray-300">View and manage your assets</p>
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg text-left transition-colors">
                  <h4 className="font-semibold mb-1">Update Profile</h4>
                  <p className="text-sm text-gray-300">Edit your profile information</p>
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg text-left transition-colors">
                  <h4 className="font-semibold mb-1">Settings</h4>
                  <p className="text-sm text-gray-300">Manage account settings</p>
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg text-left transition-colors">
                  <h4 className="font-semibold mb-1">Help & Support</h4>
                  <p className="text-sm text-gray-300">Get help with your account</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
