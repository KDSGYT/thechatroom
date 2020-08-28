import React, { useEffect, useState } from 'react';
import './Window.scss';
import io from 'socket.io-client';
import ChatInput from './ChatInput';
const socket: any = io('http://10.0.0.224:8080')


interface WindowProps {
    userName: string
    setUsername: any
}

const Window: React.FC<WindowProps> = ({ userName, setUsername }) => {

    const [color] = useState(`rgb(${random255()}, ${random255()}, ${random255()})`)
    const [msgs, setMsgs] = useState([
        {}
        // {
        //     id: "sent",
        //     data: "hello",
        //     sender: userName,
        //     style: { color }
        // },
        // {
        //     id: "received",
        //     data: "hi",
        //     sender: "someone",
        //     style: { color: "black" }
        // }
    ])
    const chat: any = msgs.map((item: any) => {

        try {
            return (
                <div className={item.id} >
                    <span className="body">
                        <span style={item.style} className="sender">
                            {item.sender} 
                    </span>
                        {item.data}
                    </span>
                </div>
            )
        } catch {
            return null;
        }

       
    })

    // socket events
    socket.on('received', (data: object) => { console.log('received') })

    useEffect(() => {
        // socket.emit('Working')
        // sendMsg({ name: userName, data: "data" })
    })

    function random255() {
        return Math.floor(Math.random() * 255);
    }


    function sendMsg(data: string): any {
        socket.emit('sent', data)
        setMsgs((prevState: any) => {
            console.table(prevState)
            const newMsg = {
                id: "sent",
                data: data,
                sender: userName,
                style: { color }
            }
            let newState = [
                ...prevState,
                newMsg
            ]
            return newState;
        })
        console.table(msgs)
    }

    //check when the username is changing
    // useEffect(() => {
    //     console.log(userName)
    // }, [userName]);

    return (
        <div id="window">
            <div id="chat">
                {chat}
            </div>
            <ChatInput
                setUserName={setUsername}
                sendMsg={sendMsg}
                userName={userName}
            />
        </div>
    )
}
export default Window;

