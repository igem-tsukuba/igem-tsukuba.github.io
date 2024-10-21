import React from 'react';
import UpperHeader from '../../components/header/UpperHeader';
import Header from '../../components/header/Header';
import Image from '../../components/image/Image';
import Subtitle from '../../components/subtitle/Subtitle';
import Paragraph from '../../components/paragraph/Paragraph';
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';

const AboutIGEMTSUKUBA: React.FC = () => {
    return (
        <div>
        <UpperHeader/>

        <Header
            pageTitle='iGEM TSUKUBAについて'/>

        <Paragraph
            text='　iGEM TSUKUBAは筑波大生によって構成される、iGEMへの出場を目標とする一般学生団体です。2025年度の大会への出場を目指し、各班週1回のミーティングを開いて活動を行っています。研究活動を進めるにあたって、光合成代謝制御学研究室の鈴木石根先生にご協力いただいています。'/>
        <Button
            label='光合成代謝制御学研究室についてはこちら'
            textColor='#D20000'
            backgroundColor='#FFFFFF'
            link='https://plmet.biol.tsukuba.ac.jp/index.html'
            margin='40px'/>

        <Subtitle
           text='設立の経緯' />
        <Paragraph
            text='　iGEM TSUKUBAはiGEMの大会Jamboreeへの出場を目標に2022年に設立された団体です。筑波大学生物学類の学生によって設立されたiGEM TSUKUBAは1年後、2023年度大会に出場し、海洋生物の付着阻害という研究テーマで発表を行いました。その結果、初出場にしてSilver Medalの獲得が叶いました。'/>
        <Button
            label='iGEMについてはこちら'
            textColor='#D20000'
            backgroundColor='#FFFFFF'
            link='/about/about_iGEM'
            margin='40px'/>
        
        <Subtitle
            text='メンバー概要'/>
        <Paragraph
            text='　現在iGEM TSUKUBAは生物学類以外にも生物資源学類、化学類、工学システム学類など様々な分野を専攻する学生で構成されています。これによって、多方面からの意見を取り入れ活動しています。合成生物学という分野の特性上、生物学類の人数は多いですが、着実に活動の幅を広げています。'/>
        <Button
            label='メンバー紹介はこちら'
            textColor='#D20000'
            backgroundColor='#FFFFFF'
            link='/about/members'
            margin='40px'/>
        <Button
            label='2023年度の研究テーマはこちら'
            textColor='#D20000'
            backgroundColor='#FFFFFF'
            link='/about/project'
            margin='40px'/>

        <Subtitle
            text='組織体制'/>
        <Paragraph
            text='　iGEM TSUKUBAは図のようにTech班と総合運営班の二つの班を構え、1名のリーダー、2名の副リーダーがそれらをまとめる体制で動いています。またリーダー、副リーダー、会計を役員として役員会を構成し、チームの方向性について話し合う機会を設けています。またその結果は全体MTでの周知や総会での承認をもらうことによって、メンバー全員が同じ方向に進めるように邁進しています。'/>
        <Image
            src=''
            alt=''
            caption=''/>
        <Paragraph
            text='　Tech班は主に、遺伝子組み換えなどの実際の実験（Wet）や数理的なモデリング(Dry)などを担当しています。今年度のテーマではAIの学習やその結果解析、Education活動の実験パートの監修を担当しています。また、本Webページの開発も先導しています。いわばiGEM TSUKUBAの技術者たちの集まりです。'/>
        <Paragraph
            text='　総合運営班は企業へのインタビューや市場調査、予算管理や渉外活動などを担当しています。今年度は特にEducation活動に力を入れており、その企画考案や取りまとめを行なっています。また、大学内のイベントや資金確保のための取り組みを先導したり、そのための申請書の作成などをしたります。総合運営班はいわば事務担当です。'/>
        <Paragraph
            text='　現在は各班で週に1回班ミーティングを開き、各々のタスクの進捗共有やプロジェクトに関する話し合いを行なっています。また、必要に応じて、班ミーティング以外の時間で実験や勉強会、Web開発を行なったり、学外でのEducation活動を行ったりしています。不定期で全体ミーティングや総会を開くことにより、普段別々に活動している班のメンバーが顔を合わせiGEM TSUKUBA全体の活動について話し合っています。また、班横断的なプロジェクトも積極的に進めています。'/>
        
        <Button
            label='2025年度の研究テーマはこちら'
            textColor='#D20000'
            backgroundColor='#FFFFFF'
            link='/about/project'
            margin='40px'/>

        <Footer/>

        </div>
    );
}

export default AboutIGEMTSUKUBA;