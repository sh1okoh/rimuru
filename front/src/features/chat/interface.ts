export interface ChatState {
  form: {
    message: string;
  },
  status: 'loading' | 'succeeded' | 'failed' | 'idle',
};
