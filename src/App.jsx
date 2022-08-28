import Menu from './Components/01 - Menu/Menu';
import Presentation from './Components/02 - Apresentation/Presentation';
import About from './Components/03 - About/About';
import Works from './Components/04 - Works/Works';
import Contact from './Components/05 - Contact/Contact';
import Footer from './Components/06 - Footer/Footer';
import MenuNetwork from './Components/07 - Float Menu/MenuNetwork';

const App = () => {
    return (
        <div>
            <aside className="">
                <MenuNetwork />
            </aside>
            <header>
                <Menu />
            </header>
            <main className="z-20">
                <Presentation />
                <About />
                <Works />
                <Contact />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default App;
