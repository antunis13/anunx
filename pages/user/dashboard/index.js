'use client'

import { styled } from '@mui/system'
import axios from 'axios'
import { useState } from 'react'
import TemplateDefault from '../../../src/templates/Default'
import { 
  Container,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

import { getSession } from 'next-auth/react'

import Card from '../../../src/components/Card'
import ProductsModel from '../../../src/models/products'
import dbConnect from '@/utils/lib/dbConnect'
import { formatCurrency } from '@/utils/currency'
import useToasty from '@/contexts/Toasty'


const StyledButton = styled(Button)(() => ({
  margin: '30px auto',
  display:'block',
}))


const Dashboard = ({products}) => {
  const [productId, setProductId] = useState(null)
  const [openConfirmModal, setOpenConfirmModal] = useState(false)
  const [removedProducts, setRemovedProducts] = useState([])
  const { setToasty } = useToasty()

  const handleCloseModal = () => setOpenConfirmModal(false)

  const handleClickRemove = (productId) => {
    console.log('esse é o id:',productId)
    setProductId(productId)
    setOpenConfirmModal(true)
  }
  
  const handleConfirmRemove = () => {
    axios.delete('/api/products/delete', {
      data: {
        id: productId
      }
    })
      .then(handleSuccess)
      .catch(handleError)
  }

  const handleSuccess = () =>{
    console.log('Removido com sucesso')

    setOpenConfirmModal(false)
    setRemovedProducts([...removedProducts, productId])
    setToasty({
      open: true,
      severity: 'success',
      text: 'Anúncio removido com sucesso'
    })
  }

  const handleError = () =>{
    console.log('Erro ao remover')
    setToasty({
      open: true,
      severity:'error',
      text: 'Erro ao remover anúncio'
    })
  }

  return (
    <TemplateDefault>
      <Dialog
        open={openConfirmModal}
        onClose={handleCloseModal}
      >
        <DialogTitle>
         Deseja realmente remover este anúncio?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ao confirmar a operação não poderá voltar atrás.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancelar</Button>
          <Button onClick={handleConfirmRemove} autoFocus>
            Remover
          </Button>
        </DialogActions>
      </Dialog>
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
            products.map(product => {
              if(removedProducts.includes(product._id)) return null
              return (
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
                        <Button size='small' color='primary' onClick={() => handleClickRemove(product._id)}>
                          Remover
                        </Button>
                      </>
                    }
                  />
                    
                </Grid>

              )
            })
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
  return{
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}

export default Dashboard