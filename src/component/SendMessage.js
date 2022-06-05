import React from 'react'
import { useState } from 'react';
import { db, auth } from "./firebase";
import firebase from "firebase/compat/app";
import { IconButton, Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'

function SendMessage() {
    const [message, setMessage] = useState("");
    function sendMessage(e) {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        if (message !== "") {
            db.collection("message").add({
                text: message,
                photoURL,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }
        setMessage("");
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className='sendMsg'>
                    <Input placeholder='メッセージを入力してください'
                        type='text'
                        style={{width : '70%'}}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message} />
                    <IconButton
                        disabled={message === ''}
                        onClick={sendMessage}>
                        <SendIcon />
                    </IconButton>
                </div>
            </form>
        </div>
    )
}

export default SendMessage;
