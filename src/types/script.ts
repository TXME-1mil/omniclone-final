export type ScriptStatus = 'draft' | 'approved' | 'rejected';

export interface ScriptSegment {
  text: string;
  duration: number;
  voiceSettings?: {
    pitch?: number;
    speed?: number;
  };
}

export interface Script {
  id: string;
  videoId: string;
  userId: string;
  content: string;
  status: ScriptStatus;
  createdAt: Date;
  updatedAt: Date;
  metadata: {
    estimatedDuration: number;
    wordCount: number;
    segments: ScriptSegment[];
  };
} 