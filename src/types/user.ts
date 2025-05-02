export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  aiPreferences: {
    heygen: {
      avatarId?: string;
      voiceId?: string;
      style?: string;
    };
    elevenLabs: {
      voiceId?: string;
      modelId?: string;
      stability?: number;
      similarityBoost?: number;
    };
  };
} 