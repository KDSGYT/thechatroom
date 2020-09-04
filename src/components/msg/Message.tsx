import React, { FC, useState } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';
import '../Transition.scss';


interface MsgProps {
    id: string,
    style: object,
    sender: string,
    data: string
}


const Message: FC<MsgProps> = ({ id, style, sender, data }) => {


    const [animate, setAnimate] = useState(false);

    React.useEffect(() => {
        setAnimate(true)
    },[]);

    return (
        <CSSTransitionGroup
            timeout={500}
            classNames="fade"
            in={animate} 
        >
            <div className={id} >
                <span className="body">
                    <span style={style} className="sender">
                        {sender ? `${sender}:` : null}
                    </span>
                    {data}
                </span>
            </div>
        </CSSTransitionGroup>
    )
}

export default Message