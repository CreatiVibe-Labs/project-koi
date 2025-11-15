'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function FeatureHighlights({
  imageUrl,
  title,
  description,
  additionalClass = ''
}) {
  return (
    <div className={`service-card-wrap lg:p-4 p-2 text-center backdrop-blur-lg lg:mb-0 mb-2 ${additionalClass}`}>
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
        <li className='border-0 text-left'>
          {title && <p className=''><span className="text-xl font-extrabold mb-2 heading">{title}</span></p>}
          {description && <p className="text-gray-600 mb-4 description lg:pt-3 py-5 !font-medium">{description}</p>}
        </li>
      </ol>

    </div>
  );
}
