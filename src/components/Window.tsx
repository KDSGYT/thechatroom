import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
const socket: any = io('http://10.0.0.224:8080')

function Window() {

    const [userName, setuserName] = useState("KDSG");


    // socket events
    socket.on('received', (data:object) => {console.log('received')})
    useEffect(() =>{
        // socket.emit('Working')
        msgSent({name:userName, data:"data"})
    })
    // functions
    function msgSent(data:object){
        socket.emit('sent', data)
    }

    return(
        <h1>Working</h1>
    )
}
export default Window;