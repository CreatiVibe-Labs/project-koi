import Link from 'next/link';

export const metadata = {
  title: "Resources - Aerialink Inc",
  description: "Resources - Aerialink Inc",
};

export default function Resources() {
    return (
        <>
            <div className="w-full text-center min-h-[16.1vh] flex flex-col items-center">
                <span className="font-bold text-4xl text-center w-full">This page is currently under construction.</span>
                <div className='buttons-wrapper !justify-center'>

                    <Link className='callUs' href="/">Go To Home Page</Link>
                </div>
            </div>
        </>
    );
}