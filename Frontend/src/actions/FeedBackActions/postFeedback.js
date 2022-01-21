import axios from 'axios'

const postFeedback = async (feedback) => {
    try {
        const result = await axios.post(`http://localhost:8080/feedback`,{
                Smiley: feedback.Smiley,
                Frown: feedback.Frown,
                Confused: feedback.Confused,
                Surprised: feedback.Surprised,
                Timestamp: feedback.Timestamp,
                activityId: feedback.activityId
        })
        return result
    } catch (error) {
        console.error(error,'Could not post Feedback')
    }

}

export default postFeedback