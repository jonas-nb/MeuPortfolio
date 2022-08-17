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
            <img
                src={EnviaIcon}
                alt="ícone de avião de papel simbolizando envio de mensagem"
            />
            <h1>Você esta interessado ?</h1>
            <p>
                Caso tenha se interessado por um dos meus projetos ou apenas
                quer dizer um oi, sinta-se a vontade para entrar em contato
                comigo através dos canais abaixo.
            </p>
            <div>
                <div>
                    Messagem <span>{<AiOutlineMail />}</span>
                </div>
                <div>
                    WhatsApp <span>{<AiOutlineWhatsApp />}</span>
                </div>
                <div>
                    LinkedIn <span>{<AiOutlineLinkedin />}</span>
                </div>
            </div>
        </div>
    );
};

export default Send;
