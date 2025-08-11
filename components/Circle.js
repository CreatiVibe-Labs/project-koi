'use client';
import Image from 'next/image'
import React from 'react'
import { useEffect, useRef, useState } from 'react';


export default function Circle() {
    const spanRef = useRef(null);
    const spanRef2 = useRef(null);
    const spanRef3 = useRef(null);
    const spanRef4 = useRef(null);

    const [isReverse, setIsReverse] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsReverse((prev) => !prev); // Toggle state
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll('.roundSvg');
        elements.forEach((el) => {
            if (isReverse) {
                el.classList.add('reverse');
            } else {
                el.classList.remove('reverse');
            }
        });
    }, [isReverse]);

    useEffect(() => {

        const curved1 = () => {

            const originalSpan = spanRef.current;
            if (!originalSpan) return;

            const text = originalSpan.innerText;
            const radius = 100;
            const len = text.length;
            const delta = 70 / (len - 1); // Angle step for 180° arc

            // Create container div to hold curved letters
            const curvedContainer = document.createElement('div');
            curvedContainer.style.position = 'relative';

            for (let i = 0; i < len; i++) {
                const charSpan = document.createElement('span');
                charSpan.innerText = text[i];

                const rotate = -90 + i * delta;

                Object.assign(charSpan.style, {
                    position: 'absolute',
                    paddingLeft: '1px',
                    top: '50%',
                    left: '50%',
                    color: '#46f3f0',
                    fontWeight: 'semibold',
                    transformOrigin: 'bottom center',
                    transform: `rotate(${rotate}deg) translateY(-${radius}px)`,
                    fontSize: '24px',
                });

                curvedContainer.appendChild(charSpan);
            }

            // Replace the original span with the curved version
            originalSpan.replaceWith(curvedContainer);
        }

        const curved2 = () => {

            const originalSpan = spanRef2.current;
            if (!originalSpan) return;

            const text = originalSpan.innerText;
            const radius = 100;
            const len = text.length;
            const delta = 70 / (len - 1); // Angle step for 180° arc

            // Create container div to hold curved letters
            const curvedContainer = document.createElement('div');
            curvedContainer.style.position = 'relative';

            for (let i = 0; i < len; i++) {
                const charSpan = document.createElement('span');
                charSpan.innerText = text[i];

                const rotate = -90 + i * delta;

                Object.assign(charSpan.style, {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    color: '#FFFF66',
                    fontWeight: 'semibold',
                    transformOrigin: 'bottom center',
                    transform: `rotate(${rotate}deg) translateY(-${radius}px)`,
                    fontSize: '24px',
                });

                curvedContainer.appendChild(charSpan);
            }

            // Replace the original span with the curved version
            originalSpan.replaceWith(curvedContainer);
        }

        const curved3 = () => {

            const originalSpan = spanRef3.current;
            if (!originalSpan) return;

            const text = originalSpan.innerText;
            const radius = 100;
            const len = text.length;
            const delta = 70 / (len - 1); // Angle step for 180° arc

            // Create container div to hold curved letters
            const curvedContainer = document.createElement('div');
            curvedContainer.style.position = 'relative';

            for (let i = 0; i < len; i++) {
                const charSpan = document.createElement('span');
                charSpan.innerText = text[i];

                const rotate = -90 + i * delta;

                Object.assign(charSpan.style, {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    color: '#FFBF00',
                    fontWeight: 'semibold',
                    transform: `rotate(${rotate}deg) translateY(${radius}px) rotateY(180deg)`,
                    transformOrigin: 'top center',
                    fontSize: '24px',
                });

                curvedContainer.appendChild(charSpan);
            }

            // Replace the original span with the curved version
            originalSpan.replaceWith(curvedContainer);
        }

        const curved4 = () => {

            const originalSpan = spanRef4.current;
            if (!originalSpan) return;

            const text = originalSpan.innerText;
            const radius = 100;
            const len = text.length;
            const delta = 70 / (len - 1); // Angle step for 180° arc

            // Create container div to hold curved letters
            const curvedContainer = document.createElement('div');
            curvedContainer.style.position = 'relative';

            for (let i = 0; i < len; i++) {
                const charSpan = document.createElement('span');
                charSpan.innerText = text[i];

                const rotate = -90 + i * delta;

                Object.assign(charSpan.style, {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    color: '#FF13F0',
                    fontWeight: 'semibold',
                    transform: `rotate(${rotate}deg) translateY(${radius}px) rotateY(180deg)`,
                    transformOrigin: 'top center',
                    fontSize: '24px',
                });

                curvedContainer.appendChild(charSpan);
            }

            // Replace the original span with the curved version
            originalSpan.replaceWith(curvedContainer);
        }

        curved1();
        curved2();
        curved3();
        curved4();
    }, []);

    return (
        <>
            <div className='CircleWrapper relative justify-center items-center flex flex-col gap-2'>
                <div className='circle-box1 w-full flex gap-2 justify-between'>
                    <div className='circlebox border w-full backdrop-blur-[15px] rounded-lg p-5 py-18'>
                        <span className='font-bold text-2xl'>
                            Landing pages <br />
                            Retargeting<br />
                            Funnels
                        </span>
                    </div>
                    <div className='circlebox border text-right w-full backdrop-blur-[15px] rounded-lg p-5 py-18'>
                        <span className='font-bold text-2xl'>
                            Paids Ads<br />
                            Social<br />
                            SEO
                        </span>
                    </div>
                </div>
                <div className='circle-box2 w-full flex gap-2 justify-between'>
                    <div className='circlebox border w-full backdrop-blur-[15px] rounded-lg p-5 py-18'>
                        <span className='font-bold text-2xl'>
                            Email<br />
                            CRM Sync<br />
                            Loyalty Programs
                        </span>
                    </div>
                    <div className='circlebox border w-full text-right backdrop-blur-[15px] rounded-lg p-5 py-18'>
                        <span className='font-bold text-2xl  w-full'>
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
                                <Image src="/images/4.png" width={600} height={600} alt='flow-shape' />
                                <span className='absolute' ref={spanRef}>Retention</span>
                            </div>
                            <div className='shape shape4 flex justify-center items-center relative'>
                                <Image src="/images/3.png" width={600} height={600} alt='flow-shape' />
                                {/* <span className='absolute' ref={spanRef3}>Retention</span> */}
                                <span className='absolute' ref={spanRef3}>Conversion</span>
                            </div>
                        </div>
                        <div className='topShapWrap flex flex-col gap-2'>
                            <div className='shape shape1 flex justify-center items-center relative'>
                                <Image src="/images/1.png" width={600} height={600} alt='flow-shape' />
                                {/* <span className='absolute' ref={spanRef2}>Retention</span> */}
                                <span className='absolute' ref={spanRef2}>Awareness</span>
                            </div>
                            <div className='shape shape2 flex justify-center items-center relative'>
                                <Image src="/images/2.png" width={600} height={600} alt='flow-shape' />
                                {/* <span className='absolute' ref={spanRef4}>Retention</span> */}
                                <span className='absolute' ref={spanRef4}>Engagement</span>
                            </div>
                        </div>
                        <svg viewBox="0 0 150 150" className='roundSvg absolute top-0 left-0' preserveAspectRatio="xMidYMid meet">
                            <circle class="bg-circle" cx="75" cy="75" r="70" />
                            <circle class="progress-circle" cx="75" cy="75" r="70" />
                        </svg>
                    </div>
                    <div className='centerIcon absolute'>
                        <Image src="/icons/target.svg" width={170} height={170} alt='target'></Image>
                    </div>
                </div>
            </div>
        </>
    )
}
