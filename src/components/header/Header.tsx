import React from "react";
import { Link } from "react-router-dom";
import HeaderMiniMenu from "../header_mini_menu/HeaderMiniMenu";

type HeaderProps = {
    pageTitle: string;
}

const Header : React.FC<HeaderProps> = ({ pageTitle }) => {
    return(
        <div>
            <div style={{position: "relative"}}>
                {/* 灰色の線 */}
                <div style={{ 
                    borderBottom: "10px solid #A0A0A0", 
                    position: "absolute", 
                    bottom: "0%", 
                    left: "0", 
                    width: "100%", 
                    zIndex: "1" 
                }} />
                {/* 中央のタイトルの部分 */}
                <div style = {{height: "80px"}}/>
                <div style={{ display: "flex", justifyContent: "center", backgroundColor: "white" }}>
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/components/header/iGEM_TSUKUBA_Logo.png`} alt="iGEM TSUKUBAのロゴ" style={{width: '70px', height: '70px', objectFit: 'cover', padding: "15px"}} />
                    </Link>
                    <h1 style={{fontFamily: "Roboto, Noto Sans JP", fontWeight: "600", fontSize: "40pt", letterSpacing: "0.2em", margin: "10px"}}>{pageTitle}</h1>
                </div>
                {/* 下の小メニューの部分 */}
                <div style = {{display: "flex", justifyContent: "space-between", position: "relative", zIndex: "3", backgroundColor: "white"}}>
                    <div style = {{width: "5%"}}/>
                    <HeaderMiniMenu 
                        categoryColor="#D20000" 
                        bigTabName_ja="私たちについて" 
                        bigTabName_en="About us" 
                        bigTabURL="" 
                        smallTab={[
                            { label: '合成生物学とは？', url: '/about/about_symbio' }, 
                            { label: 'iGEMとは？', url: '/about/about_iGEM' },
                            { label: 'iGEM TSUKUBAとは？', url: '/about/about_iGEM_TSUKUBA' },
                            { label: '研究内容', url: '/about/project' },
                            { label: 'メンバー', url: '/about/members' },
                            { label: '活動記録', url: '/about/log' },
                        ]} 
                    />
                    <HeaderMiniMenu 
                        categoryColor="#F59A23" 
                        bigTabName_ja="ニュース" 
                        bigTabName_en="News" 
                        bigTabURL="/news"
                        smallTab={[]} 
                    />
                    <HeaderMiniMenu 
                        categoryColor="#00A400" 
                        bigTabName_ja="メンバー募集" 
                        bigTabName_en="Recruitment" 
                        bigTabURL="/recruitment"
                        smallTab={[]} 
                    />
                    <HeaderMiniMenu 
                        categoryColor="#007AFF" 
                        bigTabName_ja="ご協賛のお願い" 
                        bigTabName_en="Sponsorship" 
                        bigTabURL="/Sponsorship"
                        smallTab={[]} 
                    />
                    <div style = {{width: "5%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Header;