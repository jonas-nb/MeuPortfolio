import React from 'react';
import LogoBlack from '../../assets/images/black-logo.png';
import LogoWhite from '../../assets/images/white-logo.png';

const Menu = () => {
    return (
        <div className="border border-red-500 flex w-full h-16">
            {/* aplicar logo conforme state (preto e branco) */}
            <img
                className="object-contain w-10 h-20"
                src={LogoBlack}
                alt="logo do projeto"
            />
            <nav>
                <ul>
                    <li>About</li>
                    <li>Works</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
