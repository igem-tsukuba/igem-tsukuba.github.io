import React from 'react';
import { useScreenSizes } from "../WindowSizeUtils";

type ParagraphProps = {
  text: string | string[];
  isBulletList?: boolean;
};

const Paragraph: React.FC<ParagraphProps> = ({ text, isBulletList = false }) => {
  const { isMobileScreen, isSmallScreen } = useScreenSizes();
  const renderText = (text: string | string[]) => {
    if (Array.isArray(text)) {
      return text.join(' ');
    } else {
      return text.split('\\r\\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    }
  };

  return (
    <p
      style={{
        fontFamily: 'Noto Sans JP',
        fontSize: isMobileScreen ? '10pt' : isSmallScreen ? '11pt' : '14pt',
        color: 'black',
        backgroundColor: 'white',
        margin: isMobileScreen ? '10pt 10%' : isSmallScreen ? '11pt 10%' : '14pt 10%',
        textAlign: 'left',
      }}
    >
      {isBulletList && Array.isArray(text) ? (
        <ul>
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        renderText(text)
      )}
    </p>
  );
};

export default Paragraph;