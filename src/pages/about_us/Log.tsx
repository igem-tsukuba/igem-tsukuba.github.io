import React from 'react';
import UpperHeader from '../../components/header/UpperHeader';
import Header from '../../components/header/Header';
import Subtitle from '../../components/subtitle/Subtitle';
import Paragraph from '../../components/paragraph/Paragraph';
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
            
            <Subtitle
                text='東洋大学京北高等学校でのeducation'/>
            <Paragraph
                text='京北高校の生徒さんに対してeducationを行いました。\r\nピペットマンの詳細な使用方法などについて講義させていただきました。'/>

            <Subtitle
                text='埼玉県立越谷北高校でのeducation'/>
            <Paragraph
                text='越谷北高校の生徒さんに対してeducationを行いました。\r\n生徒さんのテーマに対してアドバイス等を行い、研究活動のお手伝いをさせていただきました。'/>
            
            <Subtitle
                text='クラウドファンディング公開'/>
            <Paragraph
                text='クラウドファンディングを公開しました。\r\n皆様のご支援お待ちしております。'/>
                
            <Subtitle
                text='新規Webページ公開'/>
            <Paragraph
                text='新しいWebページを公開しました。\r\n今後ともiGEM TSUKUBAをよろしくお願いいたします。'/>
            
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