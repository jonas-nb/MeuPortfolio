import { useContext, useEffect, useState } from 'react';
import LogoBlack from '../../assets/images/2.png';
import LogoWhite from '../../assets/images/1.png';
import { ScrollContext } from '../../Contexts/ScrollContext';

const Menu = () => {
    const { scrollValue } = useContext(ScrollContext);
    const ScrollAbout = () => {
        window.scrollTo({
            top: 604,
            behavior: 'smooth',
        });
    };
    const ScrollWork = () => {
        window.scrollTo({
            top: 2164,
            behavior: 'smooth',
        });
    };
    const ScrollContat = () => {
        window.scrollTo({
            top: 3764,
            behavior: 'smooth',
        });
    };

    return (
        <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`${
                scrollValue !== 0
                    ? 'bg-[#fff] text-black drop-shadow-md'
                    : 'bg-[#212529] text-white '
            }  pt-1 w-full h-16 flex items-center fixed z-50 text-md font-[600] transition duration-1000 ease-linear all  `}
        >
            {/* aplicar logo conforme state (preto e branco) */}
            <img
                className="w-12 h-12 rounded-full ml-2 mt-2 mb-2"
                // Recebe o efeito
                src={scrollValue !== 0 ? LogoBlack : LogoWhite}
                alt="logo do projeto"
            />
            <nav className="m-auto mt-5 w-60 ">
                <ul className="flex justify-between">
                    <li className="cursor-pointer" onClick={ScrollAbout}>
                        Sobre
                    </li>
                    <li className="cursor-pointer" onClick={ScrollWork}>
                        Trabalhos
                    </li>
                    <li className="cursor-pointer" onClick={ScrollContat}>
                        Contatos
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
