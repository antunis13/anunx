
import { Formik } from 'formik' 
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
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValue'
import {  
  StyledBox,
  StyledInputLabel,
  BoxContainer,
} from './styles'
import FileUpload  from '../../../src/components/FileUpload'

const Publish = () => {
    
   return(
      <TemplateDefault>
         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
               console.log('enviou o form', values)
            }}
         >
            {
               ({
                  touched,
                  values,
                  errors,
                  handleChange,
                  handleSubmit,
                  setFieldValue
               })=>{

                  console.log(errors)
                  return(
                     <form onSubmit={handleSubmit}> 
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
                                 <Button type='submit' variant='contained' color='primary'>
                                    Publicar Anúncio
                                 </Button>
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

export default Publish