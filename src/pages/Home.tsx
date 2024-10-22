import React from 'react';
import UpperHeader from '../components/header/UpperHeader';
import Header from '../components/header/Header';
import Subtitle from '../components/subtitle/Subtitle';
import Paragraph from '../components/paragraph/Paragraph';
import Newsfeed from '../components/news_piece/Newsfeed';
import Button from '../components/button/Button';
import Footer from '../components/footer/Footer';


const Home: React.FC = () => {
    return (
        <div>
            <UpperHeader/>
            <Header 
                pageTitle='iGEM TSUKUBA　'/>
            <Newsfeed/>

            <Subtitle
                text='好奇心旺盛な皆さんを募集しています！'/>
            <Paragraph
                text=''/>
            <Button
                label='iGEMでできること'
                textColor='#691C70'
                backgroundColor='#FFFFFF'
                link=''
                margin='30px'/>
            
            <Subtitle
                text='iGEM TSUKUBAには皆様の温かいご支援が必要です'/>
            <Paragraph
                text=''/>
            <Button
                label='もっと見る'
                textColor='#691C70'
                backgroundColor='#FFFFFF'
                link='/Sponsorship'
                margin='30px'/>
            <Button
                label='クラウドファンディングはこちら'
                textColor='#691C70'
                backgroundColor='#FFFFFF'
                link='https://camp-fire.jp/projects/787804/view'
                margin='30px'/>
            <Button
                label='お問い合わせはこちら'
                textColor='#691C70'
                backgroundColor='#FFFFFF'
                link=''
                margin='30px'/>

            <Footer/>
        </div>
    );
}

export default Home;