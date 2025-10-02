import React from 'react'
import './NewMessageForm.css'

const NewMessageForm = ({addNewMessage}) => {
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
        //Llamos a la funcion de agregar nuevo mensaje
        addNewMessage(new_message_text)
        //Reseteamos el campo
        event.target.message.value = ''
    }

    return (
        <form onSubmit={handleSubmitSendMessageForm}>
        <div className='new-message-form-container'>
                <div className='new-message-form' >
                    <label htmlFor="message">Escribe un mensaje:</label>
                    <input className='new-message-form' type="text" placeholder='Escribe un mensaje...' id='message' name='message' required />
                </div>
                <button type='submit'>Enviar mensaje</button>
            </div>
        </form>
    )
}

export {NewMessageForm}