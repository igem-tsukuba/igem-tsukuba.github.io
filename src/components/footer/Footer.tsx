import React from 'react';
import { Link } from 'react-router-dom';
import { useScreenSizes } from '../WindowSizeUtils';


const Footer: React.FC = () => {
  const { isMobileScreen, isSmallScreen } = useScreenSizes();
  return (
    <div>
      <div style={{height: '100px'}}></div>
        <footer style={{
          color: 'white',
          backgroundColor: '#691C70',
          padding: '20px',
          width: '100%',
          height: isMobileScreen ? 'auto' : '350px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start'
        }}>
          <div className="iGEM TSUKUBA">
            <p style={{
              fontFamily: "Roboto", 
              fontWeight: "600", 
              fontSize: isMobileScreen ? '16pt' : isSmallScreen ? '24pt' : '30pt', 
              marginTop: "0px", 
              marginBottom: '0px', 
              marginLeft: '30px', 
              }}>
              <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>iGEM TSUKUBA</Link>
            </p>
          </div>
          <div className="content" 
            style={{
              display: isMobileScreen ? 'block' : 'flex', 
              fontFamily: "Noto Sans JP", 
              fontSize: isMobileScreen ? '10pt' : isSmallScreen ? '12pt' : '14pt', 
              padding: 0}}>
            <div className="left-side" style={{marginLeft: isMobileScreen ? '30px' : '50px'}}>
              <p style={{margin: '20px 0 0 0'}}><strong>私たちについて</strong></p>
              <p style={{margin: '5px 0 5px 20px'}}>
                <Link to="/about/about_symbio" style={{ color: '#FFFFFF', textDecoration: 'none' }}>合成生物学とは</Link>
              </p>
              <p style={{margin: '5px 0 5px 20px'}}>
                <Link to="/about/about_iGEM" style={{ color: '#FFFFFF', textDecoration: 'none' }}>iGEMとは</Link>
              </p>
              <p style={{margin: '5px 0 5px 20px'}}>
                <Link to="/about/about_iGEM_TSUKUBA" style={{ color: '#FFFFFF', textDecoration: 'none' }}>iGEM TSUKUBAとは</Link>
              </p>
              <p style={{margin: '5px 0 5px 20px'}}>
                <Link to="/about/project" style={{ color: '#FFFFFF', textDecoration: 'none' }}>研究内容</Link>
              </p>
              <p style={{margin: '5px 0 5px 20px'}}>
                <Link to="/about/members" style={{ color: '#FFFFFF', textDecoration: 'none' }}>メンバー</Link>
              </p>
              <p style={{margin: '5px 0 5px 20px'}}>
                <Link to="/about/log" style={{ color: '#FFFFFF', textDecoration: 'none' }}>活動記録</Link>
              </p>
            </div>
            <div className="right-side" style={{marginLeft: "30px"}}>
              <p style={{margin: '20px 0 0 0'}}><strong>
                <Link to="/news" style={{ color: '#FFFFFF', textDecoration: 'none' }}>ニュース</Link>
              </strong></p>
              <p style={{margin: '20px 0 0 0'}}><strong>
                <Link to="/recruitment" style={{ color: '#FFFFFF', textDecoration: 'none' }}>メンバー募集</Link>
              </strong></p>
              <p style={{margin: '20px 0 0 0'}}><strong>
                <Link to="/sponsorship" style={{ color: '#FFFFFF', textDecoration: 'none' }}>ご協賛のお願い</Link>
              </strong></p>
            </div>
            <div className="logo-and-social" style={{marginTop: '20px', alignItems: "center"}}>
              <a href="https://x.com/Igem_Tsukuba" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/components/footer/logo-white.png`} alt="iGEM TSUKUBA Logo" style={{width: isMobileScreen ? '30px' : isSmallScreen ? '50px' : '70px', marginLeft: '60px'}} />
              </a>
              <a href="https://www.instagram.com/igem_tsukuba/" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/components/footer/Instagram_Glyph_White.png`} alt="Instagram" style={{width: isMobileScreen ? '32px' : isSmallScreen ? '55px' : '70px', height: isMobileScreen ? '32px' : isSmallScreen ? '55px' : '70px', marginLeft: '40px'}} />
              </a>
              <a href="mailto:igemtsukuba24@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/components/footer/icon_mail.png`} alt="Mail" style={{width: isMobileScreen ? '35px' : isSmallScreen ? '60px' : '70px', height: isMobileScreen ? '35px' : isSmallScreen ? '60px' : '70px', marginLeft: '40px'}} />
              </a>
            </div>       
          </div>
        </footer>
    </div>
  );
};

export default Footer;