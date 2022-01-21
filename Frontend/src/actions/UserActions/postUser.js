import axios from 'axios'

const postUser = async (accountId) => {
    try {
        const response = await axios.post('http://localhost:8080/user',{
                AccountId: accountId
        })

        return response
    } catch (error) {
        console.error(error,'Could not post the User')
    }
}

export default postUser