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
    label, textColor, link, backgroundColor = '#FFFFFF', margin
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

    const defaultMargin = isMobileScreen ? '10px 0px 10px 10%' : isSmallScreen ? '15px 0px 15px 10%' : '20px 0px 20px 10%';
    
    return(
        <button
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: isHovered ? backgroundColor : textColor,
            backgroundColor: isHovered ? textColor : backgroundColor,
            border: `solid ${isHovered ? backgroundColor: textColor}`,
            borderWidth: isMobileScreen ? '1px' :isSmallScreen ? '2px' : '3px',
            borderRadius: isMobileScreen ? '9px' : isSmallScreen ? '16px' : '18px',
            padding: isMobileScreen ? '3px 10px' : '5px 30px',
            margin: margin || defaultMargin, // 指定されたマージンがない場合はデフォルトのマージンを使用
            fontFamily: 'Noto Sans JP',
            fontSize: isMobileScreen ? '8pt' : isSmallScreen ? '12pt' : '14pt',
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