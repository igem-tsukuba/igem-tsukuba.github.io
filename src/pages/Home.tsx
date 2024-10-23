import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import UpperHeader from '../components/header/UpperHeader';
import Newsfeed from '../components/news_piece/Newsfeed';
import Banner from '../components/banner/Banner';

const Home: React.FC = () => {
    return (
        <div>
            <UpperHeader />
            <Header pageTitle='iGEM TSUKUBA　'></Header>
            <Newsfeed />
            <Banner src="pages/Home/education.webp" alt="Eduの写真" text="Education頑張ってます" buttonLabel="詳しくはこちら" buttonColor="#000000" link="/news" />
            <Footer />
        </div>
    );
}

export default Home;