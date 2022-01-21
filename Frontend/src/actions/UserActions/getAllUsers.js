import axios from 'axios'

const getAllUsers = () => {
    try {
        const response = axios.get('http://localhost:8080/users')
        return response
    } catch (error) {
        console.error(error,"Could not get All Users")
    }
}


export default getAllUsers