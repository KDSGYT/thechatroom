import React, { useRef } from 'react';
import './Home.scss';

interface Home {
    setUsername: any

}

const Home: React.FC<Home> = ({ setUsername }) => {


    const input: any = useRef()

    function handleSubmit(e: any) {
        e.preventDefault()
        setUsername(input.current.value);
        window.location.href = "/chatroom";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="user-name" minLength={5} maxLength={11} required type="text" ref={input} placeholder="Enter your name" />

        </form>
    )
}
export default Home;