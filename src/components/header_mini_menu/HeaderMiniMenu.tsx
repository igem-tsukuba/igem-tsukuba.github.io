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
    const [selectedIndex, setSelectedIndex] = useState([0, 0]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (rowIndex: number, colIndex: number) => {
        setSelectedIndex([rowIndex, colIndex]);
        setIsOpen(false);
    };

    // smallTabの各行のsmallTabLabelsの要素数がすべて0であるかをチェック
    const allSmallTabsEmpty = smallTab.every(row => row.every(tab => tab.smallTabLabels.length === 0));

    if (allSmallTabsEmpty && bigTabURL) {
        return (
            <a href={bigTabURL} style={{ backgroundColor: "white" }}>
                <span>{bigTabName_ja}</span>
                <span>{bigTabName_en}</span>
            </a>
        );
    }

    return (
        <div>
            <div onClick={toggleMenu} style={{ backgroundColor: categoryColor }}>
                <span>{bigTabName_ja}</span>
                <span>{bigTabName_en}</span>
            </div>
            {isOpen && (
                <div>
                    {smallTab.map((row, rowIndex) => (
                        <div key={rowIndex}>
                            {row.map((tab, colIndex) => (
                                <div key={colIndex} onClick={() => handleItemClick(rowIndex, colIndex)}>
                                    <a href={tab.smallTabURLs[colIndex]}>{tab.smallTabLabels[colIndex]}</a>
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