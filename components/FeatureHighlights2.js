'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function FeatureHighlights({
  imageUrl,
  title,
  description,
}) {
  return (
    <div className="service-card-wrap md:p-4 p-2 text-center backdrop-blur-lg md:pb-2">
      <div className="image-button-wrap">
        {imageUrl &&
          <Image
            src={imageUrl}
            alt={title}
            width={204}
            height={118}
            className="rounded mb-4 object-cover"
          />
        }
      </div>
      <ol>
        <li className='border-0 text-center'>
          {title && <p className=''><span className="!text-[14px] md:text-xl font-extrabold mb-2 heading">{title}</span></p>}
          {description && <p className="text-gray-600 mb-4 description pt-3">{description}</p>}
        </li>
      </ol>

    </div>
  );
}
