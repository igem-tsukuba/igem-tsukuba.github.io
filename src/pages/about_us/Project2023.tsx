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
            text='2023年度研究テーマ'/>
        
        <Subtitle
           text='Amino Ship~海洋生物付着阻害剤の生合成~' />

        <Image
            src='pages/about_us/Project/2023title.webp'
            alt='2023年度プロジェクト画像'
            caption=''
            width={400}
            height={300}
            borderRadius={0}
            margin='0px'/>

        <Paragraph
            text='　フジツボは幼生の頃は海中で泳いで生活していますが、成長すると岩などの表面へと移動し、変態して成体となり、固着生活を行うようになります。フジツボは岩の表面だけでなく、船の底にも付着します。フジツボが船底に付着した場合、船の抵抗や質量の増加を引き起こし、移動を妨げます。フジツボ以外にもイガイやムラサキイガイ、ホヤなどさまざまな海洋生物が同様の問題を引き起こしています。'/>
        <Paragraph
            text='　船底に海洋付着生物がつくことによる消費燃料の増加は約40%と非常に大きく、それによる燃料の超過コストは全世界で年間約15兆円と言われています。また、使用する燃料の増加に伴い、二酸化炭素や硫黄酸化物、窒素酸化物などの有害物質の排出量が増加します。フジツボの付着によって深刻な環境問題が引き起こされていると言えるでしょう。漁業用の網や海水を冷却水として用いる発電所でもフジツボの付着による被害が報告されています。'/>
        
        <Image
            src='pages/about_us/Project/2023graph.webp'
            alt='輸出グラフ'
            caption=''
            width={800}
            height={600}
            borderRadius={0}
            margin='0px'/>
        
        <Paragraph
            text='　現在利用されているフジツボの付着を防ぐ防汚剤は、人工的に作った化学物質を海水中に放出するため、環境への悪影響が懸念されています。また、近年の化学物質の利用に関する規制の強化に伴い、使うことのできる防汚剤は限られたものになってきています。'/>
        <Paragraph
            text='　一方、ウミウシや紅藻などに代表される一部の海洋生物は体表へのフジツボの付着を阻害する物質を生産していることが知られています。これらの物質は人工的に作られている付着阻害剤よりもずっと低い濃度でフジツボの付着を阻害します。さらに生物由来のものであるため環境に悪影響を与えません。'/>
        <Paragraph
            text='　私たちiGEM TSUKUBAは合成生物学の手法を用いて、これらの生物が作る付着阻害剤を大腸菌、酵母などに大量生産させることでフジツボが引き起こす環境問題を解決しようと考えています。'/>

        <Button
            label='2024・2025年度の研究テーマはこちら'
            textColor='#D20000'
            backgroundColor='#FFFFFF'
            link='/about/project'/>

        <Footer/>

        </div>
    );
}

export default Log;