import {
  Box,
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material'
import ApiGetUsers from '../Api/ApiGetUsers'
import React from 'react'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import RemoveIcon from '@mui/icons-material/Remove'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import deleteUser from '../Api/deleteUser'

const useStyledTable = styled(Table)`
  width : 50%;
  margin : 50px auto 0 auto;
`
// Styled TableRow for the TableHead
const useStyledThead = styled(TableRow)` 
  background: #0000;
  & > th{
    color: #fff;
    font-size: 20px;
  }
`
//Styled TableRow for the TableBoby
const useStyledTableBoby = styled(TableRow)`
  & > th {
    font-size: 20px;
  }
`
// const useStyledNavLink = styled(NavLink)`
//   font-size : 20px;
//   margin-right : 20px;
//   color : inherit;
//   text-decoration : currentColor;
//   text : center;
// `
const AllUser = () => {

  const [users, setUsers] = React.useState([])
  const [page, setPage] =React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage)

  React.useEffect(() =>{
    getUserFetch();
  },[]);
  const getUserFetch = async () =>{
    let res = await ApiGetUsers();
    setUsers(res.data);
  }

  const handleValueDeleteData = async (id) => {
   await deleteUser(id)
   getUserFetch();
  }

  return (
    <Box sx={{ width: '57%', margin : '50px auto 0 auto' }}>
      <Link 
        to='/adduser'
        sx={{ 
          fontSize : '20px',
          marginRight : '20px',
          // color : 'inherit',
          textDecoration : 'currentColor',
          text : 'center',
          ml: '100px'
         }}>
        <Button variant='contained'>New User</Button>
      </Link>
      <useStyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Username</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user, index) =>(
              <TableRow key={user?.id}>
                <TableCell align="left" key={user.id}>{user.id}</TableCell>
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="left">{user.username}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.phone}</TableCell>
                <TableCell>
                  <Button
                  // sx={{ marginRight: 10 }}
                    component={Link}
                    to={`/edituser/${user.id}`}
                  >
                      <EditIcon/>
                  </Button>
                  <Button
                  >
                    <RemoveRedEyeIcon />
                  </Button>
                  <Button
                    variant='contained'
                    color='error'
                    onClick={ () => handleValueDeleteData(user.id) }
                  ><RemoveIcon/></Button>
                </TableCell>
              </TableRow>
            ))
          }

        {
          emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
            {/* // <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}> */}
              <TableCell colSpan={6} />
            </TableRow>
          )
        }
        </TableBody>
      </useStyledTable>
      <TablePagination
        component='div'
        page = {page}
        rowsPerPageOptions = {[5, 10, 25]}
        rowsPerPage = {rowsPerPage}
        count = {users.length}
        onPageChange = {handleChangePage}
        onRowsPerPageChange = {handleChangeRowsPerPage}
       />
    </Box>
  )
}

export default AllUser