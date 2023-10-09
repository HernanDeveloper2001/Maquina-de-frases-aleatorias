export const Author = ({messagesRandom,colorRandom}) => {
    return (
      <cite 
        style={{
          fontFamily:"monospace", 
          fontSize:"1rem",
          color:colorRandom}} 
        className="fs-5"> 
          {`- ${messagesRandom}`} 
      </cite>
    )
  };
  