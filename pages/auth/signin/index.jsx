import { Formik } from 'formik' 
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'


import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValue'
import  useToasty  from '../../../src/contexts/Toasty'
import {
    StyledInputLabel,
    StyledButton,
    StyledContainer,
    StyledCircularProgress,
    StyledAlert
} from './style'

import {
    Container, 
    Typography,
    FormControl,
    Input,
    FormHelperText,
    Box,
} from '@mui/material'


const SignIn = () => {

    const { setToasty } = useToasty()
    const router = useRouter()
    const session = useSession()
    console.log(session, router.query.i)
	const handleFormSubmit = async values =>{
        signIn('credentials', {
            email: values.email,
            password: values.password,
            callbackUrl: 'http://localhost:3000/user/dashboard'
        })
		
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
                                {
                                    router.query.i === '1'
                                    ?(
                                        <StyledAlert severity='error'>Usuário ou senha inválidos</StyledAlert>
                                    )
                                    : null        
                                }
                                    <Container maxWidth='sm' component='main'>
                                        <Typography variant='h2' component='h1' align='center' color='textPrimary'>
                                            Entre na sua conta
                                        </Typography>
                                    </Container>
                                    <StyledContainer maxWidth='sm' elevation={0}>
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
                                    </StyledContainer>
                                    <StyledContainer maxWidth='sm'>
                                      {
                                        isSubmitting
                                        ?(
                                          <StyledCircularProgress />
                                        ): (
                                          <Box>
                                            <StyledButton type='submit' variant='contained' color='primary'>
                                              Entrar
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

export default SignIn