import React, { FC } from 'react';
import './SubmitButton.scss'
/**
 * Style Instructions:
 * 
 * 1.Style  the button using #submit-button
 */

//  PropTypes
interface buttonProps {
    name?: any
}

const SubmitButton: FC<buttonProps> = ({ name ="\u276F" }) => {

    return (
        <button id="submit-button" type="submit" >
            {name}
        </button>
    )

}

// Deafult Prop values

export default SubmitButton;