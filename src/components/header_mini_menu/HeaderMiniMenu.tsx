import React, { useState } from 'react';

type SmallTabProps = {
    smallTabLabels: string[];
    smallTabURLs: string[];
    content: React.ReactNode;
}

type HeaderMiniMenuProps = {
    categoryColor: string;
    bigTabName_ja: string;
    bigTabName_en: string;
    bigTabURL: string;
    smallTab: SmallTabProps[][];
}

const HeaderMiniMenu: React.FC<HeaderMiniMenuProps> = ({ categoryColor, bigTabName_ja, bigTabName_en, bigTabURL, smallTab }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
        setIsHovered(false);
    };

    // smallTabの各行のsmallTabLabelsの要素数がすべて0であるかをチェック
    const allSmallTabsEmpty = smallTab.every(row => row.every(tab => tab.smallTabLabels.length === 0));

    if (allSmallTabsEmpty && bigTabURL) {
        return (
            <a href={bigTabURL} style={{ backgroundColor: "white" }}>
                <div>
                    <p>{bigTabName_ja}</p>
                    <p>{bigTabName_en}</p>
                </div>
            </a>
        );
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div style={{
                backgroundColor: isHovered ? categoryColor : "white",
                width: "240px",
                height: "100px",
                borderBottom: `10px solid ${categoryColor}`,
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none"
                }}>
            <p style={{
                color: isHovered ? "white" : "black",
                fontFamily: "Noto Sans JP",
                fontWeight: "600",
                fontSize: "24pt",
                margin: "0px"
                }}>
                {bigTabName_ja}
            </p>
            <p style={{
                color: isHovered ? "white" : "black",
                fontFamily: "Noto Sans JP",
                fontWeight: "600",
                fontSize: "16pt",
                margin: "0px"
            }}>
                {bigTabName_en}
            </p>
            </div>
            {isOpen && (
                <div>
                    {smallTab.map((row, rowIndex) => (
                        <div key={rowIndex} style={{color: "white", backgroundColor: categoryColor, }}>
                            {row.map((tab, colIndex) => (
                                <div key={colIndex}>
                                    <a href={tab.smallTabURLs[colIndex]} style={{textDecoration: "none"}}>
                                        <div style={{margin: "-20px"}}>
                                            <p style={{color: "white", textDecoration: "none"}}>{tab.smallTabLabels[colIndex]}</p>
                                        </div>
                                        
                                    </a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeaderMiniMenu;