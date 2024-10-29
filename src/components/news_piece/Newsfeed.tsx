import React, { useEffect, useState } from 'react';
import { getColorAndLabel } from './NewsControlUtils'; // ユーティリティ関数のインポート
import Button from '../button/Button';
import { useScreenSizes } from "../WindowSizeUtils";

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
    const { isSmallScreen, isMobileScreen } = useScreenSizes();

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
                    fontSize: isMobileScreen ? '18pt' : isSmallScreen ? '20pt' : '24pt',
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
                                    <p style={{
                                        fontFamily: "Noto Sans JP", 
                                        fontSize: isMobileScreen ? '8pt' : isSmallScreen ? '10pt' : '14pt', 
                                        marginLeft: "10%"}}>{news.date}</p>
                                    <div style={{ 
                                        backgroundColor: color, 
                                        width: isMobileScreen ? '50px' : isSmallScreen ? '60px' : '80px', 
                                        height: isMobileScreen ? '20px' : isSmallScreen ? '25px' : '30px', 
                                        display: "flex", 
                                        justifyContent: "center", 
                                        borderRadius: "0.5em", 
                                        padding: "0.1em",
                                        marginLeft: "1em"}}>
                                        <p style={{color: "white", fontFamily: "Noto Sans JP", fontWeight: "600", fontSize: isMobileScreen ? '8pt' : isSmallScreen ? '10pt' : '14pt', margin: "0"}}>{label}</p>
                                    </div>
                                    <p style={{ 
                                        fontFamily: "Noto Sans JP", 
                                        fontSize: isMobileScreen ? '8pt' : isSmallScreen ? '10pt' : '14pt',
                                        marginLeft: "1em", 
                                        marginRight: "10%", 
                                        maxWidth: "40%", 
                                        whiteSpace: "nowrap", 
                                        overflow: "hidden", 
                                        textOverflow: "ellipsis" }}>
                                        {news.title}
                                    </p>
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