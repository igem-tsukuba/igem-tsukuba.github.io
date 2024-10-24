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
            <div style={{display: "flex", justifyContent: "center"}}>
                <Banner 
                    src="pages/Home/education.webp" 
                    alt="Eduの写真" 
                    text="Education頑張ってます、あーだこーだあーだこーだあーだこーだ" 
                    buttonLabel="詳しくはこちら" 
                    buttonColor="#F59A23" 
                    link="/news" />
                <Banner 
                    src="pages/Sponsership/cloudfinding.webp" 
                    alt="Eduの写真" 
                    text="クラファンやってるよ！" 
                    buttonLabel="詳しくはこちら" 
                    buttonColor="#007AFF" 
                    link="/sponsorship" />
            </div>
            <Footer />
        </div>
    );
}

export default Home;