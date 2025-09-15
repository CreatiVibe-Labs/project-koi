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
          className="w-full flex justify-between items-center md:px-2 py-1  text-white font-medium rounded-md"
        >
          <span>{selected?.name}</span>
          <span className="text-sm">{open ? '−' : '+'}</span>
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
