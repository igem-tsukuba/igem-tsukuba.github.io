import React from 'react';

type SelfIntroduceProps = {
    name_ja: string;
    name_en: string;
    college: string;
    word: string;
    picture: string | { default: string };
    alt: string;
    under_bar?: boolean;
};

const SelfIntroduce: React.FC<SelfIntroduceProps> = ({ name_ja, name_en, college, word, picture, alt, under_bar }) => {
    return (
        <div>
            <div style={{display: 'flex', margin: '0px 10%'}}>
                <img src={typeof picture === 'string' ? picture : picture.default} alt={alt} style={{display: 'block', width: '170px', height: '170px', objectFit: 'cover', padding: "25px", margin: "0px"}}/>
                <div style={{marginLeft: "10%", textAlign: "left", marginTop: "auto", marginBottom: "auto"}}>
                    <h1 style={{fontFamily: "Noto Sans JP", fontWeight: "600", fontSize: "30pt", margin: "5px"}}>{name_ja}</h1>
                    <p style={{fontSize: "20pt", margin: "5px"}}>{name_en}</p>
                    <p style={{fontSize: "20pt", margin: "5px"}}>{college}</p>
                    <p style={{fontSize: "20pt", margin: "5px"}}>{word}</p>
                </div>
            </div>
            {under_bar && <hr style={{margin: "0px 10%"}} />}
        </div>
    );
};

export default SelfIntroduce;
