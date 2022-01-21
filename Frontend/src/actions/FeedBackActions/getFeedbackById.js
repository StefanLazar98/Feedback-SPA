import axios from 'axios'

const getFeedbackById =  async (feedbackId) => {
    try {
        const result = await axios.get(`http://localhost:8080/feedback/${feedbackId}`)
        return result.data
    } catch (error) {
        console.error(error,'Could not get the feedback')
    }
}

export default getFeedbackById