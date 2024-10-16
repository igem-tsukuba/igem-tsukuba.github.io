import React from "react";
import Button from "../button/Button";
import MenuIcon from "../menu_icon/Menu_Icon";

const UpperHeader : React.FC = () => {
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
                <div style={{width: "80%",
                    height: "auto",
                    backgroundImage: "linear-gradient(90deg, #FBD0FF, #691C70)"
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
                        margin="0px 20px 0px 0px"/>
                </div>
                <MenuIcon />
            </div>
        </div>
    );
}

export default UpperHeader;