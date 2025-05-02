import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';

interface AuthFormProps {
  mode: 'login' | 'register';
}

export function AuthForm({ mode }: AuthFormProps) {
  const { signIn, signUp, error, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (mode === 'login') {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">{mode === 'login' ? 'Sign In' : 'Sign Up'}</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        autoComplete="email"
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <Button type="submit" disabled={loading || submitted} className="w-full">
        {loading || submitted ? 'Loading...' : mode === 'login' ? 'Sign In' : 'Sign Up'}
      </Button>
    </form>
  );
} 