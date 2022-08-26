import React from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
const SkillComponent = (props) => {
    return (
        <div className="flex flex-col items-center mt-10 text-center">
            <img className="w-11" src={props.icone} alt={props.alt} />
            <h1 className="mt-5 text-2xl font-[500]">{props.habilidade}</h1>
            <div className="w-1/12 h-[0.1rem] bg-[#00000071] mt-5 mb-5"></div>
            <p className="w-56 italic font-[400]">
                <RiDoubleQuotesL /> {props.descrição}
            </p>
        </div>
    );
};

export default SkillComponent;
