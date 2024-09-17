import { div } from 'framer-motion/client';
import DateSelection from './DateSelection';
import HoursSelection from './HoursSelection';
import LocationSelection
from './LocationSelection';
import { Button } from '@headlessui/react';


export default function SearchMobile() {
  return (
  
  <div className='xl:hidden font-medium'>
    <div className='container mx-auto'>
        <div className='flex flex-col gap-y-4'>
            {/* LocationSelection */}
            <LocationSelection />
            {/* DateSelection */}
            <DateSelection />
            {/* HoursSelection */}
            <HoursSelection />
            {/* btn */}
            
            <div className='flex items-center px-6'>
                <button className='btn btn-sm btn-accent w-[164px] mx-auto'>
                Search
                </button>
            </div>
        </div>
    </div> 
  </div>
  );
}
