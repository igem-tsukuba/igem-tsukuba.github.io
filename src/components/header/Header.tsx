import React from "react";
import HeaderMiniMenu from "../header_mini_menu/HeaderMiniMenu";

type HeaderProps = {
    pageTitle: string;
}

const Header : React.FC<HeaderProps> = ({ pageTitle }) => {
    return(
        <div>
            {/* 中央のタイトルの部分 */}
            <div style = {{height: "100px"}}/>
            <div style={{ display: "flex", justifyContent: "center",}}>
                <img src={`${process.env.PUBLIC_URL}/components/header/iGEM_TSUKUBA_Logo.png`} alt="iGEM TSUKUBAのロゴ" style={{width: '70px', height: '70px', objectFit: 'cover', padding: "15px"}} />
                <h1 style={{fontFamily: "Noto Sans JP", fontWeight: "600", fontSize: "40pt", margin: "10px"}}>{pageTitle}</h1>
            </div>
            {/* 下の小メニューの部分 */}
            <div style = {{display: "flex", justifyContent: "space-between"}}>
                <HeaderMiniMenu categoryColor="#D20000" bigTabName_ja="私たちについて" bigTabName_en="About us" bigTabURL="" smallTab={[
                        {
                            smallTabLabels: ['チーム紹介', 'プロジェクト'],
                            smallTabURLs: ['https://example.com/team', 'https://example.com/project'],
                            content: undefined
                        }
                    ]} />
            </div>
        </div>
    );
}

export default Header;