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
            <Image
                src={src}
                alt={alt}
                caption=""
                width={400}
                height={300}
                borderRadius={0}
                margin={margin}
            />
            <Paragraph
                text={text}
            />
            <Button
                label={buttonLabel}
                textColor='#F59A23'
                link={link}
            />
        </div>
    )
};

export default Banner;