import { useContext, useEffect, useState } from 'react';
import LogoBlack from '../../assets/images/2.png';
import LogoWhite from '../../assets/images/1.png';
import { ScrollContext } from '../../Contexts/ScrollContext';
import { ScrollTo } from 'react-scroll-to';

const Menu = () => {
    const { scrollValue, mQuery } = useContext(ScrollContext);

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
            <nav className="m-auto w-full sm:w-5/16 lg:w-full">
                <ul className="flex m-auto text-sm lg:text-2xl w-12/12 items-center justify-center">
                    <ScrollTo>
                        {({ scroll }) => (
                            <button
                                className="bg-transparent hover:border-transparent font-[800] transition-all duration-500 text-[#0abd78] hover:text-[#0ae28f] hover:underline"
                                onClick={() => scroll({ x: 20, y: 600 })}
                            >
                                Sobre
                            </button>
                        )}
                    </ScrollTo>
                    <ScrollTo>
                        {({ scroll }) => (
                            <button
                                className="bg-transparent hover:border-transparent font-[800] transition-all duration-500 text-[#0abd78] hover:text-[#0ae28f] hover:underline"
                                onClick={() =>
                                    mQuery.matches === false
                                        ? scroll({ x: 20, y: 2168 })
                                        : scroll({ x: 20, y: 1568 })
                                }
                            >
                                Trabalhos
                            </button>
                        )}
                    </ScrollTo>
                    <ScrollTo>
                        {({ scroll }) => (
                            <button
                                className="bg-transparent hover:border-transparent font-[800] transition-all duration-500 text-[#0abd78] hover:text-[#0ae28f] hover:underline"
                                onClick={() =>
                                    mQuery.matches === false
                                        ? scroll({ x: 20, y: 4100 })
                                        : scroll({ x: 20, y: 3744 })
                                }
                            >
                                Contatos
                            </button>
                        )}
                    </ScrollTo>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
