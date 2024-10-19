import React, { useState } from "react";
import { getColorAndLabel } from './NewsControlUtils';
import Paragraph from "../paragraph/Paragraph";

type NewsProps = {
  title: string;
  date: string;
  control: number;
  content: string;
  picture: string;
  picture_alt: string;
};

const NewsPiece: React.FC<NewsProps> = ({ title, date, control, content, picture, picture_alt }) => {
    const { color, label } = getColorAndLabel(control); // ユーティリティ関数の使用

    const [isContentVisible, setIsContentVisible] = useState(true);

    const handleTitleClick = () => {
        setIsContentVisible(!isContentVisible);
    };

    return (
        <div>
            <div style={{ margin: "0px 10% 0px 10%" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h1 
                        style={{ 
                            fontFamily: "Noto Sans JP", 
                            fontWeight: "600", 
                            fontSize: "24pt", 
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
                    <div style={{ backgroundColor: color, width: "75px", height: "30px", padding: "5px 5px", borderRadius: "10px", marginRight: "10px", display: "flex", justifyContent: "center" }}>
                        <p style={{ color: "white", fontFamily: "Noto Sans JP", fontWeight: "600", fontSize: "14pt", margin: 0 }}>{label}</p>
                    </div>
                    <h2 style={{ fontFamily: "Noto Sans JP", fontWeight: "500", fontSize: "12pt" }}>{date}</h2>
                </div>
                {isContentVisible && <Paragraph text={content} />}
            </div>
        </div>
    );
};

export default NewsPiece;