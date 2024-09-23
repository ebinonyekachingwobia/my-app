'use client'

// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react"

// Import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import required modules
import { Pagination } from "swiper/modules"

// Import Next.js Image component
import Image from "next/image"

// Icons 
import { FaQuoteLeft } from "react-icons/fa"

// Framer motion 
import { motion } from "framer-motion"

// Variants
import { fadeIn } from "/variants"

// Testimonial data
const testimonialData = [
  {
    message: 'They truly exceeded my expectations and made my car experience a delight.',
    avatar: '/assets/images/testimonial/avatar.png',
    name: 'Jane Doe',
    job: 'Photographer & Videographer',
  },
  {
    message: 'The service was seamless and the car was in excellent condition.',
    avatar: '/assets/images/testimonial/avatar.png',
    name: 'John Smith',
    job: 'Travel Blogger',
  },
];

export default function TestimonialSlider() {
  return (
    <motion.div 
    variants= {fadeIn('up', 0.4)} 
    initial= 'hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.6}}
    className="container mx-auto"
    >
      <Swiper
        pagination={{ 
      clickable: true,  
      dynamicBullets: true}}  // Enable pagination with clickable dots
        modules={[Pagination]} 
        className="h-[450px] xl:h-[400px]"          // Importing the pagination module
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonialData.map((person, index) => {
          const { message, name, avatar, job } = person;  // Destructured correctly
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="mb-12 font-medium text-2xl xl:text-4xl max-w-[874px]">{message}</div>
                <div className="flex items-center gap-4">
                  <Image 
                    src={avatar} 
                    width={64} 
                    height={64} 
                    alt={`${name}'s Avatar`}  // Add meaningful alt text
                    className="rounded-full mb-4" 
                  />
                  <div>
                    <div className="text-lg font-medium">{name}</div>
                    <div className="text-secondary">{job}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
