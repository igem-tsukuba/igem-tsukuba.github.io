import React from 'react';
  
type ParagraphProps = {

    text: string | string[];
    isBulletList?: boolean;


};  

const Paragraph: React.FC<ParagraphProps>  = ({
    text, isBulletList = false
}) => {
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
        <p>{Array.isArray(text) ? text.join(' ') : text}</p>
      )}
      </p>
  );
};

export default Paragraph;