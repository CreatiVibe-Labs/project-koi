'use client';


export default function Organizationstructure({ apiData, lang, ASSETS_URL }) {
    return (
        <>
            <div className="org-chart">
                <ul className="parent">
                    <li>
                        <div className="box top text-3xl"><p>{apiData?.content?.board_label?.[lang] || 'B'}</p>{apiData?.content?.board?.[lang] || 'Board'} <p>3</p></div>
                        <ul>
                            <li>
                                <div className="box text-[28px]"><p>{apiData?.content?.ceo_label?.[lang] || 'C'}</p>{apiData?.content?.ceo?.[lang] || 'CEO'}<p>3</p></div>
                                <ul className="level-2">
                                    <li>
                                        <div className="text-2xl box"><p>{apiData?.content?.cto_label?.[lang] || 'C'}</p>{apiData?.content?.cto?.[lang] || 'CTO'}<p>3</p></div>
                                        <ul>
                                            <li>
                                                <div className="box text-[16px]"><p>{apiData?.content?.project_manager_label?.[lang] || 'PM'}</p>{apiData?.content?.project_manager?.[lang] || 'Project Manager'} <p>1</p></div>
                                                <ul>
                                                    <li><div className="box text-[16px]"><p>{apiData?.content?.technical_team_label?.[lang] || 'TT'}</p>{apiData?.content?.technical_team?.[lang] || 'Technical Team'}<p>5</p></div></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="box text-[16px]"><p>{apiData?.content?.marketing_manager_label?.[lang] || 'MM'}</p>{apiData?.content?.marketing_manager?.[lang] || 'Marketing Manager'}<p>5</p></div>
                                                <ul>
                                                    <li><div className="box text-[16px]"><p>{apiData?.content?.digital_marketing_label?.[lang] || 'MT'}</p>{apiData?.content?.digital_marketing?.[lang] || 'Digital Marketing Team'}<p>5</p></div></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="box text-2xl"><p>{apiData?.content?.coo_label?.[lang] || 'C'}</p>{apiData?.content?.coo?.[lang] || 'COO'}<p>4</p></div>
                                        <ul>
                                            <li>
                                                <div className="text-[16px] box"><p>{apiData?.content?.sales_manager_label?.[lang] || 'SM'}</p>{apiData?.content?.sales_manager?.[lang] || 'Sales Manager'}<p>1</p></div>
                                                <ul>
                                                    <li><div className="text-[16px] box"><p>{apiData?.content?.sales_offline_team_label?.[lang] || 'ST'}</p>{apiData?.content?.sales_offline_team?.[lang] || 'Sales / Offline Marketing Team'}<p>5</p></div></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="text-[16px] box"><p>{apiData?.content?.admin_secretary_label?.[lang] || 'AS'}</p>{apiData?.content?.admin_secretary?.[lang] || 'Administrative Secretary'}<p>5</p></div>
                                                <ul>
                                                    <li><div className="text-[16px] box"><p>{apiData?.content?.support_team_label?.[lang] || 'ST'}</p>{apiData?.content?.support_team?.[lang] || 'Support Team'}<p>5</p></div></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="box text-2xl"><p>{apiData?.content?.cfo_label?.[lang] || 'C'}</p>{apiData?.content?.cfo?.[lang] || 'CFO'}<p>5</p></div>
                                        <ul>
                                            <li>
                                                <div className="text-[16px] box"><p>{apiData?.content?.accounting_manager_label?.[lang] || 'AM'}</p>{apiData?.content?.accounting_manager?.[lang] || 'Accounting Manager'}<p>1</p></div>
                                                <ul>
                                                    <li><div className="text-[16px] box"><p>{apiData?.content?.finance_label?.[lang] || 'FT'}</p>{apiData?.content?.finance?.[lang] || 'Finance Team'}<p>5</p></div></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="text-[16px] box"><p>{apiData?.content?.hr_manager_label?.[lang] || 'HM'}</p>{apiData?.content?.hr_manager?.[lang] || 'HR Manager'}<p>5</p></div>
                                                <ul>
                                                    <li><div className="text-[16px] box"><p>{apiData?.content?.hr_team_label?.[lang] || 'HT'}</p>{apiData?.content?.hr_team?.[lang] || 'HR Team'}<p>5</p></div></li>
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
