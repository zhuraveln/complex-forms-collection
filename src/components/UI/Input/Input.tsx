import React, { forwardRef } from 'react'

import { TextField } from '@mui/material'

const Input: React.FC<any> = forwardRef((props, ref) => {
  return (
    <TextField
      fullWidth
      margin='normal'
      variant='outlined'
      inputRef={ref}
      {...props}
    />
  )
})

export default Input
