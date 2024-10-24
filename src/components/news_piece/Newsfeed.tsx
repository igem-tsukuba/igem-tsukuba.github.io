import React, { useEffect, useState } from 'react';
import { getColorAndLabel } from './NewsControlUtils'; // ユーティリティ関数のインポート
import Button from '../button/Button';

type NewsData = {
    title: string;
    date: string;
    control: number;
    content: string;
    pictureSrc: string;
    pictureAlt: string;
    topBar: boolean;
};

const Newsfeed: React.FC = () => {
    const [newsData, setNewsData] = useState<NewsData[]>([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/newsData.json`)
            .then(response => response.json())
            .then(data => setNewsData(data));
    }, []);

    return (
        <div>
            <div style={{ margin: "50px 10% 50px 10%", position: "relative", border: "2px solid black", borderRadius: "30px" }}>
                <h1 style={{ 
                    fontFamily: "Noto Sans JP", 
                    fontSize: "28pt", 
                    margin: "0", 
                    backgroundColor: "white", 
                    zIndex: 3, 
                    position: "absolute", 
                    top: "-1em", 
                    left: "1em", 
                    padding: "0 10px" 
                }}>
                    ニュース
                </h1>
                <div style={{ zIndex: 1, position: "relative", paddingTop: "2em", width: "100%", alignItems: "center"}}>
                    {newsData.slice(0, 3).map((news, index) => {
                        const { color, label } = getColorAndLabel(news.control);
                        return (
                            <div key={index}>
                                <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                                    <p style={{ fontFamily: "Noto Sans JP", fontSize: "14pt", marginLeft: "10%"}}>{news.date}</p>
                                    <div style={{ backgroundColor: color, width: "90px", height: "30px", display: "flex", justifyContent: "center", borderRadius: "10px", marginLeft: "30px"}}>
                                        <p style={{color: "white", fontFamily: "Noto Sans JP", fontWeight: "600", fontSize: "14pt", margin: "0"}}>{label}</p>
                                    </div>
                                    <p style={{ fontFamily: "Noto Sans JP", fontSize: "14pt", marginLeft: "30px"}}>{news.title}</p>
                                </div>
                                <hr style={{ width:"80%" }}/>
                            </div>
                        );
                    })}
                    <Button 
                        label="もっと見る"
                        textColor="#F59A23"
                        link="/news" />
                </div>
            </div>
        </div>
    );
}

export default Newsfeed;