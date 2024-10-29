import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScreenSizes } from '../WindowSizeUtils';

type SmallTabProps = {
    label: string;
    url: string;
    content?: React.ReactNode;
}

type HeaderMiniMenuProps = {
    categoryColor: string;
    bigTabName_ja: string;
    bigTabName_en: string;
    bigTabURL: string;
    smallTab: SmallTabProps[];
}

const HeaderMiniMenu: React.FC<HeaderMiniMenuProps> = ({ categoryColor, bigTabName_ja, bigTabName_en, bigTabURL, smallTab }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredTab, setHoveredTab] = useState<number | null>(null);
    const { isSmallScreen, isMobileScreen } = useScreenSizes();

    const handleMouseEnter = () => {
        setIsOpen(true);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
        setIsHovered(false);
    };

    const handleTabMouseEnter = (index: number) => {
        setHoveredTab(index);
    };

    const handleTabMouseLeave = () => {
        setHoveredTab(null);
    };

    const allSmallTabsEmpty = smallTab.length === 0;

    if (allSmallTabsEmpty && bigTabURL) {
        return (
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: 'relative' }}>
                <Link to={bigTabURL} style={{ backgroundColor: "white", textDecoration: "none"}}>
                    <div style={{
                        display: isMobileScreen ? "none" : "block",
                        backgroundColor: isHovered ? categoryColor : "white",
                        width: isSmallScreen ? "120px" : "240px",
                        height: isSmallScreen ? "40px" : "80px",
                        borderBottom: isSmallScreen ? `5px solid ${categoryColor}` : `10px solid ${categoryColor}`,
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        textAlign: "center",
                        }}>
                        <p style={{
                            color: isHovered ? "white" : "black",
                            fontFamily: "Noto Sans JP",
                            fontWeight: "600",
                            fontSize: isMobileScreen ? "8pt" : isSmallScreen ? "12pt" : "24pt",
                            margin: "0px"
                            }}>
                            {bigTabName_ja}
                        </p>
                        <p style={{
                            color: isHovered ? "white" : "black",
                            fontFamily: "Noto Sans JP",
                            fontWeight: "600",
                            fontSize: isMobileScreen ? "6pt" : isSmallScreen ? "8pt" : "16pt",
                            margin: "0px"
                        }}>
                            {bigTabName_en}
                        </p>
                    </div>
                </Link>
            </div>
        );
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: 'relative' }}>
            <div style={{
                        display: isMobileScreen ? "none" : "block",
                        backgroundColor: isHovered ? categoryColor : "white",
                        width: isSmallScreen ? "120px" : "240px",
                        height: isSmallScreen ? "40px" : "80px",
                        borderBottom: isSmallScreen ? `5px solid ${categoryColor}` : `10px solid ${categoryColor}`,
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        textAlign: "center",
                        }}>
                        <p style={{
                            color: isHovered ? "white" : "black",
                            fontFamily: "Noto Sans JP",
                            fontWeight: "600",
                            fontSize: isMobileScreen ? "8pt" : isSmallScreen ? "12pt" : "24pt",
                            margin: "0px"
                            }}>
                            {bigTabName_ja}
                        </p>
                        <p style={{
                            color: isHovered ? "white" : "black",
                            fontFamily: "Noto Sans JP",
                            fontWeight: "600",
                            fontSize: isMobileScreen ? "6pt" : isSmallScreen ? "8pt" : "16pt",
                            margin: "0px"
                        }}>
                            {bigTabName_en}
                        </p>
                    </div>
            {isOpen && (
                <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1000 }}>
                    {smallTab.map((tab, index) => (
                        <div key={index} onMouseEnter={() => handleTabMouseEnter(index)} onMouseLeave={handleTabMouseLeave} style={{width: "240px", height: "50px", margin: "0", padding: "0", borderTop: "2px solid white"}}>
                            <Link to={tab.url} style={{textDecoration: "none"}}>
                                <div style={{backgroundColor: hoveredTab === index ? categoryColor : "initial", height: "50px", margin: "0", padding: "0"}}>
                                    <p style={{color: "white", fontFamily: "Noto Sans JP", fontWeight: "600", textDecoration: "none", backgroundColor: categoryColor, textAlign: "center", lineHeight: "50px", margin: "0", padding: "0"}}>{tab.label}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeaderMiniMenu;