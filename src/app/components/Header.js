"use client"

import { useContext,useEffect, useState } from 'react';

// Next.js Image
import Image from 'next/image';

// React Scroll
import { Link } from 'react-scroll';

// Components
import SearchMobile from './SearchMobile';

// Media query hook
import { useMediaQuery } from 'react-responsive';

// Icons
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import {SearchContext} from '../context/search';


export default function Header() {
  const {setSearchActive} = useContext(SearchContext);
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: '(min-width: 1300px)',
  });

  // Effect to handle header behavior on scroll
  useEffect(() => {
    const handleScroll = () => {
       if (window.scrollY > 40) {
        setHeader (true); 
      } else {
        setHeader (false);
      }

      // search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);

    }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setSearchActive]);

  console.log(header);

  return (
    <header
      className={`${
        header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <Link to="home" smooth={desktopMode} spy={true} className="cursor-pointer">
            <Image src={'/assets/icons/logo.svg'} width={194} height={64} alt="Logo" />
          </Link>

          {/* Nav toggle button for mobile */}
          <div onClick={() => setNav(!nav)} className="cursor-pointer xl:hidden">
            {nav ? <BiX className="text-4xl" /> : <BiMenuAltRight className="text-4xl" />}
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            nav
              ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0'
              : 'max-h-0 xl:max-h-max'
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link className="cursor-pointer" to="home" activeClass="active" smooth={desktopMode} spy={true}>
            Home
          </Link>

          <Link className="cursor-pointer" to="cars" activeClass="active" smooth={desktopMode} spy={true}>
            Cars
          </Link>

          <Link className="cursor-pointer" to="about" activeClass="active" smooth={desktopMode} spy={true}>
            About
          </Link>

          <Link className="cursor-pointer" to="why" activeClass="active" smooth={desktopMode} spy={true}>
            Why Us
          </Link>

          <Link className="cursor-pointer" to="testimonial" activeClass="active" smooth={desktopMode} spy={true}>
            Testimonial
          </Link>

          <Link className="cursor-pointer" to="contact" activeClass="active" smooth={desktopMode} spy={true}>
            Contact
          </Link>

          {/* 'See all cars' Button for mobile */}
          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto cursor-pointer"
            to="cars" // Change to appropriate target section
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            See all cars
          </Link>

          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
