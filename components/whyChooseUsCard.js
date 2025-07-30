'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WhyChooseUsCardComponent({
  imageUrl,
  link,
  tags,
  title,
  description,
}) {
  return (
    <div className="service-card-wrap border rounded-lg p-4 shadow-md">
        <div>
            <div className='ImageWrapper'>
                <Image src={imageUrl} alt="Card Image" width={400} height={250} className="rounded mb-4" />
                <div className='cardsTags'>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="card-tag"
                        >
                            {tag}
                        </span>
                        ))}
                </div>
            </div>
            
            <p className="heading mb-2">{title}</p>
            <p className="text-gray-600 mb-4 content-description">{description}</p>
                        
            <div className='site_readmore flex gap-4 items-center'>

              Read More
              <Image src="/images/arrow-icon.png" width={30} height={17} className='bounce' alt="arrow icon"></Image>

            </div>            


      </div>
    </div>
  );
}
