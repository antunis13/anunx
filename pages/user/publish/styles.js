import { styled as styledMUI } from '@mui/system'
import{ Container, InputLabel }  from '@mui/material'


const BoxContainer = styledMUI(Container)(({ theme }) => ({
    paddingBottom: theme.spacing(3)
}))

const StyledBox = styledMUI(Container)(({ theme }) => ({
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
}))

const StyledInputLabel = styledMUI(InputLabel)(({ theme }) => ({
    fontWeight: 400,
    color: theme.palette.primary.main,
}))

export {
   StyledBox,
   StyledInputLabel,
   BoxContainer,
}