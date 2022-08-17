import React from 'react';
import Menu from './Components/01 - Menu/Menu';
import Presentation from './Components/02 - Apresentation/Presentation';
import About from './Components/03 - About/About';
import Works from './Components/04 - Works/Works';
import Contact from './Components/05 - Contact/Contact';
import Footer from './Components/06 - Footer/Footer';

const App = () => {
    return (
        <div>
            <Menu />
            <Presentation />
            <About />
            <Works />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
