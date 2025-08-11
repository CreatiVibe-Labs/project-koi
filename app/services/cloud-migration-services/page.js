'use client';

import Breadcrumb from '@/components/Breadcrumb';

import CloudMigration from '@/components/services/CloudMigrationComponent';
import CloudStorage from '@/components/services/CloudStorageComponent';
import SideBar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CloudMigrationServices() {
    const [activeTab, setActiveTab] = useState('Cloud Migration');

    const tabs = [
        { name: 'Cloud Migration', content: <CloudMigration />, icon: '/icons/migration.png' },
        { name: 'Cloud Storage', content: <CloudStorage />, icon: '/icons/cloud.png' },
    ];
    return (
        <div className='pageWrapper'>
            {/* <Breadcrumb /> */}
            <div className='servicePageWrapper'>
                <div className='sideBarWrapper'>
                    <SideBar />
                </div>
                <div className='serviceContentWrapper'>

                    <div className="tab">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`${activeTab === tab.name ? 'active' : ''
                                    }`}
                            >
                                <Image src={tab.icon} width={70} height={70} alt='icon' />
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {tabs.map(
                        (tab) =>
                            activeTab === tab.name && (
                                <div key={tab.name}>
                                    {tab.content}
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
}