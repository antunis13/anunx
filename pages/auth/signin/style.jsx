import { styled } from '@mui/system'
import {
    Container, 
    InputLabel,
    Button,
    CircularProgress,
    Alert,
    Box
} from '@mui/material'

const StyledContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(6, 6),
    justifyContent: 'center',
    backgroundColor: theme.palette.background.white
}))

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    fontWeight: 400,
    color: theme.palette.primary.main,
}))

const StyledButton = styled(Button)({
    width: '100%',
})

const StyledCircularProgress = styled(CircularProgress)({
    display: 'block',
    margin: '10px auto',
})

const StyledAlert = styled(Alert)({
  margin: '20px 0'
})

const BoxSeparator = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    width: '100%',
    height: 1,
    margin: theme.spacing(7, 0, 4)
}))

const StyledSpan = styled('span')({
    backgroundColor: 'white',
    padding: '0 30px'
})

export{
    StyledButton,
    StyledContainer,
    StyledInputLabel,
    StyledCircularProgress,
    StyledAlert,
    BoxSeparator,
    StyledSpan,
}