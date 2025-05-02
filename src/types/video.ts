export type VideoStatus = 'draft' | 'script_ready' | 'video_ready' | 'published' | 'failed';

export interface Video {
  id: string;
  userId: string;
  title: string;
  status: VideoStatus;
  createdAt: Date;
  updatedAt: Date;
  generationDetails: {
    heygen: {
      avatarId: string;
      voiceId: string;
      style: string;
      generationId?: string;
      status?: 'pending' | 'processing' | 'completed' | 'failed';
      error?: string;
    };
    elevenLabs: {
      voiceId: string;
      modelId: string;
      audioUrl?: string;
      status?: 'pending' | 'processing' | 'completed' | 'failed';
      error?: string;
    };
  };
} 