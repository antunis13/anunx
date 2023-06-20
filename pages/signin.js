import React from 'react'
import { 
  Avatar, 
  Button,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Grid,
  Typography
} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import { styled } from '@mui/system'

const StyledGrid = styled(Grid)(() =>  ({
  height: '100vh',
}))

const GridImage = styled(Grid)(() =>  ({
  height: '100vh',
  backgroundImage: 'url(https://source.unsplash.com/random)',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#ccc',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))

const StyledDiv = styled('div')(({ theme }) => ({
  margin: theme.spacing(8, 4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  
}))

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main
}))

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%', // Fix IE 11 issue.
  marginTop: theme.spacing(1),
}))

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}))

export default function SignInSide() {
 
  return (
    <StyledGrid container component="main">
      <CssBaseline />
      <GridImage item xs={false} sm={4} md={7}  />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <StyledDiv>
          <StyledAvatar>
            <LockIcon />
          </StyledAvatar>
          <Typography component="h1" variant="h5">
            Acesse a sua conta
          </Typography>
          <StyledForm noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Entrar
            </StyledButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Não tem uma conta?
                  Cadastre-se
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Crie sua conta
                </Link>
              </Grid>
            </Grid>
          </StyledForm>
        </StyledDiv>
      </Grid>
    </StyledGrid>
  )
}