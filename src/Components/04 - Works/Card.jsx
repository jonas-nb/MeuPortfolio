import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
/* 
guia props
bg = recebe background do card (link) 
bgicon = recebe o color do background icon tailwind
icon = recebe imagem do icon
gradiente = recebe o gradiente do card em tailwind
position = recebe o background position em tailwind
titulo = recebe o titulo do projeto
sobre = recebe uma pequena descrição do projeto
link = recebe o endereço do projeto
github = recebe o endereço do code do projeto
*/

const Card = (props) => {
    return (
        //recebe um background com a imagem do projeto
        <div
            style={{ backgroundImage: `url(${props.bg})` }}
            className={` m-auto mt-10 bg-cover ${props.position} w-72 h-64 rounded-2xl grid shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}
        >
            {/* recebe a logo do projeto */}
            <img
                src={props.icon}
                className={`${props.bgicon} object-cover relative top-[6.5rem] ml-1 h-11 w-11 rounded-md shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_#00000026]`}
            />
            {/* recebe um gradiente e um tipo diferente de radius */}

            <div
                className={`${props.gradiente} h-32 self-end rounded-b-xl flex flex-col justify-center`}
            >
                {/* titulo do projeto */}
                <h1 className="text-[1.8rem] text-center mr-3 font-[600] text-white drop-shadow-lg">
                    {props.titulo}
                </h1>
                {/* pequena descrição */}
                <p className="mt-1 ml-2 text-white text-center leading-[1rem] font-[400] drop-shadow-sm text-[0.7rem]">
                    {props.sobre}
                </p>
                {/* link para o projeto em produção */}
                <div className="w-full relative m-auto flex flex-col items-center justify-between text-[0.8rem] ">
                    <a
                        target={'_blank'}
                        className="text-[1.4rem] text-[#e6e6e6] hover:text-white drop-shadow-md"
                        href={props.github}
                    >
                        <FaGithub />
                    </a>
                    <a
                        className={` hover:underline text-white hover:text-white drop-shadow-md text-[0.9rem]`}
                        href={props.link}
                        target={'_blank'}
                    >
                        Visite o Projeto clicando aqui!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
