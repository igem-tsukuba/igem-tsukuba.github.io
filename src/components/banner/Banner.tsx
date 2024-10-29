import React from 'react';
import Image from '../image/Image';
import Button from '../button/Button'
import { useScreenSizes } from "../WindowSizeUtils";

type BannerProps = {
    src: string;
    alt: string;
    margin?: string;
    text: string;
    buttonLabel: string;
    buttonColor: string;
    link: string;
};

const Banner: React.FC<BannerProps> = ({src, alt, margin = "40px", text, buttonLabel, buttonColor, link}) => {
    const { isMobileScreen, isSmallScreen } = useScreenSizes();
    return (
        <div>
            <div style={{ marginLeft: "auto", marginRight: "auto"}}>
                <div style={{width: isMobileScreen ? '200px' : isSmallScreen ? '300px' : '400px', textAlign: "center",margin: margin, alignItems: "center"}}>
                    <Image
                        src={src}
                        alt={alt}
                        caption=""
                        width={300}
                        height={400}
                        borderRadius={0}
                        margin="0px"
                    />
                    <p style={{
                        fontFamily: "Noto Sans JP", 
                        fontSize: isMobileScreen ? '10pt' : isSmallScreen ? '11pt' : '14pt',
                        lineHeight: "1.5em", 
                        textAlign: "start"}}>
                        {text}
                    </p>
                    <Button
                        label={buttonLabel}
                        textColor={buttonColor}
                        link={link}
                        margin="20px auto"
                    />
                </div>
            </div>
        </div>
    )
};

export default Banner;