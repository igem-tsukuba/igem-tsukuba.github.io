import React from "react";

type ImageProps = {
    src: string;
    alt: string;
    caption: string;
    width?: number;
    height?: number;
    borderRadius?: number;
    margin?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, caption, width = 280, height = 210, borderRadius = 15, margin ="30px 30px"}) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
            <div style={{ width: width, textAlign: "center", margin: margin }}>
                <figure style={{ margin: 0 }}>
                    <img 
                        src={`${process.env.PUBLIC_URL}/${src}`} 
                        alt={alt} 
                        width={width} 
                        height={height} 
                        style={{ 
                            borderRadius: borderRadius, 
                            objectFit: 'cover', 
                            width: '100%', 
                            height: '100%' 
                        }} 
                    />
                    <figcaption style={{ fontFamily: "Noto Sans JP", width: width, textAlign: "center" }}>{caption}</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default Image;