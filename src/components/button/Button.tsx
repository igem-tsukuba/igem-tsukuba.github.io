import { SERVFAIL } from 'dns';
import React, { useState } from 'react';
type ButtonProps = {
    label: string;
    textColor: string;
    link: string;
};

const Button: React.FC<ButtonProps> = ({
    label, textColor, link
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () =>{
        window.location.href = link;
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    return(
        <button
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: isHovered ? '#FFFFFF' : textColor,
            backgroundColor: isHovered ? textColor : '#FFFFFF',
            padding: '5px 30px',
            border: `3px solid ${textColor}`,
            borderRadius: '20px',
            fontFamily: 'Noto Sans JP',
            fontSize: '20pt',
            cursor: 'pointer',
        }}
        onClick = {handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            {label}
        </button>
    );
};

export default Button;