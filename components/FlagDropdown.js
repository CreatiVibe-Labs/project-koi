'use client';

import { useState } from 'react';
import Image from 'next/image';

const flags = [
  {
    code: 'en',
    name: 'English',
    country: 'UK',
    src: '/flags/uk.png',
  },
  {
    code: 'jp',
    name: 'Japanese',
    country: 'Japan',
    src: '/flags/japan.png',
  },
  {
    code: 'cn',
    name: 'Chinese',
    country: 'China',
    src: '/flags/china.png',
  },
];

export default function FlagDropdown() {
  const [selected, setSelected] = useState(flags[0]);
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleSelect = (flag) => {
    setSelected(flag);
    setOpen(false);
  };

  return (
    <div className="flagImage cursor-pointer relative">
      {/* Selected Flag */}
      <div onClick={toggleDropdown}>
        <Image
          src={selected.src}
          alt={selected.name}
          width={48}
          height={32}
          className="mainFlagImage"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-12 gradient-background border rounded shadow z-10">
          {flags
            .filter((flag) => flag.code !== selected.code)
            .map((flag) => (
              <div
                key={flag.code}
                onClick={() => handleSelect(flag)}
                className="hover:bg-gray-100 p-1"
              >
                <Image
                  src={flag.src}
                  alt={flag.name}
                  width={48}
                  height={32}
                  className="rounded"
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
