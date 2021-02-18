// a send button that will only appear when the person is typing


import React, { useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import './ChatInput.scss'
import SubmitButton from './submitButton/SubmitButton';

interface ChatInputProp {
    sendMsg: any
    setUserName:any
}

const ChatInput: React.FC<ChatInputProp> = (props) => {

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const { sendMsg, setUserName  } = props;
    const input: any = useRef();

    const query = useQuery();
    // console.log(query.get("name"));

    function handleSubmit(e: any) {
        e.preventDefault();
        sendMsg(input.current.value);
        input.current.value="";
    }
 


    useEffect(() => {
        setUserName(query.get("name"));
        // console.log(query.get("name"))
        // console.log(userName)
    });
    
    return (
        <form onSubmit={handleSubmit} id="chat-input">
            <input 
                type="text"
                ref={input} 
                placeholder="Send Message" 
                autoComplete="off" 
            />
            <SubmitButton/>
        </form>
    )
}


export default ChatInput;