import React from 'react';
import Button from '../components/button/Button'
import Subtitle from '../components/subtitle/Subtitle'
import Paragraph from '../components/paragraph/Paragraph'
import Header from '../components/header/Header'
import UpperHeader from '../components/header/UpperHeader';
import Footer from '../components/footer/Footer';
import Image from '../components/image/Image';


const Sponsorship: React.FC = () => {
    const bulletPoints = [
        '大会に出場する際にかかる登録費や参加費などの大会出場費',
        '研究に使う資材やデータ等の購入に充てる研究費',
        '教育活動(*2)にかかる費用'
    ];

    return (
        <div>
            <UpperHeader/>

            <Header
            pageTitle='ご協賛のお願い'/>

            <Subtitle
            text="ご支援のお願い"/>

            <Paragraph
            text=
            '　iGEM TSUKUBAは合成生物学を様々な分野に応用しながら研究を進め、合成生物学の世界大会であるiGEMに出場して受賞することを掲げて活動しております。しかし、iGEMへの参加には研究費も含めて非常に多くの資金が必要です。具体的には、iGEMへの参加登録費のみで少なくとも$5500 USD、日本円で約80万円もの資金が必要です。これ以外にチームとしての出場費約43万円、チームメンバー1人あたりの出場費が8万円かかる(*1)など、渡航費も含めれば出場だけで約200万円以上がかかります。加えて研究費もあるため、学生が自身で全額用意するのは難しいところがあります。 '
            />

            <Paragraph 
            text='　そこで合成生物学にご興味がある方や、その分野において研究を進め、iGEMに出場する私たちを応援してくださる方を募集しています。2022年始動の歴史が浅いチームではありますが、初出場で獲得したsilver medalを超える結果を目指して日々邁進しております。私たちの活動に賛同し、ご支援いただける方をお待ちしております。 '
            />
            <Button
            label="私たちの活動についてはこちら"
            textColor="#007aff"
            backgroundColor="white"
            link="/about/about_iGEM_TSUKUBA"
            />

            <Subtitle
            text="ご支援の方法について"
            />

            <Paragraph
            text='　今回ご支援の窓口として、クラウドファンディングを立ち上げました。以下のボタンから私たちのプロジェクトページに飛ぶことができます。リターンや、支援金額の枠についてはプロジェクトページで詳細をご確認ください。 '
            />
            <Button
            label="プロジェクトページ"
            textColor="#007aff"
            backgroundColor="white"
            link="https://camp-fire.jp/projects/787804/view?utm_campaign=cp_po_share_c_msg_mypage_projects_show"
            />

           <Image
           src='pages/Sponsership/cloudfinding.webp'
           alt='「AI」✖️「合成生物学」で世界へ'
           caption=' '
           width={500}
           height={375}
           borderRadius={0}
           margin='0'
           />

            
           
            <Paragraph
            text='集まった支援金は以下のような用途に使われます。'
                />

            <Paragraph 
            text = {bulletPoints} isBulletList = {true}
            />

            <Paragraph
            text='　使途についてご不明な点がありましたらお気軽にお問い合わせください。また、定期的にHPやSNS等で活動報告を行う予定ですので、そちらも併せてご確認ください。 

なお、クラウドファンディング以外の形、例えば直接のご寄付や物品協賛を希望してくださる方はお手数ですが団体メール宛にご一報いただければと思います。団体へのメールはページ上部のお問い合わせから送ることができます。
            iGEM TSUKUBAへの温かいご支援をよろしくお願いいたします！ '
            />

            <Paragraph
            text='　*1：2024年8月現在。 

  *2：iGEMでは合成生物学の周辺知識やそれを包括する生物学を一般に広める教育活動が評価対象となっています。 '
            />
            
            <Footer/>
        </div>
        
    )
};


export default Sponsorship;
