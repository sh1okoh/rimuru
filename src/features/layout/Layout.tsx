import React from 'react';

interface Props {
  title: string[];
  dataInput?: JSX.Element;
}

export const Layout: React.FC<Props> = props => {
  const {title, dataInput} = props; 
  return (
    <div></div>
  )
}