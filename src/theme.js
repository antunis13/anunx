import { createTheme } from "@mui/material"
import { purple } from '@mui/material/colors'

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        }
    },
    spacing: 4,
})

export default theme