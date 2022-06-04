import React from 'react';
import SignIn from './component/SignIn'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./component/firebase";

import './index.css';
import Menu from './component/Menu'


function App() {
    const [user] = useAuthState(auth);
    return (
        <>
            {user ? <Menu/> : <SignIn/>}
        </>
    )
}

export default App
