import React from 'react'
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from "./firebase";
import SendMessage from './SendMessage';

function Board() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection("message")
            .orderBy("createdAt","desc")
            .limit(50)
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => (doc.data({ serverTimestamps: "estimate" }))));
            });

    }, []);

    return (
        <div>
            <SendMessage/>
            <div className='msgs'>
                {messages.map(({ id, text, photoURL, uid, createdAt}) => (
                    <div class='msgBox'>
                        <div key={id}>
                            <img class='imgIcon' src={photoURL} alt="" />
                            <p>{text}</p>
                            <p class='small'>{dayjs(createdAt.toDate()).format('YYYY/MM/DD HH:mm')}</p>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Board
