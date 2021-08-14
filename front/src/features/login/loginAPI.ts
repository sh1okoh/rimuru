import { httpPost } from '../../common/HttpClient';

export  const signIn = (url: string, body: Record<string, unknown>): Promise<Response> => {
  const response: Promise<Response> = httpPost(url, body);
  return response;
}