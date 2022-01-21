import axios from 'axios'


const putActivity = async (id,bool) => {
    try {
            const response = await axios.put(`http://localhost:8080/activity/${id}`,
            {
                Active: bool,
            })

            return response
            
    } catch (error) {
        console.error(error)
    }
}

export default putActivity