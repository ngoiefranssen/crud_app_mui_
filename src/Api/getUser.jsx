import axios from "axios"

const API_KEY = 'http://localhost:4000/users';
const getUser = async (data) => {
    try {
        return await axios.post(`${API_KEY}/${data}`)
    } catch (error) {
        console.log('Error while calling get user api', error.message)
    }
}
export default getUser