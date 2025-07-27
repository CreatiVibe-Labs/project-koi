'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import Image from 'next/image';
import FlagDropdown from '@/components/FlagDropdown';
import { navLinks } from '@/constant/constants';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  const [scrolled, setScrolled] = useState(false);

  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 1,
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} style={{ height: '0px' }}></div>

      <header>
        <div className={`headerMainWrapper border-b-[1px] border-b-[#ffffff66] rounded-[0] gradient-background w-full  inset-x-0 top-0 fixed z-10 ${scrolled ? 'customStickyHeader' : ''}`}>
          <div className='headerWrapper'>
            <div className='logoWrapper'>
              <Link href='#'><Image src="/images/logo.png" width={100} height={10} alt="Logo" /></Link>
            </div>
            <div className='menuWrapper mobile-hide'>
              <nav className="navBar">
                {navLinks.map((link) => (
                  !link.subMenu ? (
                    <div key={link.href} className='relative nav_menu_wrapper'>
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`relative ${isActive(link.href) ? 'nav-menu active' : 'nav-menu'}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </div>
                  ) : (
                    <div key={link.href} className="relative nav_menu_wrapper">
                      {/** Check if any subLink is active */}
                      {(() => {
                        const isParentActive =
                          isActive(link.href) ||
                          link.subMenu?.some((subLink) =>
                            isActive(`${link.href}/${subLink.href.replace(/^\//, '')}`)
                          );

                        return (
                          <>
                            <Link
                              href={link.href}
                              className={`relative ${isParentActive ? 'nav-menu active' : 'nav-menu'}`}
                              onClick={() => setMenuOpen(false)}
                            >
                              {link.name}
                            </Link>

                            <div className="absolute subMenuWrapper">
                              <div className="sub-menu">
                                {link.subMenu.map((subLink) => {
                                  const finalLink = `${link.href}/${subLink.href.replace(/^\//, '')}`;
                                  return (
                                    <Link
                                      key={link.href + subLink.href}
                                      href={finalLink}
                                      className={`sub-nav-menu ${isActive(finalLink) ? 'active' : ''}`}
                                      onClick={() => setMenuOpen(false)}
                                    >
                                      {subLink.name}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  )
                ))}

              </nav>
            </div>
            <div className='searchLangWrapper'>
              {/* <div className='mobile-hide searchWrapper'>
              <Search className="searchBar" />
              <input
                type="text"
                placeholder="Search..."
                className="searchInput"
              />
            </div> */}
              <div className='LangWrapper'>
                <FlagDropdown />
              </div>
              {/* Hamburger Menu */}
              <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)} >
                {menuOpen ? <Image src="/icons/close.png" width={24} height={24} alt='close menu' /> : <Image src="/icons/hamburger.png" width={24} height={24} alt='open menu' />}
              </button>
            </div>
          </div>
          <div className='mobileHeaderWrapper'>
            {menuOpen && (
              <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block text-sm font-medium ${isActive(link.href)
                      ? 'text-blue-600 underline underline-offset-4'
                      : 'text-gray-700 hover:text-blue-600'
                      }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Search Input for Mobile */}
                <div className="flex items-center border rounded px-2 py-1 mt-2">
                  <Search className="w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="ml-2 outline-none text-sm w-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
