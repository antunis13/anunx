import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
            main: '#212121',
        },
        background: {
            default: 'rgb(242, 244, 245)',
            white: '#ffffff'
        }
    },
    spacing: 4,
})

export default theme