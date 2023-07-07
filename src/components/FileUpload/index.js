import { useDropzone } from 'react-dropzone'

import {
    Typography,
    IconButton,
} from '@mui/material'

import { DeleteForever } from '@mui/icons-material'

import {  
   Dropzone,
   ThumbsContainer,
   Thumb,
   Mask,
   MainImage,
   StyledBox,
   BoxContainer,
} from './styles'

const FileUpload = ({ files, errors, touched, setFieldValue }) => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
           const newFiles = acceptedFile.map(file => {
              return Object.assign(file, {
                  preview: URL.createObjectURL(file)
              })
           })
           setFieldValue('files', [
              ...files,
              ...newFiles,
           ])
        }
    })
    const handleRemoveFile = fileName => {
      const newFileState = files.filter(file => file.name !== fileName)

      setFieldValue('files', newFileState)
    }
   return(
      <BoxContainer maxWidth='md'>
         <StyledBox>
            <Typography component='h6' variant='h6' color={errors && touched ? 'error' : 'textPrimary'}>
               Imagens
            </Typography>
            <Typography component='div' variant='body2' color={errors && touched ? 'error' : 'textPrimary'}>
               A primeira imagem é a foto principal do seu anúncio.
            </Typography>
            {
               errors && touched
               ? <Typography variant='body2' color='error' gutterBottom>{errors}</Typography>
               : null
            }
            <ThumbsContainer>
               <Dropzone {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Typography variant='body2' color={errors && touched ? 'error' : 'textPrimary'}>
                     Clique para adiconar ou arraste a imagem para aqui.
                  </Typography>
               </Dropzone>
               {
                  files.map((file, index) => (
                     <Thumb
                           key={file.name}
                           style={{ backgroundImage: `url(${file.preview})` }}
                     >
                           {
                              index === 0 ?
                                 <MainImage>
                                       <Typography variant='body2' color='secondary' > 
                                          Principal
                                       </Typography>
                                 </MainImage>
                              : null
                           }
                           <Mask>
                              <IconButton color='secondary' onClick={() => handleRemoveFile(file.name)}>
                                 <DeleteForever fontSize='large' />
                              </IconButton>
                           </Mask>
                     </Thumb>
                  ))
               }
            </ThumbsContainer>
         </StyledBox>
      </BoxContainer>
   )
}

export default FileUpload