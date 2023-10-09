export const Button = ({ prop,handlerMessagesRandom,colorRandom }) => {
    return <button 
      className="btn"
      style={{backgroundColor:colorRandom, color:"#fff"}}
      onClick={handlerMessagesRandom}
      >{prop}</button>;
  };
  