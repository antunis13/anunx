import { 
    Typography,
    Card as CardMUI, 
    CardMedia,
    CardContent,
    CardActions
} from '@mui/material'
import { styled } from '@mui/system'

const StyledCardMedia = styled(CardMedia)(() => ({
    paddingTop: '56%',
}))

const Card = ({ image, title, subtitle, actions }) => {
    return(
        <CardMUI>
            <StyledCardMedia
                image={image}
                title={title}
            />
            <CardContent>
            <Typography variant='h5' component='h2'>
                {title}
            </Typography>
            <Typography>
                {subtitle}
            </Typography>
            </CardContent>
            {
                actions
                ? (
                    <CardActions>
                       {actions}
                    </CardActions>
                ) : null 
            }
        </CardMUI>
    )
}

export default Card