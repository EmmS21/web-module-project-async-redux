import { combineReducers } from 'redux'
import {
    INPUT_CHANGE,
    ADD_NEW_NAME,
    ADD_NEW_NATIONALITY,
    ADD_PROBABILITY
} from '../state/action-types'
const initialForm = ''
function addName(state= initialForm, action) {
    switch(action.type){
        case ADD_NEW_NAME:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case ADD_NEW_NATIONALITY:
            return action.payload
        default:
            return state
    }   
}
const initialProbab = ''
function addProbability(state=initialProbab, action){
    switch(action.type){
        case ADD_PROBABILITY:
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}

const initialError = ''
function error(state=initialError,action){
    switch(action.type){
        case 'SET_ERROR':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({ addName,error,addProbability })