import React from 'react';
import Image from '../image/Image';
import Button from '../button/Button'
import Paragraph from '../paragraph/Paragraph';

type BannerProps = {
    src: string;
    alt: string;
    margin?: string;
    text: string;
    buttonLabel: string;
    buttonColor: string;
    link: string;
};

const Banner: React.FC<BannerProps> = ({src, alt, margin = "80px", text, buttonLabel, buttonColor, link}) => {
    return (
        <div>
            <div style={{width: "450px", textAlign: "center",margin: margin}}>
                <Image
                    src={src}
                    alt={alt}
                    caption=""
                    width={400}
                    height={300}
                    borderRadius={0}
                    margin="0px"
                />
                <Paragraph
                    text={text}
                />
                <Button
                    label={buttonLabel}
                    textColor='#F59A23'
                    link={link}
                    margin="20px auto"
                />
            </div>
        </div>
    )
};

export default Banner;