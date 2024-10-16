import React from "react";
import Button from "../button/Button";

type HeaderProps = {
    pageTitle: string;
}

const Header : React.FC<HeaderProps> = ({ pageTitle }) => {
    return(
        <div>
            <div style={{ height: "80px", backgroundColor: "#691C70", }}>
                <Button label="お問い合わせ" textColor="white" link="mailto:igemtsukuba24@gmail.com" />
            </div>
            <p>{pageTitle}</p>
        </div>
    );
}

export default Header;