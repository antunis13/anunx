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
} from '@mui/material'
import { styled } from '@mui/system'

import TemplateDefault from '../../../src/templates/Default'
import DropzoneComponent from './DropzoneComponent'




const BoxContainer = styled(Container)(({ theme }) => ({
    paddingBottom: theme.spacing(3)
}))

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
}))


const Publish = () => {

    return(
        <TemplateDefault>
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
                    <Typography component='h6' variant='h6' color='textPrimary'>
                        Título do Anúncio
                    </Typography>
                    <TextField 
                        label='ex.: Bicicleta Aro 29 Shimano'
                        size='small'
                        fullWidth
                        variant='standard'
                    />
                    <br /><br/>
                    <Typography component='h6' variant='h6' color='textPrimary'>
                        Categoria
                    </Typography>
                    <Select
                        native
                        value=""
                        fullWidth
                        onChange={() => {}}
                        inputProps={{
                            name: 'age',
                        }}
                    >
                        <option value="">Selecione</option>
                        <option value={1}>Bebê e Criança</option>
                        <option value={2}>Agricultura</option>
                        <option value={3}>Moda</option>
                        <option value={3}>Carros, Motos e Barcos</option>
                        <option value={3}>Serviços</option>
                        <option value={3}>Lazer</option>
                        <option value={3}>Animais</option>
                        <option value={3}>Móveis, Casa e Jardim</option>
                        <option value={3}>Imóveis</option>
                        <option value={3}>Equipamentos e Ferramentas</option>
                        <option value={3}>Celulares e Tablets</option>
                        <option value={3}>Esporte</option>
                        <option value={3}>Tecnologia</option>
                        <option value={3}>Emprego</option>
                        <option value={3}>Outros</option>
                    </Select>
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
                    <Typography component='h6' variant='h6' color='textPrimary'>
                        Descrição 
                    </Typography>
                    <Typography component='div' variant='body2' color='textPrimary'>
                       Escreva os detalhes do que está vendendo.
                    </Typography>
                    <TextField 
                        multiline
                        rows={6}
                        variant='outlined'
                        fullWidth
                    />
                </StyledBox>
            </BoxContainer>

            <BoxContainer maxWidth='md'>
                <StyledBox>
                    <Typography component='h6' variant='h6' color='textPrimary'>
                        Preço 
                    </Typography>
                    <br />
                    <FormControl fullWidth variant='outlined'>
                        <FormLabel>
                            Valor
                        </FormLabel>
                        <OutlinedInput 
                            onChange={() => {}}
                            startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                        />
                    </FormControl>
                </StyledBox>
            </BoxContainer>

            <BoxContainer maxWidth='md'>
                <StyledBox>
                    <Typography component='h6' variant='h6' color='textPrimary' gutterBottom>
                        Dados de Contato
                    </Typography>
                    <TextField 
                        label='Nome'
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                    <br/> <br/>
                    <TextField 
                        label='E-mail'
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                    <br/> <br/>
                    <TextField 
                        label='Telefone'
                        variant='outlined'
                        size='small'
                        fullWidth
                    />
                </StyledBox>
            </BoxContainer>

            <BoxContainer maxWidth='md'>
                <Box textAlign='right'>
                    <Button variant='contained' color='primary'>
                        Publicar Anúncio
                    </Button>
                </Box>
            </BoxContainer>
        </TemplateDefault>
    )
}

export default Publish

