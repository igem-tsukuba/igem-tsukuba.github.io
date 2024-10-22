import React from 'react';
  
type TitleProps = {
    text: string;  
};

const Title: React.FC<TitleProps>  = ({
    text
}) => {
  return (
      <h1
        style={{
          fontFamily: 'Noto Sans JP',
          fontWeight: '600',
          fontSize: '42pt',
          color: 'black',
          backgroundColor: 'white',
          paddingTop: '10pt',
          paddingBottom: '10pt',
          paddingLeft: '20pt',
          paddingRight: '20pt',
          marginTop: '10pt',
          marginLeft: '10%',
          textAlign: 'left',
        }}
      >
        {text}
      </h1>
  );
};

export default Title;