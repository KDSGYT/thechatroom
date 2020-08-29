import React, { useRef } from 'react';
import './Home.scss';

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
        <form onSubmit={handleSubmit}>
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
        </form>
    )
}
export default Home;