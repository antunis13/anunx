import { styled as styledMUI } from '@mui/system'
import { styled } from "styled-components"
import{ Box, Container}  from '@mui/material'

const Mask = styled(Box)`
   width: 100%;
   height: 100%;
   display: none;
   justify-content: center;
   align-items: center;
   background-color: rgba(0, 0, 0, 0.7);
`
const MainImage = styled(Box)`  
   background-color: blue;
   padding: 6px 10px;
   position: absolute;
   bottom: 0;
   left: 0;
`

const Thumb = styled(Box)`
   position: relative;
   width: 200px;
   height: 150px;
   background-size: cover;
   background-position: center center;
   margin: 0px 15px 15px 0px;

   &:hover {
      ${Mask} {
            display: flex;
      }
   }    

`
const ThumbsContainer = styled(Box)`
   display: flex;
   flex-wrap: wrap;
   margin-top: 15px;    
`
const Dropzone = styled(Box)`
   width: 200px;
   height: 150px;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   margin: 0 15px 15px 0;
   background-color: rgb(242, 244, 245);
   border: 2px dashed black;
`
const StyledBox = styledMUI(Container)(({ theme }) => ({
   backgroundColor: theme.palette.background.white,
   padding: theme.spacing(3),
}))

const BoxContainer = styledMUI(Container)(({ theme }) => ({
   paddingBottom: theme.spacing(3)
}))

export {
   Dropzone,
   ThumbsContainer,
   Thumb,
   Mask,
   MainImage,
   StyledBox,
   BoxContainer
}