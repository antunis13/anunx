import { object, string, number, array, ref } from 'yup'

const initialValues={
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
}

const validationSchema = object({
    email: string().email('Digite um email válido').required('Campo obrigatório'),
    name: string().required('Campo obrigatório'),
    password: string().min(6,'Mínimo 6 caracteres').required('Campo obrigatório'), 
    confirmPassword: string()
    .required('Campo obrigatório')
    .oneOf([ref('password'), null], 'As senhas precisam ser iguais')
})

export {
    initialValues,
    validationSchema,
}