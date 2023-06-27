'use client'
import Header from '../components/Header' 
import Footer from '../components/Footer'
import { styled } from '@mui/system'
import { Container } from '@mui/material'

const StyledContainer = styled(Container)(({ theme }) =>({
    padding: theme.spacing(6, 0, 6)
}))

const Default = ({ children }) => {
    return(
        <>
            <Header />
            <StyledContainer>
                {children}
            </StyledContainer>
            <Footer />
        </>
    )
}

export default Default