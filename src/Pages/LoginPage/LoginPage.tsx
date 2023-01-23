import * as React from 'react'
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import Logo from '../../Components/Logo/Logo'

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
      <Container component='main' maxWidth='sm' sx={{ height: 'fit-content' }}>
        <Box
          sx={{
            padding: '60px 40px',
            boxShadow: 3,
            borderRadius: '20px',
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
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <Logo />{' '}
              <Typography
                component='h1'
                variant='h5'
                sx={{ fontWeight: 'bold' }}
              >
                File.io
              </Typography>
            </div>
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
                  onClick={() => {
                    window.location.pathname = '/'
                  }}
                  type='submit'
                  variant='contained'
                  sx={{ mt: 3, mb: 2, padding: '10px', width: '160px' }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Copyright sx={{ mt: 6 }} />
      </Container>
    </ThemeProvider>
  )
}
