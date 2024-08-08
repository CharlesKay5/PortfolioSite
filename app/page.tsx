
import HeroSection from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import GradientCircle from './components/GradientCircle';

import { Roboto_Slab } from 'next/font/google';

const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
});

export default function Page() {
    return (
        <main className={robotoSlab.className}>
            <HeroSection />
            <Projects />
            <Footer />
            <GradientCircle />
        </main>
    );
}