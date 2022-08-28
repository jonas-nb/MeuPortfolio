import React from 'react';

/* 
guia props
bg = recebe background do card (link) 
icon = recebe imagem do icon

*/

const Card = (props) => {
    const cor1 = '#000';
    const cor2 = `${props.cor1}`;
    const gradient = {
        background: `#000`,
        background: `linear-gradient(0deg, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)`,
    };

    return (
        //recebe um background com a imagem do projeto
        <div
            style={{
                backgroundImage: `url("${props.bg}")`,
            }}
            className="m-auto mt-5 bg-cover w-72 h-64 rounded-xl grid"
        >
            {/* recebe a logo do projeto */}
            <img
                src={props.icon}
                className="ml-4 relative top-[6.5rem] h-11 w-11 rounded-md"
            />
            {/* recebe um gradiente e um tipo diferente de radius */}
            <div
                className={`bg-[#000]} h-32 bg-gradient-to-t self-end rounded-b-xl`}
            >
                {/* titulo do projeto */}
                <h1></h1>
                {/* pequena descrição */}
                <p></p>
                {/* link para o projeto em produção */}
                <a href=""></a>
            </div>
        </div>
    );
};

export default Card;
