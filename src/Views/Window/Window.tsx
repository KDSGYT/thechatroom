import React, { useEffect, useState, useRef } from 'react';
import Message from '../../components/msg/Message';

import './Window.scss';
import io from 'socket.io-client';
import ChatInput from '../../components/ChatInput';
const socket: any = io('http://10.0.0.224:8080')

interface WindowProps {
    userName: string
    setUsername: any
}

const Window: React.FC<WindowProps> = ({ userName, setUsername }) => {

    // const [color] = useState(`rgb(${random255()}, ${random255()}, ${random255()})`)
    const [msgs, setMsgs] = useState([{}])
    const chat: any = msgs.map((item: any, index: number) => {

        try {
            return (
                <Message
                    key={index} 
                    id={item.id} 
                    style={item.style} 
                    sender={item.sender} 
                    data={item.data} 
                />
            )
        } catch {
            return null;
        }


    })
    const chatWindow: any = useRef();
    // socket events
    

    // function random255() {
    //     return Math.floor(Math.random() * 255);
    // }


    function sendMsg(msg: string): any {
        const newMsg = {
            id: "sent",
            data: msg,
            sender: userName,
            style: { color:"white" }
        }

        socket.emit('sent', newMsg)
        setMsgs((prevState: any) => {
            console.table(prevState)

            let newState = [
                ...prevState,
                newMsg
            ]
            return newState;
        })
    }

    /**
     * 
     * @param data Data received from the server
     */
    function received(data: any): any {
        console.log("data");
        setMsgs((prevState: any) => {
            let newState = [
                ...prevState,
                data
            ]
            return newState;
        })
    }

    //auto-scroll to the bottom of the chat window
    useEffect(() => {
        chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
    }, [msgs]);

    useEffect( () =>{
        socket.on('received', (data: object) => {
            return received(data);
        })
        return(() =>{
            socket.off('received');
        })
    })

    return (
        <div id="window">
            <div id="chat" ref={chatWindow}>
                {chat}
            </div>
            <ChatInput
                setUserName={setUsername}
                sendMsg={sendMsg}
            />
        </div>
    )
}
export default Window;

