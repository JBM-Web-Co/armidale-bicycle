import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Brands } from './components/Brands';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <Services />
            <Brands />
            <Stats />
            <Contact />
            <Footer />
        </main>
    );
}
