import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuIcon: React.FC = () => {
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
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer', // マウスカーソルが指マークになるように設定
                    backgroundColor: '#691C70',
                    padding: '10px',
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
                        fontSize: '12px',
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
                        top: '70px', // ハンバーガーアイコンの下に表示
                        right: '0', // 右寄せ
                        backgroundColor: '#691C70',
                        color: '#FFFFFF',
                        width: '250px',
                        border: '2px solid #691C70',
                        padding: '10px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        zIndex: 1000, // 他の要素の上に表示するためのz-index
                    }}
                >
                    <ul style={{ 
                            listStyle: 'none', 
                            padding: '0', 
                            margin: '0', 
                            textAlign: 'left', 
                            fontSize: '18pt', 
                            fontFamily: 'Noto Sans JP',
                            cursor: 'pointer',
                        }}
                    >
                        <li style={{ padding: '10px 0', fontWeight: '600' }}>Home</li>
                        <li style={{ padding: '10px 0', fontWeight: '600' }}>私たちについて</li>
                        <li style={{ padding: '10px 0', paddingLeft: '25px' }}>合成生物学とは </li>
                        <li style={{ padding: '10px 0', paddingLeft: '25px' }}>iGEMとは</li>
                        <li style={{ padding: '10px 0', paddingLeft: '25px' }}>iGEM TSUKUBAとは</li>
                        <li style={{ padding: '10px 0', paddingLeft: '25px' }}>研究内容</li>
                        <li style={{ padding: '10px 0', paddingLeft: '25px' }}>メンバー</li>
                        <li style={{ padding: '10px 0', paddingLeft: '25px' }}>活動記録</li>
                        <li style={{ padding: '10px 0', fontWeight: '600' }}>ニュース</li>
                        <li style={{ padding: '10px 0', fontWeight: '600' }}>メンバー募集</li>
                        <li style={{ padding: '10px 0', fontWeight: '600' }}>ご協賛のお願い</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MenuIcon;
