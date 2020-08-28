import React, { useRef } from 'react';
import './Home.scss';

interface Home {
    setUsername: any,
    // userName:string

}

const Home: React.FC<Home> = ({setUsername}) => {

    const input: any = useRef()
    
    // const [username, setUsername] = useState();
    


    function handleSubmit(e: any) {
        e.preventDefault()
        setUsername(input.current.value);
        // window.location.href = "/chatroom/";
        window.location.href = `/chatroom?name=${input.current.value}`;
        input.current.value=" ";

    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="user-name" minLength={5} maxLength={11} required type="text" ref={input} placeholder="Enter your name" />
        </form>
    )
}
export default Home;