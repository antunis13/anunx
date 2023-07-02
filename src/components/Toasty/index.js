import { Snackbar } from "@mui/material"

import { Alert}  from "@mui/material"

const Toasty = ({ open, onClose=null, text, severity }) => {
    const handleClose = (event, reason) => {
        if(reason === 'clickaway'){
            return
        }

        if(onClose) onClose()
    }

    return(
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
        >
            <Alert elevation={6} variant='filled' severity={severity}>
                {text}
            </Alert>
        </Snackbar>
    )
}

export default Toasty