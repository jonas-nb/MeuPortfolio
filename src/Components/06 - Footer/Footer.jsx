import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
const Footer = () => {
    const data = new Date();

    return (
        <div className="mt-10  flex flex-col items-center bg-[#000]">
            <div className="mt-10 mb-5 text-4xl  w-28 justify-around flex">
                <a
                    className="text-[#0abd78] hover:text-[#0ae28f]"
                    href="https://www.linkedin.com/in/jonas-batista-b77b24137/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {<IoLogoLinkedin />}
                </a>
                <a
                    className="text-[#0abd78] hover:text-[#0ae28f]"
                    href="https://github.com/jonas-nb"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {<IoLogoGithub />}
                </a>
            </div>
            <div className="font-[400] text-[0.7rem] text-white">
                Copyright 2022 - {data.getFullYear()}
            </div>
            <div className="font-[400] text-[0.7rem] text-white">
                Feito com ❤ e React por Jonas Batista
            </div>
        </div>
    );
};

export default Footer;
