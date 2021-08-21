export interface ChatState {
  message: string;
  status: 'loading' | 'succeeded' | 'failed' | 'idle',
};
