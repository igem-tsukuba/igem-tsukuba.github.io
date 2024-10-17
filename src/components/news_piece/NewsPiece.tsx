import React, { useState } from "react";
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
    // controlの値と管轄の表示を対応させる関数
    const getColorAndLabel = (control: number) => {
        switch (control) {
            case 1:
                return { color: "#F59A23", label: "総合運営" }; // 黄色
            case 2:
                return { color: "#007AFF", label: "Tech" }; // 青色
            case 3:
                return { color: "#D20000", label: "教育活動" }; // 青色
            default:
                return { color: "#A0A0A0", label: "その他" }; // 灰色
        }
    };

    const { color, label } = getColorAndLabel(control);
    return (
        <div>
            <div style={{margin: "0px 10% 0px 10%", }}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <h1 style={{fontFamily: "Noto Sans JP", fontWeight: "600", fontSize: "24pt", width: "80%"}}>{title}</h1>
                    <div style={{ backgroundColor: color, width: "75px", height: "30px", padding: "5px 5px", borderRadius: "10px", marginRight: "10px", display: "flex", justifyContent: "center"}}>
                        <p style={{ color: "white", fontFamily: "Noto Sans JP", fontWeight: "600", fontSize: "14pt", margin: 0}}>{label}</p>
                    </div>
                    <h2 style={{fontFamily: "Noto Sans JP", fontWeight: "500", fontSize: "12pt"}}>{date}</h2>
                </div>
                <Paragraph text={content}/>
                
            </div>
        </div>
    );
};

export default NewsPiece;