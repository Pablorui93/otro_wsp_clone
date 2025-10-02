import React from 'react';
import { Link } from 'react-router';
import './ContactItem.css'

const ContactItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id}/messages`}>
            <div className='contact-item-container'>
                <div className='contact-item'>
                    <div className='avatar-container'>
                        <img className='avatar' src={contact.avatar} alt={contact.name} width={50} />
                        <h2 className='contact-name'>{contact.name}</h2>
                    </div>
                    <div className='connection'>
                        <span>Ult. conex.: {contact.lastConnection} hs</span>
                        <span> {contact.connectionStatus}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ContactItem;