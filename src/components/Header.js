'use client'

import {useState} from 'react'
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
  marginLeft: 8,
})

const LinkMenu = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
})) 

export default function Header() {
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={3}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>
            <Link href='/user/publish' passHref>
              <Button color="secondary" variant='outlined'>Anunciar e Vender</Button>
            </Link>
            <IconButton color='secondary' onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {
                true === false
                  ? <Avatar src=''/>
                  : <AccountCircle />
              }
              <UserName variant='subtitle2' color='secondary'> 
                Richard
              </UserName>
            </IconButton>
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
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}