'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);

  const breadcrumbs = pathParts.map((part, index) => {
    const href = '/' + pathParts.slice(0, index + 1).join('/');
    const label = part
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return { label, href };
  });

  return (
    <nav aria-label="Breadcrumb" className="breadCrumbWrapper">
      <ol className="breadCrumbWrap">
        <li>
          <Link href="/" className="breadcrumbLink">
            Home
          </Link>
        </li>
        {breadcrumbs.map((crumb, idx) => (
          <li key={crumb.href} className="BreadCrumbTextWrap">
            <span>/</span>
            {idx === breadcrumbs.length - 1 ? (
              <span className="breadCrumbCurrentPage">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="breadcrumbLink">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
