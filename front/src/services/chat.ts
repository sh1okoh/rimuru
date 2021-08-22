import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import socketClient  from "socket.io-client";

export interface Message {
  id: number
  channel: Channel
  userName: string
  text: string
}

export type Channel = 'redux' | 'general';

export const chatApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getMessages: build.query<Message[], Channel>({
      query: (channel) => `messages/${channel}`,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const socket = socketClient('http://localhost:3000');
        console.log('arg', arg);
        try {
          await cacheDataLoaded
          console.log('hoge');
          const listener = (event: MessageEvent) => {
            const data = JSON.parse(event.data)
            if (data.channel !== arg) return
            updateCachedData((draft) => {
              draft.push(data)
            })
          }
          console.log('listener', listener);
        } catch {

        }

        await cacheEntryRemoved

        socket.close();
      }
    })
  })
});

export const { useGetMessagesQuery } = chatApi;