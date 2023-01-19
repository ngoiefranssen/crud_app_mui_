import axios from "axios";


const API_KEY = 'http://localhost:4000/users';
const getUsersApi = async () => {
    try {
        return await axios.get(API_KEY);
    } catch (error) {
        console.log('Error while calling get user api', error.message);
    }
}
export default getUsersApi