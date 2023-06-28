import TemplateDefault from '../../src/templates/Default'
import { styled } from '@mui/system'
import {
    Container,
    Grid,
    Box,
    Typography,
    Chip,
    Card,
    CardHeader,
    Avatar,
    CardMedia
} from '@mui/material'

import Carousel from 'react-material-ui-carousel'

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
}))

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
}))

const CardCarousel = styled(Card)({
    height: '100%',
})

const CardMediaCarousel = styled(CardMedia)({
    paddingTop: '56%',
})

const ProductName = styled(Typography)({
    margin: '15px 0',
})

const ProductPrice = styled(Typography)({
    fontWeight: 'bold',
    marginBottom: 15,
})

const Product = () => {
    return(
        <TemplateDefault>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <StyledBox>
                            <Carousel
                                autoPlay={false}
                                animation='slide'
                                navButtonsProps={{
                                    color: 'white'
                                }}
                            >
                                <CardCarousel>
                                    <CardMediaCarousel 
                                        image={'https://source.unsplash.com/random'}
                                        title='Titulo da Imagem'
                                    />
                                </CardCarousel>
                                <CardCarousel>
                                    <CardMediaCarousel 
                                        image={'https://source.unsplash.com/random'}
                                        title='Titulo da Imagem'
                                    />
                                </CardCarousel>
                            </Carousel>
                        </StyledBox>
                        <StyledBox textAlign='left'>
                            <Typography component='span' variant='caption'>
                                Publicado 27 de junho de 2023
                            </Typography>
                            <ProductName component='h4' variant='h4'>
                                Jaguar XE 2.0 D R-Sport Aut.
                            </ProductName>
                            <ProductPrice component='h4' variant='h4'>
                                R$ 500.000,00
                            </ProductPrice>
                            <Chip label='Categoria' />
                        </StyledBox>
                        <StyledBox textAlign='left'>
                            <Typography component='h6' variant='h6'>
                                Descrição
                            </Typography>
                            <Typography component='p' variant='body2'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </StyledBox>
                    </Grid>
                    <Grid item xs={4}>
                        <StyledCard elevation={0}>
                            <CardHeader 
                                avatar={
                                    <Avatar>R</Avatar>
                                }
                                title='Richard Antunis'
                                subheader='richardemail2@gmail.com'
                            />
                            <CardMedia 
                                image={'https://source.unsplash.com/random'}
                                title='Richard Antunis' 
                            />
                        </StyledCard>
                        <StyledBox>
                            <Typography component='h6' variant='h6'>
                                Localização
                            </Typography>
                        </StyledBox>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Product