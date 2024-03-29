'use client'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'
import { styled } from '@mui/system'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

const UserName = styled(Typography)({
  marginLeft: 10,
})

const StyledButton = styled(Button)({
  marginRight: 10,
})

const LinkMenu = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
})) 

export default function Header() {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const { data: session, status } = useSession()
  const openUserMenu = Boolean(anchorUserMenu)
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={3}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>
            <Link href={session ? '/user/publish' : '/auth/signin'} passHref>
              <StyledButton color="secondary" variant='outlined'>Anunciar e Vender</StyledButton>
            </Link>
              {
                session
                ?(
                  <IconButton color='secondary' onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                    {
                        session.user.image
                        ? <Avatar src={session.user.image}/>
                        : <AccountCircle />
                    }
                    <UserName variant='subtitle2' color='secondary'> 
                        {session.user.name}
                    </UserName>
                  </IconButton>
                ): null
              }
            <Menu
              open={openUserMenu}
              anchorEl={anchorUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <LinkMenu href='/user/dashboard' passHref>
                <MenuItem>Meus anúncios</MenuItem>
              </LinkMenu>
              <LinkMenu href='/user/publish' passHref>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </LinkMenu>
              <Divider />
              <MenuItem onClick={() => signOut({
                callbackUrl: '/'
              })}>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}