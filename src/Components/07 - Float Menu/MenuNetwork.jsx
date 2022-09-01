import React, { useContext } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { ScrollContext } from '../../Contexts/ScrollContext';
import './menuAnimate.css';

const MenuNetwork = () => {
    const { scrollValue } = useContext(ScrollContext);

    return (
        <div
            className={
                scrollValue < 669 || scrollValue > 2102
                    ? ' hidden '
                    : 'z-30 fade-in text-flicker-in-glow flex flex-col justify-between fixed top-[5rem] left-2 h-16  text-2xl'
            }
        >
            <a
                className="text-[#3d3d3d] hover:text-[#6ed284] bg-white"
                href="https://www.linkedin.com/in/jonas-batista-b77b24137/"
                target={'_blank'}
            >
                <BsLinkedin />
            </a>
            <a
                className="text-[#3d3d3d] hover:text-[#6ed284] bg-white"
                href="https://github.com/jonas-nb"
                target={'_blank'}
            >
                <BsGithub />
            </a>
        </div>
    );
};

export default MenuNetwork;
