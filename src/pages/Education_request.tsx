import React from 'react';
import Button from '../components/button/Button';
import Subtitle from '../components/subtitle/Subtitle';
import Paragraph from '../components/paragraph/Paragraph';
import Header from '../components/header/Header';
import UpperHeader from '../components/header/UpperHeader';
import Footer from '../components/footer/Footer';


const EducationRequest: React.FC = () => {
    return (
        <div>
        <UpperHeader/>
        <Header
            pageTitle='ご協賛のお願い'/>

        <Subtitle
            text='Education実施先募集'/>

        <Paragraph
            text='iGEMの活動のひとつに、教育活動（Education）があります。これまでは主に筑波大学内の教育プログラムとのコラボやメンバーの母校のご協力により、中高生を中心として、時には小学生も対象に様々なEducationをしてきました。しかし「合成生物学ひいては生物学について多くの人に正しい知識を広め、巻き込み、その魅力を知ってもらう。」という我々のEducationの目的を達成するには、内容を深めることはもちろんのことさらに幅広い層の人たちを対象にしていく必要があると考えています。'/>
        <Paragraph
            text='そこで、我々のEducationの一環として合成生物学や生物学についての講義や実験の体験などの企画の主催、生物学系のイベントのお手伝い、生物の学習のサポーターをさせていただきたいと思っています。'/>
        <Paragraph
            text='少しでも興味を持っていただけた方は、下記ボタンからの団体メール等でお気軽にお声がけください。今までの実績については、ニュースや活動記録などに詳細を記載しています。ご連絡お待ちしております。'/>

        <Button
            label='お問い合わせはこちら'
            textColor='#007aff'
            backgroundColor='#FFFFFF'
            link='mailto:igemtsukuba24@gmail.com'/>

        <Footer/>

        </div>
    );
}

export default EducationRequest;