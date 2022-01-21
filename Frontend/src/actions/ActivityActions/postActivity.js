import axios from 'axios'


const postActivity = async (activity) => {
    try {
            const response = await axios.post('http://localhost:8080/activity',
            {
                Description: activity.Description,
                StartedAt: activity.StartedAt,
                FinishedAt: activity.FinishedAt,
                Code: activity.Code,
                Active: activity.Active,
                accountId: activity.accountId,
                userId: activity.userId
            })

            return response
            
    } catch (error) {
        console.error(error)
    }
}

export default postActivity