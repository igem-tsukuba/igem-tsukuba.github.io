import React from 'react';
import { useScreenSizes } from "../WindowSizeUtils";


type SelfIntroduceProps = {
    name_ja: string;
    name_en: string;
    college: string;
    word: string;
    picture: string | { default: string };
    alt: string;
    under_bar?: boolean;
};

const SelfIntroduce: React.FC<SelfIntroduceProps> = ({ name_ja, name_en, college, word, picture, alt, under_bar = true }) => {
    const { isSmallScreen, isMobileScreen } = useScreenSizes();

    return (
        <div>
            <div style={{
                display: isMobileScreen ? 'block' : 'flex', 
                margin: '0px 10%', 
                backgroundColor: 'white'}}>
                <img src={typeof picture === 'string' ? `${process.env.PUBLIC_URL}/${picture}` : picture.default} 
                    alt={alt} 
                    style={{
                        color: 'black', 
                        display: 'block', 
                        width: '170px', 
                        height: '170px', 
                        objectFit: 'cover', 
                        padding: "25px", 
                        margin: isMobileScreen ? '0 auto' : '0'}}/>
                <div style={{
                    marginLeft: isMobileScreen ? "auto" : "10%", 
                    marginRight: isMobileScreen ? "auto" : "",
                    textAlign: isMobileScreen ? "center" : "left", 
                    marginTop: "auto", 
                    marginBottom: "auto",
                    maxWidth: isMobileScreen ? "170px" : "",}}>
                    <h1 style={{
                        color: 'black', 
                        fontFamily: "Noto Sans JP", 
                        fontWeight: "600", 
                        fontSize: isMobileScreen ? '18pt' : isSmallScreen ? '20pt' : '24pt', 
                        margin: "5px"}}>
                        {name_ja}
                    </h1>
                    <p style={{
                        color: 'black', 
                        fontSize: isMobileScreen ? '10pt' : isSmallScreen ? '11pt' : '14pt', 
                        margin: "5px"}}>
                        {name_en}
                    </p>
                    <p style={{
                        color: 'black', 
                        fontSize: isMobileScreen ? '10pt' : isSmallScreen ? '11pt' : '14pt', 
                        margin: "5px"}}>
                        {college}
                    </p>
                    <p style={{
                        color: 'black', 
                        fontSize: isMobileScreen ? '10pt' : isSmallScreen ? '11pt' : '14pt',
                        margin: "5px"}}>
                        {word}
                    </p>
                </div>
            </div>
            {under_bar && <hr style={{margin: "0px 10%"}} />}
        </div>
    );
};

export default SelfIntroduce;
