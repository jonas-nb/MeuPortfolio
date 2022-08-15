import React from 'react';
import Illustration from '../../assets/images/work-image.svg';
const Presentation = () => {
    return (
        <div>
            <article>
                <h3>Olá Mundo!</h3>
                <h1>
                    Me Chamo <span>Jonas Batista</span>
                </h1>
                <h3>Eu sou Desenvolvedor Front-End</h3>
                <div>
                    <div>CV</div>
                    <div>Contatos</div>
                </div>
            </article>
            <div>
                <img
                    src={Illustration}
                    alt="Ilustração de uma pessoa trabalhando em um lugar bonito"
                />
            </div>
        </div>
    );
};

export default Presentation;
