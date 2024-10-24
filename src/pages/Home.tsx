import React from 'react';
import UpperHeader from '../components/header/UpperHeader';
import Header from '../components/header/Header';
import Subtitle from '../components/subtitle/Subtitle';
import Paragraph from '../components/paragraph/Paragraph';
import Newsfeed from '../components/news_piece/Newsfeed';
import Button from '../components/button/Button';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';


const Home: React.FC = () => {
    return (
        <div>
            <UpperHeader/>
            <Header 
                pageTitle='iGEM TSUKUBA　'/>
            <Newsfeed/>
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
            <Subtitle
                text='好奇心旺盛な皆さんを募集しています！'/>
            <Paragraph
                text=''/>
            <Button
                label='iGEMでできること'
                textColor='#691C70'
                backgroundColor='#FFFFFF'
                link=''/>
            
            <Subtitle
                text='iGEM TSUKUBAには皆様の温かいご支援が必要です'/>
            <Paragraph
                text=''/>
            <Button
                label='もっと見る'
                textColor='#691C70'
                backgroundColor='#FFFFFF'
                link='/Sponsorship'/>
            <Button
                label='クラウドファンディングはこちら'
                textColor='#691C70'
                backgroundColor='#FFFFFF'
                link='https://camp-fire.jp/projects/787804/view'/>
            <Button
                label='お問い合わせはこちら'
                textColor='#691C70'
                backgroundColor='#FFFFFF'
                link=''/>

            <Footer/>
        </div>
    );
}

export default Home;