// a send button that will only appear when the person is typing


import React, { useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom';


interface ChatInputProp {
    sendMsg: any
    userName: string
    setUserName:any
}

const ChatInput: React.FC<ChatInputProp> = (props) => {

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const { sendMsg, setUserName, userName  } = props;
    const input: any = useRef();

    const query = useQuery();
    // console.log(query.get("name"));

    function handleSubmit(e: any) {
        e.preventDefault();
        sendMsg(input.current.value);
        input.current.value="";
    }
 

    const style = {
        height: "100%"
    }


    useEffect(() => {
        setUserName(query.get("name"));
        // console.log(query.get("name"))
        // console.log(userName)
    }, []);
    
    return (
        <form onSubmit={handleSubmit} style={style}>
            <input id="chat-input" ref={input} placeholder="Send Message" autoComplete="off" />
        </form>
    )
}


export default ChatInput;