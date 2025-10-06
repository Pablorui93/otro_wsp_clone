import React from "react";
import ContactScreen from "../ContactScreen/ContactScreen";
import ChatScreen from "../ChatScreen/ChatScreen";
import "./HomeScreen.css";
import { Route, Routes } from "react-router";

const HomeScreen = () => {
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
};

export default HomeScreen;