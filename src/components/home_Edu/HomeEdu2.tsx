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
      <div>
      <p style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#000000',
          backgroundColor:'#FFFFFF',
          padding: '5px 30px',
          fontFamily: 'Noto Sans JP',
          fontSize: '20pt',
          height: 'auto',
          maxWidth: '300px',  
          width: '100%',
          whiteSpace: 'normal',
          wordWrap: 'break-word',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 6,
        }}>
            こんにちは
        </p>
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
      </div>
    );
};



export default Button;