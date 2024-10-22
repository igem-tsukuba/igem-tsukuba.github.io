import React, { useState } from 'react';
import Image from '../image/Image';
import Button from '../button/Button'

type ButtonProps = {
    label: string;
    textColor: string;
    link: string;
    text: string;
};

const EducationButton: React.FC<ButtonProps> = ({
    label,
    textColor,
    link,
    text
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
            height: '350px'
        }}>
            <div className="picture" style={{marginTop: '10px'}}>
                <Image src={''} alt={''} caption={''} />
            </div>

            {/* Description Text */}
            <div className="text">
                <p>
                   {text}
                </p>
                <p>
                    {text}
                </p>
            </div>

            {/* Orange Button */}
            <div className="Orange Button">
                <Button label={''} textColor={''} link={''} />
            </div>
        </div>
    );
};

export default EducationButton;