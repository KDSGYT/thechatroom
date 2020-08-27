import React, { useEffect, useState } from 'react';
import './Window.scss';
import io from 'socket.io-client';
import ChatInput from './ChatInput';
const socket: any = io('http://10.0.0.224:8080')


interface WindowProps {
    userName: string
}

const Window: React.FC<WindowProps> = ({ userName }) => {

    const [color] = useState(`rgb(${random255()}, ${random255()}, ${random255()})`)
    const [msgs, setMsgs] = useState([
        {
            id: "sent",
            data: "hello",
            sender: userName,
            style: { color }
        },
        {
            id: "received",
            data: "hi",
            sender: "someone",
            style: { color: "black" }
        }
    ])
    const chat: any = msgs.map((item: any) => {
        return (
            <div className={item.id} >
                <span className="body">
                    <span style={item.style} className="sender">
                        {item.sender}:
                </span>
                    {item.data}
                </span>
            </div>
        )
    })

    // socket events
    socket.on('received', (data: object) => { console.log('received') })

    useEffect(() => {
        // socket.emit('Working')
        // sendMsg({ name: userName, data: "data" })
    })
    // functions

    function random255() {
        return Math.floor(Math.random() * 255);
    }


    function sendMsg(data: string): any {
        socket.emit('sent', data)
        setMsgs((prevState: any) => {
            const newMsg = {
                id: "sent",
                data: data,
                sender: userName,
                style: { color }
            }
            let newState = prevState.push(newMsg)
            return newState;
        })
        console.table(msgs)
    }

    return (
        <div id="window">
            <div id="chat">
                {chat}
            </div>
            <ChatInput
                sendMsg={sendMsg}
            />
        </div>
    )
}
export default Window;

