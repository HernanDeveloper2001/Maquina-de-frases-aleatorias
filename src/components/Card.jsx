import { Message } from "./componentsCard/Message";
import { Author } from "./componentsCard/Author";
import { Button } from "./componentsCard/Button";
import { FaTwitter,FaGithub } from 'react-icons/fa';
import {connect} from "react-redux"
import ButtonLink from './componentsCard/ButtonLink';
import { useState } from "react";
export const Card = ({messages,handlerColor,colorRandom,handlerMessagesRandom}) => {

    const [messagesRandom, setMessagesRandom] = useState(messages[0])

    function handlerMessagesRandom(){
        let randomIndex = Math.floor(Math.random() * messages.length)
        let mensajeAleatorio = messages[randomIndex]
        setMessagesRandom(mensajeAleatorio)
        handlerColor()
    }
    return (
        <>
            <div
                style={{width:"500px"}} 
                className="container bg-white p-4 rounded d-flex flex-column">
                <div className="px-2 text-center">
                    <Message 
                        colorRandom={colorRandom}
                        messagesRandom={messagesRandom.mensaje}/>
                </div>
                <div className="text-end py-2">
                    <Author 
                        messagesRandom={messagesRandom.autor}
                        colorRandom={colorRandom} />
                </div>

                <div className="row py-4  justify-content-between" >
                    <div className="d-flex w-auto">
                        <div className="px-2">
                            <ButtonLink 
                                icon={<FaTwitter />}
                                colorRandom={colorRandom} />
                        </div>
                        <div className="px-2">
                            <ButtonLink 
                                icon={<FaGithub />}
                                link="https://github.com/HernanDeveloper2001"
                                colorRandom={colorRandom} />
                        </div>
                    </div>
                    <div className="d-flex w-auto justify-content-end">
                        <Button 
                            prop="New quote"
                            handlerMessagesRandom={handlerMessagesRandom}
                            colorRandom={colorRandom} />
                    </div>
                </div>
            </div>
        </>
    );
};
const mapStateToProps = (state) => {
    return { 
        messages: state.letterMessages, 
    }
};



export const ConnectedCard = connect(mapStateToProps)(Card)
