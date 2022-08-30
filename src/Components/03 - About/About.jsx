import React from 'react';
import SkillComponent from './SkillComponent';
import WebIcon from '../../assets/images/icon-web.png';
import AlunoIcon from '../../assets/images/icon-aluno.png';
import NetworkIcon from '../../assets/images/icon-network.png';
import HobbieIcon from '../../assets/images/icon-hobbie.png';
/* 
props
borda = adciona borda no componente
icone = adciona o icone
alt = recebe a descrição do icone
habilidade = adciona a habilidade
descrição = adciona um parágrafo para descrever habilidade */

const About = () => {
    return (
        <div className="m-auto mt-36 lg:mt-48">
            <h1 className="text-center text-[2.4rem] font-[600] drop-shadow-md">
                O que faço!
            </h1>
            <div className="mt-10 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-content-between">
                <div>
                    <SkillComponent
                        borda="lg:border-b-2"
                        habilidade="Desenvolvimento Web"
                        icone={WebIcon}
                        alt="ícone mostrando uma tela ilustrativa"
                        descrição="Eu desenvolvo apps com React.js, adoro construir layouts responsivos e interfaces interativas, semânticas e acessíveis."
                    />
                </div>
                <div>
                    <SkillComponent
                        borda="lg:border-l-2 lg:border-b-2"
                        habilidade="Estudos"
                        icone={AlunoIcon}
                        alt="icone mostrando um estudante"
                        descrição="Estudante de ciência da computação, Explorar o mundo da tecnologia sempre é uma aventura para mim, estou buscando me aprimorar e trazer novas soluções para problemas."
                    />
                </div>
                <div>
                    <SkillComponent
                        habilidade="Network e Altruísmo"
                        icone={NetworkIcon}
                        alt="icone mostrando aperto de mãos"
                        descrição="Busco me conectar a pessoas e novas ideias acreditando que somos uma grande rede, uma das coisas que mais gosto no mundo do desenvolvimento é ajudar pessoas que estão ingressando na area atualmente."
                    />
                </div>
                <div>
                    <SkillComponent
                        borda="lg:border-l-2"
                        habilidade="Outras Atividades"
                        icone={HobbieIcon}
                        alt="icone mostrando montagem de um quebra cabeça"
                        descrição="Além de codar e desenvolver, meus principais hobbies são basquete, instrumentos musicais, leitura e séries."
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
