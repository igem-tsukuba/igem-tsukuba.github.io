import React from 'react';
import UpperHeader from '../components/header/UpperHeader';
import Header from '../components/header/Header';
import Title from '../components/title/Title';
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
            <div style={{ position: 'relative' }}>
                <img 
                    src={`${process.env.PUBLIC_URL}/pages/Home/Cell.svg`} 
                    alt="iGEM TSUKUBAの写真" 
                    style={{ marginLeft: "-100px", marginTop: "-100px" }} 
                />
                <img 
                    src={`${process.env.PUBLIC_URL}/pages/about_us/About_iGEM/medal.webp`} 
                    alt="iGEM TSUKUBAの写真" 
                    style={{ 
                        position: "absolute", 
                        top: "240px", 
                        left: "233px", 
                        transform: "translate(-50%, -50%)", 
                        width: "335px", 
                        height: "335px", 
                        borderRadius: "50%", 
                        objectFit: "cover", 
                        border: "5px solid #691C70" 
                    }} 
                />
                <div style={{
                    position: "absolute",
                    top: "50px",
                    left: "500px",
                    width: "50%",
                    height: "auto",
                    backgroundColor: "white",
                    padding: "20px"}}>
                    <p style={{fontFamily: "Noto Sans JP", fontSize: "16pt", lineHeight: 2}}>私たちは、合成生物学という学問分野を活かして、世界をより良くするアイデアを競う「iGEM」という国際大会への出場を目指しています。</p>
                    <div style={{display: "flex", justifyContent: "flex-start"}}>
                        <Button label="合成生物学とは？" textColor="#D20000" link="/about/about_symbio" margin='20px 0 0 0'/>
                        <Button label="iGEMとは？" textColor="#D20000" link="/about/about_iGEM" margin='20px 0 0 20px'/>
                    </div>
                    
                </div>
            </div>
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
            <hr style={{ border:"1px solid black", width: "80%" }} />
            <Title
                text='好奇心旺盛な皆さんを募集しています！'/>
            <Paragraph
                text=''/>
            <Button
                label='iGEMでできること'
                textColor='#00A400'
                backgroundColor='#FFFFFF'
                link='/recruitment'/>
            <hr style={{ border:"1px solid black", width: "80%" }} />
            <Title
                text='iGEM TSUKUBAには皆様の温かいご支援が必要です'/>
            <Paragraph
                text=''/>
            <div style={{ display: "flex", justifyContent: 'flex-start' }}>
                <Button
                    label='もっと見る'
                    textColor='#007AFF'
                    backgroundColor='#FFFFFF'
                    link='/sponsorship'
                    margin="40px 20px 40px 10%" />
                <Button
                    label='クラウドファンディングはこちら'
                    textColor='#691C70'
                    backgroundColor='#FFFFFF'
                    link='https://camp-fire.jp/projects/787804/view'
                    margin="40px 20px 40px 20px"/>
                <Button
                    label='お問い合わせはこちら'
                    textColor='#691C70'
                    backgroundColor='#FFFFFF'
                    link='mailto:igemtsukuba24@gmail.com'
                    margin="40px 20px 40px 20px"/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;