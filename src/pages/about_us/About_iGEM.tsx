import React from 'react';
import UpperHeader from '../../components/header/UpperHeader';
import Menu_Icon from '../../components/menu_icon/Menu_Icon';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Subtitle from '../../components/subtitle/Subtitle';
import Title from '../../components/title/Title';
import Paragraph from '../../components/paragraph/Paragraph';
import Button from '../../components/button/Button';
import Image from '../../components/image/Image';

const AboutIGEM: React.FC = () => {
    return (
        <div>
        <p>WIP</p>
        <UpperHeader/>
        <Header
            pageTitle='iGEMとは？'/>   
        <Title
            text='合成生物学の世界大会 iGEM'/>   
        <Image
            src='pages/about_us/About_iGEM/ticketBanner.webp'
            alt='2024Jamboree'
            caption=''
            width={800}
            height={100}
            borderRadius={0}
            margin='0px'/>
        <Paragraph
            text='　iGEM（アイジェム）とは International Genetically Engineered Machine の略称で、合成生物学の世界最大規模の大会です。「合成生物学のロボコン」とも呼ばれ、大学生や高校生からなる学生チームがプロジェクトを立ち上げ、社会課題の解決を目的とした合成生物学に関する研究やその他の活動成果の内容を競います。大会は毎年11月ごろにパリで開催され、2023年度は世界66カ国から400ものチームが一堂に集いました。日本からは10チームほどが参加しており、好成績を収めています。' />
        <Button
            label='iGEM公式ホームページはこちら'
            textColor='#D20000'
            link='https://igem.org' />


        <Title
            text='目標'/>   
        <Paragraph
            text='　iGEMの大会の狙いは、合成生物学の発展、教育、競争、オープンで協力的なコミュニティの発展にあります。そのため、大会では研究成果に加え、教育活動、webページの作成、などの多角的な視点から総合的に評価されます。17の特別賞と金、銀、銅の3つのメダルの賞があります。研究内容のみが評価される一般的な大会とは異なり、iGEMでは多岐に渡る能力が求められることを意味します。' />
        <Image
            src='pages/about_us/About_iGEM/medal.webp'
            alt='2023メダル獲得時の写真'
            caption='iGEM TSUKUBA　2023年度のSilver medal獲得時の写真'
            width={500}
            height={300}
            borderRadius={20}
            margin="40px 20px 40px 10%"/>
        <Button
            label='評価基準の詳細はこちら（Judge Handbook 2024）'
            textColor='#D20000'
            link='https://static.igem.org/websites/competition/2024/judging/2024-igem-judge-handbook.pdf' />

        
<Title
            text='評価項目に基づいた活動' />   
        <Paragraph
            text='　特別賞17項目のうちの一部を紹介します。各チームはこれらの評価項目に基づき多岐に渡る活動を行っています。'/> 
        <Image
            src='pages/about_us/About_iGEM/specialprize.webp'
            alt='special prize'
            caption='special prize(2023)'
            width={500}
            height={300}
            borderRadius={20}
            margin="20px 20px 40px 10%"/>
        <Subtitle
            text='・Education（教育活動）'/>  
        <Paragraph
            text='　合成生物学の世界に人々を巻き込む活動を行います。高校生への出張授業や、ワークショップの開催など。'/> 
        <Subtitle
            text='・Wiki（ホームページの作成）'/>
        <Paragraph
            text='　「Wiki」とよばる大会が指定する活動紹介のホームページを作成します。文章、構成、デザイン全てを一から作成。プログラミングの技術が必要です。'/>
        <Subtitle
            text='・Presentation（発表）'/>  
        <Paragraph
            text='　大会に向け、15分以内のビデオプレゼンテーションを作成します。発表はすべて英語で行います。プロジェクト自体の内容、ストーリー、構成、信憑性などが総合的に評価されます。'/> 
        <Subtitle
            text='・Hardware / Software Tool（ツールの開発）'/>  
        <Paragraph
            text='　研究に必要なハードウェアやソフトウェアの開発を行います。生成AIの作成など。'/> 
        <Subtitle
            text='・Entrepreneurship（起業家精神）'/>  
        <Paragraph
            text='　ビジネス的な視点で、ニーズに基づいた研究内容、実現性などを考えます。専門家に協力を仰ぐなど、積極的な活動が求められます。'/> 
        
        <Button
            label='具体的な活動内容はこちら（iGEM TSUKUBAについて）'
            textColor='#D20000'
            link='http://localhost:3000/about/about_iGEM_TSUKUBA' />
        
        <Paragraph
            text='　他にも、評価基準には含まれませんが、研究活動や大会出場に必要な資金調達、宣伝活動なども独自に行います。'/>
        <Paragraph
            text='　このように、様々な活動がこの大会では求められ、生物学以外の分野に長けた人材にも活躍の場があります。研究業界などで将来的に重要となるこのような総合的活動を学生のうちから経験できるのはこの大会の魅力の一つでしょう。'/> 
        
        <Footer/>

        </div>
    );
}

export default AboutIGEM;
