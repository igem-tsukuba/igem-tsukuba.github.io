import React from 'react';
import { useScreenSizes } from "../WindowSizeUtils";

  
type SubtitleProps = {
    text: string;  
};

const Subtitle: React.FC<SubtitleProps>  = ({
    text
}) => {
  const { isSmallScreen, isMobileScreen } = useScreenSizes();
  return (
      <h1
        style={{
          fontFamily: 'Noto Sans JP',
          fontWeight: '600',
          fontSize: isMobileScreen ? '14pt' : isSmallScreen ? '16pt' : '20pt',
          color: 'black',
          backgroundColor: 'white',
          margin: isMobileScreen ? '10pt 10%' : isSmallScreen ? '11pt 10%' : '14pt 10%', //Paragraph.tsxのfontSizeと同じ高さにする
          textAlign: 'left',
        }}
      >
        {text}
      </h1>
  );
};

export default Subtitle;