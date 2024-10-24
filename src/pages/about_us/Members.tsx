import React from 'react';
import Header from '../../components/header/Header';
import UpperHeader from '../../components/header/UpperHeader';
import Title from '../../components/title/Title';
import Subtitle from '../../components/subtitle/Subtitle';
import Paragraph from '../../components/paragraph/Paragraph';
import Footer from '../../components/footer/Footer';
import Image from '../../components/image/Image';
import SelfIntroduce from '../../components/self_introduce/SelfIntroduce';


const Members: React.FC = () => {
    return (
        <div>
        <Header pageTitle ='Members'></Header>
        <UpperHeader></UpperHeader>
        <Title text='メンバー紹介'></Title>
        <Subtitle text='リーダー'></Subtitle>
<SelfIntroduce
        name_ja= '矢田目翔理'
        name_en= 'Yatame Shori'
        college= '生物学類２年'
        word= 'Grand Prize を獲得できるよう全力で取り組みます！'
        picture=''
        alt= 'Yatame Shori'
        under_bar={true}
        ></SelfIntroduce>

<Subtitle text='Tech班'></Subtitle>

<SelfIntroduce
        name_ja= '鈴木晶博'
        name_en= 'Suzuki Masahiro'
        college= '生物学類３年'
        word= '分生しか勝たん！'
        picture=''
        alt= 'Mizumoto Chihiro'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '水本 千尋'
        name_en= 'Mizumoto Chihiro'
        college= '生物資源学類２年'
        word= '分生しか勝たん！'
        picture=''
        alt= 'Mizumoto Chihiro'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '新田 祥一'
        name_en= 'Nitta Shoichi'
        college= '生物学類２年'
        word= '甲殻類ってかわいいんです'
        picture=''
        alt= 'Nitta Shoichi'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '草野 ひな美'
        name_en= 'Kusano Hinami'
        college= '生物資源学類２年'
        word= '一生ねてたい'
        picture=''
        alt= 'Kusano Hinami'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '榊𠩤 聖瑛'
        name_en= 'Sakakibara Masateru'
        college= '生物学類２年'
        word= 'dry(^ᵕ^)dry'
        picture=''
        alt= 'Sakakibara Masateru'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '為水 ひなた'
        name_en= 'Tamesui Hinata'
        college= '生物学類２年'
        word= 'みじんこらぶ'
        picture=''
        alt= 'Tamesui Hinata'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '河野洋'
        name_en= 'Kawano Nada'
        college= '生物学類２年'
        word= 'クロマルかわいい'
        picture=''
        alt= 'Kawano Nada'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '佐藤 怜'
        name_en= 'Sato Rei'
        college= '化学類１年'
        word= '生物は初学者ですが、精一杯がんばります！'
        picture=''
        alt= 'Sato Rei'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '前田 有喜子'
        name_en= 'Maeda Yukiko'
        college= '生物学類１年'
        word= 'ミニと付くものが好きです。'
        picture=''
        alt= 'Maeda Yukiko'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '福岡 陸'
        name_en= 'Fukuoka Riku'
        college= '生物学類１年'
        word= 'ニホンカナヘビの顔がイケメン'
        picture=''
        alt= 'Fukuoka Riku'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '富田 朔矢'
        name_en= 'Tomida Sakuya'
        college= '工学システム学類１年'
        word= 'iGEMに入ってよかった'
        picture=''
        alt= 'Tomida Sakuya'
        under_bar={true}
        ></SelfIntroduce>



        <Subtitle text='総合運営班'></Subtitle>

<SelfIntroduce
        name_ja= 'string'
        name_en= 'string'
        college= 'string'
        word= 'string'
        picture=''
        alt= 'string'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '國﨑沙和子'
        name_en= 'Kunisaki Sawako'
        college= '生物学類２年'
        word= 'ワーキングホリデーとワーカホリックって似てませんか？'
        picture=''
        alt= 'Kunisaki Sawako'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= 'string'
        name_en= 'string'
        college= 'string'
        word= 'string'
        picture=''
        alt= 'string'
        under_bar={true}
        ></SelfIntroduce>

        <Footer></Footer>
     
    </div>
    );
}

export default Members;