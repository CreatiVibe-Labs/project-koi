'use client';

import Breadcrumb from '@/components/Breadcrumb';

import CloudMigration from '@/components/services/CloudMigrationComponent';
import CloudStorage from '@/components/services/CloudStorageComponent';
import SideBar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CloudMainPage({lang, ASSETS_URL, apiData, apiData2, sideBarData, serviceApiData}) {

    const [activeTab, setActiveTab] = useState('cloud-migration');

    const tabs = [
        { id: 'cloud-migration', name: apiData?.content?.cloud_migration_tab?.[lang] || 'Cloud Migration', content: <CloudMigration lang={lang} ASSETS_URL={ASSETS_URL} apiData={apiData} serviceApiData={serviceApiData}/>, icon: '/icons/migration.png' },
        { id: 'cloud-storage', name: apiData?.content?.cloud_storage_tab?.[lang] || 'Cloud Storage', content: <CloudStorage lang={lang} ASSETS_URL={ASSETS_URL} apiData={apiData2} serviceApiData={serviceApiData}/>, icon: '/icons/cloud.png' },
    ];
    return (
        <div className='pageWrapper'>
            {/* <Breadcrumb /> */}
            <div className='servicePageWrapper'>
                <div className='sideBarWrapper'>
                    <SideBar lang={lang} sideBarData={sideBarData} />
                </div>
                <div className='serviceContentWrapper'>

                    <div className="md:my-0 !mt-4  tab">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${activeTab === tab.id ? 'active' : ''
                                    }`}
                            >
                                <Image src={tab.icon} width={70} height={70} alt='icon' />
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {tabs.map(
                        (tab) =>
                            activeTab === tab.id && (
                                <div key={tab.id}>
                                    {tab.content}
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
}