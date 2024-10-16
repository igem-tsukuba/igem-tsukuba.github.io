import React, { useState } from 'react';
type ButtonProps = {
    label: string;
    textColor: string;
    backgroundColor?: string;
    link: string;
};

const Button: React.FC<ButtonProps> = ({
    label, textColor, link, backgroundColor = '#FFFFFF'
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
            color: isHovered ? backgroundColor : textColor,
            backgroundColor: isHovered ? textColor : backgroundColor,
            border: `3px solid ${isHovered ? backgroundColor: textColor}`,
            borderRadius: '18px',
            padding: '5px 30px',
            margin: "20px 40px",
            fontFamily: 'Noto Sans JP',
            fontSize: '14pt',
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