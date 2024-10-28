import React from 'react';
import UpperHeader from '../../components/header/UpperHeader';
import Header from '../../components/header/Header';
import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';

const AboutIGEM: React.FC = () => {
    return (
        <div>
            <UpperHeader/>
            <Header
                pageTitle='活動記録'/>
            <Title
                text='これまでの活動実績'/>
            
            <Button
                label='Newsはこちら'
                textColor='#D20000'
                backgroundColor='#FFFFFF'
                link='/news'/>
            <Footer/>
        </div>
    );
}

export default AboutIGEM;