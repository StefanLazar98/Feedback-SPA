import axios from 'axios'

const getAllUserActivities = async () => {
    try {
        const result = axios.get('http://localhost:8080/activities/user')
        return result
    } catch (error) {
        console.error(error, "Could not get all User Activities")
    }
}

export default getAllUserActivities