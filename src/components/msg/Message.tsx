import React, { FC } from 'react';

interface MsgProps {
    id: string,
    style:object,
    sender:string,
    data:string
}
const Message: FC<MsgProps> = ({id, style, sender, data}) => {
    return (
        <div className={id} >
            <span className="body">
                <span style={style} className="sender">
                    {sender ? `${sender}:` : null}
                </span>
                {data}
            </span>
        </div>
    )
}

export default Message