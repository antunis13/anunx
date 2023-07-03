import TemplateDefault from '../../src/templates/Default'
import { styled } from '@mui/system'
import {
    IconButton,
    InputBase,
    Paper,
    Grid,
    Container,
    Typography,
    Box,
} from '@mui/material'
import Card from '../../src/components/Card'
import SearchIcon from '@mui/icons-material/Search'

const SearchBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0, 2),
    display: 'flex',
    justifyContent: 'center',
    margin: '20px auto',
}))

const StyledContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(6, 6),
    justifyContent: 'center',
}))

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
}))

const List = () => {
    return(
        <TemplateDefault>
            <SearchBox>
                <InputBase 
                placeholder='Ex.: Lavadora de Louças Brastemp 14 funções'
                fullWidth
                />
                <IconButton>
                    <SearchIcon />
                </IconButton>
          </SearchBox>
          <StyledContainer elevation={0}>
                <Grid item xs={12} sm={12} md={12}>
                    <StyledBox>
                        <Typography component='h4' variant='h4'>
                            Anúncios
                        </Typography>
                        <Typography component='span' variant='span'>
                            ENCONTRADOS 200 ANÚNCIOS   
                        </Typography>
                    </StyledBox>
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            image={'https://source.unsplash.com/random'}  
                            title="Título da imagem"
                            subtitle=' R$ 60,00'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            image={'https://source.unsplash.com/random'}  
                            title="Título da imagem"
                            subtitle=' R$ 60,00'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            image={'https://source.unsplash.com/random'}  
                            title="Título da imagem"
                            subtitle=' R$ 60,00'
                        />
                    </Grid>
                </Grid>
          </StyledContainer>
        </TemplateDefault>
    )
}

export default List