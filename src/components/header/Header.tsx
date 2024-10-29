import React from "react";
import { Link } from "react-router-dom";
import HeaderMiniMenu from "../header_mini_menu/HeaderMiniMenu";
import { useScreenSizes } from "../WindowSizeUtils";

type HeaderProps = {
    pageTitle: string;
}

const Header : React.FC<HeaderProps> = ({ pageTitle }) => {
    const { isSmallScreen, isMobileScreen } = useScreenSizes();

    return(
        <div>
            <div style={{position: "relative"}}>
                <div style={{position: "absolute", zIndex: "3", backgroundColor: "white", width: "100%"}}>
                    {/* 灰色の線 */}
                    <div style={{ 
                        borderBottom: isSmallScreen ? `5px solid #A0A0A0` : `10px solid #A0A0A0`, 
                        position: "absolute", 
                        bottom: "0%", 
                        left: "0", 
                        width: "100%", 
                        zIndex: 5,
                        backgroundColor: "#FFFFFF",
                        backgroundClip: "border-box",
                    }} />
                    {/* 中央のタイトルの部分 */}
                    <div style = {{height: isMobileScreen ? '60px' : '80px'}}/>
                    <div style={{ display: "flex", justifyContent: "center"}}>
                        <Link to="/">
                            <img 
                                src={`${process.env.PUBLIC_URL}/components/header/iGEM_TSUKUBA_Logo.png`} 
                                alt="iGEM TSUKUBAのロゴ" 
                                style={{width: isMobileScreen ? '35px' : isSmallScreen ? '50px' : '70px', 
                                        height: isMobileScreen ? '35px' : isSmallScreen ? '50px' : '70px', 
                                        objectFit: 'cover', 
                                        padding: "15px"}}
                             />
                        </Link>
                        <h1 style={{fontFamily: "Roboto, Noto Sans JP", 
                                    fontWeight: "600", 
                                    fontSize: isMobileScreen ? '20pt' : isSmallScreen ? '30pt' :'40pt', 
                                    letterSpacing: "0.2em", 
                                    margin: "10px"}}>
                            {pageTitle}
                        </h1>
                    </div>
                    {/* 下の小メニューの部分 */}
                    <div style = {{display: "flex", justifyContent: "space-between", position: "relative", zIndex: 5}}>
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
                            bigTabName_ja="賛同される方へ" 
                            bigTabName_en="For Sponsors" 
                            bigTabURL="" 
                            smallTab={[
                                { label: 'ご協賛のお願い', url: '/Sponsorship' }, 
                                { label: '教育活動先の募集', url: '/education_request' },
                            ]} 
                        />
                        <div style = {{width: "5%"}}/>
                    </div>
                </div>
            </div>
            <div style={{height: isMobileScreen ? '150px' : isSmallScreen ? '230px' : '280px'}}/>
        </div>
    );
}

export default Header;