'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { getIP } from '@/constant/ContentApi';

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

  // useEffect(() => {
  //   const cookieValue = document.cookie
  //     .split("; ")
  //     .find((row) => row.startsWith("lang="))
  //     ?.split("=")[1];

  //   if (cookieValue) {
  //     const matchedFlag = flags.find((f) => f.code === cookieValue);
  //     if (matchedFlag) setSelected(matchedFlag);
  //   }

  //   // let country = IP.country;

  //   let defaultLang = "en"; // fallback English

  //   if (country === "Japan") {
  //     defaultLang = "ja";
  //   } else if (
  //     ["Taiwan", "Macau", "China"].includes(country)
  //   ) {
  //     defaultLang = "zh";
  //   } else {
  //     defaultLang = "en"; // all others (including Hong Kong)
  //   }

  //   const matchedFlagWithIP = flags.find(flag => flag.code === defaultLang);

  //   handleSelect(matchedFlagWithIP);
  // }, []);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        // 1) check cookie first
        const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith("lang="))
          ?.split("=")[1];

        if (cookieValue) {
          const matchedFlag = flags.find((f) => f.code === cookieValue);
          if (matchedFlag && mounted) {
            setSelected(matchedFlag);
            handleSelect(matchedFlag);
            return; // cookie wins — stop further geo checks
          }
        }

        // 2) fetch public IP
        const ipRes = await fetch("https://api.ipify.org?format=json", { cache: "no-store" });
        if (!ipRes.ok) throw new Error("Failed to fetch IP");
        const ipJson = await ipRes.json();
        const ip = ipJson.ip;

        let apiData = await getIP(ip);

        let country = apiData.country;

        // 4) determine default language from country
        let defaultLang = "en"; // fallback English
        if (country === "Japan") {
          defaultLang = "ja";
        } else if (["Taiwan", "Macau", "China"].includes(country)) {
          defaultLang = "zh";
        } else {
          defaultLang = "en";
        }

        const matchedFlagWithIP = flags.find((f) => f.code === defaultLang);
        console.log({ matchedFlagWithIP })
        if (matchedFlagWithIP && mounted) {
          setSelected(matchedFlagWithIP);
          handleSelect(matchedFlagWithIP);
        }
      } catch (err) {
        // graceful fallback: set English if nothing else works
        console.error("Language/Geo detection failed:", err);
        const fallback = flags.find((f) => f.code === "en");
        if (fallback && mounted) {
          setSelected(fallback);
          handleSelect(fallback);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []); // run once

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
        <div className="absolute mt-2 w-12 gradient-background border rounded shadow z-10 lg:left-0 md:-left-1 -left-1.5">
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
