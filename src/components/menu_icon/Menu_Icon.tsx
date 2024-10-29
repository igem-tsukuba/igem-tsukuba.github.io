import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScreenSizes } from '../WindowSizeUtils';

const MenuIcon: React.FC = () => {
    const { isMobileScreen, isSmallScreen } = useScreenSizes();
    const [isOpen, setIsOpen] = useState(false); // メニューの開閉状態を管理

    // ハンバーガーアイコンがクリックされたときにメニューの表示をトグル
    const toggleMenu = () => {
        setIsOpen(prev => !prev); // メニューの状態を反転
    };

    return (
        <div style={{ position: 'relative' }}> {/* メニューの位置を調整するために relative を使用 */}
            {/* ハンバーガーアイコン */}
            <div
                onClick={toggleMenu} // クリック時にメニューをトグルするイベント
                style={{
                    width: isMobileScreen ? '45px' : '60px',
                    height: isMobileScreen ? '45px' : '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer', // マウスカーソルが指マークになるように設定
                    backgroundColor: '#691C70',
                    padding: isMobileScreen ? '8px' : '10px',
                    boxSizing: 'border-box',
                    textAlign: 'center',
                    color: 'white',
                }}
            >
                {/* 1本目のライン */}
                <div
                    style={{
                        width: '100%',
                        height: '5px',
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        marginTop:'0px',
                        marginBottom: '4px',
                    }}
                ></div>
                {/* 2本目のライン */}
                <div
                    style={{
                        width: '100%',
                        height: '5px',
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        marginBottom: '4px',
                    }}
                ></div>
                {/* 3本目のライン */}
                <div
                    style={{
                        width: '100%',
                        height: '5px',
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        marginBottom: '3px',
                    }}
                ></div>
                {/* メニューのラベル */}
                <div
                    style={{
                        marginTop: '0px',
                        marginBottom: '0px',
                        fontSize: isMobileScreen ? '8px' : '12px',
                        fontFamily: 'Noto Sans JP,sans-serif',
                    }}
                >
                    MENU
                </div>
            </div>

            {/* メニューの表示（トグル式） */}
            {isOpen && ( // isOpenがtrueのときのみメニューを表示
                <div
                    style={{
                        position: 'absolute',
                        top: isMobileScreen ? '45px' : '60px', // ハンバーガーアイコンの下に表示
                        right: '0', // 右寄せ
                        backgroundColor: '#691C70',
                        color: '#FFFFFF',
                        width: isMobileScreen ? '100px' : isSmallScreen ? '170px' : '250px',
                        border: '2px solid #691C70',
                        padding: '10px',
                        marginTop: "0",
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        zIndex: 1000, // 他の要素の上に表示するためのz-index
                    }}
                >
                    <ul style={{ 
                            listStyle: 'none', 
                            padding: '0', 
                            margin: '0', 
                            textAlign: 'left', 
                            fontSize: isMobileScreen ? '8pt' : isSmallScreen ? '10pt' : '12pt',
                            fontFamily: 'Noto Sans JP',
                            cursor: 'pointer',
                        }}
                    >
                        <li style={{ padding: isMobileScreen ? '6px 0' : '10px 0', fontWeight: '600' }}>
                            <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Home</Link>
                        </li>
                        <li style={{ padding: isMobileScreen ? '6px 0' : '10px 0', fontWeight: '600' }}>私たちについて</li>
                        <li style={{ padding: isMobileScreen ? '6px 0' : '10px 0', paddingLeft: isMobileScreen ? '10px' : '25px' }}>
                            <Link to="/about/about_symbio" style={{ color: '#FFFFFF', textDecoration: 'none' }}>合成生物学とは</Link>
                        </li>
                        <li style={{ padding: isMobileScreen ? '6px 0' : '10px 0', paddingLeft: isMobileScreen ? '10px' : '25px' }}>
                            <Link to="/about/about_iGEM" style={{ color: '#FFFFFF', textDecoration: 'none' }}>iGEMとは</Link>
                        </li>
                        <li style={{ padding: isMobileScreen ? '6px 0' : '10px 0', paddingLeft: isMobileScreen ? '10px' : '25px' }}>
                            <Link to="/about/about_iGEM_TSUKUBA" style={{ color: '#FFFFFF', textDecoration: 'none' }}>iGEM TSUKUBAとは</Link>
                        </li>
                        <li style={{ padding: isMobileScreen ? '6px 0' : '10px 0', paddingLeft: isMobileScreen ? '10px' : '25px' }}>
                            <Link to="/about/project" style={{ color: '#FFFFFF', textDecoration: 'none' }}>研究内容</Link>
                        </li>
                        <li style={{ padding: isMobileScreen ? '6px 0' : '10px 0', paddingLeft: isMobileScreen ? '10px' : '25px' }}>
                            <Link to="/about/members" style={{ color: '#FFFFFF', textDecoration: 'none' }}>メンバー</Link>
                        </li>
                        <li style={{ padding: isMobileScreen ? '6px 0' : '10px 0', paddingLeft: isMobileScreen ? '10px' : '25px' }}>
                            <Link to="/about/log" style={{ color: '#FFFFFF', textDecoration: 'none' }}>活動記録</Link>
                        </li>
                        <li style={{ padding: isMobileScreen ? '6px 0' : '10px 0', fontWeight: '600' }}>
                            <Link to="/news" style={{ color: '#FFFFFF', textDecoration: 'none' }}>ニュース</Link>
                        </li>
                        <li style={{ padding: isMobileScreen ? '6px 0' : '10px 0', fontWeight: '600' }}>
                            <Link to="/recruitment" style={{ color: '#FFFFFF', textDecoration: 'none' }}>メンバー募集</Link>
                        </li>
                        <li style={{ padding: isMobileScreen ? '6px 0' : '10px 0', fontWeight: '600' }}>
                        <Link to="/sponsorship" style={{ color: '#FFFFFF', textDecoration: 'none' }}>ご協賛のお願い</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MenuIcon;
