'use client';

import React, { useState } from 'react';

// Headless UI
import { Menu } from '@headlessui/react';

// Icons
import { FaClock } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

// Hours options
const hours = ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM'];

export default function HoursSelection() {
  // State to store selected hour
  const [hour, setHour] = useState('10:00 AM');

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        {/* Dropdown Button */}
        <Menu.Button className="dropdown-btn w-full h-full flex justify-center xl:justify-start xl:pl-8">
          <div className="flex items-center xl:gap-x-2 gap-y-2">
            <FaClock className="text-accent" />
            <div className="text-[15px] uppercase font-bold">Select Hours</div>
            <FaArrowRightLong className="text-accent text-[12px]" />
            <div className="font-medium text-[13px] text-secondary xl:ml-6">{hour}</div>
           
          </div>
        </Menu.Button>

        {/* Dropdown Menu Items */}
        <Menu.Items className="dropdown-menu shadow-lg absolute -top-72 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]">
          {hours.map((availableHour, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <div
                  onClick={() => setHour(availableHour)}
                  className={`cursor-pointer py-4 xl:pl-10 hover:bg-gray-50 text-[13px] uppercase ${active ? 'bg-gray-100' : ''}`}
                >
                  {availableHour}
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
}
