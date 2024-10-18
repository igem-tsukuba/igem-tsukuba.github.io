import React from "react";

type ImageProps = {
    src: string;
    alt: string;
    caption: string;
    width?: number;
    height?: number;
    borderRadius?: number;
    };

const Image: React.FC<ImageProps> = ({ src, alt, caption, width = 280, height = 210, borderRadius = 15 }) => {
    return (
        <div style={{width: width}}>
            <figure>
                <img src={`${process.env.PUBLIC_URL}/${src}`} alt={alt} width={width} height={height} style={{ borderRadius: borderRadius, objectFit: 'cover'}} />
                <figcaption style={{fontFamily: "Noto Sans JP", width: width, textAlign: "center"}}>{caption}</figcaption>
            </figure>
        </div>
    );
}

export default Image;