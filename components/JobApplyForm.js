'use client';

import React, { useState, useRef } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Tooltip } from 'react-tooltip';

export default function JobApplyForm({ params }) {

    const { slug } = React.use(params); // unwrap the params Promise

    const slug2 = slug.replace(/-/g, "_");

    const slugWithSpace = slug2.replace(/_/g, " ");

    const content2 = {
        backend_developer:
            `<h2><strong>Job Description:</strong></h2>
            <p><span style="font-weight: 400;">We are looking for a detail-oriented </span><strong>Backend Developer</strong><span style="font-weight: 400;"> to support the development of a secure, scalable private storage and file sharing platform. Working closely with an </span><strong>Infrastructure Engineer</strong><span style="font-weight: 400;">, you will be responsible for implementing server-side logic, managing data flow, and integrating core services related to storage, user access, and file handling. You will also collaborate with frontend team, product managers, and other stakeholders to ensure robust and scalable solutions.</span></p>
            <h2><strong>Responsibilities</strong></h2>
            <ul>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Build and implement scalable, secure backend systems for an </span><strong>enterprise-grade file sharing and secure vault platform</strong><span style="font-weight: 400;"> using </span><strong>Node.js</strong></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Develop APIs for secure file upload/download, sharing, auditing, and digital rights management (DRM)</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Implement </span><strong>granular access controls</strong><span style="font-weight: 400;">, file-level encryption, and </span><strong>role-based permissions</strong></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Integrate with enterprise identity providers (e.g., </span><strong>SAML</strong><span style="font-weight: 400;">, </span><strong>LDAP</strong><span style="font-weight: 400;">, </span><strong>OAuth2</strong><span style="font-weight: 400;">) for single sign-on and federated identity</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Develop secure file storage mechanisms with support for </span><strong>end-to-end encryption</strong><span style="font-weight: 400;">, secure key management, and compliance with </span><strong>industry standards (e.g., HIPAA, SOC 2, GDPR)</strong></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Implement logging, audit trails, and activity monitoring for compliance and traceability</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Collaborate with DevOps to deploy and monitor services in </span><strong>high-availability, fault-tolerant cloud environments</strong></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Optimize backend systems for </span><strong>large-scale concurrent users</strong><span style="font-weight: 400;"> and </span><strong>multi-tenant architectures</strong></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Work with security teams to regularly assess and mitigate vulnerabilities (e.g., OWASP Top 10)</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Maintain thorough API documentation and technical specifications for internal and external integration</span></li>
            </ul>
            <h2><strong>Qualifications</strong></h2>
            <ul>
            <li style="font-weight: 400;"><strong>3+ years of backend development experience</strong><span style="font-weight: 400;"> with a strong focus on </span><strong>Node.js</strong></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Proven experience building and maintaining secure, enterprise-grade applications involving </span><strong>file storage, encryption</strong><span style="font-weight: 400;">, and </span><strong>data privacy</strong></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Deep understanding of </span><strong>access control models</strong><span style="font-weight: 400;">, especially </span><strong>role-based</strong><span style="font-weight: 400;"> and </span><strong>attribute-based access control (RBAC/ABAC)</strong></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Experience with </span><strong>data encryption at rest and in transit</strong><span style="font-weight: 400;">, secure key storage (e.g., </span><strong>AWS KMS</strong><span style="font-weight: 400;">, </span><strong>Vault</strong><span style="font-weight: 400;">), and file integrity validation</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Familiarity with </span><strong>enterprise authentication protocols</strong><span style="font-weight: 400;"> such as </span><strong>SAML</strong><span style="font-weight: 400;">, </span><strong>OAuth 2.0</strong><span style="font-weight: 400;">, </span><strong>OpenID Connect</strong><span style="font-weight: 400;">, and directory services (e.g., </span><strong>LDAP</strong><span style="font-weight: 400;">, </span><strong>Active Directory</strong><span style="font-weight: 400;">)</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Experience with cloud storage and infrastructure (e.g., </span><strong>AWS S3</strong><span style="font-weight: 400;">, </span><strong>Azure Blob</strong><span style="font-weight: 400;">, </span><strong>GCP Storage</strong><span style="font-weight: 400;">) with fine-grained access control</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Experience with </span><strong>CI/CD</strong><span style="font-weight: 400;">, containerization (</span><strong>Docker</strong><span style="font-weight: 400;">, </span><strong>Kubernetes</strong><span style="font-weight: 400;">), and infrastructure-as-code tools</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Proficient in database design for managing metadata and user activity (PostgreSQL, MongoDB, etc.)</span></li>
            </ul>
            <h2><strong>Preferrable Qualifications</strong></h2>
            <ul>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Solid understanding of </span><strong>compliance standards</strong><span style="font-weight: 400;"> (e.g., </span><strong>HIPAA</strong><span style="font-weight: 400;">, </span><strong>SOC 2</strong><span style="font-weight: 400;">, </span><strong>ISO 27001</strong><span style="font-weight: 400;">, </span><strong>GDPR</strong><span style="font-weight: 400;">) and how they apply to backend systems</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Knowledge of </span><strong>secure API design</strong><span style="font-weight: 400;">, </span><strong>rate limiting</strong><span style="font-weight: 400;">, and </span><strong>audit logging</strong></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Strong communication skills and the ability to collaborate cross-functionally with security, infrastructure, and product teams</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Proficiency in English</span></li>
            </ul>
            <h2><strong>Work Arrangement</strong></h2>
            <p><span style="font-weight: 400;">Remote only</span></p>`,
        social_media_content_creator: `
            <h2><strong>Role Description</strong></h2>
            <p><span style="font-weight: 400;">We&rsquo;re seeking a creative and driven </span><strong>Social Media Content Creator</strong><span style="font-weight: 400;"> to join our team! This is a flexible role that can be fully remote and part-time. </span><strong>We&rsquo;re also open to exploring partnership opportunities with the right candidate.</strong><span style="font-weight: 400;"> Ideal candidates have a passion for digital storytelling, a keen eye for design, and the ability to turn ideas into scroll-stopping content.</span></p>
            <h2><strong>Responsibilities</strong></h2>
            <ul>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Creating and scheduling social media content</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Designing graphics and producing engaging videos</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Managing social media accounts</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Conducting market and audience research</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Developing social media strategies to enhance online presence and engagement</span></li>
            </ul>
            <h2><strong>Qualifications</strong></h2>
            <ul>
            <li style="font-weight: 400;"><span style="font-weight: 400;">English proficiency is a must.</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Graphic design and video editing skills for engaging content creation</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Experience in managing social media accounts and developing social media strategies</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Analyzing performance metrics to improve content and strategy</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Ability to work independently and remotely</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Conducting market and audience research to inform content will be a plus</span></li>
            </ul>
            <h2><strong>Work Arrangement</strong></h2>
            <p><span style="font-weight: 400;">Remote / Part time / Partnership</span></p>
        `,
        IT_sales_representative: `
            <h2><strong>Job Description</strong><span style="font-weight: 400;">:</span></h2>
            <p><span style="font-weight: 400;">We are seeking a highly motivated and results-driven IT Sales Representative to join our dynamic team. In this role, you will be responsible for selling our cutting-edge IT services to a diverse range of customers. The ideal candidate will have at least one year of sales experience, preferably within the IT industry, and a proven track record of success.</span></p>
            <h2><strong>Responsibilities:</strong></h2>
            <ul>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Independently analyze the market to identify potential customers and opportunities.</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Conduct cold calls and customer visits to build relationships and close deals.</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Develop and implement effective sales strategies to achieve targets.</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Maintain detailed records of all sales activities and customer interactions.</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Collaborate with the team to share best practices and improve overall performance.</span></li>
            </ul>
            <h2><strong>Qualifications:</strong></h2>
            <ul>
            <li style="font-weight: 400;"><span style="font-weight: 400;">At least 1 year of experience in sales, preferably in the IT industry.</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Strong communication and negotiation skills.</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Ability to work independently and manage time effectively.</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Highly motivated and hardworking with a passion for sales.</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Experience with CRM software is a plus.</span></li>
            </ul>
            <h2><strong>Work Arrangements:</strong></h2>
            <ul>
            <li style="font-weight: 400;"><strong>Full-Time Position:</strong><span style="font-weight: 400;">&nbsp;A performance-linked salary with high commission and bonus potential. Opportunities for career growth and advancement within the company.</span></li>
            <li style="font-weight: 400;"><strong>Part-Time Position:</strong><span style="font-weight: 400;">&nbsp;Flexible working hours with a basic salary plus commission. Opportunities to transition to full-time employment at the candidate's discretion.</span></li>
            <li style="font-weight: 400;"><strong>Freelance Position:</strong><span style="font-weight: 400;">&nbsp;Commission-based compensation with a fixed rate on every business brought in. Full control over working hours and no reporting requirements.</span></li>
            </ul>
            <p><span style="font-weight: 400;">If you are a self-starter with a drive to succeed, we want to hear from you. Join us and be part of a team that is revolutionizing the IT industry!</span></p>
            <h2><strong>What We Offer (Full time):</strong></h2>
            <ul>
            <li style="font-weight: 400;"><span style="font-weight: 400;">A performance-linked salary with high commission and bonus potential.</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">Opportunities for career growth and advancement within the company.</span></li>
            <li style="font-weight: 400;"><span style="font-weight: 400;">A supportive and collaborative work environment.</span></li>
            </ul>
        `,
    };

    const htmlContent = content2[slug2]; // yahan se apna content mil jaayega

    const [fileName1, setFileName1] = useState("Resume / CV (PDF, DOCX – Required)");
    const fileInputRef1 = useRef(null);

    const [fileName2, setFileName2] = useState("Cover Letter (PDF, DOCX – Optional)");
    const fileInputRef2 = useRef(null);

    const [fileName3, setFileName3] = useState("Additional Documents (Certificates, References - Optional)");
    const fileInputRef3 = useRef(null);

    const animatedComponents = makeAnimated();
    const [formData, setFormData] = useState({
        salutation: '', // required
        first_name: '',
        last_name: '',// required
        email: '',// required
        phone: '',// required
        linkedin_profile: '',
        portfolio_website: '',
        position_applied_for: slugWithSpace,// required
        employment_type: '',// required
        preferred_location: '',// required
        desired_salary_currency: "",
        desired_salary_amount:"",
        desired_salary_time: '',
        resume_cv: '',// required
        cover_letter: '',
        additional_document: '',
        question_answers: '', //json
        is_information_true: '', //checkbox // required
        consent_data_processing: '',//checkbox // required
    });

    const validate = () => {
        const newErrors = {};
        if (!formData.salutation.trim()) newErrors.salutation = 'Salutation is required';
        if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.subject.trim()) newErrors.subject = 'Please select a subject';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (!formData.position_applied_for.trim()) newErrors.position_applied_for = 'Position Applied for is required';
        if (!formData.employment_type.trim()) newErrors.employment_type = 'Employment Type is required';
        if (!formData.preferred_location.trim()) newErrors.preferred_location = 'Preffered Location is required';
        if (!formData.resume_cv.trim()) newErrors.resume_cv = 'Resume is required';
        if (!formData.is_information_true.trim()) newErrors.is_information_true = 'Required';
        if (!formData.consent_data_processing.trim()) newErrors.consent_data_processing = 'Required';
        return newErrors;
    };
    
    const empolyment_type = [
        { value: 'full_time', label: 'Full Time' },
        { value: 'part_time', label: 'Part Time' },
        { value: 'contract', label: 'Contract' },
        { value: 'freelance', label: 'Freelance' }
    ];

    const location = [
        { value: 'japan', label: 'Japan' },
        { value: 'hong_kong', label: 'Hong Kong' },
        { value: 'remote', label: 'Remote' }
    ];

    const currency = [
        { value: 'jpy', label: 'JPY' },
        { value: 'hkd', label: 'HKD' },
        { value: 'usd', label: 'USD' }
    ];

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleButtonClick = () => {
        fileInputRef1.current.click(); // open file dialog
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName1(file.name);
        } else {
            setFileName1("Resume / CV (PDF, DOCX – Required)");
        }
    };

    const handleButtonClick2 = () => {
        fileInputRef2.current.click(); // open file dialog
    };

    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName2(file.name);
        } else {
            setFileName2("Cover Letter (PDF, DOCX – Optional)");
        }
    };

    const handleButtonClick3 = () => {
        fileInputRef3.current.click(); // open file dialog
    };

    const handleFileChange3 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName3(file.name);
        } else {
            setFileName3("Additional Documents (Certificates, References - Optional)");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log('Form submitted:', formData);
            // Submit logic here
        }
    };
    return (
        <>
            <div className="jobApplyWrap flex flex-col gap-4">
                <div className="flex gap-5 items-center"><p className="title !text-2xl !font-semibold">Title: </p><p className="!text-2xl !font-medium capitalize">{slugWithSpace}</p></div>
                <div className="flex gap-5 items-center"><p className="exp !text-2xl !font-semibold">Experience: </p><p className="!text-2xl !font-medium">2+ Years</p></div>
                <div className="flex flex-col gap-5 items-start html-content">
                    {htmlContent ? (
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    ) : (
                        <p>No content found for: {slug}</p>
                    )}
                </div>
            </div>
            <div className="whyCHooseUsWrapper coreValues careerOp">
                <div className="whyChooseUsHeading gradient-background"><h2>Job Application Form</h2></div>
                <div className="contactForm whyChooseUsCardContents">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <p className='text-center input-field !text-2xl gradient-background'>Personal Information</p>
                        {/* First Name & Last Name */}
                        <div className="flex gap-[20px]">
                            <div className="relative !w-[10%]">
                                <select
                                    name="salutation"
                                    value={formData.salutation}
                                    onChange={handleChange}
                                    className="input-field"
                                >
                                    <option value="Dr.">Dr.</option>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Mrs.">Mrs.</option>
                                    <option value="Ms.">Ms.</option>
                                    <option value="Miss.">Miss.</option>
                                </select>
                                {errors['salutation'] && <p className="text-red-500 text-sm mt-1">{errors['salutation']}</p>}
                            </div>
                            <div className="relative !w-[45%]">
                                <input
                                    name={'last_name'}
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    className={` input-field ${errors['last_name'] ? 'error' : ''}`}
                                    placeholder={'Last Name (Required) '}
                                />
                                {errors['last_name'] && <p className="text-red-500 text-sm mt-1">{errors['last_name']}</p>}
                            </div>
                            <div className="relative !w-[45%]">
                                <input
                                    name={'first_name'}
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    className={` input-field ${errors['firstName'] ? 'error' : ''}`}
                                    placeholder={'First Name (Optional) '}
                                />
                            </div>
                        </div>

                        {/* Email & Phone */}
                        <div className="doubleRows">
                            <div className="relative">
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={` input-field ${errors.email ? 'error' : ''}`}
                                    placeholder="Email Address (Required)"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            {/* Phone (optional) */}
                            <div className="relative">
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={` input-field ${errors.phone ? 'error' : ''}`}
                                    placeholder="Phone (Required)"
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>
                        </div>

                        {/* Linkedin & Portfolio */}
                        <div className="doubleRows">
                            <div className="relative">
                                <input
                                    name="linkedin_profile"
                                    value={formData.linkedin_profile}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="LinkedIn Profile (Optional)"
                                />
                            </div>

                            {/* Phone (optional) */}
                            <div className="relative">
                                <input
                                    name="portfolio_website"
                                    value={formData.portfolio_website}
                                    onChange={handleChange}
                                    className=" input-field"
                                    placeholder="Portfolio / Website (Optional)"
                                />
                            </div>
                        </div>

                        <p className='text-center input-field !text-2xl gradient-background'>Position Details</p>

                        {/* Position */}
                        <div className="doubleRows">
                            <div className="relative">
                                <div className='input-field w-full'>
                                    Position Applying For
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    name="position_applied_for"
                                    value={formData.position_applied_for}
                                    onChange={handleChange}
                                    className={`capitalize input-field ${errors.position_applied_for ? 'error' : ''}`}
                                    placeholder="Position Applying For"
                                    readOnly
                                />
                                {errors.position_applied_for && <p className="text-red-500 text-sm mt-1">{errors.position_applied_for}</p>}
                            </div>
                        </div>

                        {/* Empolyment Type */}
                        <div className="doubleRows">
                            <div className="relative">
                                <div className='input-field w-full flex gap-2 items-center'>
                                    <span>Empolyment Type</span>
                                    <span className='my-anchor-element'>
                                        <svg
                                            height="17px"
                                            width="15px"
                                            viewBox="0 0 24 24"
                                            fill="#ffffff"
                                            stroke="#ffffff"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    style={{ fill: "#ffffff" }}
                                                    d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z 
             M12,19.66 c-0.938,0-1.58-0.723-1.58-1.66c0-0.964,0.669-1.66,1.58-1.66
             c0.963,0,1.58,0.696,1.58,1.66C13.58,18.938,12.963,19.66,12,19.66z 
             M12.622,13.321c-0.239,0.815-0.992,0.829-1.243,0
             c-0.289-0.956-1.316-4.585-1.316-6.942c0-3.11,3.891-3.125,3.891,0 
             C13.953,8.75,12.871,12.473,12.622,13.321z"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <Tooltip anchorSelect=".my-anchor-element" place="top">
                                        Select one or more
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="relative">
                                <Select
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    defaultValue=""
                                    isMulti
                                    placeholder={'Select Empolyment Type'}
                                    options={empolyment_type}
                                    className='input-field !p-[8px]'
                                />
                                {/* <input
                                    name="apply_for"
                                    value={formData.apply_for}
                                    onChange={handleChange}
                                    className=" input-field"
                                    placeholder="Position Applying For"
                                    readOnly
                                /> */}
                            </div>
                        </div>

                        {/* Preferred Location */}
                        <div className="doubleRows">
                            <div className="relative">
                                <div className='input-field w-full flex gap-2 items-center'>
                                    <span>Preferred Location </span>
                                    <span className='preferred'>
                                        <svg
                                            height="17px"
                                            width="15px"
                                            viewBox="0 0 24 24"
                                            fill="#ffffff"
                                            stroke="#ffffff"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    style={{ fill: "#ffffff" }}
                                                    d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z 
             M12,19.66 c-0.938,0-1.58-0.723-1.58-1.66c0-0.964,0.669-1.66,1.58-1.66
             c0.963,0,1.58,0.696,1.58,1.66C13.58,18.938,12.963,19.66,12,19.66z 
             M12.622,13.321c-0.239,0.815-0.992,0.829-1.243,0
             c-0.289-0.956-1.316-4.585-1.316-6.942c0-3.11,3.891-3.125,3.891,0 
             C13.953,8.75,12.871,12.473,12.622,13.321z"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <Tooltip anchorSelect=".preferred" place="top">
                                        We do not sponsor working visa; you must be legally authorized to work in the location you selected
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="relative">
                                <Select
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    defaultValue=""
                                    placeholder={'Preferred Location'}
                                    options={location}
                                    className='input-field !p-[8px]'
                                />
                            </div>
                        </div>

                        {/* Desired Salary */}
                        <div className="doubleRows">
                            <div className="relative">
                                <div className='input-field w-full flex gap-2 items-center'>
                                    <span>Desired Salary (Optional) </span>
                                </div>
                            </div>
                            <div className="relative">
                                <div className='input-field flex gap-5 items-center !p-[7px]'>

                                    <Select
                                        closeMenuOnSelect={true}
                                        components={animatedComponents}
                                        defaultValue=""
                                        placeholder={'Currency'}
                                        options={currency}
                                        className='!p-[0px] w-full'
                                    />
                                    <span className='text-4xl text-[#68726b] mt-[-10px]'>/</span>
                                    <input
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        className=" w-full"
                                        placeholder="Amount"
                                        type='number'
                                    />
                                    <span className='text-4xl text-[#68726b] mt-[-10px]'>/</span>
                                    <input
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className=" w-full"
                                        placeholder="Time"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className='text-center input-field !text-2xl gradient-background'>Documents</p>

                        <div className='relative'>
                            <input
                                type='file'
                                ref={fileInputRef1}
                                onChange={handleFileChange}
                                className="hidden"
                            />

                            <div className="input-field flex justify-between items-center">
                                <span>
                                    {fileName1}
                                </span>
                                <div className="upload-button button" onClick={handleButtonClick}>
                                    Upload
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <input
                                type='file'
                                ref={fileInputRef2}
                                onChange={handleFileChange2}
                                className="hidden"
                            />

                            <div className="input-field flex justify-between items-center">
                                <span>
                                    {fileName2}
                                </span>
                                <div className="upload-button button" onClick={handleButtonClick2}>
                                    Upload
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <input
                                type='file'
                                ref={fileInputRef3}
                                onChange={handleFileChange3}
                                className="hidden"
                            />

                            <div className="input-field flex justify-between items-center">
                                <span>
                                    {fileName3}
                                </span>
                                <div className="upload-button button" onClick={handleButtonClick3}>
                                    Upload
                                </div>
                            </div>
                        </div>

                        <p className='text-center input-field !text-2xl gradient-background'>Questionnaire</p>

                        <div className="relative">
                            <textarea className="input-field resize-none" rows={2} placeholder="Why are you interested in this position (Max. 200 words)"></textarea>
                        </div>
                        <div className="relative">
                            <textarea className="input-field resize-none" rows={2} placeholder="Describe your most relevant experience for this role"></textarea>
                        </div>

                        <p className='text-center input-field !text-2xl gradient-background'>Consent</p>

                        <div className="reative flex items-center gap-3">

                            <label className="check-container text-lg font-medium flex items-center">I certify that the information submitted is true and complete.
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        <div className="reative flex items-center gap-3">

                            <label className="check-container text-lg font-medium flex items-center">I consent to the processing of my data for recruitment purposes.
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className='text-center'>
                            <button
                                type="submit"
                                className="button"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}