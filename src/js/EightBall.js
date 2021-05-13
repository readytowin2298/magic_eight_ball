import '../styles/EightBall.css';
import React from 'react';
import messages from './messages.js'
import { useState } from 'react';

function pickMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
};

function EightBall(){
    const [message, setMessage] = useState({ msg: "Think of a Question.", color: "black" });
    let { msg, color } = message
    console.log("MSG: ", msg);
    console.log("COLOR: ", color)
    return (
        <div style={{backgroundColor: color}} className="EightBall" onClick={() => setMessage(pickMessage())}>
            <p className="EightBall-text">{msg}</p>
        </div>
    )
};

export default EightBall;