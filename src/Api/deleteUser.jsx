import axios from "axios";

const API_KEY = 'http://localhost:4000/users';

const deleteUser = async (id) => {
    try {
        return await axios.delete(`${API_KEY}/${id}`)
    } catch (error) {
        console.log('Error while calling delete user api', error.message)
    }
}

export default deleteUser