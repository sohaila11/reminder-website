import {ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER} from '../types'

export const add_Reminder = (text,date) => {
    const action = {
        type: ADD_REMINDER,
        text,
        date,
    }
    console.log("Add",action)
    return action 
}

export const remove_Reminder=(id)=>{
    const action ={
        type:REMOVE_REMINDER,
        id
    }
    console.log("Remove", action)
    return action
}

export const clear_Reminder= ()=>{
    const action ={
        type:CLEAR_REMINDER
    }
    return action 
}