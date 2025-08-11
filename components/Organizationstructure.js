'use client';


export default function Organizationstructure() {
    return (
        <>
            <div className="org-chart">
                <ul className="parent">
                    <li>
                        <div className="box top text-3xl"><p>B</p>Board <p>3</p></div>
                        <ul>
                            <li>
                                <div className="box text-[28px]"><p>C</p>CEO<p>3</p></div>
                                <ul className="level-2">
                                    <li>
                                        <div className="text-2xl box"><p>C</p>CTO<p>3</p></div>
                                        <ul>
                                            <li>
                                                <div className="box text-[16px]"><p>PM</p>Project Manager <p>1</p></div>
                                                <ul>
                                                    <li><div className="box text-[16px]"><p>TT</p>Technical Team<p>5</p></div></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="box text-[16px]"><p>MM</p>Marketing Manager<p>5</p></div>
                                                <ul>
                                                    <li><div className="box text-[16px]"><p>MT</p>Digital Marketing Team<p>5</p></div></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="box text-2xl"><p>C</p>COO<p>4</p></div>
                                        <ul>
                                            <li>
                                                <div className="text-[16px] box"><p>SM</p>Sales Manager<p>1</p></div>
                                                <ul>
                                                    <li><div className="text-[16px] box"><p>ST</p>Sales / Offline Marketing Team<p>5</p></div></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="text-[16px] box"><p>AS</p>Administrative Secretary<p>5</p></div>
                                                <ul>
                                                    <li><div className="text-[16px] box"><p>ST</p>Support Team<p>5</p></div></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="box text-2xl"><p>C</p>CFO<p>5</p></div>
                                        <ul>
                                            <li>
                                                <div className="text-[16px] box"><p>AM</p>Accounting Manager<p>1</p></div>
                                                <ul>
                                                    <li><div className="text-[16px] box"><p>FT</p>Finance Team<p>5</p></div></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="text-[16px] box"><p>HM</p>HR Manager<p>5</p></div>
                                                <ul>
                                                    <li><div className="text-[16px] box"><p>HT</p>HR Team<p>5</p></div></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}
