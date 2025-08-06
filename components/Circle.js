import Image from 'next/image'
import React from 'react'

export default function Circle() {
    return (
        <>

            <div className="grid grid-cols-2 gap-5 relative circled">
                <div className="gradient-background py-10 md:py-20 px-5 rounded-2xl relative topLeft">
                    <span className="text-white font-bold text-2xl">
                        Landing pages<br />
                        Retargeing<br />
                        Funnel<br />
                    </span>
                    <span className='text-[#46f3f0] absolute topLeftText'>Retention</span>


                </div>
                <div className="gradient-background py-10 md:py-20 px-5 rounded-2xl relative text-end topRight">
                    <span className="text-white font-bold text-2xl">
                        Paids<br />
                        Ads<br />
                        SEO<br />
                    </span>
                </div>
                <div className="gradient-background py-10 md:py-20 px-5 rounded-2xl relative bottomLeft">
                    <span className="text-white font-bold text-2xl">
                        Email<br />
                        CRM Sync<br />
                        Loyalty Programs<br />
                    </span>
                </div>
                <div className="gradient-background py-10 md:py-20 px-5 rounded-2xl relative text-end bottomRight">
                    <span className="text-white font-bold text-2xl">
                        Content<br />
                        Video<br />
                        Interactive Posts<br />
                    </span>
                </div>

                <div className='absolute start-[355px] top-[190px]'>
                    <Image src='/icons/target.svg' width={150} height={150} alt="Hero Image"></Image>
                </div>
            </div>
        </>
    )
}
