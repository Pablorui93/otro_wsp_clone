import React, { useState } from 'react'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import { Route, Routes } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import './App.css'

const App = () => {

	return (
		<div className='home-screen-container-div'>
			<div className='contact-screen-container-div'>
				<Routes>
					<Route
						path='/'
						element={<ContactScreen />}
					/>
				</Routes>
			</div>
			<div className='contact-screen-container-div'>
				<Routes>
					<Route
						path='/contact/:contact_id/messages'
						element={<ChatScreen />}
					/>
				</Routes>
			</div>
		</div>
	)
}






export default App

{/*
:contact_id es un parametro de busqueda (valor pasado por la URL)
ponemos :contact_id para indicar que el valor es variable, es decir puede ser:
/contact/1/messages
o 
/contact/2/messages
etc...
*/}
{/* {	<Route 
	path='/contact/:contact_id/messages' 
	element={<ChatScreen/>} 
/>} */}

{/* <Route
	path='/'
	element={<ContactScreen/>}
/> */}
{/*
:contact_id es un parametro de busqueda (valor pasado por la URL)
ponemos :contact_id para indicar que el valor es variable, es decir puede ser:
/contact/1/messages
o 
/contact/2/messages
etc...
*/}