import React from 'react';

const SkillComponent = (props) => {
    return (
        <div>
            <img src={props.icone} alt={props.alt} />
            <h1>{props.habilidade}</h1>
            <hr />
            <p>{props.descrição}</p>
            <hr />
        </div>
    );
};

export default SkillComponent;
