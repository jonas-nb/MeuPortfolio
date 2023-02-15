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
                    github="https://github.com/jonas-nb/PokeInit"
                    link="https://fancy-chebakia-587538.netlify.app/"
                    titulo="Pokeinit"
                    sobre="Apresenta um grid com informações de vários personagens da animação pokemon, utilizando as informações da PokéAPI"
                    position="bg-center"
                    icon="https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Photo.png"
                    bgicon="bg-yellow-200"
                    bg="https://images.pexels.com/photos/9280754/pexels-photo-9280754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    gradiente="bg-gradient-to-t from-yellow-600 via-yellow-500 to-yellow-400"
                />
                <CardComponent
                    bg="https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_960_720.jpg"
                    sobre="Web site para apresentar destinos para viagem no espaço"
                    titulo="Space Tourism"
                    link="http://space-tourism-jonas-nb.vercel.app/"
                    github="https://github.com/jonas-nb/space-tourism"
                    position="bg-center"
                />

                <CardComponent
                    bg="https://images.pexels.com/photos/3968211/pexels-photo-3968211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    sobre="Site em construção, startup de passeios na região litorânea de João Pessoa, a aplicação visa no momento
                    agendamentos e apresentação dos produtos."
                    titulo="A Caraunas Turismo"
                    link="https://caraunas.vercel.app/"
                    github="https://github.com/jonas-nb/caraunas"
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
