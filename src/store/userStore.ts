import { create } from 'zustand';
import { User, UserRole } from '@/types/user';

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  role: UserRole | null;
  setRole: (role: UserRole | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user, role: user?.role ?? null }),
  role: null,
  setRole: (role) => set({ role }),
})); 