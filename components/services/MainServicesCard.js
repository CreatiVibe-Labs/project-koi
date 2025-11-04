'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function MainServicesCard({
    bgImage,
    Icon,
    video,
    Heading,
    Description,
    LinkURL,
    Button,
}) {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!video || !videoRef.current) return;

        // Intersection Observer for lazy loading videos
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '50px', // Start loading when within 50px of viewport
            }
        );

        observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, [video]);

    return (
        <div className="mainWrapper">
            <div className="bgImage" ref={videoRef}>
                {video && (
                    <video 
                        className="lg:rounded rounded-0" 
                        autoPlay={isVisible}
                        muted 
                        loop
                        playsInline
                        preload="none"
                        poster=""
                    >
                        {isVisible && <source src={video} type="video/mp4" />}
                        Your browser does not support the video tag.
                    </video>
                )}
                {bgImage && (
                    <Image 
                        src={bgImage} 
                        width={1920} 
                        height={1080} 
                        alt="bg image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={80}
                        loading="lazy"
                    />
                )}
            </div>
            <div className='serviceContent'>

                <div className='Icon !w-full flex justify-end'>
                    <Image 
                        src={Icon} 
                        width={80} 
                        height={80} 
                        alt="icon image" 
                        className='lg:!w-[80px] lg:h-full md:h-[60px] md:!w-[60px] h-[50px] !w-[50px]'
                        quality={90}
                        loading="lazy"
                    />
                </div>
                <div className='heading !mt-0'>
                    <h5>{Heading}</h5>
                </div>
                <div className='description'>
                    <p>{Description}</p>
                </div>
                <div className='mainServiceLink'>
                    <Link href={LinkURL} className='site_readmore md:!text-[18px] text-[11px]'>
                        {Button}
                        <Image src="/images/arrow-icon.png" width={30} height={17} className='bounce' alt='arrow icon'></Image>
                    </Link>
                </div>
            </div>
        </div>
    );
}