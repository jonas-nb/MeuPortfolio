import React, { createContext, useState } from 'react';

export const ScrollContext = createContext();
export const ScrollProvider = ({ children }) => {
    const [scrollValue, setScrollValue] = useState(0);
    const [mQuery, setMQuery] = useState({
        matches: window.innerWidth > 768 ? true : false,
    });
    const atualizaScrollY = () => {
        const valorScroll = window.scrollY;
        setScrollValue(valorScroll);
    };
    setInterval(atualizaScrollY, 1);

    return (
        <ScrollContext.Provider value={{ scrollValue, mQuery }}>
            {children}
        </ScrollContext.Provider>
    );
};
