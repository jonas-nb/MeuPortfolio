import React from 'react';
import EnviaIcon from '../../assets/images/icon-enviar.png';
import {
    AiOutlineWhatsApp,
    AiOutlineLinkedin,
    AiOutlineMail,
} from 'react-icons/ai';
const Send = () => {
    return (
        <div>
            <h1 className="m-auto text-center font-[600] text-[2.4rem] drop-shadow-md w-10/12">
                Você esta interessado ?
            </h1>
            <p className=" m-auto mt-3 w-10/12 text-center">
                Caso tenha se interessado por um dos meus projetos ou apenas
                quer dizer um oi, sinta-se a vontade para entrar em contato
                comigo através dos canais abaixo.
            </p>
            <img
                className="m-auto pt-5 w-11"
                src={EnviaIcon}
                alt="ícone de avião de papel simbolizando envio de mensagem"
            />
            <div className="mt-5 flex flex-col sm:flex-row justify-around items-center text-lg font-[600] sm:text-2xl">
                <div className="flex flex-col">
                    <h1 className=" flex items-center text-xl sm:text-xl">
                        WhatsApp/Telefone {<AiOutlineWhatsApp />}
                    </h1>
                    <p>+55 (83) 9 9664-6844</p>
                </div>

                <div className="mt-5 sm:mt-0 ">
                    <h1 className="flex items-center text-xl sm:text-xl">
                        Email {<AiOutlineMail />}
                    </h1>
                    <p>jonas.nb4@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Send;
