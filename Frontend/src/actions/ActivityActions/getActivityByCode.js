import axios from 'axios'

const getActivityByCode = async (code) => {
    try {
        const result = await axios.get(`http://localhost:8080/activity/${code}`)
        return result.data

    } catch (error) {
        console.error(error,'Could not get Activity by code')
    }
}

export default getActivityByCode