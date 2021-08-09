import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';

import { useAppDispatch,useAppSelector } from '../../app/hooks';
import { changeFormValue, selectState,submit } from './formSlice';
import { FormState } from './interface';

export const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const { form } = useAppSelector(selectState);
  const handleOnChangeForm = (key: keyof FormState, value: any ) => {
    const newForm = {
      ...form,
      [key]: value,
    };
    dispatch(changeFormValue(newForm))
  };

  return (
    <div>
      <form>
        <TextField
          id="standard-text"
          label="メッセージを入力"
          name="messageBeforeSubmit"
          onChange={ e => handleOnChangeForm('messageBeforeSubmit', e.currentTarget.value)}
        />
        <Button variant="contained" color="primary" onClick={e => dispatch(submit)}>
          送信
        </Button>
      </form>
    </div>
  )
}