import { styled } from '@mui/system'
import { Box, Container, Grid, Typography } from "@mui/material"
import Link from 'next/link'

const ContainerFooter = styled(Container)(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    }
}))

const LinkMenu = styled(Link)({
    textDecoration: 'none',
  }) 

const Footer = () => {
    return(
        <ContainerFooter maxWidth='lg' component='footer'>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                      <LinkMenu href='#' passHref>
                            <Typography color='textSecondary' variant='subtitle1'>
                                Ajuda e Contato
                            </Typography>
                      </LinkMenu>  
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                      <LinkMenu href='#' passHref>
                            <Typography color='textSecondary' variant='subtitle1'>
                             Dicas de segurança
                            </Typography>
                      </LinkMenu>  
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                      <LinkMenu href='#' passHref>
                            <Typography color='textSecondary' variant='subtitle1'>  
                            Anunciar e Vender
                            </Typography>
                      </LinkMenu>  
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                      <LinkMenu href='#' passHref>
                            <Typography color='textSecondary' variant='subtitle1'>       
                                Plano Profissional
                            </Typography>
                      </LinkMenu>  
                    </Box>
                </Grid>
            </Grid>
        </ContainerFooter>
    )
}

export default Footer