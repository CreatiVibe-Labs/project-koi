'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { Search } from 'lucide-react';
import Image from 'next/image';
import FlagDropdown from '@/components/FlagDropdown';

export default function Header({ lang, ASSETS_URL, apiData }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  const [scrolled, setScrolled] = useState(false);

  const sentinelRef = useRef(null);

  const navLinks = [
    { name: apiData?.content?.home?.[lang] || "Home", href: '/' },
    {
      name: apiData?.content?.services?.[lang] || "Services",
      href: '/services',
      subMenu: [
        { name: apiData?.content?.custom_app_dev?.[lang] || "Custom App Development", href: '/custom-app-development' },
        { name: apiData?.content?.custom_web_dev?.[lang] || "Custom Website Development", href: '/custom-website-development' },
        { name: apiData?.content?.cloud_migration?.[lang] || "Cloud Migration & Storage Services", href: '/cloud-migration-services' },
        { name: apiData?.content?.ai_powered_solutions?.[lang] || "AI Powered Solutions & Machine Learning", href: '/ai-powered-solutions' },
        { name: apiData?.content?.IT_services?.[lang] || "Managed IT Services & Consulting", href: '/managed-it-services-consulting' },
        { name: apiData?.content?.digital_marketing?.[lang] || "Digital Marketing", href: '/digital-marketing-services' },
      ],
    },
    { name: apiData?.content?.resources?.[lang] || "Resources", href: '/resources' },
    { name: apiData?.content?.demo?.[lang] || "Demo", href: '/demo' },
    { name: apiData?.content?.about_us?.[lang] || "About us", href: '/about-us' },
    { name: apiData?.content?.contact?.[lang] || "Contact", href: '/contact' },
  ];

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
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(null);

  return (
    <>
      <div ref={sentinelRef} style={{ height: '0px' }}></div>

      <header>
        <div className={`headerMainWrapper border-b-[1px] border-b-[#ffffff66] rounded-[0] gradient-background w-full  inset-x-0 top-0 fixed z-10 ${scrolled ? 'customStickyHeader' : ''}`}>
          <div className='headerWrapper lg:px-0 md:!px-[1rem]'>
            <div className='logoWrapper'>
              <Link href='/' className='flex gap-2.5 md:gap-5 items-center lg:text-4xl md:text-lg font-semibold'><Image src="/images/logo.png" width={100} height={100} alt="Logo" />Aerialink</Link>
            </div>
            <div className='menuWrapper mobile-hide'>
              <nav className="navBar md:items-center">
                {navLinks.map((link) => (
                  !link.subMenu ? (
                    <div key={link.href} className='relative nav_menu_wrapper'>
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`relative lg:!text-[18px] md:!text-sm lg:!p[10px 15px] md:!px-1.5 ${isActive(link.href) ? 'nav-menu active' : 'nav-menu'}`}
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
                              className={`relative lg:!text-[18px] md:!text-sm lg:!p[10px 15px] md:!px-1.5 ${isParentActive ? 'nav-menu active' : 'nav-menu'}`}
                              onClick={() => setMenuOpen(false)}
                            >
                              {link.name}
                            </Link>

                            {pathname === link.href && (
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
                            )}

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
          {/* <div className='mobileHeaderWrapper'>
            {menuOpen && (
              <div className="md:hidden shadow-md px-4 py-4 space-y-2 h-lvh backdrop-blur-2xl">
                {navLinks.map((link) => (
                  !link.subMenu ? (
                    <div key={link.href} className='relative nav_menu_wrapper mt-4'>
                      <Link
                        href={link.href}
                        className={`text-white relative ${isActive(link.href) ? 'nav-menu active' : 'nav-menu'}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </div>
                  ) : (
                    <div key={link.href} className="relative nav_menu_wrapper">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileSubMenuOpen(mobileSubMenuOpen === link.href ? null : link.href)
                        }
                        className={`my-4 w-full text-left flex justify-between items-center text-white ${isActive(link.href) ? 'nav-menu active' : 'nav-menu'}`}
                      >
                        <Link href={link.href} className='!text-start'>{link.name}</Link>
                        <span>{mobileSubMenuOpen === link.href ? '−' : '+'}</span>
                      </button>

                      {mobileSubMenuOpen === link.href && (
                        <ul>
                          {link.subMenu.map((subLink) => {
                            const finalLink = `${link.href}/${subLink.href.replace(/^\//, '')}`;
                            return (
                              <li className='py-2'>
                                <Link
                                  key={link.href + subLink.href}
                                  href={finalLink}
                                  className={`text-white sub-nav-menu ${isActive(finalLink) ? 'active' : ''}`}
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {subLink.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  )
                ))}
              </div>
            )}
          </div> */}
          <div className="mobileHeaderWrapper">
            {menuOpen && (
              <div className="md:hidden shadow-md px-4 py-4 space-y-2 h-lvh backdrop-blur-2xl">
                {navLinks.map((link) => {
                  // check if we are on service page
                  const isServicePage = pathname.startsWith("/services");

                  if (!link.subMenu) {
                    return (
                      <div key={link.href} className="relative nav_menu_wrapper mt-4">
                        <Link
                          href={link.href}
                          className={`text-white relative ${pathname === link.href ? "nav-menu active" : "nav-menu"
                            }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </div>
                    );
                  }

                  // show submenu only if it's the Service page
                  return (
                    <div key={link.href} className="relative nav_menu_wrapper">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileSubMenuOpen(
                            mobileSubMenuOpen === link.href ? null : link.href
                          )
                        }
                        className={`my-4 w-full text-left flex justify-between items-center text-white ${pathname === link.href ? "nav-menu active" : "nav-menu"
                          }`}
                      >
                        <Link href={link.href} className="!text-start">
                          {link.name}
                        </Link>
                        {isServicePage && (
                          <span>{mobileSubMenuOpen === link.href ? "−" : "+"}</span>
                        )}
                      </button>

                      {isServicePage && mobileSubMenuOpen === link.href && (
                        <ul>
                          {link.subMenu.map((subLink) => {
                            const finalLink = `${link.href}/${subLink.href.replace(
                              /^\//,
                              ""
                            )}`;
                            return (
                              <li key={link.href + subLink.href} className="py-2">
                                <Link
                                  href={finalLink}
                                  className={`text-white sub-nav-menu ${pathname === finalLink ? "active" : ""
                                    }`}
                                  onClick={() => {
                                    setMenuOpen(false); // close full menu when submenu clicked
                                    setMobileSubMenuOpen(null); // close submenu
                                  }}
                                >
                                  {subLink.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
