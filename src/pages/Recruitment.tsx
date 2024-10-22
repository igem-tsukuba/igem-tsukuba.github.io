import React from 'react';
import UpperHeader from '../components/header/UpperHeader';
import Header from '../components/header/Header';
import Subtitle from '../components/subtitle/Subtitle';
import Paragraph from '../components/paragraph/Paragraph';
import Image from '../components/image/Image';
import Button from '../components/button/Button';
import Footer from '../components/footer/Footer';

const Recruitment: React.FC = () => {
    return (
        <div>
        <UpperHeader/>

        <Header
            pageTitle='メンバー募集'/>

        <Subtitle
            text='私たちは新しい仲間を募集しています！'/>
        <Paragraph
            text='生物が好き！研究が好き！教育活動に興味がある！自分に向いていることを見つけたい！みんなで大会に向けて頑張ってみたい！iGEM TSUKUBAは、志高い新入生を募集しています！生物に自信がなくても大丈夫。一緒に金メダルを目指してみませんか？'/>

        <Subtitle
           text='具体的な活動内容'/>
        <Paragraph
            text='合成生物学の世界大会であるiGEMへの出場を目指し、日々実験・研究やミーティングを重ねています。実験研究活動以外にも、メンバーの母校や地域での教育活動、企業との連携等、幅広く活動しています。研究や実験はもちろん、学外での活動など他の人とは一味違う大学生活を送れます。生物学に詳しくなくても、理系でなくても熱意があれば大丈夫！あなたの得意を活かして私たちと世界を目指しませんか？'/>

<       Button
            label='メンバー紹介はこちら'
            textColor='#00A400'
            backgroundColor='#FFFFFF'
            link='/about/members'/>


        <Image
            src='pages/Recruitment/welcome.webp'
            alt='全体MTの写真'
            caption=''
            width={400}
            height={300}
            borderRadius={0}
            margin='0px'
        />

        <Footer/>

        </div>
    );
}

export default Recruitment;