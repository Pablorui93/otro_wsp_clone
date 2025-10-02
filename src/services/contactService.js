const contacts = [
    {
        id: 1,
        name: 'Homero',
        description: 'Mmm... donas 🍩',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
        lastConnection: '10:45',
        connectionStatus: 'offline',
        messages: [
            {
                emisor: 'YO',
                hora: '09:15',
                id: 1,
                texto: 'Hola Homero, ¿qué haces?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '09:16',
                id: 2,
                texto: 'Pensando en donas...',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '09:17',
                id: 3,
                texto: '😂 siempre igual',
                status: 'visto'
            }
        ]
    },
    {
        id: 2,
        name: 'Marge',
        description: 'La voz de la razón en la familia 💙',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png',
        lastConnection: 'ahora',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '11:20',
                id: 1,
                texto: 'Hola Marge',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '11:21',
                id: 2,
                texto: 'Hola, ¿cómo estás?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '11:22',
                id: 3,
                texto: 'Todo bien, gracias 😊',
                status: 'visto'
            }
        ]
    },
    {
        id: 3,
        name: 'Lisa',
        description: 'Inteligencia y música 🎷',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',
        lastConnection: 'ayer',
        connectionStatus: 'offline',
        messages: [
            {
                emisor: 'YO',
                hora: '18:00',
                id: 1,
                texto: '¿Estudiando de nuevo?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '18:02',
                id: 2,
                texto: 'Sí, pero también practicando el saxo 🎶',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '18:05',
                id: 3,
                texto: 'Eres un genio, Lisa 👏',
                status: 'visto'
            }
        ]
    },
    {
        id: 4,
        name: 'Bart',
        description: '¡Ay, caramba! 😎',
        avatar: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
        lastConnection: '12:00',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '12:01',
                id: 1,
                texto: 'Ey Bart, ¿todo bien?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '12:02',
                id: 2,
                texto: '¡Cómeme los pantalones!',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '12:03',
                id: 3,
                texto: '😂 siempre con tus frases',
                status: 'visto'
            }
        ]
    }
];


export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact
        }
    }
    return null
}