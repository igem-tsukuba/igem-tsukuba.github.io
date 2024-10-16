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
    const [hoveredTab, setHoveredTab] = useState<[number, number] | null>(null);

    const handleMouseEnter = () => {
        setIsOpen(true);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
        setIsHovered(false);
    };

    const handleTabMouseEnter = (rowIndex: number, colIndex: number) => {
        setHoveredTab([rowIndex, colIndex]);
    };

    const handleTabMouseLeave = () => {
        setHoveredTab(null);
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
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: 'relative', width: '200px'}}>
            <div style={{
                backgroundColor: isHovered ? categoryColor : "white",
                width: "240px",
                height: "100px",
                borderBottom: `10px solid ${categoryColor}`,
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                textAlign: "center",
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
                <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1000 }}>
                    {smallTab.map((row, rowIndex) => (
                        <div key={rowIndex} style={{ display: 'flex', flexDirection: 'column' }}>
                            {row.map((tab, colIndex) => (
                                tab.smallTabLabels.map((label, index) => (
                                    <div key={index} onMouseEnter={() => handleTabMouseEnter(rowIndex, colIndex)} onMouseLeave={handleTabMouseLeave} style={{width: "240px", height: "50px", margin: "0", padding: "0"}}>
                                        <a href={tab.smallTabURLs[index]} style={{textDecoration: "none"}}>
                                            <div style={{backgroundColor: hoveredTab && hoveredTab[0] === rowIndex && hoveredTab[1] === colIndex ? categoryColor : "initial", height: "50px", margin: "0", padding: "0",}}>
                                                <p style={{color: "white", textDecoration: "none", backgroundColor: categoryColor, textAlign: "center", lineHeight: "50px", margin: "0", padding: "0",  borderBottom: `3px solid white`, borderTop: `3px solid white`}}>{label}</p>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeaderMiniMenu;