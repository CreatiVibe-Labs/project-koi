'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ServicesCards({
  imageUrl,
  buttonText,
  link,
  heading,
  description,
}) {
  return (
    <div className="p-2 md:p-4 border rounded-md shadow-sm service-card-wrap">
      <div className="image-button-wrap justify-center">
        {imageUrl && <Image
          src={imageUrl}
          alt={heading}
          width={100}
          height={100}
          className="rounded mb-0 md:mb-4 object-cover"
        />}
        {link && <Link href={link}>
          <span className="buttonText">{buttonText}</span>
          <span className="buuttonIcon">
            <div className="arrow">
              <img src="/icons/arrow1.png" width={20} height={20} className="arrow-layer layer-1" alt="Arrow Layer 1" />
              <img src="/icons/arrow2.png" width={20} height={20} className="arrow-layer layer-2" alt="Arrow Layer 2" />
              <img src="/icons/arrow2.png" width={20} height={20} className="arrow-layer layer-3" alt="Arrow Layer 3" />
            </div>
          </span>
        </Link>}
      </div>
      <p className="text-xl font-semibold mb-2 heading">{heading}</p>
      <p className="text-gray-600 mb-4 description">{description}</p>
    </div>
  );
}
