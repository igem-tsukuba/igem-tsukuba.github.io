import React from 'react';
import Header from '../../components/header/Header';
import UpperHeader from '../../components/header/UpperHeader';
import Title from '../../components/title/Title';
import Subtitle from '../../components/subtitle/Subtitle';
import Footer from '../../components/footer/Footer';
import SelfIntroduce from '../../components/self_introduce/SelfIntroduce';


const Members: React.FC = () => {
    return (
        <div>
        <Header pageTitle ='メンバー紹介'></Header>
        <UpperHeader></UpperHeader>
        
        <Title text='リーダー'></Title>
        
<SelfIntroduce
        name_ja= '矢田目 翔理'
        name_en= 'Yatame Shori'
        college= '生物学類２年'
        word= 'Grand Prize を獲得できるよう全力で取り組みます！'
        picture='pages\about_us\Members\YatameShori.webp'
        alt= 'Yatame Shori'
        under_bar={true}
        ></SelfIntroduce>

<Subtitle text ='Tech班リーダー'></Subtitle>
        
<SelfIntroduce
        name_ja= '水本 千尋'
        name_en= 'Mizumoto Chihiro'
        college= '生物資源学類２年'
        word= '分生しか勝たん！'
        picture='pages\about_us\Members\MizumotoChihiro.webp'
        alt= 'Mizumoto Chihiro'
        under_bar={true}
        ></SelfIntroduce>

<Subtitle text ='Tech班'></Subtitle>

<SelfIntroduce
        name_ja= '鈴木 晶博'
        name_en= 'Suzuki Masahiro'
        college= '生物学類３年'
        word= 'これはね、クラリネットの赤ちゃん。'
        picture='pages\about_us\Members\SuzukiMasahiro.webp'
        alt= 'Suzuki Masahiro'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '新田 祥一'
        name_en= 'Nitta Shoichi'
        college= '生物学類２年'
        word= '甲殻類ってかわいいんです'
        picture='pages\about_us\Members\NittaShoichi.webp'
        alt= 'Nitta Shoichi'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '草野 ひな美'
        name_en= 'Kusano Hinami'
        college= '生物資源学類２年'
        word= '一生ねてたい'
        picture='pages\about_us\Members\KusanoHinami.webp'
        alt= 'Kusano Hinami'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '榊𠩤 聖瑛'
        name_en= 'Sakakibara Masateru'
        college= '生物学類２年'
        word= 'dry(^ᵕ^)dry'
        picture='pages\about_us\Members\SakakibaraMasateru.webp'
        alt= 'Sakakibara Masateru'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '為水 ひなた'
        name_en= 'Tamesui Hinata'
        college= '生物学類２年'
        word= 'みじんこらぶ'
        picture='pages\about_us\Members\TamesuiHinata.webp'
        alt= 'Tamesui Hinata'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '河野 洋'
        name_en= 'Kawano Nada'
        college= '生物学類２年'
        word= 'クロマルかわいい'
        picture='pages\about_us\Members\KawanoNada.webp'
        alt= 'Kawano Nada'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '佐藤 怜'
        name_en= 'Sato Rei'
        college= '化学類１年'
        word= '生物は初学者ですが、精一杯がんばります！'
        picture='pages\about_us\Members\SatoRei.webp'
        alt= 'Sato Rei'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '前田 有喜子'
        name_en= 'Maeda Yukiko'
        college= '生物学類１年'
        word= 'ミニと付くものが好きです。'
        picture='pages\about_us\Members\MaedaYukiko.webp'
        alt= 'Maeda Yukiko'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '福岡 陸'
        name_en= 'Fukuoka Riku'
        college= '生物学類１年'
        word= 'ニホンカナヘビの顔がイケメン'
        picture='pages\about_us\Members\FukuokaRiku.webp'
        alt= 'Fukuoka Riku'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '富田 朔矢'
        name_en= 'Tomida Sakuya'
        college= '工学システム学類１年'
        word= 'iGEMに入ってよかった'
        picture='pages\about_us\Members\TomidaSakuya.webp'
        alt= 'Tomida Sakuya'
        under_bar={true}
        ></SelfIntroduce>


<Subtitle text ='総合運営班リーダー'></Subtitle>

<SelfIntroduce
        name_ja= '石﨑 巧也'
        name_en= 'Ishizaki Takuya'
        college= '生物学類２年'
        word= '常に睡魔と戦うヒトです。'
        picture='pages\about_us\Members\IshizakiTakuya.webp'
        alt= 'Ishizaki Takuya'
        under_bar={true}
        ></SelfIntroduce>

<Subtitle text ='総合運営班'></Subtitle>

<SelfIntroduce
        name_ja= '石川 風太'
        name_en= 'Ishikawa Fu-ta'
        college= '生物学類３年'
        word= 'Educationしか勝たん'
        picture='pages\about_us\Members\IshikawaFuta.webp'
        alt= 'Ishikawa Fu-ta'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '吉田 若菜'
        name_en= 'Yoshida Wakana'
        college= '生物資源学類３年'
        word= '犬派です。'
        picture='pages\about_us\Members\YoshidaWakana.webp'
        alt= 'Yoshida Wakana'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '國﨑 沙和子'
        name_en= 'Kunisaki Sawako'
        college= '生物学類２年'
        word= 'ワーキングホリデーとワーカホリックって似てませんか？'
        picture='pages\about_us\Members\KunisakiSawako.webp'
        alt= 'Kunisaki Sawako'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '荒島 未琴'
        name_en= 'Arashima Mikoto'
        college= '生物学類２年'
        word= 'がんばります'
        picture='pages\about_us\Members\ArashimaMikoto.webp'
        alt= 'Arashima Mikoto'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '駿藤 佳久'
        name_en= 'Sunto Yoshihisa'
        college= '生物学類２年'
        word= '頑張ります！！'
        picture='pages\about_us\Members\SuntoYoshihisa.webp'
        alt= 'Sunto Yoshihisa'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '岡 遙菜'
        name_en= 'Oka Haruna'
        college= '生物学類１年'
        word= '最近、クジラとイルカがたくさん載ったファイルを買いました。お気に入りです。パンが好きです。'
        picture='pages\about_us\Members\OkaHaruna.webp'
        alt= 'Oka Haruna'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '稲垣 宏人'
        name_en= 'Inagaki Hiroto'
        college= '生物学類１年'
        word= 'モンスターは無印派です'
        picture='pages\about_us\Members\InagakiHiroto.webp'
        alt= 'Inagaki Hiroto'
        under_bar={true}
        ></SelfIntroduce>

<SelfIntroduce
        name_ja= '島津 讃良'
        name_en= 'Shimazu Sarara'
        college= '生物学類１年'
        word= 'がんばります２'
        picture='pages\about_us\Members\ShimazuSarara.webp'
        alt= 'Shimazu Sarara'
        under_bar={true}
        ></SelfIntroduce>

        <Footer></Footer>
     
    </div>
    );
}

export default Members;