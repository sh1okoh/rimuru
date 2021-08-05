import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const Form: React.FC = () => {
  return (<div>
      <TextField
        id="standard-text"
        label="メッセージを入力"
      />
      <Button variant="contained" color="primary">
        送信
      </Button>
  </div>)
}