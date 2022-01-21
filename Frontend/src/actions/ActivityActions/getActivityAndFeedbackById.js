import axios from 'axios'

const getActivityAndFeedbackById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/activityById/${id}`)
        return result.data.Feedback

    } catch (error) {
        console.error(error,'Could not get Activity by code')
    }
}

export default getActivityAndFeedbackById