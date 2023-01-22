import * as React from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

export default function LoginPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='sm'>
        <Box
          sx={{
            padding: '60px 40px',
            boxShadow: 3,
            borderRadius: '20px',
            marginTop: 8,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '40px 40px',
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: 'secondary.main',
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  type='submit'
                  variant='contained'
                  sx={{ mt: 3, mb: 2, padding: '10px', width: '160px' }}
                >
                  Sign In
                </Button>
              </Box>

              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>

        <Copyright sx={{ mt: 6 }} />
      </Container>
    </ThemeProvider>
  )
}

// import React, { useState } from 'react';
// import axios from 'axios';
// import jwt from "jsonwebtoken"
// import bcrypt from "bcryptjs"

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isTwoFactorAuth, setIsTwoFactorAuth] = useState(false);
//   const [secretCode, setSecretCode] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setError('');
//       setIsLoading(true);

//       // Perform client-side validation
//       if (!username || !password) {
//         setError('Please enter a username and password');
//         setIsLoading(false);
//         return;
//       }

//       // Fetch the user from the server and compare the hashed password
//       const user = await axios.get(`/api/users/${username}`);
//       const isValid = await bcrypt.compare(password, user.password);
//       if (!isValid) {
//         setError('Invalid credentials');
//         setIsLoading(false);
//         return;
//       }

//       // Check if the user enabled two-factor authentication
//       if (user.isTwoFactorAuth) {
//         setIsLoading(false);
//         setIsTwoFactorAuth(true);
//         return;
//       }

//       // Create and sign a JWT token
//       const token = jwt.sign({ user }, 'secretkey', { expiresIn: '1h' });

//       // Save the JWT token to a secure cookie
//       document.cookie = `token=${token}; Secure; HttpOnly`;

//       // Redirect the user to a protected page
//       window.location.href = '/dashboard';
//     } catch (err) {
//       console.error(err);
//       setError('An error occurred, please try again later');
//       setIsLoading(false);
//     }
//   };

//   const handleTwoFactorAuth = async (e) => {
//     e.preventDefault();
//     try {
//       setError('');
//       setIsLoading(true);

//       // Send the secret code to the server to verify
//       const res = await axios.post('/api/verify-two-factor', {
//         username,
//         secretCode,
//       });

//       // Create and sign a JWT token
//       const token = jwt.sign({ user: res.data }, 'secretkey', { expiresIn: '1h' });

//       // Save the JWT token to a secure cookie
//       document.cookie = `token=${token}; Secure; HttpOnly`;

//       // Redirect the user to a protected page
//       window.location.href = '/dashboard';
//     } catch (err) {
//       console.error(err);
//       setError('An error occurred, please try again later');
//       setIsLoading(false);
//       setError('Invalid secret code');
//       setIsLoading(false);
//     }
//   };

//   const handleRefreshToken = async () => {
//     try {
//       // Get the current token from the cookie
//       const currentToken = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");

//       // Verify and decode the current token
//       const { user } = jwt.verify(currentToken, 'secretkey');

//       // Create and sign a new JWT token
//       const newToken = jwt.sign({ user }, 'secretkey', { expiresIn: '1h' });

//       // Save the new JWT token to a secure cookie
//       document.cookie = `token=${newToken}; Secure; HttpOnly`;

//     } catch (err) {
//       console.error(err);
//       // If the token is expired or invalid, prompt the user to login again
//       setError('Your session has expired, please login again');
//       setIsLoading(false);
//     }
//   };

//   // Check if the token is expired and refresh it if necessary
//   useEffect(() => {
//     const checkToken = async () => {
//       try {
//         // Get the current token from the cookie
//         const currentToken = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");

//         // Verify the current token
//         jwt.verify(currentToken, 'secretkey');
//       } catch (err) {
//         // If the token is expired or invalid, refresh it
//         handleRefreshToken();
//       }
//     };

//     // Check the token on mount and every 60 seconds
//     checkToken();
//     const intervalId = setInterval(checkToken, 60000);
//     return () => clearInterval(intervalId);
//   }, []);

//   if (isTwoFactorAuth) {
//     return (
//       <div>
//         <form onSubmit={handleTwoFactorAuth}>
//           <label>
//             Secret Code:
//             <input
//               type="text"
//               value={secretCode}
// onChange={(e) => setSecretCode(e.target.value)}
//             />
//           </label>
//           <br />
//           <button type="submit">Verify</button>
//         </form>
//         {error && <p>{error}</p>}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? 'Loading...' : 'Login'}
//         </button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default LoginPage;
