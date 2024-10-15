import React, { useState } from 'react';

type HeaderMiniMenuProps = {
    categoryColor: string;
    bigTabName_ja: string;
    bigTabName_en: string;
    bigTabURL: string;
    smallTabNames: string[];
    smallTabURLs: string[];
}

const HeaderMiniMenu: React.FC<HeaderMiniMenuProps> = ({ categoryColor, bigTabName_ja, bigTabName_en, bigTabURL, smallTabNames, smallTabURLs}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (index: number) => {
        setSelectedIndex(index);
        setIsOpen(false);
    };

    const handleExternalLinkClick = () => {
        if (externalLink) {
        window.location.href = externalLink;
        }
    };

    if (items.length === 0 && externalLink) {
        return (
        <button className="external-link-button" onClick={handleExternalLinkClick}>
            {externalLinkLabel || 'Visit External Site'}
        </button>
        );
    }

    
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