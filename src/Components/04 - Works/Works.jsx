import React from 'react';
import CardComponent from './CardComponent';
import FrondMentor from './FrondMentor';

/* 
guia props
bg = recebe background do card (link) 
position = recebe o background position em tailwind
titulo = recebe o titulo do projeto
sobre = recebe uma pequena descrição do projeto
link = recebe o endereço do projeto
github = recebe o endereço do code do projeto
*/

const Works = () => {
    return (
        <div className="sm:w-11/12 sm:m-auto sm:mt-10 drop-shadow-md flex flex-col items-center  mt-10 pt-10 pb-10 bg-[#e9e9e953] rounded-md ">
            <h1 className="text-center text-[2.4rem] font-[600] drop-shadow-md">
                Trabalhos
            </h1>

            <div className="sm:w-11/12 md:grid lg:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-10">
                <CardComponent
                    github="https://github.com/jonas-nb/tasklist-frontend"
                    link="https://tasklist-frontend-nine.vercel.app/"
                    titulo="Todo List"
                    sobre="Projeto full stack demonstrando um crud, usando react para o frontend e node.js/typescript no backend."
                    position="bg-center"
                    icon="https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Photo.png"
                    bgicon="bg-yellow-200"
                    bg="https://app-cdn.acelitchi.com/prod/app/7/8/2499828684891468071.webp"
                    gradiente="bg-gradient-to-t from-yellow-600 via-yellow-500 to-yellow-400"
                />
                <CardComponent
                    bg="https://santibrasfisioterapia.com/wp-content/uploads/2023/06/Design-sem-nome.jpg"
                    sobre="Placar interativo e gameficado usado para marcar pontos no esporte beach tennis construido com react e typescript."
                    titulo="Beach Tennis Friend's"
                    link="https://btf-delta.vercel.app/"
                    github="https://github.com/jonas-nb/BTF"
                    position="bg-center"
                />

                <CardComponent
                    bg="https://static.preparaenem.com/2022/10/planeta-terra.jpg"
                    sobre="Construido com react, esse projeto faz o consumo de uma api com informações de vários locais no mundo."
                    titulo="Countries"
                    link="https://countries-sage-xi.vercel.app/"
                    github="https://github.com/jonas-nb/Countries"
                    position="bg-center"
                />
                <CardComponent
                    bg="https://fia.com.br/wp-content/uploads/2021/05/tipos-de-pesquisa-de-mercado-quais-sao-principais.jpg"
                    sobre="Projeto para pesquisa eleitoral das eleições do município de Mari-PB, construida com react e firabase, a aplicação visa a facilidade para pesquisa usando dispositivos móveis"
                    titulo="Pesquisa Eleitoral"
                    link="https://pesquisa-gamma.vercel.app/"
                    github="https://github.com/jonas-nb/pesquisa"
                    position="bg-center"
                />
            </div>
            <div>
                <FrondMentor />
            </div>
        </div>
    );
};

export default Works;
