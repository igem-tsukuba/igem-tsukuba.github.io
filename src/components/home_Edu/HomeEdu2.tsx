import React, { useState } from 'react';
import Image from '../image/Image';

type ButtonProps = {
    label: string;
    textColor: string;
    link: string;
};

const EducationButton: React.FC<ButtonProps> = ({
    label,
    textColor,
    link
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        window.location.href = link;
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="flame" style={{
            width: '350px',
            height: '350px',
            marginLeft: '300px'
        }}>
            <div className="picture" style={{marginTop: '5px'}}>
                <Image src={'pages/Home/education.webp'} alt={'Education Achievements'} caption={''} />
            </div>

            {/* Description Text */}
            <div className="text">
                <p>
                    iGEM TSUKUBAでは、中学校・高等学校への出前授業をはじめとした教育活動に積極的に取り組んでおります。
                </p>
                <p>
                    先端生物学の世界を知りたい、紹介したい方はご一報ください。
                </p>
            </div>

            {/* Orange Button */}
            <div className="Orange Button">
                <button
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: isHovered ? '#FFFFFF' : textColor,
                        backgroundColor: isHovered ? textColor : '#FFFFFF',
                        padding: '5px 30px',
                        border: `3px solid ${textColor}`,
                        borderRadius: '12px',
                        fontFamily: 'Noto Sans JP',
                        fontSize: '12pt',
                        cursor: 'pointer',
                    }}
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {label}
                </button>
            </div>
        </div>
    );
};

export default EducationButton;