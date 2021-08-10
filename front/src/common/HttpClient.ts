import { ThunkApi } from "../app/store";
import { validateUrl } from "./validateUri"

const basePath = process.env.REACT_APP_STAGE === 'production'
  ? "http://localhost:3000/"
  : process.env.REACT_APP_STAGE === 'staging'
  ? "http://localhost:3000/"
  : "http://localhost:3000/";

// async function fetchWithErrorHandling(
//   input: RequestInfo,
//   thunkApi: ThunkApi,
//   init?: RequestInit,
// ) {
//   return await fetch(input, init).then((response) => console.log('response', response));
// }

export async function post<Body>(url: string, body: Record<string, any>): Promise<any> {
  const validUrl = validateUrl(url) ? url : '';

  const response  = await fetch(validUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  
  return response;

}