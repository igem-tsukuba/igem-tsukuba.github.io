import React, { useState, useEffect } from 'react';
import UpperHeader from '../components/header/UpperHeader';
import Header from '../components/header/Header';
import Title from '../components/title/Title';
import Paragraph from '../components/paragraph/Paragraph';
import Newsfeed from '../components/news_piece/Newsfeed';
import Button from '../components/button/Button';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';

const images = [
    `${process.env.PUBLIC_URL}/pages/about_us/About_iGEM/medal.webp`,
    `${process.env.PUBLIC_URL}/pages/Home/groupPhoto.webp`,
    `${process.env.PUBLIC_URL}/pages/about_us/Project/project.webp`
];

const texts = [
    '私たちは、合成生物学という学問分野を活かして、世界をより良くするアイデアを競う「iGEM」という国際大会への出場を目指しています。',
    '私たちiGEM TSUKUBAは、筑波大学発のiGEMチームとして、総勢20人ほどで協力しながらプロジェクトを進行しております。',
    '今年度のプロジェクト、活動記録をご紹介いたします。'
]

const buttons = [
    [
        { label: "合成生物学とは？", link: "/about/about_symbio" },
        { label: "iGEMとは？", link: "/about/about_iGEM" }
    ],
    [
        { label: "iGEM TSUKUBAとは？", link: "/about/about_iGEM_TSUKUBA" },
        { label: "メンバー図鑑", link: "/about/members" }
    ],
    [
        { label: "研究概要", link: "/about/project" },
        { label: "活動記録", link: "/about/log" }
    ]
]

const Home: React.FC = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const carouselInterval = 8000; // 画像の切り替え速度を8秒に設定

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 250); // フェードアウトの時間
        }, carouselInterval); // 8秒ごとに画像を切り替える
        return () => clearInterval(interval);
    }, [carouselInterval]);

    return (
        <div>
            <UpperHeader />
            <Header pageTitle='iGEM TSUKUBA' />
            <div style={{ position: 'relative' }}>
                <img 
                    src={`${process.env.PUBLIC_URL}/pages/Home/Cell.svg`} 
                    alt="iGEM TSUKUBAの写真" 
                    style={{ marginLeft: "-100px", marginTop: "-100px" }} 
                />
                <img 
                    src={images[currentImageIndex]} 
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
                        border: "5px solid #691C70",
                        opacity: fade ? 1 : 0,
                        transition: "opacity 0.25s ease-in-out" // フェードイン・フェードアウトのアニメーション
                    }} 
                />
                <div style={{
                    position: "absolute",
                    top: "50px",
                    left: "500px",
                    width: "50%",
                    height: "auto",
                    backgroundColor: "white",
                    padding: "20px",
                    transition: "opacity 0.25s ease-in-out" // フェードイン・フェードアウトのアニメーション
                }}>
                    <p style={{fontFamily: "Noto Sans JP", fontSize: "16pt", lineHeight: 2}}>{texts[currentImageIndex]}</p>
                    <div style={{display: "flex", justifyContent: "flex-start"}}>
                        {buttons[currentImageIndex].map((button, index) => (
                            <Button 
                                key={index} 
                                label={button.label} 
                                textColor="#D20000" 
                                link={button.link} 
                                margin={index === 0 ? '20px 0 0 0' : '20px 0 0 20px'} 
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* ここまでカルーセル */}
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