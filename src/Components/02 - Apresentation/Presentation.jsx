import React from 'react';

import { FiDownloadCloud } from 'react-icons/fi';

const Presentation = () => {
    return (
        <div className="w-full h-screen sm:h-[30rem] md:h-screen pt-32 sm:pt-24 md:pt-52 lg:pt-44 text-4xl sm:text-4xl md:text-6xl font-[600] text-center bg-[#212529] flex flex-col">
            <div>
                <span className="block text-white">Olá Mundo,</span>
                <span className="text-emerald-300">
                    me chamo Jonas Batista,
                </span>
                <span className="block text-white ml-3 ">
                    Eu sou um desenvolvedor
                    <span className="block underline decoration-emerald-300 ">
                        full-stack
                    </span>
                </span>
            </div>
            <div className="flex flex-col font-[400] items-center justify-center">
                <a
                    id="DownloadLink"
                    href="https://drive.google.com/uc?export=download&id=1QEqhGJpWFN1sKez4UA_czpx7DDXrziw_"
                    target={'_blank'}
                    download="CV"
                    class="w-32 h-12 m-auto mt-10  text-xl justify-around flex  items-center cursor-pointer rounded-md bg-emerald-500 text-center font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#212529] hover:outline hover:outline-emerald-300"
                >
                    CV <FiDownloadCloud className="" />
                </a>
                <label className="text-white text-sm" htmlFor="DownloadLink">
                    clique no link acima para download e meu currículo
                </label>
            </div>
        </div>
    );
};

export default Presentation;
