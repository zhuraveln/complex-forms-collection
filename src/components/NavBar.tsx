import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

const NavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Complex forms collection!
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
