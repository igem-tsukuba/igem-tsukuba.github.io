import React from 'react';
import UpperHeader from '../../components/header/UpperHeader';
import Header from '../../components/header/Header';
import Title from '../../components/title/Title';
import Subtitle from '../../components/subtitle/Subtitle';
import Paragraph from '../../components/paragraph/Paragraph';
import Image from '../../components/image/Image';
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';

const Log: React.FC = () => {
    return (
        <div>
        <UpperHeader/>

        <Header
            pageTitle='研究内容'/>

        <Title
            text='2024・2025年度研究テーマ'/>
        
        <Subtitle
           text='タンパク質言語モデルを用いたタンパク質改良' />

        <Image
            src='pages/about_us/Project/project.webp'
            alt='2024年度プロジェクト画像'
            caption=''
            width={400}
            height={300}
            borderRadius={0}
            margin='0px'
        />

        <Paragraph
            text='　タンパク質は薬の製造や昨今話題の生分解性バイオプラスチックの生産など分野を問わず利用されており、私たちの生活を見えない場所から支えています。しかし、これらタンパク質の多くは自然界から得られたものをそのまま使用しても効率の良い生産活動を行うことが出来ません。そのためタンパク質を人工的に改良し、性能を向上させたのちに使用されます。'/>
        <Paragraph
            text='　タンパク質の機能改良には自然環境で起こる進化の方法を模倣した手法(指向性進化法)が用いられることが多いですが、この手法には二つの問題点があります。一つ目は、非常にコストがかかるという点です。望ましいタンパク質を得るまでには多くの時間とリソースを必要とするため、全てのタンパク質には適用することができません。二つ目は同時に複数の機能を持たせるための改良(多目的最適化)が行えないという点です。一般的に改良したいタンパク質の機能は一つだけではありません。そのため、二つ以上の機能を改良するためには指向性進化法は適切な方法ではなくなってしまいます。'/>
        <Paragraph
            text='　このような現状を踏まえ、私たちは生成AIを用いて注目する二つ以上の機能が改良されたタンパク質を創出可能な技術の構築を目標に研究活動を行っています。また、本アイデアではAIとして「タンパク質言語モデル」を使用します。よく知られている言語モデルに自然言語を扱うChatGPTがありますが、タンパク質を扱うのに特化したタンパク質言語モデルというものが存在します。このタンパク質言語モデルによって新たなタンパク質の生成やタンパク質の機能予測が可能となりました。'/>

        <Button
            label='2023年度の研究テーマはこちら'
            textColor='#D20000'
            backgroundColor='#FFFFFF'
            link='/about/project'
            margin='80px'/>

        <Footer/>

        </div>
    );
}

export default Log;