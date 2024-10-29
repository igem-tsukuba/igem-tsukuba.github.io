import React, { useState } from "react";
import Paragraph from "../paragraph/Paragraph";
import Image from "../image/Image";
import { getColorAndLabel } from './NewsControlUtils';
import { useScreenSizes } from "../WindowSizeUtils";

type NewsProps = {
  title: string;
  date: string;
  control: number;
  content: string;
  pictureSrc: string;
  pictureAlt: string;
  topBar?: boolean;
};

const NewsPiece: React.FC<NewsProps> = ({ title, date, control, content, pictureSrc, pictureAlt, topBar = "true" }) => {
    const { isSmallScreen, isMobileScreen } = useScreenSizes();

    const { color, label } = getColorAndLabel(control);

    // 本文の表示・非表示を管理する状態
    const [isContentVisible, setIsContentVisible] = useState(true);

    // タイトルクリック時のハンドラ
    const handleTitleClick = () => {
        setIsContentVisible(!isContentVisible);
    };

    return (
        <div>
            <div style={{ margin: "0px 10% 0px 10%" }}>
                <hr style={{ border: topBar ? "solid 0.5px black" : "none" }}/>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{marginRight: "10px"}}>
                        <div style={{
                            width: "15px",
                            height: "15px",
                            transform: "rotate(45deg)",
                            borderTop: isContentVisible ? "solid 7px black" : "none",
                            borderLeft: isContentVisible ? "solid 7px black" : "none",
                            borderBottom: isContentVisible ? "none" : "solid 7px black",
                            borderRight: isContentVisible ? "none" : "solid 7px black",}} />
                    </div>
                    <h1 
                        style={{ 
                            fontFamily: "Noto Sans JP", 
                            fontWeight: "600", 
                            fontSize: isMobileScreen ? '18pt' : isSmallScreen ? '20pt' : '24pt',
                            width: "80%", 
                            whiteSpace: isContentVisible ? "normal" : "nowrap", 
                            overflow: isContentVisible ? "visible" : "hidden", 
                            textOverflow: isContentVisible ? "clip" : "ellipsis",
                            cursor: "pointer" 
                        }} 
                        onClick={handleTitleClick}
                    >
                        {title}
                    </h1>
                    <div style={{ 
                        backgroundColor: color, 
                        width: isMobileScreen ? '70px' : isSmallScreen ? '75px' : '100px',
                        height: isMobileScreen ? '20px' : isSmallScreen ? '20px' : '30px',
                        padding: "5px 5px", 
                        borderRadius: "10px", 
                        marginRight: "10px", 
                        display: "flex", 
                        justifyContent: "center" }}>
                        <p style={{ 
                            color: "white", 
                            fontFamily: "Noto Sans JP", 
                            fontWeight: "600", 
                            fontSize: isMobileScreen ? '8pt' : isSmallScreen ? '10pt' : '14pt',
                            margin: 0 }}>
                            {label}
                        </p>
                    </div>
                    <h2 style={{ fontFamily: "Noto Sans JP", fontWeight: "500", fontSize: isMobileScreen ? '8pt' : isSmallScreen ? '10pt' : '14pt', }}>{date}</h2>
                </div>
                {isContentVisible && (
                    <>
                    <Paragraph text={content} />
                    <Image src={pictureSrc} alt={pictureAlt} caption={pictureAlt} />
                    </>
                )}
                    
                
                
            </div>
        </div>
    );
};

export default NewsPiece;