import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
const Footer = () => {
    return (
        <div>
            <div>
                <a
                    href="https://www.linkedin.com/in/jonas-batista-b77b24137/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {<IoLogoLinkedin />}
                </a>
                <a
                    href="https://github.com/jonas-nb"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {<IoLogoGithub />}
                </a>
            </div>
            <div>Copyright 2022</div>
            <div>Feito com ❤ por Jonas Batista</div>
        </div>
    );
};

export default Footer;
