import React, {useReducer} from 'react'
import D from '../types'
import {AlertContext} from './alertContext'
import {alertReducer} from './alertReducer'



export const AlersState = ({children}) => {

    const [state, dispatch] = useReducer(alertReducer, {visible:false})

    const show = (text, type = 'warning') => {
        dispatch ({
            type: D.SHOW_ALERT,
            payload: {text , type}
        })}

    const hide = () => dispatch({type: D.HIDE_ALERT})

    return (
        <AlertContext.Provider value={{
            show, 
            hide,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}















