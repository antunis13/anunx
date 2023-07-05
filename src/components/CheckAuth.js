import { useEffect } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"

import { styled } from "@mui/system"
import CircularProgress from '@mui/material/CircularProgress'

const StyledCircularProgress = styled(CircularProgress)({
    display: 'flex',
    margin: '30px auto'
})

const CheckAuth = ({ Component, pageProps }) => {
    const router = useRouter()
    const { data: session, status } = useSession()
    useEffect(() => {
        if(status === 'loading') return
        if (!session){
            router.push('/auth/signin')
        }  
    }, [session, status])

    if(session){
        return <Component {...pageProps} />
    }
    return <StyledCircularProgress />
}

export default CheckAuth