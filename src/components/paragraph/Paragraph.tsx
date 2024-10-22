import React from 'react';
  
type ParagraphProps = {
    text: string;  
};  

const Paragraph: React.FC<ParagraphProps>  = ({
    text
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
        {text}
      </p>
  );
};

export default Paragraph;