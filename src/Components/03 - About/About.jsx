import React from 'react';
import SkillComponent from './SkillComponent';
import WebIcon from '../../assets/images/icon-web.png';
import AlunoIcon from '../../assets/images/icon-aluno.png';
import NetworkIcon from '../../assets/images/icon-network.png';
import HobbieIcon from '../../assets/images/icon-hobbie.png';
/* 
props
icone = adciona o icone
alt = recebe a descrição do icone
habilidade = adciona a habilidade
descrição = adciona um parágrafo para descrever habilidade */

const About = () => {
    return (
        <div>
            <h1>O que faço!</h1>
            <div>
                <div>
                    <SkillComponent
                        habilidade="Desenvolvimento Web"
                        icone={WebIcon}
                        alt="icone mostrando uma tela ilustrativa"
                        descrição="Eu desenvolvo apps com React.js, adoro construir layouts responsivos e interfaces interativas, semânticas e acessíveis."
                    />
                </div>
                <div>
                    <SkillComponent
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
                        descrição="Busco me conectar a pessoas e novas ideias acreditando que esse mundo é uma grande rede, uma das coisas que mais gosto no mundo do desenvolvimento é ajudar pessoas que estão ingressando na area atualmente."
                    />
                </div>
                <div>
                    <SkillComponent
                        habilidade="Outras Atividades"
                        icone={HobbieIcon}
                        alt="icone mostrando montagem de um quebra cabeça"
                        descrição="Além de codar e desenvolver, meus principais hobbies são basketball, instrumentos musicais, leitura e aperfeiçoamento pessoal o que sempre está me ajudando a evoluir softskills."
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
