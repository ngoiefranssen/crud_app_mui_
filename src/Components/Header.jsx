import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

const typText = styled(Typography)`
    
`

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: '#3D1766',  position:'static' }}>
        <Toolbar>
            <Typography >AppCrud</Typography>
            <Typography>AllUsers</Typography>
            <Typography>Add new</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header