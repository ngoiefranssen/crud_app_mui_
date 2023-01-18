import { 
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled
} from '@mui/material'
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
          <InputLabel>Name</InputLabel>
          <Input
            name='name'
            onChange = { (e) => handleValueChange(e) }
          />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
            <Input
              name='username'
              onChange = { (e) => handleValueChange(e) }
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
            <Input
              name='email'
              onChange = { (e) => handleValueChange(e) }
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
            <Input
              name='phone'
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