import React from 'react';
import Illustration from '../../assets/images/ilustra.svg';
import { FiDownloadCloud } from 'react-icons/fi';
import './animate.css';
import { Tooltip } from '@mui/material';

const Presentation = () => {
    return (
        <div className="w-full bg-[#212529] pt-28 h-[35rem] rounded-b-lg drop-shadow-2xl z-40">
            <article className=" text-center text-[#E9ECEF]">
                <h3 className="wobble-hor-bottom">Olá Mundo 🌐!</h3>
                <h1 className="text-focus-in mt-5 flex flex-col text-2xl">
                    Me Chamo
                    <span className="text-[#fff] text-4xl tracking-[-.08rem]">
                        Jonas Batista
                    </span>
                </h1>
                <h3 className="text-focus-in text-lg mt-3">
                    Eu sou Desenvolvedor Front-End
                </h3>
                <div className="m-auto mt-5 flex justify-center  uppercase">
                    <Tooltip title="Clique para fazer o download do meu currículo">
                        <div className="text-focus-in bg-white hover:bg-[#b3ffd9] focus:bg-[#9dffce] transition-all ease-linear duration-700 text-black h-10 w-32 rounded-sm shadow-md shadow-[#0000005c] ">
                            <a
                                className="w-full h-full flex items-center justify-center font-[700] text-black hover:text-[#424242] transition-all ease-linear duration-700"
                                href="https://drive.google.com/uc?export=download&id=14lH2gD0WxbWwZM7p2xSz74B-Wi855xkv"
                                target={'_blank'}
                                download="CV"
                            >
                                CV <FiDownloadCloud className="h-24 ml-3" />
                            </a>
                        </div>
                    </Tooltip>
                </div>
            </article>
            <div className="bounce-in-top m-auto mt-0 flex justify-center items-center relative top-10">
                <img
                    className="w-80 drop-shadow-md"
                    src={Illustration}
                    alt="Ilustração de uma pessoa trabalhando em um lugar bonito"
                />
            </div>
        </div>
    );
};

export default Presentation;
