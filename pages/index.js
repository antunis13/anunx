'use client'
import { styled } from '@mui/system'
import TemplateDefault from '../src/templates/Default'
import {
  Container,
  IconButton,
  InputBase,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'



const SearchBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: 'flex',
  justifyContent: 'center',
  marginTop: 20,
}))

const StyledCardMedia = styled(CardMedia)(() => ({
    paddingTop: '56%',
}))

const Home = () => {
  return (
    <TemplateDefault>
      <Container maxWidth="md">
          <Typography component='h1' variant='h3' align='center' color='textPrimary'>
            O que deseja encontrar? 
          </Typography>
          <SearchBox>
            <InputBase 
              placeholder='Ex.: Lavadora de Louças Brastemp 14 funções'
              fullWidth
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </SearchBox>
      </Container>
        <Container maxWidth='lg'>
            <Typography component='h2' variant='h4' align='center' color='textPrimary'>
                Destaques
            </Typography>
            <br />
            <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}> 
                <Card>
                <StyledCardMedia
                    image={'https://source.unsplash.com/random'}
                    title="Título da imagem"
                />
                <CardContent>
                    <Typography variant='h5' component='h2'>
                    Produto X
                    </Typography>
                    <Typography>
                    R$ 60,00
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}> 
                <Card>
                <StyledCardMedia
                    image={'https://source.unsplash.com/random'}
                    title="Título da imagem"
                />
                <CardContent>
                    <Typography variant='h5' component='h2'>
                    Produto X
                    </Typography>
                    <Typography>
                    R$ 60,00
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}> 
                <Card>
                <StyledCardMedia
                    image={'https://source.unsplash.com/random'}
                    title="Título da imagem"
                />
                <CardContent>
                    <Typography variant='h5' component='h2'>
                    Produto X
                    </Typography>
                    <Typography>
                    R$ 60,00
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            </Grid>
        </Container>
    </TemplateDefault>
  )
}

export default Home