import { 
  Button,
  FormControl,
  FormGroup,
  styled,
  TextField
} from '@mui/material'
import ApiAddUser from '../Api/ApiAddUser'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const FormStyledContainer = styled(FormGroup)`
  width : 50%;
  margin : 7% auto 0 auto;
  & > div {
    margin : 10px;
  }
`
const initialValues = {
  name : '',
  username : '',
  email : '',
  phone : '',
};

const AddUser = () => {

  const [user, setUser] = React.useState(initialValues)
  const navigate = useNavigate()
  const handleValueChange = (e) => {
    setUser({ ...user, [e.target.name] : e.target.value})
    console.log(user)
  }

  const handleValueOnClick = async () => {
    await ApiAddUser(user)
    navigate('/allusers')
  }

  return (
      <FormStyledContainer>
        <FormControl>
          <TextField
            id="standard-basic"
            label="Name"
            name='name'
            variant="standard"
            onChange = { (e) => handleValueChange(e) }
          />
        </FormControl>
        <FormControl>
          <TextField
            id="standard-basic"
            label="Username"
            name='username'
            variant="standard"
            onChange = { (e) => handleValueChange(e) }
          />
        </FormControl>
        <FormControl>
          <TextField
            id="standard-basic"
            label="Email"
            name='email'
            variant="standard"
            onChange = { (e) => handleValueChange(e) }
          />    
        </FormControl>
        <FormControl>
          <TextField
            id="standard-basic"
            label="Phone"
            name='phone'
            variant="standard"
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