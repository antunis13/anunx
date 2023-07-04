import { styled } from '@mui/system'
import {
    Container, 
    InputLabel,
    Button,
    CircularProgress,
    Alert
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

export{
    StyledButton,
    StyledContainer,
    StyledInputLabel,
    StyledCircularProgress,
    StyledAlert,
}