import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import UpperHeader from '../components/header/UpperHeader';


const Home: React.FC = () => {
    return (
        <div>
            <UpperHeader />
            <Header pageTitle='iGEM TSUKUBA　'></Header>
            <p>WIP</p>
            <Footer />
        </div>
    );
}

export default Home;