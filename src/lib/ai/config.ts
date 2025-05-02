interface AIConfig {
  heygen: {
    apiKey: string;
    baseUrl: string;
  };
  elevenLabs: {
    apiKey: string;
    baseUrl: string;
  };
}

export const aiConfig: AIConfig = {
  heygen: {
    apiKey: process.env.NEXT_PUBLIC_HEYGEN_API_KEY!,
    baseUrl: 'https://api.heygen.com/v1',
  },
  elevenLabs: {
    apiKey: process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY!,
    baseUrl: 'https://api.elevenlabs.io/v1',
  },
}; 