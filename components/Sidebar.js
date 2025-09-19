'use client';

// import { SideBarLinks } from '@/constant/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SideBar({ sideBarData, lang }) {

  const SideBarLinks = [
    { name: sideBarData?.content?.custom_app_dev?.[lang] || "Custom App Development", href: '/services/custom-app-development' },
    { name: sideBarData?.content?.custom_web_dev?.[lang] || 'Custom Website Development', href: '/services/custom-website-development' },
    { name: sideBarData?.content?.cloud_migration?.[lang] || 'Cloud Migration & Storage Services', href: '/services/cloud-migration-services' },
    { name: sideBarData?.content?.ai_powered_solutions?.[lang] || 'AI Powered Solutions & Machine Learning', href: '/services/ai-powered-solutions' },
    { name: sideBarData?.content?.IT_services?.[lang] || 'Managed IT Services & Consulting', href: '/services/managed-it-services-consulting' },
    { name: sideBarData?.content?.digital_marketing?.[lang] || 'Digital Marketing', href: '/services/digital-marketing-services' },
  ];

  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  // Track dropdown state
  const [open, setOpen] = useState(false);

  // Track selected item (default first or active)
  const [selected, setSelected] = useState(SideBarLinks[0]);

  useEffect(() => {
    // On page load, set selected to active link if exists
    const activeLink = SideBarLinks.find((link) => isActive(link.href));
    if (activeLink) setSelected(activeLink);
  }, [pathname]);

  return (
    <div className="w-full">
      {/* Mobile Dropdown */}
      <div className="lg:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center md:px-2 py-1 text-white font-medium rounded-md"
        >
          <span>{selected?.name}</span>
          <span>
            {open ? (
              <svg fill="#fff" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M297.4 169.4C309.9 156.9 330.2 156.9 342.7 169.4L534.7 361.4C547.2 373.9 547.2 394.2 534.7 406.7C522.2 419.2 501.9 419.2 489.4 406.7L320 237.3L150.6 406.6C138.1 419.1 117.8 419.1 105.3 406.6C92.8 394.1 92.8 373.8 105.3 361.3L297.3 169.3z" /></svg>
            ) : (
                <svg fill="#fff" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" /></svg>            )}
          </span>
        </button>

        {open && (
          <div className="flex flex-col mt-2 rounded-md">
            {SideBarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 border-b border-green-800 ${isActive(link.href) ? 'text-green-400 font-semibold' : 'text-white'
                  }`}
                onClick={() => {
                  setSelected(link); // set selected item
                  setOpen(false); // close dropdown
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col gap-2">
        {SideBarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${isActive(link.href) ? 'sidebar-menu active' : 'sidebar-menu'
              }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
