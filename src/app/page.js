// components
import Header from './components/Header';
import Hero from './components/Hero';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Cars from './components/Cars';
import Why from './components/Why';
import About from './components/About';
// import HoursSelection from './components/HoursSelection';
// import LocationSelection from './components/LocationSelection';
// import DateSelection from './components/DateSelection';
import Testimonial from './components/Testimonial';
// import TestimonialSlider from './components/TestimonialSlider';
// import SearchMobile from './components/SearchMobile';
// import Search from './components/Search';
// import Brands from './components/Brands';
// import CarSlider from './components/CarSlider';
// import Copyright from './components/Copyright';
import BackToTopBtn from './components/BackToTopBtn';
// import Cta2 from './components/Cta2';


export default function Home () {
  return (
  <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
    <Header />
    <Hero />
    <Cars />
    <About />
    <Why />
    {/* <HoursSelection/> */}
    {/* <LocationSelection/> */}
    {/* <DateSelection/> */}
    <Testimonial/>
    {/* <TestimonialSlider/> */}
    {/* <SearchMobile/> */}
    {/* <Search/> */}
    {/* <Brands/> */}
    {/* <CarSlider/> */}
    {/* <Copyright/> */}
    <Cta />
    <Footer/>
    <BackToTopBtn/>
    <div className='h-[4000px]'></div>
  </main>
  );
 }
