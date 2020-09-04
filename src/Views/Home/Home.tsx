import React, { useRef } from 'react';
import './Home.scss';
import SubmitButtton from '../../components/submitButton/SubmitButton'
interface Home {
    setUsername: any,
    // userName:string

}

const Home: React.FC<Home> = ({setUsername}) => {

    const input: any = useRef()
    
    function handleSubmit(e: any) {
        e.preventDefault()
        setUsername(input.current.value);
        window.location.href = `/chatroom?name=${input.current.value}`;
        input.current.value=" ";

    }

    return (
        <form id="username-form" onSubmit={handleSubmit}>
            <input 
                id="user-name" 
                minLength={4} 
                maxLength={11} 
                required 
                autoComplete={"off"}
                type="text" 
                ref={input} 
                placeholder="Enter your name" 
            />
            <SubmitButtton />
        </form>
    )
}
export default Home;