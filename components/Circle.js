'use client';
import Image from 'next/image'
import React from 'react'

export default function Circle() {

    return (
        <>
            <div className='CircleWrapper relative justify-center items-center flex flex-col gap-2'>
                <div className='circle-box1 w-full flex gap-2 justify-between'>
                    <div className='circlebox border w-full backdrop-blur-[15px] rounded-lg md:p-5 md:py-18 p-2'>
                        <span className='font-bold md:text-2xl text-sm'>
                            Landing pages <br />
                            Retargeting<br />
                            Funnels
                        </span>
                    </div>
                    <div className='circlebox border text-right w-full backdrop-blur-[15px] rounded-lg md:p-5 md:py-18 p-2'>
                        <span className='font-bold md:text-2xl text-sm'>
                            Paids Ads<br />
                            Social<br />
                            SEO
                        </span>
                    </div>
                </div>
                <div className='circle-box2 w-full flex gap-2 justify-between'>
                    <div className='circlebox border w-full backdrop-blur-[15px] rounded-lg md:p-5 md:py-18 p-2'>
                        <span className='font-bold md:text-2xl text-sm'>
                            Email<br />
                            CRM Sync<br />
                            Loyalty Programs
                        </span>
                    </div>
                    <div className='circlebox border w-full text-right backdrop-blur-[15px] rounded-lg md:p-5 md:py-18 p-2'>
                        <span className='font-bold md:text-2xl text-sm  w-full'>
                            Content<br />
                            Video<br />
                            Interactive Posts
                        </span>
                    </div>
                </div>
                <div className='middlecircle absolute rounded-full flex justify-center items-center m-auto w-[50%] h-[100%] py-5'>
                    <div className='middleCircleWrap rounded-full w-[100%] h-[100%] flex gap-2 p-7'>
                        <div className='bottomShapWrap flex flex-col gap-2'>
                            <div className='shape shape3 flex justify-center items-center relative'>
                                <Image src="/images/d4.svg" width={600} height={600} alt='flow-shape' className='md:h-[193.19px] h-11' />
                            </div>
                            <div className='shape shape4 flex justify-center items-center relative'>
                                <Image src="/images/d3.svg" width={600} height={600} alt='flow-shape' className='md:h-[193.19px] h-11' />
                                {/* <span className='absolute' ref={spanRef3}>Retention</span> */}
                            </div>
                        </div>
                        <div className='topShapWrap flex flex-col gap-2'>
                            <div className='shape shape1 flex justify-center items-center relative'>
                                <Image src="/images/d1.svg" width={600} height={600} alt='flow-shape' className='md:h-[193.19px] h-11' />
                                {/* <span className='absolute' ref={spanRef2}>Retention</span> */}
                            </div>
                            <div className='shape shape2 flex justify-center items-center relative'>
                                <Image src="/images/d2.svg" width={600} height={600} alt='flow-shape' className='md:h-[193.19px] h-11' />
                                {/* <span className='absolute' ref={spanRef4}>Retention</span> */}
                            </div>
                        </div>
                        <svg viewBox="0 0 150 150" className='roundSvg absolute top-0 left-0' preserveAspectRatio="xMidYMid meet">
                            <circle class="bg-circle" cx="75" cy="75" r="70" />
                            <circle class="progress-circle" cx="75" cy="75" r="70" />
                        </svg>
                    </div>
                    <div className='centerIcon absolute'>
                        <Image src="/icons/target.svg" width={90} height={90} alt='target'></Image>
                    </div>
                </div>
            </div>
        </>
    )
}
