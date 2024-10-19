import React from 'react';
import UpperHeader from '../components/header/UpperHeader';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NewsPiece from '../components/news_piece/NewsPiece';

const News: React.FC = () => {
    return (
        <div>
            <UpperHeader />
            <Header pageTitle='ニュース' />
            <NewsPiece title='タイトル' date='2021/09/01' control={1} content='本文' pictureSrc='logo512.png' pictureAlt='ニュース画像' topBar={false} />
            <NewsPiece title='タイトル' date='2021/09/01' control={2} content='本文' pictureSrc='components/header/iGEM_TSUKUBA_Logo.png' pictureAlt='ニュース画像' topBar={true} />
            <Footer />
        </div>
    );
}

export default News;