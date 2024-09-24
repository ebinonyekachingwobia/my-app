'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";  // Import next/image correctly
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";
// import { BsHandIndexFill } from "react-icons/bs";

const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: "/assets/images/carSlider/car01.svg", // Ensure correct path for images
    info: [
      {
        icon: "/assets/icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "/assets/icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "/assets/icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "/assets/icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "/assets/icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25,
    stars: 5,
    image: "/assets/images/carSlider/car02.svg",
    info: [
      {
        icon: "/assets/icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "/assets/icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "/assets/icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "/assets/icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "/assets/icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honga CR-V",
    price: 35,
    stars: 4.7,
    image: "/assets/images/carSlider/car03.svg",
    info: [
      {
        icon: "/assets/icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "/assets/icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "/assets/icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "/assets/icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "/assets/icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: "/assets/images/carSlider/car02.svg",
    info: [
      {
        icon: "/assets/icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "/assets/icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "/assets/icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "/assets/icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "/assets/icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
];

export default function CarSlider() {
  return (
    <motion.div 
    variants= {fadeIn('up', 0.4)} 
        initial= 'hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2}}
    className="container mx-auto">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1260: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-[385px] mx-auto sm:mx-0">
              <Image src={car.image} width={380} height={284} alt={car.name} />
              <div className="p-4">
                <div className="text-[13px] text-secondary uppercase">{car.type}</div>
                <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                <h3 className="text-lg text-accent mb-10 font-semibold uppercase">${car.price}/day</h3>

{/* Car info icons and text */}
<div className="flex gap-3 xl:gap-4 w-full overflow-x-auto mb-10">
  {car.info.map((infoItem, i) => (
    <div key={i} className="flex flex-col items-center">
      {/* Circle with the icon */}
      <div className="bg-primary w-14 h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center mb-2">
        <Image 
          src={infoItem.icon} 
          width={22} 
          height={22} 
          alt={infoItem.text} 
        />
      </div>
      {/* Text under the circle */}
      <span className="text-center text-[10px] mt-2 uppercase w-14 xl:w-16">{infoItem.text}</span>
    </div>
  ))}
</div>
 {/* Stars */}
    <div className="mt-4 flex items-center">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i}>
  {car.stars >= i + 1 ? <FaStar className="flex gap-x-2 text-accent h-max" /> : car.stars >= i + 0.5 ? 
  <FaStarHalfAlt className="text-red-500" /> : 
  <FaRegStar className="text-red-500" />}
    </span> ))}
  </div>
              </div>
              {/* Booking button */}
              <button className="btn btn-accent btn-lg rounded-xl">See details</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
