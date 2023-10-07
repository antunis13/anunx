
import { useRouter } from 'next/router'
import { Formik } from 'formik' 
import axios from 'axios'
import { useSession, getSession  } from 'next-auth/react'

import {
  Container,
  Typography,
  Box,
  Select,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  FormHelperText,
  Input,
  CircularProgress,
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import  useToasty  from '../../../src/contexts/Toasty'
import { initialValues, validationSchema } from './formValue'
import {  
  StyledBox,
  StyledInputLabel,
  BoxContainer,
} from './styles'
import FileUpload  from '../../../src/components/FileUpload'


const Publish = ({ userId, image }) => {
   const { setToasty } = useToasty() 
   const router = useRouter()
   const { data: session } = useSession()

   console.log(session)
   
   const formValues = {
      ...initialValues,
   }
   
   formValues.userId = userId
   formValues.image = image
   
   const handleSuccess = () =>{
      setToasty({
         open: true,
         text: 'Anúncio cadastrado com sucesso',
         severity: 'success',
      })
      router.push('/user/dashboard')
   }
   const handleError = () =>{
      setToasty({
         open: true,
         text: 'Ocorreu um erro, tente novamente',
         severity: 'error',
      })
   }
   
   const handleFormSubmit = (values) => {
      const formData = new FormData()

      for(let field in values ){
         if(field === 'files'){
            values.files.forEach(file => {
               formData.append('files', file)
            })
         }else{
            formData.append(field, values[field])
         }
      }
      axios.post('/api/products', formData)
         .then(handleSuccess)
         .catch(handleError)
   }

   return(
      <TemplateDefault>
         <Formik
            initialValues={formValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
            >
            {
               ({
                  touched,
                  values,
                  errors,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                  isSubmitting,
               })=>{
                  
                  console.log(errors)
                  return(
                     <form onSubmit={handleSubmit}> 
                        <Input type='hidden' name='userId' value={values.userId} />
                        <Input type='hidden' name='image' value={values.image} />
                        <Container maxWidth='sm'>
                           <Typography component='h1' variant='h2' align='center' color='textPrimary'>
                                 Publicar Anúncio
                           </Typography>
                           <Typography component='h5' variant='h5' align='center' color='textPrimary'>
                                 Quanto mais detalhado melhor!
                           </Typography>
                        </Container>

                        <BoxContainer maxWidth='md'>
                           <StyledBox>
                              <FormControl error={errors.title && touched.title} fullWidth> 
                                 <StyledInputLabel>
                                    Título do Anúncio
                                 </StyledInputLabel>                                         
                                 <Input 
                                    name='title'
                                    value={values.title}
                                    onChange={handleChange}
                                    variant='standard'                                     
                                 />
                                 <FormHelperText>
                                    {errors.title && touched.title ? errors.title : null}
                                 </FormHelperText>
                              </FormControl>
                              <br /><br/>
                              <FormControl error={errors.category && touched.category} fullWidth>
                                 <StyledInputLabel>
                                    Categoria
                                 </StyledInputLabel>
                                 <Select
                                    name='category'
                                    value={values.category}
                                    fullWidth
                                    onChange={handleChange}
                                    variant='standard'
                                 >
                                    <MenuItem value='Bebê e Criança'>Bebê e Criança</MenuItem>
                                    <MenuItem value='Agricultura'>Agricultura</MenuItem>
                                    <MenuItem value='Moda'>Moda</MenuItem>
                                    <MenuItem value='Carros, Motos e Barcos'>Carros, Motos e Barcos</MenuItem>
                                    <MenuItem value='Serviços'>Serviços</MenuItem>
                                    <MenuItem value='Lazer'>Lazer</MenuItem>
                                    <MenuItem value='Animais'>Animais</MenuItem>
                                    <MenuItem value='Móveis, Casa e Jardim'>Móveis, Casa e Jardim</MenuItem>
                                    <MenuItem value='Imóveis'>Imóveis</MenuItem>
                                    <MenuItem value='Equipamentos e Ferramentas'>Equipamentos e Ferramentas</MenuItem>
                                    <MenuItem value='Celulares e Tablets'>Celulares e Tablets</MenuItem>
                                    <MenuItem value='Esporte'>Esporte</MenuItem>
                                    <MenuItem value='Tecnologia'>Tecnologia</MenuItem>
                                    <MenuItem value='Emprego'>Emprego</MenuItem>
                                    <MenuItem value='Outros'>Outros</MenuItem>
                                 </Select>
                                 <FormHelperText>
                                    {errors.category && touched.category ? errors.category : null}
                                 </FormHelperText>
                              </FormControl>
                           </StyledBox>
                        </BoxContainer>
                        <BoxContainer maxWidth='md'>
                           <StyledBox>                                  
                                 <FormControl error={errors.description && touched.description} fullWidth> 
                                    <StyledInputLabel>
                                       Escreva os detalhes do que está vendendo.
                                    </StyledInputLabel>
                                    <Input
                                       name='description' 
                                       multiline
                                       rows={6}
                                       variant='outlined'
                                       onChange={handleChange}
                                    />
                                    <FormHelperText>
                                       {errors.description && touched.description ? errors.description : null}
                                    </FormHelperText>
                                 </FormControl>    
                           </StyledBox>
                        </BoxContainer>
                        <BoxContainer maxWidth='md'>
                           <StyledBox>
                              <FileUpload 
                              files={values.files}
                              errors={errors.files}
                              touched={touched.files}
                              setFieldValue={setFieldValue}
                              />     
                           </StyledBox>
                        </BoxContainer>
                        <BoxContainer maxWidth='md'>
                           <StyledBox>
                                 <FormControl error={errors.price && touched.price} fullWidth> 
                                    <StyledInputLabel>
                                       Preço
                                    </StyledInputLabel>
                                    <Input
                                       name='price'
                                       onChange={handleChange} 
                                       startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                                       variant='outlined'
                                       />
                                    <FormHelperText>
                                       {errors.price && touched.price ? errors.price : null}
                                    </FormHelperText>
                                 </FormControl>
                           </StyledBox>
                        </BoxContainer>

                        <BoxContainer maxWidth='md'>
                           <StyledBox>
                              <Typography component='h6' variant='h6' color='textPrimary' gutterBottom>
                                 Dados de Contato
                              </Typography>
                              <FormControl error={errors.name && touched.name} fullWidth> 
                                 <StyledInputLabel>
                                    Nome
                                 </StyledInputLabel>                                         
                                 <Input 
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    variant='standard'                                     
                                 />
                                 <FormHelperText>
                                    {errors.name && touched.name ? errors.name : null}
                                 </FormHelperText>
                              </FormControl>
                              <br/> <br/>
                              <FormControl error={errors.email && touched.email} fullWidth> 
                                 <StyledInputLabel>
                                    Email
                                 </StyledInputLabel>                                         
                                 <Input 
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    variant='standard'                                     
                                 />
                                 <FormHelperText>
                                    {errors.email && touched.email ? errors.email : null}
                                 </FormHelperText>
                              </FormControl>
                              <br/> <br/>
                              <FormControl error={errors.phone && touched.phone} fullWidth> 
                                 <StyledInputLabel>
                                    Telefone
                                 </StyledInputLabel>                                         
                                 <Input 
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    variant='standard'                                     
                                    />
                                 <FormHelperText>
                                    {errors.phone && touched.phone ? errors.phone : null}
                                 </FormHelperText>
                              </FormControl>
                           </StyledBox>
                        </BoxContainer>

                        <BoxContainer maxWidth='md'>
                           <Box textAlign='right'>
                              {
                                 isSubmitting
                                 ?<CircularProgress />
                                 :
                                 <Button type='submit' variant='contained' color='primary'>
                                    Publicar Anúncio
                                 </Button>
                              }
                           </Box>
                        </BoxContainer>
                     </form>
                  )
               }
            }
         </Formik>
      </TemplateDefault>
   )
}

Publish.requireAuth = true

export async function getServerSideProps({req}) {
    const session = await getSession({req})
    const userId = session.user.id
    console.log('o user id :', userId)
   return {
     props: {
      userId,
      image: session.user.image,
     }
   }
 }

export default Publish