import { useAuth } from '@/hooks/useAuth';
import { redirect } from 'next/navigation';

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!user) {
    if (typeof window !== 'undefined') redirect('/login');
    return null;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.email}!</h1>
      <p>Your role: <span className="font-mono">{user.role}</span></p>
    </div>
  );
} 