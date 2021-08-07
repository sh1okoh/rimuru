import React from 'react';
import { Form } from '../form/Form'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';

export const Room: React.FC = () => {
  const selectState = (state: RootState) => state;
  return (
    <div>

      <Form />
    </div>
  )
}