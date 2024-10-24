import React from 'react';

type ParagraphProps = {
  text: string | string[];
  isBulletList?: boolean;
};

const Paragraph: React.FC<ParagraphProps> = ({ text, isBulletList = false }) => {
  const renderText = (text: string | string[]) => {
    if (Array.isArray(text)) {
      return text.join(' ');
    } else {
      return text.split('\n').map((line, index) => (
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
        fontSize: '14pt',
        color: 'black',
        backgroundColor: 'white',
        paddingTop: '10pt',
        paddingBottom: '10pt',
        paddingLeft: '20pt',
        paddingRight: '20pt',
        marginTop: '10pt',
        marginLeft: '10%',
        marginRight: '10%',
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