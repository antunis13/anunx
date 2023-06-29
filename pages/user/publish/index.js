import { useState } from 'react'
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
   InputLabel,
   IconButton,
} from '@mui/material'
import { styled } from "styled-components"
import { DeleteForever } from '@mui/icons-material'
import { styled as styledMUI } from '@mui/system'
import { Formik } from 'formik' 
import { object, string, number, date, InferType, array } from 'yup'
import TemplateDefault from '../../../src/templates/Default'

import { useDropzone } from 'react-dropzone'

const Mask = styled(Box)`
   width: 100%;
   height: 100%;
   display: none;
   justify-content: center;
   align-items: center;
   background-color: rgba(0, 0, 0, 0.7);
`
const MainImage = styled(Box)`  
   background-color: blue;
   padding: 6px 10px;
   position: absolute;
   bottom: 0;
   left: 0;
`

const Thumb = styled(Box)`
   position: relative;
   width: 200px;
   height: 150px;
   background-size: cover;
   background-position: center center;
   margin: 0px 15px 15px 0px;

   &:hover {
      ${Mask} {
            display: flex;
      }
   }    

`
const ThumbsContainer = styled(Box)`
   display: flex;
   flex-wrap: wrap;
   margin-top: 15px;    
`
const Dropzone = styled(Box)`
   width: 200px;
   height: 150px;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   margin: 0 15px 15px 0;
   background-color: rgb(242, 244, 245);
   border: 2px dashed black;
`
const BoxContainer = styledMUI(Container)(({ theme }) => ({
    paddingBottom: theme.spacing(3)
}))

const StyledBox = styledMUI(Container)(({ theme }) => ({
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
}))

const StyledInputLabel = styledMUI(InputLabel)(({ theme }) => ({
    fontWeight: 400,
    color: theme.palette.primary.main,
}))

const validationSchema = object({
   title: string()
      .min(6, 'Escreva um título maior')
      .max(100, 'Título muito grande')
      .required('Campo obrigatório'),
   
   category: string().required('Campo obrigatório'),
   description: string()
      .min(50, 'Escreva uma descrição com pelo menos 50 caracteres.')
      .required('Campo obrigatório'),   
   price: number().required('Campo obrigatório'), 
   email: string().email('Digite um email válido').required('Campo obrigatório'),
   name: string().required('Campo obrigatório'),
   phone: number().required('Campo obrigatório'), 
   files: array().min(1, 'Envie pelo menos uma foto').required('Campo obrigatório')
})


const Publish = () => {
   const [ files, setFiles ] = useState([])
    
   return(
      <TemplateDefault>
         <Formik
            initialValues={{
               title: '',
               category: '',
               description: '',
               price: '',
               email: '',
               name: '',
               phone: '',
               files: [],
            }}
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
                  const { getRootProps, getInputProps } = useDropzone({
                     accept: 'image/*',
                     onDrop: (acceptedFile) => {
                        const newFiles = acceptedFile.map(file => {
                           return Object.assign(file, {
                                 preview: URL.createObjectURL(file)
                           })
                        })
                        setFieldValue('files', [
                           ...values.files,
                           ...newFiles,
                        ])
                     }
                  })
                  const handleRemoveFile = fileName => {
                     const newFileState = values.files.filter(file => file.name !== fileName)
               
                     setFieldValue('files', newFileState)
                  }
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
                                 <Typography component='h6' variant='h6' color={errors.files && touched.files ? 'error' : 'textPrimary'}>
                                    Imagens
                                 </Typography>
                                 <Typography component='div' variant='body2' color={errors.files && touched.files ? 'error' : 'textPrimary'}>
                                    A primeira imagem é a foto principal do seu anúncio.
                                 </Typography>
                                    {
                                       errors.files && touched.files
                                       ? <Typography variant='body2' color='error' gutterBottom>{errors.files}</Typography>
                                       : null
                                    }
                                    <ThumbsContainer>
                                       <Dropzone {...getRootProps()}>
                                          <input {...getInputProps()} />
                                          <Typography variant='body2' color={errors.files && touched.files ? 'error' : 'textPrimary'}>
                                             Clique para adiconar ou arraste a imagem para aqui.
                                          </Typography>
                                       </Dropzone>
                                       {
                                          values.files.map((file, index) => (
                                             <Thumb
                                                   key={file.name}
                                                   style={{ backgroundImage: `url(${file.preview})` }}
                                             >
                                                   {
                                                      index === 0 ?
                                                         <MainImage>
                                                               <Typography variant='body2' color='secondary' > 
                                                                  Principal
                                                               </Typography>
                                                         </MainImage>
                                                      : null
                                                   }
                                                   <Mask>
                                                      <IconButton color='secondary' onClick={() => handleRemoveFile(file.name)}>
                                                         <DeleteForever fontSize='large' />
                                                      </IconButton>
                                                   </Mask>
                                             </Thumb>
                                          ))
                                       }
                                    </ThumbsContainer>
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

