import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer style={{
      color: 'white',
      backgroundColor: '#691C70',
      padding: '20px',
      width: '1440px',
      height: '350px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start'
    }}>
      <div className="iGEM TSUKUBA">
        <p style={{fontSize: '40px', marginTop: "0px", marginBottom: '0px', marginLeft: '30px'}}><strong>iGEM TSUKUBA</strong></p>
      </div>
      <div className="content" style={{display: 'flex'}}>
        <div className="left-side" style={{flex: 1, marginLeft: "50px"}}>
          <p style={{fontSize: '20px', marginBottom: '-10px', marginLeft: '0px'}}><strong>私たちについて</strong></p>
          <p style={{fontSize: '20px', marginBottom: '-10px', marginLeft: '20px'}}>合成生物学とは</p>
          <p style={{fontSize: '20px', marginBottom: '-10px', marginLeft: '20px'}}>iGEMとは</p>
          <p style={{fontSize: '20px', marginBottom: '-10px', marginLeft: '20px'}}>iGEM TSUKUBAとは</p>
          <p style={{fontSize: '20px', marginBottom: '-10px', marginLeft: '20px'}}>研究内容</p>
          <p style={{fontSize: '20px', marginBottom: '-10px', marginLeft: '20px'}}>メンバー</p>
          <p style={{fontSize: '20px', marginBottom: '-10px', marginLeft: '20px'}}>活動記録</p>
        </div>
        <div className="right-side" style={{marginLeft: "30px"}}>
          <p style={{fontSize: '20px', marginBottom: '70px', marginLeft: '0px'}}><strong>ニュース</strong></p>
          <p style={{fontSize: '20px', marginBottom: '75px', marginLeft: '0px'}}><strong>メンバー募集</strong></p>
          <p style={{fontSize: '20px', marginBottom: '50px', marginLeft: '0px'}}><strong>ご協賛のお願い</strong></p>
        </div>
        <div className="logo-and-social" style={{marginTop: '20px'}}>
            <img src={`${process.env.PUBLIC_URL}/components/footer/logo-white.png`} alt="iGEM TSUKUBA Logo" style={{width: '70px', marginLeft: '60px'}} />
            <img src={`${process.env.PUBLIC_URL}/components/footer/Instagram_Glyph_White.png`} alt="Instagram" style={{width: '80px', height: '80px', marginLeft: '40px'}} />
            <img src={`${process.env.PUBLIC_URL}/components/footer/icon_mail.png`} alt="Mail" style={{width: '80px', height: '80px', marginLeft: '40px'}} />
          </div> 
        <div>
          <p style={{fontSize: '20px', marginLeft: '-1400px', marginTop: '350px'}}>🄫iGEM TSUKUBA</p>
          </div>        
       </div>
    </footer>
  );
};

export default Footer;