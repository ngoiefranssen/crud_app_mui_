import axios from 'axios'

const API_KEY = 'http://localhost:4000/users';

const editUser = async (data, id) => {
  try {
    return await axios.put(`${API_KEY}/${id}`, data)
  } catch (error) {
    console.log('Error while calling edit user api', error.message)
  }
}

export default editUser