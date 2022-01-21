import axios from 'axios'

const putSmiley = async (id, count) => {
    count++
    const result = await axios.put(`http://localhost:8080/feedback/${id}`, {
        Smiley: count
    })
}

const putConfused = async (id, count) => {
    count++
    const result = await axios.put(`http://localhost:8080/feedback/${id}`, {
        Confused: count
    })
}

const putFrown = async (id, count) => {
    count++
    const result = await axios.put(`http://localhost:8080/feedback/${id}`, {
        Frown: count
    })
}

const putSurprised = async (id, count) => {
    count++
    const result = await axios.put(`http://localhost:8080/feedback/${id}`, {
        Surprised: count
    })
}

export {
    putSmiley,
    putConfused,
    putFrown,
    putSurprised
}