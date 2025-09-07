'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HowItWorks({ lang, ASSETS_URL, apiData }) {

    const [activeStep, setActiveStep] = useState(1);

    // Animate steps 1-6 in a loop
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep(prev => (prev % 6) + 1);
        }, 1000); // Change every 1.5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="howItWorksSvg relative flex justify-center items-center">
                <svg width="424" height="424" viewBox="0 0 424 424" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M116.612 269.57C124.041 281.913 133.993 292.713 145.486 301.269L142.122 332.266L167.212 313.892C179.406 319.222 190.984 322.439 205 323V424C129.451 422.317 65.1625 380.873 29 320L116.612 269.57Z" fill={activeStep == 4 ? '#00FF00' : '#ACEDBB'} />
                    <path d="M307.395 269.57C299.966 281.913 290.014 292.713 278.521 301.269L281.885 332.266L256.795 313.892C244.601 319.222 232.016 322.439 218 323V424C293.549 422.317 358.838 380.873 395 320L307.395 269.57Z" fill={activeStep == 3 ? '#00FF00' : '#ACEDBB'} />
                    <path d="M399 113L311.695 162.702C317.296 173.948 321.077 186.46 322.478 199.534L350.904 212.046L322.478 224.558C320.937 237.632 317.296 250.003 311.695 261.391L399.074 312C414.897 282.197 423.999 248.176 423.999 212.046C423.999 175.917 414.823 142.803 399 113Z" fill={activeStep == 2 ? '#00FF00' : '#ACEDBB'} />
                    <path d="M25 113L112.305 162.703C106.704 173.95 102.923 186.462 101.522 199.536L73.0965 212.048L101.522 224.56C103.063 237.634 106.704 250.005 112.305 261.392L25 313C9.17669 283.197 0.00121307 248.177 0.00121307 212.048C0.00121307 175.918 9.17669 142.803 25 113Z" fill={activeStep == 5 ? '#00FF00' : '#ACEDBB'} />
                    <path d="M142.157 91.5475L145.536 122.531C133.99 131.083 123.992 141.878 116.529 154.215L29 103C65.329 42.1553 128.963 1.54215 205 0V101C190.919 101.561 179.753 104.726 167.503 110.053L142.157 91.5475Z" fill={activeStep == 6 ? '#00FF00' : '#ACEDBB'} />
                    <path d="M281.83 91.6195L278.451 122.627C289.996 131.186 299.992 141.989 307.454 154.336L395 103C358.676 42.1074 293.027 1.54336 217 0V101C231.079 101.561 244.239 104.808 256.488 110.14L281.83 91.6195Z" fill={activeStep == 1 ? '#00FF00' : '#ACEDBB'} />
                    <path d="M294.296 53.592V45.96H307.592V81H299.048V53.592H294.296Z" fill="black" />
                    <path d="M132.488 53.416C132.232 52.232 131.784 51.352 131.144 50.776C130.504 50.168 129.592 49.864 128.408 49.864C126.584 49.864 125.272 50.664 124.472 52.264C123.672 53.832 123.256 56.328 123.224 59.752C123.928 58.632 124.936 57.752 126.248 57.112C127.592 56.472 129.064 56.152 130.664 56.152C133.8 56.152 136.312 57.144 138.2 59.128C140.12 61.112 141.08 63.88 141.08 67.432C141.08 69.768 140.6 71.816 139.64 73.576C138.712 75.336 137.336 76.712 135.512 77.704C133.72 78.696 131.592 79.192 129.128 79.192C124.2 79.192 120.776 77.656 118.856 74.584C116.936 71.48 115.976 67.032 115.976 61.24C115.976 55.16 116.984 50.648 119 47.704C121.048 44.728 124.312 43.24 128.792 43.24C131.192 43.24 133.208 43.72 134.84 44.68C136.504 45.608 137.752 46.84 138.584 48.376C139.448 49.912 139.96 51.592 140.12 53.416H132.488ZM128.696 62.632C127.32 62.632 126.168 63.048 125.24 63.88C124.344 64.68 123.896 65.832 123.896 67.336C123.896 68.872 124.312 70.072 125.144 70.936C126.008 71.8 127.224 72.232 128.792 72.232C130.2 72.232 131.304 71.816 132.104 70.984C132.936 70.12 133.352 68.952 133.352 67.48C133.352 65.976 132.952 64.792 132.152 63.928C131.352 63.064 130.2 62.632 128.696 62.632Z" fill="black" />
                    <path d="M115.352 373.76V367.136L130.52 345.44H139.688V366.656H143.624V373.76H139.688V380H131.48V373.76H115.352ZM132.056 354.464L123.992 366.656H132.056V354.464Z" fill="black" />
                    <path d="M359.872 218.424C360.96 217.56 361.456 217.16 361.36 217.224C364.496 214.632 366.96 212.504 368.752 210.84C370.576 209.176 372.112 207.432 373.36 205.608C374.608 203.784 375.232 202.008 375.232 200.28C375.232 198.968 374.928 197.944 374.32 197.208C373.712 196.472 372.8 196.104 371.584 196.104C370.368 196.104 369.408 196.568 368.704 197.496C368.032 198.392 367.696 199.672 367.696 201.336H359.776C359.84 198.616 360.416 196.344 361.504 194.52C362.624 192.696 364.08 191.352 365.872 190.488C367.696 189.624 369.712 189.192 371.92 189.192C375.728 189.192 378.592 190.168 380.512 192.12C382.464 194.072 383.44 196.616 383.44 199.752C383.44 203.176 382.272 206.36 379.936 209.304C377.6 212.216 374.624 215.064 371.008 217.848H383.968V224.52H359.872V218.424Z" fill="black" />
                    <path d="M55.832 197.112H40.856V203.736C41.496 203.032 42.392 202.456 43.544 202.008C44.696 201.56 45.944 201.336 47.288 201.336C49.688 201.336 51.672 201.88 53.24 202.968C54.84 204.056 56.008 205.464 56.744 207.192C57.48 208.92 57.848 210.792 57.848 212.808C57.848 216.552 56.792 219.528 54.68 221.736C52.568 223.912 49.592 225 45.752 225C43.192 225 40.968 224.568 39.08 223.704C37.192 222.808 35.736 221.576 34.712 220.008C33.688 218.44 33.128 216.632 33.032 214.584H41.048C41.24 215.576 41.704 216.408 42.44 217.08C43.176 217.72 44.184 218.04 45.464 218.04C46.968 218.04 48.088 217.56 48.824 216.6C49.56 215.64 49.928 214.36 49.928 212.76C49.928 211.192 49.544 209.992 48.776 209.16C48.008 208.328 46.888 207.912 45.416 207.912C44.328 207.912 43.432 208.184 42.728 208.728C42.024 209.24 41.56 209.928 41.336 210.792H33.416V189.912H55.832V197.112Z" fill="black" />
                    <path d="M288.448 354.848C288.576 351.424 289.696 348.784 291.808 346.928C293.92 345.072 296.784 344.144 300.4 344.144C302.8 344.144 304.848 344.56 306.544 345.392C308.272 346.224 309.568 347.36 310.432 348.8C311.328 350.24 311.776 351.856 311.776 353.648C311.776 355.76 311.248 357.488 310.192 358.832C309.136 360.144 307.904 361.04 306.496 361.52V361.712C308.32 362.32 309.76 363.328 310.816 364.736C311.872 366.144 312.4 367.952 312.4 370.16C312.4 372.144 311.936 373.904 311.008 375.44C310.112 376.944 308.784 378.128 307.024 378.992C305.296 379.856 303.232 380.288 300.832 380.288C296.992 380.288 293.92 379.344 291.616 377.456C289.344 375.568 288.144 372.72 288.016 368.912H295.984C296.016 370.32 296.416 371.44 297.184 372.272C297.952 373.072 299.072 373.472 300.544 373.472C301.792 373.472 302.752 373.12 303.424 372.416C304.128 371.68 304.48 370.72 304.48 369.536C304.48 368 303.984 366.896 302.992 366.224C302.032 365.52 300.48 365.168 298.336 365.168H296.8V358.496H298.336C299.968 358.496 301.28 358.224 302.272 357.68C303.296 357.104 303.808 356.096 303.808 354.656C303.808 353.504 303.488 352.608 302.848 351.968C302.208 351.328 301.328 351.008 300.208 351.008C298.992 351.008 298.08 351.376 297.472 352.112C296.896 352.848 296.56 353.76 296.464 354.848H288.448Z" fill="black" />
                </svg>

                <Image src='/images/logo.png' width={600} height={600} alt="logo" className='absolute w-[40%]' />
            </div>

            <div className='howItWorksText'>
                <div className={`textStep textStep1 ${activeStep == 1 ? 'active' : ''}`}>
                    <h6 className='md:!text-[28px] !text-[40px] text-right'>{apiData?.content?.point_1_heading?.[lang] || "Assessment"}</h6>
                    <p className='text-right md:!text-[18px] !text-2xl'>{apiData?.content?.point_1_description?.[lang] || "We begin by understanding your needs, goals, and technical environment"}</p>
                </div>
                <div className={`textStep textStep2 ${activeStep == 2 ? 'active' : ''}`}>
                    <h6 className='md:!text-[28px] !text-[40px] text-right'>{apiData?.content?.point_2_heading?.[lang] || "Design"}</h6>
                    {/* <p className='text-right !text-[21px]'>We begin by understanding your needs, goals, and technical environment</p> */}
                    <p className='text-right md:!text-[18px] !text-2xl'>{apiData?.content?.point_2_description?.[lang] || "Wireframes and prototypes shape the ideal user experience."}</p>
                </div>
                <div className={`textStep textStep3 ${activeStep == 3 ? 'active' : ''}`}>
                    <h6 className='md:!text-[28px] !text-[40px] text-right'>{apiData?.content?.point_3_heading?.[lang] || "Development"}</h6>
                    {/* <p className='text-right !text-[21px]'>We begin by understanding your needs, goals, and technical environment</p> */}
                    <p className='text-right md:!text-[18px] !text-2xl'>{apiData?.content?.point_3_description?.[lang] || "Our engineers bring your solution to life using agile sprints."}</p>
                </div>
                <div className={`textStep textStep4 ${activeStep == 4 ? 'active' : ''}`}>
                    <h6 className='md:!text-[28px] !text-[40px] '>{apiData?.content?.point_4_heading?.[lang] || "Testing"}</h6>
                    {/* <p className='text-left !text-[21px]'>We begin by understanding your needs, goals, and technical environment</p> */}
                    <p className='md:!text-[18px] !text-2xl'>{apiData?.content?.point_4_description?.[lang] || "Rigorous QA ensures functionality, security, and performance."}</p>
                </div>
                <div className={`textStep textStep5 ${activeStep == 5 ? 'active' : ''}`}>
                    <h6 className='md:!text-[28px] !text-[40px] '> {apiData?.content?.point_5_heading?.[lang] || "Deployment"}</h6>
                    {/* <p className='text-left !text-[21px]'>We begin by understanding your needs, goals, and technical environment</p> */}
                    <p className='md:!text-[18px] !text-2xl'>{apiData?.content?.point_5_description?.[lang] || "We handle rollout, scaling"}</p>
                </div>
                <div className={`textStep textStep6 ${activeStep == 6 ? 'active' : ''}`}>
                    <h6 className='md:!text-[28px] !text-[40px] '>{apiData?.content?.point_6_heading?.[lang] || "Support"}</h6>
                    {/* <p className='text-left !text-[21px]'>We begin by understanding your needs, goals, and technical environment</p> */}
                    <p className='md:!text-[18px] !text-2xl'>{apiData?.content?.point_6_description?.[lang] || "We provide ongoing support as needed."}</p>
                </div>
            </div>
        </>
    )
}
