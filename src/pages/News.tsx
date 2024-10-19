import React, { useEffect, useState } from 'react';
import UpperHeader from '../components/header/UpperHeader';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NewsPiece from '../components/news_piece/NewsPiece';

type NewsData = {
    title: string;
    date: string;
    control: number;
    content: string;
    pictureSrc: string;
    pictureAlt: string;
    topBar: boolean;
};

const News: React.FC = () => {
    const [newsData, setNewsData] = useState<NewsData[]>([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/newsDataSample.json`)
            .then(response => response.json())
            .then(data => setNewsData(data));
    }, []);

    return (
        <div>
            <UpperHeader />
            <Header pageTitle='ニュース' />
            {newsData.map((news, index) => (
                <NewsPiece 
                    key={index}
                    title={news.title}
                    date={news.date}
                    control={news.control}
                    content={news.content}
                    pictureSrc={news.pictureSrc}
                    pictureAlt={news.pictureAlt}
                    topBar={news.topBar}
                />
            ))}
            <Footer />
        </div>
    );
}

export default News;