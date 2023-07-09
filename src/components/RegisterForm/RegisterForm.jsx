import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Loading, Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import { NavLink } from 'react-router-dom';

const defaultTheme = createTheme();

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async credentials => {
    try {
      Loading.hourglass();
      await dispatch(
        authOperations.register({ name, email, password }),
      );

      Notify.success(`${name} registered successfully`);
    } catch (error) {
      Notify.failure(`${name} failed to register`);
    } finally {
      Loading.remove();
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const credentials = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    onSubmit(credentials);
    formReset();
    form.reset();
  };
  const formReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  const handleChange = evt => {
    const event = evt.currentTarget.name;
    switch (event) {
      case 'name':
        setName(evt.currentTarget.value.trim());
        break;
      case 'email':
        setEmail(evt.currentTarget.value.trim());
        break;
      case 'password':
        setPassword(evt.currentTarget.value.trim());
        break;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper>
          <Box
            sx={{
              marginTop: 8,
              padding: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: 'secondary.main' }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={name}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                endIcon={<SendIcon />}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <NavLink to="/login" variant="body2">
                    Already have an account? Sign in
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};
