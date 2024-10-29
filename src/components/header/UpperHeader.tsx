import React from "react";
import Button from "../button/Button";
import MenuIcon from "../menu_icon/Menu_Icon";
import { useScreenSizes } from "../WindowSizeUtils";

const UpperHeader : React.FC = () => {
    const { isSmallScreen, isMobileScreen } = useScreenSizes();
    return(
        <div>
            {/* 上の紫の部分 */}
            <div style={{
                backgroundColor: "#691C70",
                padding: "0px",
                display: "flex",
                justifyContent: "space-between",
                position: "fixed", 
                top: 0, 
                width: "100%", 
                zIndex: 1000 
            }}>
                <div style={{
                    width: isMobileScreen ? "calc(100% - 160px)" : isSmallScreen ? "calc(100% - 300px)" : "calc(100% - 300px)",
                    height: "auto",
                    backgroundImage: "linear-gradient(90deg, #FBD0FF, #691C70)",
                }} />
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Button
                        label="お問い合わせ"
                        textColor="white"
                        backgroundColor="#691C70"
                        link="mailto:igemtsukuba24@gmail.com"
                        margin={isMobileScreen ? "0px 10px" : "0px 20px"}
                    />
                </div>
                <MenuIcon />
            </div>
        </div>
    );
}

export default UpperHeader;