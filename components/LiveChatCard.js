export default function LiveChatCard() {
    return (
        <div className="w-64 rounded-lg bg-white shadow-lg">
            <div className="relative flex w-full items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"strokeWidth="1.5"stroke="currentColor"className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" ></path>
                    </svg>
                    <div className="font-semibold">Live Chat Support</div>
                </div>
            </div>
            <div className="">
                <ul className="border-t border-gray-200 p-3 pb-6">
                <li className="flex flex-col items-end">
                    <div className="text-right text-xs">8:34 AM</div>
                    <div
                    className="w-40 rounded-lg bg-blue-600/70 px-2 py-1 text-right text-sm text-white"
                    >
                    Hey TARS, what's your honesty parameter?
                    </div>
                </li>
                <li className="flex flex-col items-start">
                    <div className="text-right text-xs">8:35 AM</div>
                    <div className="w-fit rounded-lg bg-gray-100 px-2 py-1 text-sm">
                    90 percent.
                    </div>
                </li>
                <li className="flex flex-col items-end">
                    <div className="text-right text-xs">8:40 AM</div>
                    <div
                    className="w-fit rounded-lg bg-blue-600/70 px-2 py-1 text-right text-sm text-white"
                    >
                    90 percent?
                    </div>
                </li>
                <li className="flex flex-col items-start">
                    <div
                    className="flex w-fit items-center gap-1 rounded-lg bg-gray-100 px-2 py-2.5 text-sm"
                    >
                    <div className="size-2 rounded-full bg-gray-300"></div>
                    <div className="size-2 rounded-full bg-gray-400"></div>
                    <div className="size-2 rounded-full bg-gray-300"></div>
                    </div>
                </li>
                </ul>
                <div className="relative">
                <input
                    type="text"
                    placeholder="Reply"
                    className="h-10 w-full rounded-b-lg border-t border-gray-200 bg-gray-100 pl-3 text-sm focus:outline-blue-600/50"
                />
                <button
                    className="absolute top-0 right-1 bottom-0 my-auto size-fit cursor-pointer rounded-full p-2 text-blue-600 hover:bg-gray-200 focus:bg-gray-200"
                >
                    <svg
                    className="size-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    ></path>
                    </svg>
                </button>
                </div>
            </div>
        </div>
    );
}