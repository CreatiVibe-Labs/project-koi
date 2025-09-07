import Image from 'next/image';
import Link from 'next/link';

export default function MainServicesCard({
    bgImage,
    Icon,
    video,
    Heading,
    Description,
    LinkURL,
    Button,
}) {
    return (
        <div className="mainWrapper">
            <div className="bgImage">
                {video && <video className="lg:rounded rounded-0" autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>}
                {bgImage && <Image src={bgImage} width={6000} height={6000} alt="bg image"></Image>}
            </div>
            <div className='serviceContent'>

                <div className='Icon !w-full flex justify-end'>
                    <Image src={Icon} width={6000} height={6000} alt="icon image" className='md:!w-[80px] md:h-full h-[50px] !w-[50px] '></Image>
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