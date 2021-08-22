export interface ChatState {
  form: {
    message: string;
  },
  status: 'loading' | 'succeeded' | 'failed' | 'idle',
};

export interface Message {
  id: number
  channel: Channel
  userName: string
  text: string
}

export type Channel = 'redux' | 'general';

