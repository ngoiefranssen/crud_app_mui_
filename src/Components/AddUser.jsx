import { Button, FormControl, FormGroup, styled, TextField } from '@mui/material'
import ApiAddUser from '../Api/ApiAddUser'
import React from 'react'

const FormStyledContainer = styled(FormGroup)`
  width : 50%;
  margin : 7% auto 0 auto;
  & > div {
    margin : 10px;
  }
`
const initialValues = {
  name :'',
  username : '',
  email : '',
  phone : '',
};

const AddUser = () => {

  const [user, setUser] = React.useState(initialValues)
  const handleValueChange = (e) => {
    setUser({ ...user, [e.target.name] : e.target.value})
    console.log(user)
  }
  const handleValueOnClick = async () => {
    await ApiAddUser(user)
  }
  return (
      <FormStyledContainer>
        <FormControl>
          <TextField
            id="outlined-password-input"
            name='name'
            label="Name"
            // type="text"
            onChange = { (e) => handleValueChange(e) }
            // autoComplete="current-password"
          />
        </FormControl>
        <FormControl>
          <TextField
              id="outlined-password-input"
              name='username'
              label="Username"
              // type="text"
              // autoComplete="current-password"
              onChange = { (e) => handleValueChange(e) }
            />
        </FormControl>
        <FormControl>
          <TextField
              id="outlined-password-input"
              name='email'
              label="Email"
              // type="email"
              // autoComplete="current-password"
              onChange = { (e) => handleValueChange(e) }
            />
        </FormControl>
        <FormControl>
          <TextField
              id="outlined-password-input"
              name='phone'
              label="Phone"
              // type="text"
              // autoComplete="current-password"
              onChange = { (e) => handleValueChange(e) }
            />
        </FormControl>
        <FormControl>
          <Button
            variant='contained'
            onClick={ () => handleValueOnClick() }
          >
            Register
          </Button>
        </FormControl>
    </FormStyledContainer>
  )
}

export default AddUser