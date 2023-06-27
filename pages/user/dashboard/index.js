'use client'

import { styled } from '@mui/system'
import TemplateDefault from '../../../src/templates/Default'
import { 
  Container,
  Typography,
  Button,
  Grid,
} from '@mui/material'

import Card from '../../../src/components/Card'


const StyledButton = styled(Button)(() => ({
  margin: '30px auto',
  display:'block',
}))


const Dashboard = () => {
  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align='center'>
          Meus Anúncios
        </Typography>
      </Container>
      <StyledButton variant='contained' color='primary'>
        Publicar novo anúncio
      </StyledButton>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}> 
            <Card
              image={'https://source.unsplash.com/random'}  
              title="Título da imagem"
              subtitle=' R$ 60,00'
              actions={
                <>
                  <Button size='small' color='primary'>
                    Editar
                  </Button>
                  <Button size='small' color='primary'>
                    Remover
                  </Button>
                </>
              }
            />
              
          </Grid>
          <Grid item xs={12} sm={6} md={4}> 
            <Card
              image={'https://source.unsplash.com/random'}  
              title="Título da imagem"
              subtitle=' R$ 60,00'
              actions={
                <>
                  <Button size='small' color='primary'>
                    Editar
                  </Button>
                  <Button size='small' color='primary'>
                    Remover
                  </Button>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}> 
            <Card
              image={'https://source.unsplash.com/random'}  
              title="Título da imagem"
              subtitle=' R$ 60,00'
              actions={
                <>
                  <Button size='small' color='primary'>
                    Editar
                  </Button>
                  <Button size='small' color='primary'>
                    Remover
                  </Button>
                </>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Dashboard