import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import socketClient  from "socket.io-client";

import { Channel, Message } from './interface';


export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    getMessages: build.query<Message[], Channel>({
      query: (channel) => `messages/${channel}`,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const socket = socketClient('http://localhost:3000');
        try {
          await cacheDataLoaded

          const listener = (event: MessageEvent) => {
            const data = JSON.parse(event.data)
            if (data.channel !== arg) return
            updateCachedData((draft) => {
              draft.push(data)
            })
          }
        } catch {

        }

        await cacheEntryRemoved

        socket.close();
      }
    })
  })
});

export const { useGetMessagesQuery } = api;