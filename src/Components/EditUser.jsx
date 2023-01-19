import { 
    Button,
    FormControl,
    FormGroup,
    styled,
    TextField
  } from '@mui/material'
  import getUser from '../Api/getUser'
  import React from 'react'
  import { useNavigate, useParams } from 'react-router-dom';
import ApiAddUser from '../Api/ApiAddUser';
  
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
  
  const EditUser = () => {
  
    const [user, setUser] = React.useState(initialValues)
    const navigate = useNavigate()
    const { id } = useParams()
    const handleValueChange = (e) => {
      setUser({ ...user, [e.target.name] : e.target.value})
      // console.log(user)
    }

    React.useEffect(() =>{
        getDataUser();
    },[])

    const getDataUser = async () =>{
        var response = await getUser(id)
        setUser(response.data)
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
              value={user.name}
              onChange = { (e) => handleValueChange(e) }
            />
          </FormControl>
          <FormControl>
            <TextField
              id="standard-basic"
              label="Username"
              name='username'
              variant="standard"
              value={user.username}
              onChange = { (e) => handleValueChange(e) }
            />
          </FormControl>
          <FormControl>
            <TextField
              id="standard-basic"
              label="Email"
              name='email'
              variant="standard"
              value={user.email}
              onChange = { (e) => handleValueChange(e) }
            />    
          </FormControl>
          <FormControl>
            <TextField
              id="standard-basic"
              label="Phone"
              name='phone'
              variant="standard"
              value={user.phone}
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
  
  export default EditUser