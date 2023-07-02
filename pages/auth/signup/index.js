import { Formik } from 'formik' 
import axios from 'axios'
import { useRouter } from 'next/router'

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValue'
import  useToasty  from '../../../src/contexts/Toasty'
import {
    StyledInputLabel,
    StyledButton,
    StyledContainer,
    StyledCircularProgress
} from './style'

import {
    Container, 
    Typography,
    FormControl,
    Input,
    FormHelperText,
    Box,
} from '@mui/material'


const SignUp = () => {

    const { setToasty } = useToasty()
    const router = useRouter()

	const handleFormSubmit = async values =>{
		const response = await axios.post('/api/users', values)

		if(response.data.success){
			setToasty({
                open: true,
                severity: 'success',
                text: "Cadastrado com sucesso"
            })

            router.push('/auth/signin')
		}
	}
    return(
        <TemplateDefault>
            <Formik
                initialValues={initialValues}
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
						isSubmitting,
                    })=>{
                            console.log(errors)
                            return(
                                <form onSubmit={handleSubmit}> 
                                    <Container maxWidth='sm' component='main'>
                                        <Typography variant='h2' component='h1' align='center' color='textPrimary'>
                                            Crie sua conta
                                        </Typography>
                                        <Typography variant='h5' component='h5' align='center' color='textPrimary'>
                                            E anuncie para todo o Brasil
                                        </Typography>
                                    </Container>
                                    <StyledContainer maxWidth='sm' elevation={0}>
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
                                                type='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                variant='standard'                                     
                                            />
                                            <FormHelperText>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br/> <br/>
                                        <FormControl error={errors.password && touched.password} fullWidth> 
                                            <StyledInputLabel>
                                                Senha
                                            </StyledInputLabel>                                         
                                            <Input 
                                                name='password'
                                                type='password'
                                                value={values.password}
                                                onChange={handleChange}
                                                variant='standard'                                     
                                            />
                                            <FormHelperText>
                                                {errors.password && touched.password ? errors.password : null}
                                            </FormHelperText>
                                        </FormControl>
                                        <br/> <br/>
                                        <FormControl error={errors.confirmPassword && touched.confirmPassword} fullWidth> 
                                            <StyledInputLabel>
                                                Confirmação de senha
                                            </StyledInputLabel>                                         
                                            <Input 
                                                name='confirmPassword'
                                                type='password'
                                                value={values.confirmPassword}
                                                onChange={handleChange}
                                                variant='standard'                                     
                                            />
                                            <FormHelperText>
                                                {errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </StyledContainer>
                                    <StyledContainer maxWidth='sm'>
										{
											isSubmitting
											?(
												<StyledCircularProgress />
											): (
												<Box>
													<StyledButton type='submit' variant='contained' color='primary'>
														Cadastrar
													</StyledButton>
												</Box>
											)
										}
                                    </StyledContainer>
                                </form>
                            )
                        }
                }
            </Formik>          
        </TemplateDefault>
    )

}

export default SignUp