'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HowItWorks() {
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
                {/* <svg width="597" height="594" viewBox="0 0 597 594" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>

                        <path id="myPath"
                            d="M432.468 377.583C422.017 394.871 408.016 409.998 391.846 421.982L396.578 465.398L361.28 439.662C344.124 447.128 325.39 451.646 305.67 452.432V593.879C411.96 591.521 504.649 533.258 555.526 447.997L432.468 377.583Z" fill="#ACEDBB" >
                        </path>

                            <rect id="new6" width="66" height="56" fill="#ACEDBB" />

                        <text fontSize="20" fill="blue">
                            <textPath href="#new6" startOffset="0%">
                                1
                            </textPath>
                        </text>
                    </g>
                    <path d="M164.057 377.586C174.509 394.874 188.51 410.001 204.68 421.985L199.947 465.401L235.246 439.665C252.402 447.131 271.136 451.649 290.855 452.435V593.882C184.566 591.524 91.8771 533.261 41 448L164.057 377.586Z" fill="#ACEDBB" />
                    <path d="M561.458 157L438.525 227.886C446.406 243.639 451.725 261.163 453.695 279.475L493.687 297L453.695 314.525C451.528 332.837 446.406 350.165 438.525 366.114L561.458 437C583.72 395.256 596.525 347.605 596.525 297C596.525 246.395 583.72 198.744 561.458 157Z" fill="#ACEDBB" />
                    <path d="M35.0674 157L158 227.886C150.12 243.639 144.8 261.163 142.83 279.475L102.838 297L142.83 314.525C144.997 332.837 150.12 350.165 158 366.114L35.0674 437C12.8055 395.256 -1.70894e-06 347.605 -1.70894e-06 297C-1.70894e-06 246.395 12.8055 198.744 35.0674 157Z" fill="#ACEDBB" />
                    <path d="M396.525 128.225L391.77 171.622C408.015 183.6 422.08 198.72 432.58 216L556 145C504.889 59.7782 411.977 2.16 305 0V141.382C324.811 142.167 343.631 146.684 360.866 154.145L396.525 128.225Z" fill="#ACEDBB" />
                    <path d="M200.001 128.225L204.755 171.622C188.51 183.6 174.445 198.72 163.945 216L40.5254 145C91.6367 59.7782 184.548 2.16 291.525 0V141.382C271.715 142.167 252.895 146.684 235.66 154.145L200.001 128.225Z" fill="#ACEDBB" />

                </svg> */}
                {/* <svg width="597" height="594" viewBox="0 0 597 594" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M164.057 377.586C174.509 394.874 188.51 410.001 204.68 421.985L199.947 465.401L235.246 439.665C252.402 447.131 271.136 451.649 290.855 452.435V593.882C184.566 591.524 91.8771 533.261 41 448L164.057 377.586Z" fill={activeStep == 4 ? '#00FF00' : '#ACEDBB'} />
                    <path d="M432.468 377.586C422.017 394.874 408.016 410.001 391.845 421.985L396.578 465.401L361.28 439.665C344.124 447.131 325.39 451.649 305.67 452.435V593.882C411.96 591.524 504.648 533.261 555.525 448L432.468 377.586Z" fill={activeStep == 3 ? '#00FF00' : '#ACEDBB'} />
                    <path d="M561.458 157L438.525 227.886C446.406 243.639 451.725 261.163 453.695 279.475L493.687 297L453.695 314.525C451.528 332.837 446.406 350.165 438.525 366.114L561.458 437C583.72 395.256 596.525 347.605 596.525 297C596.525 246.395 583.72 198.744 561.458 157Z" fill={activeStep == 2 ? '#00FF00' : '#ACEDBB'} />
                    <path d="M35.0674 157L158 227.886C150.12 243.639 144.8 261.163 142.83 279.475L102.838 297L142.83 314.525C144.997 332.837 150.12 350.165 158 366.114L35.0674 437C12.8055 395.256 0 347.605 0 297C0 246.395 12.8055 198.744 35.0674 157Z" fill={activeStep == 5 ? '#00FF00' : '#ACEDBB'} />
                    <path d="M200.001 128.225L204.755 171.622C188.51 183.6 174.445 198.72 163.945 216L40.5254 145C91.6367 59.7782 184.548 2.16 291.525 0V141.382C271.715 142.167 252.895 146.684 235.66 154.145L200.001 128.225Z" fill={activeStep == 6 ? '#00FF00' : '#ACEDBB'} />
                    <path d="M396.525 128.225L391.77 171.622C408.015 183.6 422.08 198.72 432.58 216L556 145C504.889 59.7782 411.977 2.16 305 0V141.382C324.811 142.167 343.631 146.684 360.866 154.145L396.525 128.225Z" fill={activeStep == 1 ? '#00FF00' : '#ACEDBB'} />
                    <path d="M404.296 87.592V79.96H417.592V115H409.048V87.592H404.296Z" fill="black" />
                    <path d="M189.488 89.416C189.232 88.232 188.784 87.352 188.144 86.776C187.504 86.168 186.592 85.864 185.408 85.864C183.584 85.864 182.272 86.664 181.472 88.264C180.672 89.832 180.256 92.328 180.224 95.752C180.928 94.632 181.936 93.752 183.248 93.112C184.592 92.472 186.064 92.152 187.664 92.152C190.8 92.152 193.312 93.144 195.2 95.128C197.12 97.112 198.08 99.88 198.08 103.432C198.08 105.768 197.6 107.816 196.64 109.576C195.712 111.336 194.336 112.712 192.512 113.704C190.72 114.696 188.592 115.192 186.128 115.192C181.2 115.192 177.776 113.656 175.856 110.584C173.936 107.48 172.976 103.032 172.976 97.24C172.976 91.16 173.984 86.648 176 83.704C178.048 80.728 181.312 79.24 185.792 79.24C188.192 79.24 190.208 79.72 191.84 80.68C193.504 81.608 194.752 82.84 195.584 84.376C196.448 85.912 196.96 87.592 197.12 89.416H189.488ZM185.696 98.632C184.32 98.632 183.168 99.048 182.24 99.88C181.344 100.68 180.896 101.832 180.896 103.336C180.896 104.872 181.312 106.072 182.144 106.936C183.008 107.8 184.224 108.232 185.792 108.232C187.2 108.232 188.304 107.816 189.104 106.984C189.936 106.12 190.352 104.952 190.352 103.48C190.352 101.976 189.952 100.792 189.152 99.928C188.352 99.064 187.2 98.632 185.696 98.632Z" fill="black" />
                    <path d="M172.352 506.76V500.136L187.52 478.44H196.688V499.656H200.624V506.76H196.688V513H188.48V506.76H172.352ZM189.056 487.464L180.992 499.656H189.056V487.464Z" fill="black" />
                    <path d="M513.872 301.424C514.96 300.56 515.456 300.16 515.36 300.224C518.496 297.632 520.96 295.504 522.752 293.84C524.576 292.176 526.112 290.432 527.36 288.608C528.608 286.784 529.232 285.008 529.232 283.28C529.232 281.968 528.928 280.944 528.32 280.208C527.712 279.472 526.8 279.104 525.584 279.104C524.368 279.104 523.408 279.568 522.704 280.496C522.032 281.392 521.696 282.672 521.696 284.336H513.776C513.84 281.616 514.416 279.344 515.504 277.52C516.624 275.696 518.08 274.352 519.872 273.488C521.696 272.624 523.712 272.192 525.92 272.192C529.728 272.192 532.592 273.168 534.512 275.12C536.464 277.072 537.44 279.616 537.44 282.752C537.44 286.176 536.272 289.36 533.936 292.304C531.6 295.216 528.624 298.064 525.008 300.848H537.968V307.52H513.872V301.424Z" fill="black" />
                    <path d="M84.832 286.112H69.856V292.736C70.496 292.032 71.392 291.456 72.544 291.008C73.696 290.56 74.944 290.336 76.288 290.336C78.688 290.336 80.672 290.88 82.24 291.968C83.84 293.056 85.008 294.464 85.744 296.192C86.48 297.92 86.848 299.792 86.848 301.808C86.848 305.552 85.792 308.528 83.68 310.736C81.568 312.912 78.592 314 74.752 314C72.192 314 69.968 313.568 68.08 312.704C66.192 311.808 64.736 310.576 63.712 309.008C62.688 307.44 62.128 305.632 62.032 303.584H70.048C70.24 304.576 70.704 305.408 71.44 306.08C72.176 306.72 73.184 307.04 74.464 307.04C75.968 307.04 77.088 306.56 77.824 305.6C78.56 304.64 78.928 303.36 78.928 301.76C78.928 300.192 78.544 298.992 77.776 298.16C77.008 297.328 75.888 296.912 74.416 296.912C73.328 296.912 72.432 297.184 71.728 297.728C71.024 298.24 70.56 298.928 70.336 299.792H62.416V278.912H84.832V286.112Z" fill="black" />
                    <path d="M400.448 487.848C400.576 484.424 401.696 481.784 403.808 479.928C405.92 478.072 408.784 477.144 412.4 477.144C414.8 477.144 416.848 477.56 418.544 478.392C420.272 479.224 421.568 480.36 422.432 481.8C423.328 483.24 423.776 484.856 423.776 486.648C423.776 488.76 423.248 490.488 422.192 491.832C421.136 493.144 419.904 494.04 418.496 494.52V494.712C420.32 495.32 421.76 496.328 422.816 497.736C423.872 499.144 424.4 500.952 424.4 503.16C424.4 505.144 423.936 506.904 423.008 508.44C422.112 509.944 420.784 511.128 419.024 511.992C417.296 512.856 415.232 513.288 412.832 513.288C408.992 513.288 405.92 512.344 403.616 510.456C401.344 508.568 400.144 505.72 400.016 501.912H407.984C408.016 503.32 408.416 504.44 409.184 505.272C409.952 506.072 411.072 506.472 412.544 506.472C413.792 506.472 414.752 506.12 415.424 505.416C416.128 504.68 416.48 503.72 416.48 502.536C416.48 501 415.984 499.896 414.992 499.224C414.032 498.52 412.48 498.168 410.336 498.168H408.8V491.496H410.336C411.968 491.496 413.28 491.224 414.272 490.68C415.296 490.104 415.808 489.096 415.808 487.656C415.808 486.504 415.488 485.608 414.848 484.968C414.208 484.328 413.328 484.008 412.208 484.008C410.992 484.008 410.08 484.376 409.472 485.112C408.896 485.848 408.56 486.76 408.464 487.848H400.448Z" fill="black" />
                </svg> */}

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

            {/* <div className='ChartText'>
                <div className='topGroup flex justify-between w-full gap-1'>
                    <div className='6 w-full relative flex justify-start'>
                        <svg width="700" className='!w-full' height="240" viewBox="0 0 708 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 120L120.281 240H448.244C500.282 150.864 596.682 90.3381 707.531 88.0664V0H120.281L11 120Z" fill="white" fill-opacity="0.29" />
                            <path d="M11 120L120.281 240H448.244C500.282 150.864 596.682 90.3381 707.531 88.0664V0H120.281L11 120Z" fill="url(#paint0_linear_796_53576)" fill-opacity="0.5" />
                            <path d="M120.281 0H108.855L0 120L108.855 240H120.285L11 120L120.281 0Z" fill="white" fill-opacity="0.29" />
                            <path d="M120.281 0H108.855L0 120L108.855 240H120.285L11 120L120.281 0Z" fill="url(#paint1_linear_796_53576)" fill-opacity="0.5" />
                            <defs>
                                <linearGradient id="paint0_linear_796_53576" x1="359.266" y1="0" x2="359.266" y2="240" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.6" />
                                    <stop offset="1" stop-color="#999999" stop-opacity="0.3" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_796_53576" x1="60.1426" y1="0" x2="60.1426" y2="240" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.6" />
                                    <stop offset="1" stop-color="#999999" stop-opacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className='content flex flex-col gap-1 absolute top-0'>
                            <span className='text-4xl'>Assessment</span>
                            <span className='text-[22px]'>We begin by understanding your needs, goals, and technical environment</span>
                        </div>
                    </div>
                    <div className='1 w-full relative flex justify-end'>
                        <svg width="700" className='!w-full' height="240" viewBox="0 0 708 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M697 120L587.775 240H259.753C207.724 150.88 111.349 90.3605 0.525391 88.0684V0H587.775L697 120Z" fill="white" fill-opacity="0.29" />
                            <path d="M697 120L587.775 240H259.753C207.724 150.88 111.349 90.3605 0.525391 88.0684V0H587.775L697 120Z" fill="url(#paint0_linear_796_53562)" fill-opacity="0.5" />
                            <path d="M587.773 0H599.145L708 120L599.145 240H587.773L697 120L587.773 0Z" fill="white" fill-opacity="0.29" />
                            <path d="M587.773 0H599.145L708 120L599.145 240H587.773L697 120L587.773 0Z" fill="url(#paint1_linear_796_53562)" fill-opacity="0.5" />
                            <defs>
                                <linearGradient id="paint0_linear_796_53562" x1="348.763" y1="0" x2="348.763" y2="240" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.6" />
                                    <stop offset="1" stop-color="#999999" stop-opacity="0.3" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_796_53562" x1="647.887" y1="0" x2="647.887" y2="240" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.6" />
                                    <stop offset="1" stop-color="#999999" stop-opacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className='content flex flex-col gap-1 absolute top-0'>
                            <span className='text-4xl'>Assessment</span>
                            <span className='text-[22px]'>We begin by understanding your needs, goals, and technical environment</span>
                        </div>
                    </div>
                </div>
                <div className='middleGroup flex justify-between w-full'>
                    <div className='5 w-full relative flex justify-start'>

                        <svg width="436" height="304" viewBox="0 0 441 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M120.045 0H108.944L0.525312 140L108.944 280H120.045L11.4375 140L120.045 0Z" fill="white" fill-opacity="0.29" />
                            <path d="M120.045 0H108.944L0.525312 140L108.944 280H120.045L11.4375 140L120.045 0Z" fill="url(#paint0_linear_796_53581)" fill-opacity="0.5" />
                            <path d="M11.4365 140L120.044 280H440.66C418.682 238.099 406.261 190.487 406.261 140C406.261 89.5133 418.682 41.9013 440.66 0H120.044L11.4365 140Z" fill="white" fill-opacity="0.29" />
                            <path d="M11.4365 140L120.044 280H440.66C418.682 238.099 406.261 190.487 406.261 140C406.261 89.5133 418.682 41.9013 440.66 0H120.044L11.4365 140Z" fill="url(#paint1_linear_796_53581)" fill-opacity="0.5" />
                            <defs>
                                <linearGradient id="paint0_linear_796_53581" x1="60.2851" y1="0" x2="60.2851" y2="280" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.6" />
                                    <stop offset="1" stop-color="#999999" stop-opacity="0.3" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_796_53581" x1="226.048" y1="0" x2="226.048" y2="280" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.6" />
                                    <stop offset="1" stop-color="#999999" stop-opacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>


                        <div className='content flex flex-col gap-1 absolute top-0'>
                            <span className='text-4xl'>Assessment</span>
                            <span className='text-[22px]'>We begin by understanding your needs, goals, and technical environment</span>
                        </div>
                    </div>
                    <div className='2 w-full relative flex justify-end'>

                        <svg width="436" height="304" viewBox="0 0 441 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M321.012 0H332.112L440.531 140L332.112 280H321.012L429.619 140L321.012 0Z" fill="white" fill-opacity="0.29" />
                            <path d="M321.012 0H332.112L440.531 140L332.112 280H321.012L429.619 140L321.012 0Z" fill="url(#paint0_linear_796_53563)" fill-opacity="0.5" />
                            <path d="M429.62 140L321.013 280H0.396484C22.375 238.099 34.7959 190.487 34.7959 140C34.7959 89.5133 22.375 41.9013 0.396484 0H321.013L429.62 140Z" fill="white" fill-opacity="0.29" />
                            <path d="M429.62 140L321.013 280H0.396484C22.375 238.099 34.7959 190.487 34.7959 140C34.7959 89.5133 22.375 41.9013 0.396484 0H321.013L429.62 140Z" fill="url(#paint1_linear_796_53563)" fill-opacity="0.5" />
                            <defs>
                                <linearGradient id="paint0_linear_796_53563" x1="380.772" y1="0" x2="380.772" y2="280" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.6" />
                                    <stop offset="1" stop-color="#999999" stop-opacity="0.3" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_796_53563" x1="215.008" y1="0" x2="215.008" y2="280" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.6" />
                                    <stop offset="1" stop-color="#999999" stop-opacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className='content flex flex-col gap-1 absolute top-0'>
                            <span className='text-4xl'>Assessment</span>
                            <span className='text-[22px]'>We begin by understanding your needs, goals, and technical environment</span>
                        </div>
                    </div>
                </div>
                <div className='bottomGroup flex justify-between w-full gap-1'>
                    <div className='4 w-full relative flex justify-start'>
                        <svg width="700" className='!w-full' height="240" viewBox="0 0 708 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M120.28 0H107.948L7.62939e-06 120L107.948 240H120.281L11 120L120.28 0Z" fill="white" fill-opacity="0.29" />
                            <path d="M120.28 0H107.948L7.62939e-06 120L107.948 240H120.281L11 120L120.28 0Z" fill="url(#paint0_linear_796_53586)" fill-opacity="0.5" />
                            <path d="M11 120L120.279 240H707.529V152.931C596.293 150.628 499.613 89.6661 447.724 0H120.279L11 120Z" fill="white" fill-opacity="0.29" />
                            <path d="M11 120L120.279 240H707.529V152.931C596.293 150.628 499.613 89.6661 447.724 0H120.279L11 120Z" fill="url(#paint1_linear_796_53586)" fill-opacity="0.5" />
                            <defs>
                                <linearGradient id="paint0_linear_796_53586" x1="60.1406" y1="0" x2="60.1406" y2="240" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.6" />
                                    <stop offset="1" stop-color="#999999" stop-opacity="0.3" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_796_53586" x1="359.265" y1="0" x2="359.265" y2="240" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.6" />
                                    <stop offset="1" stop-color="#999999" stop-opacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className='content flex flex-col gap-1 absolute top-0'>
                            <span className='text-4xl'>Assessment</span>
                            <span className='text-[22px]'>We begin by understanding your needs, goals, and technical environment</span>
                        </div>
                    </div>
                    <div className='3 w-full relative flex justify-end'>
                        <svg width="700" className='!w-full' height="240" viewBox="0 0 707 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M586.934 0H598.145L707 120L598.145 240H586.934L696 120L586.934 0Z" fill="white" fill-opacity="0.29" />
                            <path d="M586.934 0H598.145L707 120L598.145 240H586.934L696 120L586.934 0Z" fill="url(#paint0_linear_796_53568)" fill-opacity="0.5" />
                            <path d="M696 120L586.934 240H0.527344V152.931C111.764 150.628 208.444 89.6661 260.333 0H586.934L696 120Z" fill="white" fill-opacity="0.29" />
                            <path d="M696 120L586.934 240H0.527344V152.931C111.764 150.628 208.444 89.6661 260.333 0H586.934L696 120Z" fill="url(#paint1_linear_796_53568)" fill-opacity="0.5" />
                            <defs>
                                <linearGradient id="paint0_linear_796_53568" x1="646.967" y1="0" x2="646.967" y2="240" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.6" />
                                    <stop offset="1" stop-color="#999999" stop-opacity="0.3" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_796_53568" x1="348.264" y1="0" x2="348.264" y2="240" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.6" />
                                    <stop offset="1" stop-color="#999999" stop-opacity="0.3" />
                                </linearGradient>
                            </defs>
                        </svg>


                        <div className='content flex flex-col gap-1 absolute top-0'>
                            <span className='text-4xl'>Assessment</span>
                            <span className='text-[22px]'>We begin by understanding your needs, goals, and technical environment</span>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='howItWorksText'>
                <div className={`textStep textStep1 ${activeStep == 1 ? 'active' : ''}`}>
                    <h6 className='text-right'>Assessment</h6>
                    <p className='text-right !text-[18px]'>We begin by understanding your needs, goals, and technical environment</p>
                </div>
                <div className={`textStep textStep2 ${activeStep == 2 ? 'active' : ''}`}>
                    <h6 className='text-right'>Design</h6>
                    {/* <p className='text-right !text-[21px]'>We begin by understanding your needs, goals, and technical environment</p> */}
                    <p className='text-right !text-[18px]'>Wireframes and prototypes shape the ideal user experience.</p>
                </div>
                <div className={`textStep textStep3 ${activeStep == 3 ? 'active' : ''}`}>
                    <h6 className='text-right'>Development</h6>
                    {/* <p className='text-right !text-[21px]'>We begin by understanding your needs, goals, and technical environment</p> */}
                    <p className='text-right !text-[18px]'>Our engineers bring your solution to life using agile sprints.</p>
                </div>
                <div className={`textStep textStep4 ${activeStep == 4 ? 'active' : ''}`}>
                    <h6>Testing</h6>
                    {/* <p className='text-left !text-[21px]'>We begin by understanding your needs, goals, and technical environment</p> */}
                    <p className='!text-[18px]'>Rigorous QA ensures functionality, security, and performance.</p>
                </div>
                <div className={`textStep textStep5 ${activeStep == 5 ? 'active' : ''}`}>
                    <h6>Deployment</h6>
                    {/* <p className='text-left !text-[21px]'>We begin by understanding your needs, goals, and technical environment</p> */}
                    <p className='!text-[18px]'>We handle rollout, scaling</p>
                </div>
                <div className={`textStep textStep6 ${activeStep == 6 ? 'active' : ''}`}>
                    <h6>Support</h6>
                    {/* <p className='text-left !text-[21px]'>We begin by understanding your needs, goals, and technical environment</p> */}
                    <p className='!text-[18px]'>We provide ongoing support as needed.</p>
                </div>
            </div>
        </>
    )
}
