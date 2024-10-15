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

const SelfIntroduce: React.FC<SelfIntroduceProps> = ({ name_ja, name_en, college, word, picture, alt, under_bar = true }) => {
    return (
        <div>
            <div style={{display: 'flex', margin: '0px 10%', backgroundColor: 'white'}}>
                <img src={typeof picture === 'string' ? `${process.env.PUBLIC_URL}/${picture}` : picture.default} alt={alt} style={{color: 'black', display: 'block', width: '170px', height: '170px', objectFit: 'cover', padding: "25px", margin: "0px"}}/>
                <div style={{marginLeft: "10%", textAlign: "left", marginTop: "auto", marginBottom: "auto"}}>
                    <h1 style={{color: 'black', fontFamily: "Noto Sans JP", fontWeight: "600", fontSize: "30pt", margin: "5px"}}>{name_ja}</h1>
                    <p style={{color: 'black', fontSize: "20pt", margin: "5px"}}>{name_en}</p>
                    <p style={{color: 'black', fontSize: "16pt", margin: "5px"}}>{college}</p>
                    <p style={{color: 'black', fontSize: "16pt", margin: "5px"}}>{word}</p>
                </div>
            </div>
            {under_bar && <hr style={{margin: "0px 10%"}} />}
        </div>
    );
};

export default SelfIntroduce;
