import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import UpperHeader from '../components/header/UpperHeader';
import Newsfeed from '../components/news_piece/Newsfeed';

const Home: React.FC = () => {
    return (
        <div>
            <UpperHeader />
            <Header pageTitle='iGEM TSUKUBA　'></Header>
            <Newsfeed />
            <Footer />
        </div>
    );
}

export default Home;