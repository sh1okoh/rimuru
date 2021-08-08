export interface LoginState {
  email: string,
  password: string,
  status: 'loading' | 'succeeded' | 'failed' | 'idle'
}