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

export async function httpPost<Body>(url: string, body: Record<string, any>): Promise<any> {
  const validUrl = validateUrl(url) ? url : '';

  const response  = await fetch(validUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    mode: 'cors',
  })
  return response;
}

function handleError(response: Response, thunkApi: ThunkApi) {
  if (response.ok) {
    return response;
  }

  switch (response.status) {
    case 400:
      thunkApi.dispatch(
        setMessage("不正なリクエストです"),
      );

      throw Error("BAD_REQUEST");

    case 401:
      thunkApi.dispatch(
        setMessage("認証に失敗しました。ログインし直してください。"),
      );
      thunkApi.dispatch(redirectTo("/login"));

      throw Error("UNAUTHORIZED");
    case 404:
      thunkApi.dispatch(setMessage("リソースを発見できませんでした。"));

      throw Error("NOT_FOUND");
    case 500:
      thunkApi.dispatch(
        setMessage(
          "サーバー上でエラーが発生しました。ブラウザをリロードしても直らない場合、開発チームにお問い合わせください。",
        ),
      );

      throw Error("INTERNAL_SERVER_ERROR");
    default:
      thunkApi.dispatch(
        setMessage(
          "不明なエラーが発生しました。ブラウザをリロードしても直らない場合、開発チームにお問い合わせください。",
        ),
      );

      throw Error("UNHANDLED_ERROR");
  }
}