import { BiSolidQuoteLeft } from 'react-icons/bi'


export const Message = ({messagesRandom,colorRandom}) => {

  return (
      <div style={{color:colorRandom}}>
        <h1
          className='d-flex fs-2 fw-bold'
          style={{
            fontFamily:"monospace", 
            fontSize:"1.75rem"}}>
          <i><BiSolidQuoteLeft /></i>{messagesRandom}
        </h1>
      </div>
  );
};
