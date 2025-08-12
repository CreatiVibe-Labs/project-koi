'use client';

import React, { useState, useRef } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Tooltip } from 'react-tooltip';

export default function JobApplyForm({ params }) {

    const { slug } = React.use(params); // unwrap the params Promise
    console.log({slug})
    const [fileName1, setFileName1] = useState("Resume / CV (PDF, DOCX – Required)");
    const fileInputRef1 = useRef(null);

    const [fileName2, setFileName2] = useState("Cover Letter (PDF, DOCX – Optional)");
    const fileInputRef2 = useRef(null);

    const [fileName3, setFileName3] = useState("Additional Documents (Certificates, References - Optional)");
    const fileInputRef3 = useRef(null);

    const animatedComponents = makeAnimated();
    const [formData, setFormData] = useState({
        company: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        apply_for: 'Software Engeneering',
    });

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

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.subject.trim()) newErrors.subject = 'Please select a subject';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
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
                <div className="flex gap-5 items-center"><p className="title !text-2xl !font-semibold">Title: </p><p className="!text-2xl !font-medium">Software Engeneering</p></div>
                <div className="flex gap-5 items-center"><p className="exp !text-2xl !font-semibold">Experience: </p><p className="!text-2xl !font-medium">2+ Years</p></div>
                <div className="flex flex-col gap-5 items-start"><p className="exp !text-2xl !font-semibold">Description: </p><p className="!text-lg !font-normal">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p></div>
            </div>
            <div className="whyCHooseUsWrapper coreValues careerOp">
                <div className="whyChooseUsHeading gradient-background"><h2>Job Application Form</h2></div>
                <div className="contactForm whyChooseUsCardContents">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <p className='text-center input-field !text-2xl gradient-background'>Personal Information</p>
                        {/* First Name & Last Name */}
                        <div className="doubleRows">
                            <div className="relative">
                                <input
                                    name={'firstName'}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={` input-field ${errors['firstName'] ? 'error' : ''} `}
                                    placeholder={'First Name (Required) '}
                                />
                                {errors['firstName'] && <p className="text-red-500 text-sm mt-1">{errors['firstName']}</p>}
                            </div>
                            <div className="relative">
                                <input
                                    name={'lastName'}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={` input-field ${errors['lastName'] ? 'error' : ''} `}
                                    placeholder={'Last Name (Required) '}
                                />
                                {errors['lastName'] && <p className="text-red-500 text-sm mt-1">{errors['lastName']}</p>}
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
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    className="input-field"
                                    placeholder="LinkedIn Profile (Optional)"
                                />
                            </div>

                            {/* Phone (optional) */}
                            <div className="relative">
                                <input
                                    name="portfolio"
                                    value={formData.phone}
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
                                    name="apply_for"
                                    value={formData.apply_for}
                                    onChange={handleChange}
                                    className=" input-field"
                                    placeholder="Position Applying For"
                                    readOnly
                                />
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