import React from 'react';
import logoWhite from './logo-white.png'
import instagramIcon from './Instagram_Glyph_White.png'
import mailIcon from './icon_mail.png';


const Footer: React.FC = () => {
  return (
    <footer style={{
      color: 'white',
      backgroundColor: '#691C70',
      padding: '36px',
      width: '1440px',
      minHeight: '350px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start'
    }}>
      <div className="iGEM TSUKUBA">
        <p style={{fontSize: '40px', marginBottom: '20px', marginLeft: '30px'}}><strong>iGEM TSUKUBA</strong></p>
      </div>
      <div className="content" style={{display: 'flex', width: '100%'}}>
        <div className="left-side" style={{flex: 1}}>
          <p style={{fontSize: '20px', marginBottom: '15px', marginLeft: '-1240px'}}><strong>私たちについて</strong></p>
          <p style={{fontSize: '20px', marginBottom: '10px', marginLeft: '-1190px'}}>合成生物学とは</p>
          <p style={{fontSize: '20px', marginBottom: '10px', marginLeft: '-1243px'}}>iGEMとは</p>
          <p style={{fontSize: '20px', marginBottom: '10px', marginLeft: '-1154px'}}>iGEM TSUKUBAとは</p>
          <p style={{fontSize: '20px', marginBottom: '10px', marginLeft: '-1250px'}}>研究内容</p>
          <p style={{fontSize: '20px', marginBottom: '10px', marginLeft: '-1250px'}}>メンバー</p>
          <p style={{fontSize: '20px', marginBottom: '10px', marginLeft: '-1250px'}}>活動記録</p>
        </div>
        <div className="right-side">
          <p style={{fontSize: '20px', marginBottom: '70px', marginLeft: '-2200px'}}><strong>ニュース</strong></p>
          <p style={{fontSize: '20px', marginBottom: '75px', marginLeft: '-2160px'}}><strong>メンバー募集</strong></p>
          <p style={{fontSize: '20px', marginBottom: '50px', marginLeft: '-2140px'}}><strong>ご協賛のお願い</strong></p>
        </div>
        <div className="logo-and-social" style={{marginTop: '20px'}}>
            <img src={logoWhite} alt="iGEM TSUKUBA Logo" style={{width: '70px', marginLeft: '-1550px'}} />
            <img src={instagramIcon} alt="Instagram" style={{width: '80px', height: '80px', marginLeft: '40px'}} />
            <img src={mailIcon} alt="Mail" style={{width: '80px', height: '80px', marginLeft: '40px'}} />
          </div> 
        <div>
          <p style={{fontSize: '20px', marginLeft: '-1400px', marginTop: '350px'}}>🄫iGEM TSUKUBA</p>
          </div>        
       </div>
    </footer>
  );
};

export default Footer;