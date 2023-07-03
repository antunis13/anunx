import { object, string, number, array, ref } from 'yup'

const initialValues={
    email: '',
    password: '',
}

const validationSchema = object({
    email: string().email('Digite um email válido').required('Campo obrigatório'),
    password: string().min(6,'Mínimo 6 caracteres').required('Campo obrigatório'), 
})

export {
    initialValues,
    validationSchema,
}