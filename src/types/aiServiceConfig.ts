export type AIService = 'heygen' | 'elevenLabs';

export interface AIServiceConfig {
  id: string;
  userId: string;
  service: AIService;
  apiKey: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  settings: {
    heygen?: {
      defaultAvatarId?: string;
      defaultVoiceId?: string;
    };
    elevenLabs?: {
      defaultVoiceId?: string;
      defaultModelId?: string;
    };
  };
} 