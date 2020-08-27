// a send button that will only appear when the person is typing


import React, { useRef } from 'react'

interface ChatInputProp {
    sendMsg: any
}

const ChatInput: React.FC<ChatInputProp> = (props) => {

    const { sendMsg } = props;
    const input: any = useRef();
    function handleSubmit(e: any) {
        e.preventDefault();
        sendMsg(input.current.value);
        console.log(input.current.value)
    }

    const style = {
        height: "100%"
    }

    return (
        <form onSubmit={handleSubmit} style={style}>
            <input id="chat-input" ref={input} placeholder="Send Messagge" autoComplete="off" />
        </form>
    )
}


export default ChatInput;