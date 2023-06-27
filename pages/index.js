'use client'
import { styled } from '@mui/system'
import Card from '../src/components/Card'
import TemplateDefault from '../src/templates/Default'
import {
  Container,
  IconButton,
  InputBase,
  Typography,
  Paper,
  Grid,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  display: 'flex',
  justifyContent: 'center',
  marginTop: 20,
}))

const CardGrid = styled(Container)({
  marginTop: 50,
})

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
        <CardGrid maxWidth='lg'>
            <Typography component='h2' variant='h4' align='center' color='textPrimary'>
                Destaques
            </Typography>
            <br />
            <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}> 
              <Card
                image={'https://source.unsplash.com/random'}  
                title="Título da imagem"
                subtitle=' R$ 60,00'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}> 
              <Card
                image={'https://source.unsplash.com/random'}  
                title="Título da imagem"
                subtitle=' R$ 60,00'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}> 
              <Card
                image={'https://source.unsplash.com/random'}  
                title="Título da imagem"
                subtitle=' R$ 60,00'
              />
            </Grid>
            </Grid>
        </CardGrid>
    </TemplateDefault>
  )
}

export default Home