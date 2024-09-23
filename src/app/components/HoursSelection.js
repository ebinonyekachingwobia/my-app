'use client';

import React, { useState } from 'react';
import { Menu } from '@headlessui/react';  // Headless UI for dropdown
import { FaClock } from 'react-icons/fa';  // Clock icon
import { FaArrowRightLong } from 'react-icons/fa6';  // Arrow icon

// List of hour options
const hours = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

export default function HoursSelection() {
  const [selectedHour, setSelectedHour] = useState(hours[0]);

  return (
    <Menu as="div" className="relative w-full flex flex-col xl:flex-row">
  <div className="flex-1">
    {/* Dropdown Button */}
    <Menu.Button className="dropdown-btn w-full flex flex-col justify-center xl:justify-start xl:pl-8 py-3">
      <div className="flex items-center gap-2">
        {/* FaClock and "Select Hour" on the same line */}
        <FaClock className="text-accent" />  {/* Clock Icon */}
        <div className="text-[15px] uppercase font-bold">Select Hour</div>  {/* "Select Hour" */}
      </div>
      
      <div className="flex items-center gap-2 mt-2">
        {/* Time Selection and Arrow directly under "Select Hour" */}
        <div className="uppercase font-medium text-[13px] text-secondary">
          {selectedHour}  {/* Time of Departure */}
        </div>
        <FaArrowRightLong className="text-accent text-[12px]" />  {/* Arrow Icon */}
        <div className="uppercase font-medium text-[13px] text-secondary">
          {selectedHour}  {/* Time of Arrival */}
        </div>
      </div>
    </Menu.Button>

    {/* Dropdown Menu Items */}
    <Menu.Items className="dropdown-menu shadow-lg absolute mt-2 left-0 z-10 text-sm w-full bg-white max-w-[332px] py-6 rounded-[10px]">
      {hours.map((hour, index) => (
        <Menu.Item key={hour}>
          {({ active }) => (
            <div
              className={`cursor-pointer px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
              onClick={() => setSelectedHour(hour)}
              key={index}
            >
              {hour}
            </div>
          )}
        </Menu.Item>
      ))}
    </Menu.Items>
  </div>
</Menu>
  );
}
