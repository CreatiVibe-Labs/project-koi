'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Jobs({
  title,
  exp,
  description,
  link,
}) {
  return (
    <div className='jobMainWrap'>
        <div className='titleWrap flex md:flex-nowrap flex-wrap w-full md:w-[27%]'>
            <div className='icon'>
                <Image src="/icons/job.png" width={20} height={20} alt='icon'></Image>
            </div>
            <div className='title'>
                <p className='titleText'>
                    {title}
                </p>
                <p className='exp'>
                    Experience: {exp}
                </p>
            </div>
        </div>
        <div className='locationWrap w-full md:w-[48%]'>
            <p className='description flex flex-col gap-2 !font-semibold'>Description: <span className='line-clamp-2 !font-normal'>{description}</span></p>
        </div>
        <div className='buttons-wrapper w-full md:w-[19%]'>
            <Link href={link}>Apply Now</Link>
        </div>
    </div>
  );
}
