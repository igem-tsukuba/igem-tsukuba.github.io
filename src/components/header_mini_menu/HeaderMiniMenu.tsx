import React, { useState } from 'react';

type HeaderMiniMenuProps = {
    categoryColor: string;
    bigTabName_ja: string;
    bigTabName_en: string;
    bigTabURL: string;
    numberOfSmallTabs: number;
    smallTabName?: string[];
    smallTabURL?: string[];
}

const HeaderMiniMenu: React.FC<HeaderMiniMenuProps> = ({ categoryColor, bigTabName_ja, bigTabName_en, bigTabURL, numberOfSmallTabs, smallTabName, smallTabURL}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () =>{
        window.location.href = bigTabURL;
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return(
        <button style={{
            width: "240px",
            height: "100px",
            borderBottom: `10px solid ${categoryColor}`,
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none"
            }}>
            <p style={{
                fontFamily: "Noto Sans JP",
                fontWeight: "600",
                fontSize: "24pt",
                margin: "0px"
                }}>
                {bigTabName_ja}
            </p>
            <p style={{
                fontFamily: "Noto Sans JP",
                fontWeight: "600",
                fontSize: "16pt",
                margin: "0px"
            }}>
                {bigTabName_en}
            </p>
        </button>
    )
};

export default HeaderMiniMenu;