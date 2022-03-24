import axios from 'axios'
import {
    INPUT_CHANGE,
    ADD_NEW_NATIONALITY,
    ADD_NEW_NAME,
    ADD_PROBABILITY
} from './action-types'

//remove this, not necessary
export const inputChange = ({ name, value}) => {
    return { type: INPUT_CHANGE, payload: { name, value } }
}

export const addFullName = newName => dispatch => {
    console.log(newName)
    axios.get(`https://api.nationalize.io?name=${newName.name}`)
        .then(res => {
            dispatch({ type: ADD_NEW_NATIONALITY, payload: res.data.country[0].country_id})
            dispatch({ type: ADD_PROBABILITY, payload: res.data.country[0].probability})
        })
        .catch(err => {
            console.log(err.response)
        })
}

// export const getNationality = () => dispatch