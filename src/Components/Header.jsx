import { AppBar, styled, Toolbar } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = styled(NavLink)`
    font-size : 20px;
    margin-right : 20px;
    color : inherit;
    text-decoration : currentColor;
    text : center;
`

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: '#3D1766',  position:'static' }}>
        <Toolbar sx={{ textAlign: 'center' }}>
            <Nav to='/'>CdIntervieuw</Nav>
            <Nav to='/allusers'>All Users</Nav>
            <Nav to='/adduser'>Add new</Nav>
        </Toolbar>
    </AppBar>
  )
}

export default Header