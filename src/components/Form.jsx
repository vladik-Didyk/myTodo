import React, {useState, useContext} from 'react'
import {AlertContext} from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'


const Form = () =>{

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()
        
        if(value.trim()) {
         firebase.addNote(value.trim())
         .then(() => {

             alert.show('  .יופי! התזכורת שלך מוכנה ', 'success')
         }).catch(() => {

             alert.show(' ...יש בעיה ', 'danger')

         })
         setValue('')
        } else{
            alert.show(' ...לא כתבת כלום ')
        }

    }

    return(
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input type='text'
                    className='form-control'
                    placeholder='Input your reminder'
                    value = {value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )

}


export default Form
