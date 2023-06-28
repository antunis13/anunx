import {
    Container,
    Typography,
    Box,
    TextField,
    Select,
    Button,
    FormControl,
    OutlinedInput,
    InputAdornment,
    FormLabel,
    MenuItem,
    FormHelperText,
    Input,
    InputLabel,
} from '@mui/material'
import { styled } from '@mui/system'

import { Formik } from 'formik' 
import { object, string, number, date, InferType } from 'yup'


import TemplateDefault from '../../../src/templates/Default'
import DropzoneComponent from './DropzoneComponent'





const BoxContainer = styled(Container)(({ theme }) => ({
    paddingBottom: theme.spacing(3)
}))

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
}))

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
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
})


const Publish = () => {

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
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('enviou o form', values)
                }}
            >
                {
                    ({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
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
                                       <FormControl error={errors.title} fullWidth> 
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
                                             {errors.title}
                                          </FormHelperText>
                                       </FormControl>
                                       <br /><br/>
                                       <FormControl error={errors.category} fullWidth>
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
                                             {errors.category}
                                          </FormHelperText>
                                       </FormControl>
                                    </StyledBox>
                                </BoxContainer>

                                <BoxContainer maxWidth='md'>
                                    <StyledBox>
                                        <Typography component='h6' variant='h6' color='textPrimary'>
                                            Imagens
                                        </Typography>
                                        <Typography component='div' variant='body2' color='textPrimary'>
                                            A primeira imagem é a foto principal do seu anúncio.
                                        </Typography>
                                        <DropzoneComponent/>
                                    </StyledBox>
                                </BoxContainer>

                                <BoxContainer maxWidth='md'>
                                    <StyledBox>                                  
                                        <FormControl error={errors.description} fullWidth> 
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
                                                {errors.description}
                                            </FormHelperText>
                                        </FormControl>    
                                    </StyledBox>
                                </BoxContainer>

                                <BoxContainer maxWidth='md'>
                                    <StyledBox>
                                        <FormControl error={errors.price} fullWidth> 
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
                                                {errors.price}
                                            </FormHelperText>
                                        </FormControl>
                                    </StyledBox>
                                </BoxContainer>

                                <BoxContainer maxWidth='md'>
                                    <StyledBox>
                                       <Typography component='h6' variant='h6' color='textPrimary' gutterBottom>
                                          Dados de Contato
                                       </Typography>
                                       <FormControl error={errors.name} fullWidth> 
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
                                             {errors.name}
                                          </FormHelperText>
                                       </FormControl>
                                       <br/> <br/>
                                       <FormControl error={errors.email} fullWidth> 
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
                                             {errors.email}
                                          </FormHelperText>
                                       </FormControl>
                                       <br/> <br/>
                                       <FormControl error={errors.phone} fullWidth> 
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
                                             {errors.phone}
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

