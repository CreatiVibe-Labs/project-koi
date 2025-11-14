import Image from 'next/image';
import Link from 'next/link';
import FeatureHighlights from '@/components/FeatureHighlights';
import SliderCards from '../sliders/SliderCards';

export default function CloudStorage({ lang, ASSETS_URL, apiData, serviceApiData }) {

    const keyFeatures = [
        {
            imageUrl: ASSETS_URL + apiData?.content?.image_storage_image?.['en'],
            title: apiData?.content?.storage_heading?.[lang] || apiData?.content?.storage_heading?.['en'],
            description: apiData?.content?.storage_description?.[lang] || apiData?.content?.storage_description?.['en'],
        },
        {
            imageUrl: ASSETS_URL + apiData?.content?.image_secure_data_encryption_image?.['en'],
            title: apiData?.content?.secure_data_encryption_heading?.[lang] || apiData?.content?.secure_data_encryption_heading?.['en'],
            description: apiData?.content?.secure_data_encryption_description?.[lang] || apiData?.content?.secure_data_encryption_description?.['en'],
        },
        {
            imageUrl: ASSETS_URL + apiData?.content?.image_automated_backups_image?.['en'],
            title: apiData?.content?.automated_backups_heading?.[lang] || apiData?.content?.automated_backups_heading?.['en'],
            description: apiData?.content?.automated_backups_description?.[lang] || apiData?.content?.automated_backups_description?.['en'],
        },
        {
            imageUrl: ASSETS_URL + apiData?.content?.image_post_privacy_image?.['en'],
            title: apiData?.content?.post_privacy_heading?.[lang] || apiData?.content?.post_privacy_heading?.['en'],
            description: apiData?.content?.post_privacy_description?.[lang] || apiData?.content?.post_privacy_description?.['en'],
        }
    ];

    console.log({lang, ASSETS_URL, apiData, serviceApiData});

    return (
        <div className='cloudStorageTab'>
           
            <div className="industriesServeMainWrapper webDev singleSerivce">
                <div className="is-heading gradient-background"><h3>{apiData?.content?.introduction_heading?.[lang] || "Introduction"}</h3></div>
                <div className="isContent">
                    <div className="itemsWrapper">
                        <p className='!font-medium'>
                            {apiData?.content?.introduction_description_1?.[lang] || apiData?.content?.introduction_description_1?.['en']}
                            <br />
                            <br />
                            {apiData?.content?.introduction_description_2?.[lang] || apiData?.content?.introduction_description_2?.['en']}
                            <br />
                            <br />
                        
                        </p>
                        <ul className='justify-center !text-sm '>
                            <li className='!font-medium flex flex-col gap-4 !min-w-[220px]'>
                                <Image src={ASSETS_URL + (apiData?.content?.image_storage_providers_1_image?.[lang] || apiData?.content?.image_storage_providers_1_image?.['en'])} width={500} height={500} className='!mt-[3px] !w-18 !h-auto object-cover' alt="Amazon S3" />
                                <span className='!text-sm'>{apiData?.content?.storage_providers_1_text?.[lang] || apiData?.content?.storage_providers_1_text?.['en']}</span>
                            </li>
                            <li className='!font-medium flex flex-col gap-4 !min-w-[220px]'>
                                <Image src={ASSETS_URL + (apiData?.content?.image_storage_providers_2_image?.[lang] || apiData?.content?.image_storage_providers_2_image?.['en'])} width={500} height={500} className='!mt-[3px] !w-18 !h-auto object-cover' alt="Amazon S3" />
                                <span className='!text-sm'>{apiData?.content?.storage_providers_2_text?.[lang] || apiData?.content?.storage_providers_2_text?.['en']}</span>
                            </li>
                            <li className='!font-medium flex flex-col gap-4 !min-w-[220px]'>
                                <Image src={ASSETS_URL + (apiData?.content?.image_storage_providers_3_image?.[lang] || apiData?.content?.image_storage_providers_3_image?.['en'])} width={500} height={500} className='!mt-[3px] !w-18 !h-auto object-cover' alt="Amazon S3" />
                                <span className='!text-sm'>{apiData?.content?.storage_providers_3_text?.[lang] || apiData?.content?.storage_providers_3_text?.['en']}</span>
                            </li>
                            <li className='!font-medium flex flex-col gap-4 !min-w-[220px]'>
                                <Image src={ASSETS_URL + (apiData?.content?.image_storage_providers_4_image?.[lang] || apiData?.content?.image_storage_providers_4_image?.['en'])} width={500} height={500} className='!mt-[3px] !w-18 !h-auto object-cover' alt="Amazon S3" />
                                <span className='!text-sm'>{apiData?.content?.storage_providers_4_text?.[lang] || apiData?.content?.storage_providers_4_text?.['en']}</span>
                            </li>
                            <li className='!font-medium flex flex-col gap-4 !min-w-[220px]'>
                                <Image src={ASSETS_URL + (apiData?.content?.image_storage_providers_5_image?.[lang] || apiData?.content?.image_storage_providers_5_image?.['en'])} width={500} height={500} className='!mt-[3px] !w-18 !h-auto object-cover' alt="Amazon S3" />
                                <span className='!text-sm'>{apiData?.content?.storage_providers_5_text?.[lang] || apiData?.content?.storage_providers_5_text?.['en']}</span>
                            </li>
                            <li className='!font-medium flex flex-col gap-4 !min-w-[220px]'>
                                <Image 
                                    src={ASSETS_URL + (apiData?.content?.image_storage_providers_6_image?.[lang] || apiData?.content?.image_storage_providers_6_image?.['en'] || "/default-storage.png")} 
                                    width={500} 
                                    height={500} 
                                    className='!mt-[3px] !w-18 !h-auto object-cover' 
                                    alt={apiData?.content?.storage_providers_6_text?.[lang] || apiData?.content?.storage_providers_6_text?.['en'] || "Storage Provider 6"} 
                                />
                                <span className='!text-sm'>{apiData?.content?.storage_providers_6_text?.[lang] || apiData?.content?.storage_providers_6_text?.['en'] || "Storage Provider 6"}</span>
                            </li>
   
                        </ul>
                    </div>
                </div>
            </div>
            <div className="whyCHooseUsWrapper industriesServeMainWrapper singleSerivce">
                <div className="is-heading whyChooseUsHeading gradient-background"><h3>{apiData?.content?.private_storage_heading?.[lang] || apiData?.content?.private_storage_heading?.['en']}</h3></div>
                <div className="whyChooseUsCardContents">
                    <div className='itemsWrapper'>
                        <p className="wcu-heading pb-2"><span className="heading-1">{apiData?.content?.private_storage_sub_heading?.[lang] || apiData?.content?.private_storage_sub_heading?.['en']}</span></p>
                        <p className='!font-medium'>
                            {apiData?.content?.private_storage_description?.[lang] || apiData?.content?.private_storage_description?.['en']}
                        </p>
                    </div>
                </div>
            </div>

            <div className="industriesServeMainWrapper industriesServeMainWrapper2 featuresHighlight">
                <div className="is-heading gradient-background"><h3>{apiData?.content?.key_features_heading?.[lang] || apiData?.content?.key_features_heading?.['en']}</h3></div>
                <div className="mt-5">
                    <SliderCards
                        slides={keyFeatures}
                    />
                    <div className="buttons-wrapper">
                        <Link href="#">{apiData?.content?.cta_section_button_1?.[lang] || apiData?.content?.cta_section_button_1?.['en']}</Link>
                        <Link href="#">{apiData?.content?.cta_section_button_2?.[lang] || apiData?.content?.cta_section_button_2?.['en']}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}