import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
 } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import { Field, Form } from "react-final-form";

import { useAppDispatch } from '../../app/hooks';
import { LoginState } from './interface';
import { login} from './loginSlice';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        rimuru.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <Form<LoginState>
          onSubmit={({email, password}) => {
            dispatch(login({ email, password}));
          }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Field<string>
                name="email"
                render={({input}) => (
                  <TextField
                  {...input}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                )}
              />
              <Field<string>
                name="password"
                render={({ input }) => (
                  <TextField
                  {...input}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"    
                />
                )}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="保存しますか"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                ログイン
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    パスワード忘れた方はこちら
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"会員登録はこちら"}
                  </Link>
                </Grid>
              </Grid>
          </form>)
          } />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}