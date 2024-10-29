import React, { useState } from 'react';
import { useScreenSizes } from "../WindowSizeUtils";

type ButtonProps = {
    label: string;
    textColor: string;
    backgroundColor?: string;
    link: string;
    margin?: string; 
};

const Button: React.FC<ButtonProps> = ({
    label, textColor, link, backgroundColor = '#FFFFFF', margin = '40px 20px 40px 10%'
}) => {
    const { isSmallScreen, isMobileScreen } = useScreenSizes();
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
            border: isMobileScreen ? `1px solid ${isHovered ? backgroundColor: textColor}` : `3px solid ${isHovered ? backgroundColor: textColor}`,
            borderRadius: isMobileScreen ? '9px' : '18px',
            padding: isMobileScreen ? '3px 10px' : '5px 30px',
            margin: margin,
            fontFamily: 'Noto Sans JP',
            fontSize: isMobileScreen ? '8pt' : '14pt',
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