'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

const flags = [
  {
    code: 'en',
    name: 'English',
    country: 'UK',
    src: '/flags/uk.png',
  },
  {
    code: 'ja',
    name: 'Japanese',
    country: 'Japan',
    src: '/flags/japan.png',
  },
  {
    code: 'zh',
    name: 'Chinese',
    country: 'China',
    src: '/flags/china.png',
  },
];

export default function FlagDropdown() {

  const router = useRouter();

  const [selected, setSelected] = useState(flags[0]);
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleSelect = (flag) => {
    setSelected(flag);
    setOpen(false);

    document.cookie = `lang=${flag.code}; path=/`; // frontend cookie
    router.refresh(); // server components ko re-render karne ke liye
  };

  return (
    <div className="flagImage cursor-pointer relative">
      {/* Selected Flag */}
      <div onClick={toggleDropdown}>
        <Image
          src={selected.src}
          alt={selected.name}
          width={600}
          height={600}
          className="mainFlagImage w-[48%] h-[32%]"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-12 gradient-background border rounded shadow z-10 -left-1.5">
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
                  width={600}
                  height={600}
                  className="rounded w-full h-full"
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
