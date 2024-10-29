import React from 'react';
import { useScreenSizes } from "../WindowSizeUtils";

type TitleProps = {
    text: string;  
};

const Title: React.FC<TitleProps>  = ({
    text
}) => {
  const { isSmallScreen, isMobileScreen } = useScreenSizes();
  return (
      <h1
        style={{
          fontFamily: 'Noto Sans JP',
          fontWeight: '600',
          fontSize: isMobileScreen ? '18pt' : isSmallScreen ? '20pt' : '24pt',
          color: 'black',
          backgroundColor: 'white',
          margin: isMobileScreen ? '14pt 10%' : isSmallScreen ? '16pt 10%' : '20pt 10%', //SubTitle.tsxのfontSizeと同じ高さにする
          textAlign: 'left',
        }}
      >
        {text}
      </h1>
  );
};

export default Title;