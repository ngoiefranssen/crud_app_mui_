import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const typText = styled(Typography)`
    font-size:
`

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: '#3D1766',  position:'static' }}>
        <Toolbar>
            <NavLink to=''>CdIntervieuw</NavLink>
            <NavLink to='/allusers'>AllUsers</NavLink>
            <NavLink to='/adduser'>Add new</NavLink>
        </Toolbar>
    </AppBar>
  )
}

export default Header