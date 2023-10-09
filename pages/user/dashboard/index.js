'use client'

import { styled } from '@mui/system'
import TemplateDefault from '../../../src/templates/Default'
import { 
  Container,
  Typography,
  Button,
  Grid,
} from '@mui/material'
import { getSession } from 'next-auth/react'

import Card from '../../../src/components/Card'
import ProductsModel from '../../../src/models/products'
import dbConnect from '@/utils/lib/dbConnect'
import { formatCurrency } from '@/utils/currency'


const StyledButton = styled(Button)(() => ({
  margin: '30px auto',
  display:'block',
}))


const Dashboard = ({products}) => {
  console.log(products)
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
          {
            products.map(product => (
              <Grid key={product._id} item xs={12} sm={6} md={4}> 
                <Card
                  image={`/uploads/${product.files[0].name}`}  
                  title={product.title}
                  subtitle={formatCurrency(product.price)}
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

            ))
          }
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

Dashboard.requireAuth = true

export async function getServerSideProps({req}){
  const session = await getSession({req})

  await dbConnect()
  
  const products = await ProductsModel.find({'user.id': session.user.id})
  console.log('Estes sao os Products:', products)
  return{
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}

export default Dashboard