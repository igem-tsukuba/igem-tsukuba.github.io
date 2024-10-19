import React from 'react';
import Header from '../../components/header/Header';
import UpperHeader from '../../components/header/UpperHeader';
import Title from '../../components/title/Title';
import Subtitle from '../../components/subtitle/Subtitle';
import Paragraph from '../../components/paragraph/Paragraph';
import Footer from '../../components/footer/Footer';



const AboutSymBio: React.FC = () => {
    return (
        <div>
            
           <Header pageTitle='Synthetic Biology'></Header>
           <UpperHeader></UpperHeader>
            <Title text='合成生物学とは?'></Title>
            <Subtitle text='合成生物学は諸問題を解決します。'></Subtitle>
            <Paragraph text='　合成生物学は、生物 の遺伝子や細胞の構成要素を設計し再構築することで、自然界には存在しない新しい特性を持つ生物やシステムを作り出すことを目的する学問です。 この分野では遺伝子工学や分子生物学の技術を基盤にし、生体の機能を理解しようという解析的なアプローチが取られています。また、合成生物学は医療、エネルギー、環境、農業など、さまざまな分野での応用が期待されています。'></Paragraph>
            <Paragraph text='　具体的な研究例としては、「遺伝子組換え作物」があります。ゴールデンライスもその一例です。ゴールデンライスは遺伝子組換えにより通常のコメよりビタミンAの原料となるβ-カロテンを多く含んでおり、1食で子供の推奨ビタミン摂取量の約60%を摂取することができます。そのため、ビタミンA欠乏症による子供の死亡が問題視されている発展途上国での食糧として大きく期待されています。'></Paragraph>
            <Paragraph text='　医療業界からは、合成生物学を活用した創薬の開発に対する期待が高まっています。これには「遺伝子組換え微生物を用いた医薬品の生産」が例として挙げられます。これまでインスリンはヒトの膵臓から抽出されていました。しかし、合成生物学の技術を用いて遺伝子を組換えた大腸菌などの微生物がインスリンを生産することで、安価で大量のインスリンの供給が可能となりました。'></Paragraph>
            <Paragraph text='　また、環境問題への取り組みとして、合成生物学の技術を利用した「プラスチック分解微生物の開発」も進められています。自然界で分解されにくいプラスチックを分解する酵素を微生物に組込んだり、プラスチックを分解する微生物にさらに多くのプラスチックを分解するための遺伝子操作を行ったりすることで、プラスチック汚染の解決を目指す研究が行われています。他にも、原子力発電所の事故などにより放出された有害物質による土壌汚染の解決策として、植物に有害物質を吸収させる「ファイトレメディエーション」が注目されています。例えば、日本では合成生物学の技術を用いて植物に有害物質の分解酵素を導入することで土壌の浄化を目指す研究が行われています。'></Paragraph>
            <Paragraph text='　このように合成生物学の進展に伴い、生命の基本構造を人工的に設計・操作する能力が高まりつつあります。しかし、それに伴う倫理的、社会的な課題も浮き彫りになっています。例えば、人工的に作られた遺伝子組換え生物が自然界に放出された場合の生態系への影響や、生物の遺伝子を改変することの是非、安全性についての議論が続いています。'></Paragraph>
            <Paragraph text='　合成生物学は、私達の生活に多大な影響を与える可能性を秘めた非常に興味深い分野であり、今後も注目が集まっていくでしょう。'></Paragraph>
            <Footer></Footer>
            </div>
        
    );
}

export default AboutSymBio;