'use client';

import {SideBarLinks} from '@/constant/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideBar() {

    const pathname = usePathname();
    const isActive = (href) => pathname === href;

    return(
        <>
            {SideBarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? 'sidebar-menu active'
                    : 'sidebar-menu'
                }`}
              >
                {link.name}
              </Link>
            ))}
        </>
    );
}