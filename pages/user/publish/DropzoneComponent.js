import { useState } from 'react'
import { styled } from "styled-components"
import { DeleteForever } from '@mui/icons-material'
import { Box, IconButton, Typography } from "@mui/material"

import { useDropzone } from 'react-dropzone'

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
   

const DropzoneComponent = () =>{
    const [ files, setFiles ] = useState([])
    
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })
            setFiles([
                ...files,
                ...newFiles,
            ])
        }
    })
    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)

        setFiles(newFileState)
    }

    
    return(
        <ThumbsContainer>
            <Dropzone {...getRootProps()}>
                <input {...getInputProps()} />
                <Typography variant='body2' color='textPrimary'>
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
    )
}

export default DropzoneComponent