import { SERVFAIL } from 'dns';
import React from 'react';
type ButtonProps = {
    label: string;
    textColor: string;
    link: string;
};

const Button: React.FC<ButtonProps> = ({
    label, textColor, link
}) => {
    const handleClick = () =>{
        window.location.href = link;
    };
    return(
        <button
        style={{
            color: textColor,
            backgroundColor: '#FFFFFF',
            padding: '10px 20px',
            border: '5px ${textColor}',
            borderRadius: '10px',
            fontFamily: 'Noto Sans JP',
            cursor: 'pointer',
        }}
        onClick = {handleClick}
        >
            {label}
        </button>
    );
};

export default Button;