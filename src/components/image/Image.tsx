import React from "react";
import { useScreenSizes } from "../WindowSizeUtils";


type ImageProps = {
    src: string;
    alt: string;
    caption: string;
    width?: number;
    height?: number;
    borderRadius?: number;
    margin?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, caption, width = 280, height = 210, borderRadius = 15, margin = "30px 30px" }) => {
    const { isMobileScreen } = useScreenSizes();
    // 画面幅を取得
    const screenWidth = window.innerWidth;
    // 入力された幅が画面幅を超える場合は幅を画面幅の80%に設定
    const adjustedWidth = width > screenWidth * 0.8 ? screenWidth * 0.8 : width;

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: adjustedWidth, textAlign: "center", margin: 0 }}>
                <figure style={{ margin: 0 }}>
                    <img 
                        src={`${process.env.PUBLIC_URL}/${src}`} 
                        alt={alt} 
                        width={adjustedWidth} 
                        height={height} 
                        style={{ 
                            borderRadius: borderRadius, 
                            objectFit: 'cover', 
                            width: '100%', 
                            height: '100%' 
                        }} 
                    />
                    <figcaption style={{ fontFamily: "Noto Sans JP", width: adjustedWidth, textAlign: "center", fontSize: isMobileScreen ? "8pt" : ""}}>{caption}</figcaption>
                </figure>
            </div>
        </div>
    );
};

export default Image;