import React, { useEffect } from 'react';

import { useGetMessagesQuery } from '../../services/chat';

export const SocketIoConnection: React.FC = (props) => {
  const { data, error, isLoading } = useGetMessagesQuery('general');
  console.log('data', data);
  console.log('error', error);
  console.log('isLoading', isLoading);
  return <div>{props.children}</div>
}