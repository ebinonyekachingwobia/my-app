// components
import Header from './components/Header';
import Hero from './components/Hero';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Cars from './components/Cars';
import Why from './components/Why';
import About from './components/About';
import Testimonial from './components/Testimonial';
import BackToTopBtn from './components/BackToTopBtn';
import Copyright from './components/Copyright';


export default function Home () {
  return (
  <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
    <Header />
    <Hero />
    <Cars />
    <About />
    <Why />
    <Testimonial/>
    <Cta />
    <Footer/>
    <Copyright/>
    <BackToTopBtn/>
    {/* <div className='h-[4000px]'></div> */}
  </main>
  );
 }
