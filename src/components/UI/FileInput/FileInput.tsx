import React from 'react'
import { Controller } from 'react-hook-form'
import Dropzone from 'react-dropzone'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material'
// import { styled } from '@emotion/styled'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import { IFileInputProps } from './types'
import { humanFileSize } from '../../../utils/humanFileSize'

const FileInput: React.FC<IFileInputProps> = ({ control, name }) => {
  return (
    <Controller
      // shouldUnregister={true}
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                sx={{
                  backgroundColor: '#eee',
                  textAlign: 'center',
                  cursor: 'pointer',
                  color: '#333',
                  padding: '10px',
                  marginTop: '20px'
                }}
                {...getRootProps()}
                variant='outlined'
              >
                <CloudUploadIcon
                  sx={{ marginTop: '16px', color: '#888', fontSize: '42px' }}
                />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((file: File, index: number) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFileIcon />
                </ListItemIcon>
                <ListItemText
                  primary={file.name}
                  secondary={humanFileSize(file.size)}
                />
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  )
}

export default FileInput
