import React from 'react';
import Card from './Card';

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
        <div className="mt-10 pt-10 pb-10 bg-[#e9e9e953] rounded-md">
            <h1 className="text-center text-[2.4rem] font-[600] drop-shadow-md">
                Trabalhos
            </h1>

            <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3">
                <Card
                    github="https://github.com/jonas-nb/PokeInit"
                    link="https://fancy-chebakia-587538.netlify.app/"
                    titulo="Pokeinit"
                    sobre="Construído em react o projeto consome uma api do anime pokemon e apresenta um grid"
                    position="bg-center"
                    icon="https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Photo.png"
                    bgicon="bg-yellow-200"
                    bg="https://images5.alphacoders.com/473/thumbbig-473846.jpg"
                    gradiente="bg-gradient-to-t from-yellow-600 via-yellow-500 to-yellow-400"
                />
                <Card
                    github="https://github.com/jonas-nb/AdviceApp"
                    link="https://magnificent-pony-9c051e.netlify.app/"
                    titulo="Advice"
                    sobre="Gera um conselho aleatório fornecido pela api publica Advice"
                    position=""
                    bgicon="bg-green-500"
                    icon="https://images.vexels.com/media/users/3/135725/isolated/preview/deb8e3fae430c9b313fef7e49913c25e-icone-plano-da-bussola.png"
                    bg="https://images.unsplash.com/photo-1598944999410-e93772fc48a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=578&q=80"
                    gradiente="bg-gradient-to-t from-zinc-900 via-zinc-700 to-zinc-600"
                />
                <Card
                    titulo="Formulário"
                    sobre="Formulário de validação para teste"
                    link="https://whimsical-piroshki-fb2a8b.netlify.app/"
                    github="https://github.com/jonas-nb/ComponentForm"
                    gradiente="bg-gradient-to-t from-rose-700 via-red-500 to-red-500"
                    icon="https://w7.pngwing.com/pngs/949/1/png-transparent-check-form-icon.png"
                    bgicon="bg-green-500"
                    bg="https://kinsta.com/pt/wp-content/uploads/sites/3/2020/01/formularios-wordpress-1024x512.png"
                    position="bg-bottom"
                />
                <Card
                    titulo="Avaliação"
                    sobre="Componente de avaliação com escolha de nota"
                    link="https://luminous-cat-c95749.netlify.app/"
                    github="https://github.com/jonas-nb/ComponenteInterativo"
                    gradiente="bg-gradient-to-b from-gray-400 via-gray-600 to-gray-900"
                    icon="https://cdn-icons-png.flaticon.com/512/1983/1983111.png"
                    bgicon="bg-gray-500"
                    bg="https://s24534.pcdn.co/carreira-sucesso/wp-content/uploads/sites/3/2022/02/tipode-de-avaliacao-de-desempenho.jpg"
                    position="bg-center"
                />
                <Card
                    titulo="LandingPage"
                    sobre="Cadastro de email na 'Base Apparel'"
                    link="https://neon-haupia-790ccd.netlify.app/"
                    github="https://github.com/jonas-nb/APPA"
                    gradiente="bg-gradient-to-b from-rose-400 via-rose-600 to-rose-900"
                    icon="https://icon-library.com/images/b-icon/b-icon-14.jpg"
                    bgicon=""
                    bg="https://dondoca.com.br/wp-content/uploads/2021/07/dondoca_com_br-moda-anos-90-pecas-retro-para-montar-looks-modernos-moda-anos-90-inspiracoes.jpg"
                    position="bg-center"
                />
            </div>
        </div>
    );
};

export default Works;
