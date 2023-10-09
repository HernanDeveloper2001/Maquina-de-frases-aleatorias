import { ConnectedCard } from "./components/Card";
import {Provider} from "react-redux"
import { store } from "./store/store";
import {useState} from "react"


export default function App() {

    const [colorRandom, setColorRandom] = useState("#0045fb")

    function handlerColor () {
        const color = Math.floor(Math.random() * 16777215).toString(16);
        const colorHex = '#' + '0'.repeat(6 - color.length) + color
        setColorRandom(colorHex)
    }
    
  return (
    <div style={{backgroundColor:colorRandom}}
    className="d-flex justify-content-center align-items-center vh-100 flex-column ">
      <Provider store={store}>
        <ConnectedCard 
          handlerColor={handlerColor}
          colorRandom={colorRandom} />
        <p style={{color:"#fff"}}>
          By hernán Darío
        </p>
      </Provider>
    </div>
  );
}
