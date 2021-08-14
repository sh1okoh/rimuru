import { ThunkApi } from "../app/store";
import { setMessage } from "../messagesSlice";
import { redirectTo } from "../routerSlice"

const basePath = process.env.REACT_APP_STAGE === 'production'
  ? "http://localhost:3000/"
  : process.env.REACT_APP_STAGE === 'staging'
  ? "http://localhost:3000/"
  : "http://localhost:3000/";

const baseHeader = {
  "Content-Type": "application/json",
  accept: "application/json",
};

async function fetchWithErrorHandler(
  input: RequestInfo,
  thunkApi: ThunkApi,
  init?: RequestInit,
) {
  return await fetch(input, init).then((response) => handleErrorResponse(response, thunkApi));
}

export async function httpPost(path: string, body: Record<string, unknown>, thunkApi: ThunkApi): Promise<Body> {
  const url = new URL(basePath+path);
  const response  = await fetchWithErrorHandler(url.toString(), thunkApi, {
    method: 'POST',
    headers: baseHeader,
    body: JSON.stringify(body),
    mode: 'cors',
  })
  return response;
}

export async function httpGet(url: string, params: Record<string, any> = {}, thunkApi: ThunkApi): Promise<Body> {
  const path = new URL(url);
  path.search = new URLSearchParams(params).toString();
  const response  = await fetchWithErrorHandler(path.toString(), thunkApi, {
    method: 'GET',
    headers: baseHeader,
    mode: 'cors',
  })

  return response;
}

function handleErrorResponse(response: Response, thunkApi: ThunkApi) {
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
        setMessage("メールアドレスかパスワードが間違っています。"),
      );
      thunkApi.dispatch(redirectTo("/login"));

      throw Error("UNAUTHORIZED");
    case 404:
      thunkApi.dispatch(setMessage("不正なリクエストです"));

      throw Error("NOT_FOUND");
    case 500:
      thunkApi.dispatch(
        setMessage(
          "サーバーでエラーが発生しました。",
        ),
      );

      throw Error("INTERNAL_SERVER_ERROR");
    default:
      thunkApi.dispatch(
        setMessage(
          "不明なエラーが発生しました。",
        ),
      );

      throw Error("UNHANDLED_ERROR");
  }
}