import { useContext, useEffect, useState } from 'react';
import LogoBlack from '../../assets/images/2.png';
import LogoWhite from '../../assets/images/1.png';
import { ScrollContext } from '../../Contexts/ScrollContext';

const Menu = () => {
    const { scrollValue } = useContext(ScrollContext);

    return (
        <div
            className={`${
                scrollValue !== 0
                    ? 'bg-[#fff] text-black drop-shadow-md'
                    : 'bg-[#212529] text-white '
            }  flex w-full h-16 fixed z-50 text-md font-[600] transition duration-1000 ease-linear all  `}
        >
            {/* aplicar logo conforme state (preto e branco) */}
            <img
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full  cursor-pointer mt-2 ml-1"
                // Recebe o efeito
                src={scrollValue !== 0 ? LogoBlack : LogoWhite}
                alt="logo do projeto"
            />
            <nav className="m-auto w-60 sm:w-72 sm:pr-10 sm:text-lg">
                <ul className="flex justify-between">
                    <a
                        onClick={() =>
                            window.scrollTo({ top: 600, behavior: 'smooth' })
                        }
                        className={`${
                            scrollValue !== 0
                                ? 'text-black hover:text-[#06404b]'
                                : ' text-white hover:text-[#74ff92]'
                        }  drop-shadow-md font-[600] transition duration-1000 ease-linear all cursor-pointer`}
                    >
                        Sobre
                    </a>
                    <a
                        onClick={() =>
                            window.scrollTo({ top: 2144, behavior: 'smooth' })
                        }
                        className={`${
                            scrollValue !== 0
                                ? 'text-black hover:text-[#06404b]'
                                : ' text-white hover:text-[#74ff92]'
                        }  drop-shadow-md font-[600] transition duration-1000 ease-linear all cursor-pointer`}
                    >
                        Trabalhos
                    </a>
                    <a
                        onClick={() =>
                            window.scrollTo({ top: 3744, behavior: 'smooth' })
                        }
                        className={`${
                            scrollValue !== 0
                                ? 'text-black hover:text-[#06404b]'
                                : ' text-white hover:text-[#74ff92]'
                        }  drop-shadow-md font-[600] transition duration-1000 ease-linear all cursor-pointer`}
                    >
                        Contato
                    </a>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
