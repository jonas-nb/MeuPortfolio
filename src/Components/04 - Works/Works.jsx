import React from 'react';
import CardComponent from './CardComponent';
import FrondMentor from './FrondMentor';

/* 
guia props
bgicon = recebe bg do icon
bg = recebe background do card (link) 
icon = recebe imagem do icon
gradiente = recebe o gradiente do card em tailwind
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
                    github="https://github.com/jonas-nb/PokeInit"
                    link="https://fancy-chebakia-587538.netlify.app/"
                    titulo="Pokeinit"
                    sobre="Construído em react o projeto consome uma api do anime pokemon e apresenta um grid"
                    position="bg-center"
                    icon="https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Photo.png"
                    bgicon="bg-yellow-200"
                    bg="https://images.pexels.com/photos/9280754/pexels-photo-9280754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    gradiente="bg-gradient-to-t from-yellow-600 via-yellow-500 to-yellow-400"
                />
            </div>
            <div>
                <FrondMentor />
            </div>
        </div>
    );
};

export default Works;
