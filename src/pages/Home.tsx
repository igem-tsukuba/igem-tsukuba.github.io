import React, { useState, useEffect } from 'react';
import UpperHeader from '../components/header/UpperHeader';
import Header from '../components/header/Header';
import Title from '../components/title/Title';
import Paragraph from '../components/paragraph/Paragraph';
import Newsfeed from '../components/news_piece/Newsfeed';
import Button from '../components/button/Button';
import Banner from '../components/banner/Banner';
import Image from '../components/image/Image';
import Footer from '../components/footer/Footer';
import { useScreenSizes } from '../components/WindowSizeUtils';

// カルーセル用の変数設定
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

    const { isSmallScreen, isMobileScreen } = useScreenSizes();
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
                    style={{ 
                        marginLeft: isMobileScreen ? "-50px" : isSmallScreen ? "-100px" : "-100px",
                        marginTop: isMobileScreen ? "-50px" : isSmallScreen ? "-100px" : "-100px", 
                        width: isMobileScreen ? "300px" : isSmallScreen ? "500px" : "669px",
                        height: isMobileScreen ? "300px" : isSmallScreen ? "500px" : "693px",}} 
                />
                <img 
                    src={images[currentImageIndex]} 
                    alt="iGEM TSUKUBAの写真" 
                    style={{ 
                        position: "absolute", 
                        top: isMobileScreen ? "105px" : isSmallScreen ? "160px" : "255px", 
                        left: isMobileScreen ? "95px" : isSmallScreen ? "140px" : "225px", 
                        transform: "translate(-50%, -50%)", 
                        width: isMobileScreen ? "145px" : isSmallScreen ? "250px" : "335px", 
                        height: isMobileScreen ? "145px" : isSmallScreen ? "250px" : "335px", 
                        borderRadius: "50%", 
                        objectFit: "cover", 
                        border: "5px solid #691C70",
                        opacity: fade ? 1 : 0,
                        transition: "opacity 0.25s ease-in-out" // フェードイン・フェードアウトのアニメーション
                    }} 
                />
                <div style={{
                    position: "absolute",
                    top: isMobileScreen ? "10px" : isSmallScreen ? "50px" : "50px", 
                    left: isMobileScreen ? "200px" : isSmallScreen ? "300px" : "450px", 
                    width: isMobileScreen ? "40%" : "50%",
                    height: "auto",
                    backgroundColor: "white",
                    padding: isMobileScreen ? "20px" : isSmallScreen ? "20px" : "20px", 
                    transition: "opacity 0.25s ease-in-out" // フェードイン・フェードアウトのアニメーション
                }}>
                    <p style={{
                        fontFamily: "Noto Sans JP", 
                        fontSize: isMobileScreen ? "10pt" : isSmallScreen ? "13pt" : "16pt", 
                        lineHeight: isMobileScreen ? 1.3 : 2}}>
                        {texts[currentImageIndex]}
                    </p>
                    <div style={{display: isMobileScreen ? "block" : "flex", justifyContent: "flex-start"}}>
                        {buttons[currentImageIndex].map((button, index) => (
                            <Button 
                                key={index} 
                                label={button.label} 
                                textColor="#D20000" 
                                link={button.link} 
                                margin={index === 0 ? '20px 0 0 0' : isMobileScreen ? '20px 0 0 0' : '20px 0 0 20px'} 
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* ここまでカルーセル */}
            <Newsfeed />
            <div style={{display: isSmallScreen ? "block" : "flex", justifyContent: "center", marginLeft: "auto", marginRight: "auto"}}>
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '100%'}}>
                    <Banner 
                        src="pages/Home/education.webp" 
                        alt="Eduの写真" 
                        text="我々iGEM TSUKUBAでは、合成生物学の魅力と実態を広めるための活動にも力を入れています。主に中高生を対象に、対面遠隔を問わず出張授業や実験教室などを複数回にわたって行いました。今後も教育普及活動の幅を広げながら、合成生物学の魅力を広め続けていきます。" 
                        buttonLabel="詳しくはこちら" 
                        buttonColor="#F59A23" 
                        link="/about/log" />
                    <Banner 
                        src="pages/Sponsership/cloudfinding.webp" 
                        alt="Eduの写真" 
                        text="2025年度大会への出場を目指している我々ですが、大会登録費や大会参加費、実験費などにより、常に金銭的な問題と隣り合わせです。そこで私たちの研究をより実りのあるものにするため、皆様からのご支援をいただきたいと考え、クラウドファンディングを始めました。暖かいご支援・ご協力何卒よろしくお願いいたします。" 
                        buttonLabel="詳しくはこちら" 
                        buttonColor="#007AFF" 
                        link="/sponsorship" />
                    </div>
            </div>

            <hr style={{ border:"1px solid black", width: "80%" }} />

            <Title
                text='好奇心旺盛な皆さんを募集しています！'/>
            <div style={{marginLeft: "0%", marginRight: "0%", display: "block" , justifyContent: "center"}}>
                <div >
                    <Paragraph
                        text='　我々は研究活動に興味のある方や、合成生物学世界大会に参加するというロマンに惹かれる方を広く募集しております。'/>
                    <Paragraph
                        text='　もちろん生物学に興味のある方、生物学に深い知識をお持ちの方は大歓迎ですが、合成生物学の研究には生物学の知識のみならず化学・物理学・情報学・語学など幅広い分野の知識が必要となります。\r\n　また、大会に参加するに当たって、研究活動以外にも資金集めや教育活動・サークル運営など多種多様な仕事が重要となってきます。\r\n　よって我々は様々な能力をお持ちの方や、多方面にやる気をお持ちの方とも一緒に戦っていきたいと考えております。'/>
                    <Paragraph
                        text='　ともに切磋琢磨できる仲間が増えることを祈っております‼よろしくお願いいたします。'/>
                </div>
                <Image src="pages/Recruitment/icons.webp" alt="iGEMではさまざまなことに取り組むことができます" caption="" margin='0 20% 0 0'/>
            </div>
            <Button
                label='iGEMでできること'
                textColor='#00A400'
                backgroundColor='#FFFFFF'
                link='/recruitment'/>
            
            <hr style={{ border:"1px solid black", width: "80%" }} />

            <Title
                text='iGEM TSUKUBAには皆様の温かいご支援が必要です'/>
            <Paragraph
                text='　私たちは2025年度大会への出場を目指していますが、大会の参加には資金面での問題が多く存在します。\r\n　特に、大会登録費（約80万円）や大会参加費（約40万円）は学生団体である私たちにはあまりにも大きな額であり、一学生団体とその周囲のご協力だけでの大会参加は困難な状況にあります。\r\n　さらに、実験費用を含む活動費も加わるため常に金銭的な問題に直面している状況にあります。これからのiGEM TSUKUBAが活動を継続するには金銭面は喫緊の課題です。'/>
            <Paragraph
                text='　そこで、私たちの研究活動を実りあるものにするために、みなさまからのご支援をいただきたいと考えこのクラウドファンディングを始めました。'/>

            <div style={{ display: isSmallScreen ? "block" :"flex", justifyContent: 'flex-start' }}>
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
                    margin={isSmallScreen ? "40px 20px 40px 10%" : "40px 20px 40px 20px"}/>
                <Button
                    label='お問い合わせはこちら'
                    textColor='#691C70'
                    backgroundColor='#FFFFFF'
                    link='mailto:igemtsukuba24@gmail.com'
                    margin={isSmallScreen ? "40px 20px 40px 10%" : "40px 20px 40px 20px"}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;