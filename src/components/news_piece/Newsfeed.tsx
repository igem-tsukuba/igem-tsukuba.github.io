import React, { useState, useEffect } from "react";
import { getColorAndLabel } from './NewsControlUtils';

type NewsData = {
    title: string;
    date: string;
    control: number;
    content: string;
    pictureSrc: string;
    pictureAlt: string;
    topBar?: boolean;
  };

const Newsfeed: React.FC = () => {
    const [newsData, setNewsData] = useState<NewsData[]>([]);


    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/newsDataSample.json`)
            .then(response => response.json())
            .then(data => setNewsData(data));
    }, []);

    return (
        <div>
            <div style={{border: "1px solid black"}}>
                {newsData.slice(0, 3).map((news, index) => {
                    const { color, label } = getColorAndLabel(news.control);
                    return (
                        <div key={index}>
                            <div  style={{display: "flex", justifyContent: "center"}}>
                                <p style={{}}>{news.title}</p>
                                <p>{news.date}</p>
                                <p>{color}</p>
                                <p>{label}</p>
                            </div>
                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


export default Newsfeed;