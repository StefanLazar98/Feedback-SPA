import axios from 'axios'

const getUserByAccountId = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/user/${id}`)
        console.log(response.data.UserID,'geUserBy...')
        return response.data.UserID
    
    } catch (error) {
        console.error(error,'Could not get User by AccountId')
    }
}




export default getUserByAccountId