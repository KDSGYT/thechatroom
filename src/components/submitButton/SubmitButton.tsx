import { Button } from '@material-ui/core';
import React, { FC } from 'react';
import './SubmitButton.scss'

interface buttonProps {
    name?: any
}

const SubmitButton: FC<buttonProps> = ({ name = "Submit" }) => {

    return (
        < Button
            variant="contained"
            color="primary"
            id="#submit-button"
            // endIcon={ }
        >
            Send
        </  Button>
    )

}

// Deafult Prop values

export default SubmitButton;