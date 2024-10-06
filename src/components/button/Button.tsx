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
            padding: '7px 12px',
            border: `3px solid ${textColor}`,
            borderRadius: '15px',
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