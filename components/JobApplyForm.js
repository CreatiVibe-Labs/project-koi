'use client';

import React, { useState, useRef } from "react";
import { content2 } from '@/constant/jobContent';

export default function JobApplyForm({ params }) {

    const { slug } = React.use(params); // unwrap the params Promise
    const slug2 = slug.replace(/-/g, "_");
    const slugWithSpace = slug2.replace(/_/g, " ");

    const htmlContent = content2[slug2]; // yahan se apna content mil jaayega

    const [fileName1, setFileName1] = useState("Resume / CV (PDF, DOCX – Required)");
    const fileInputRef1 = useRef(null);

    const [fileName2, setFileName2] = useState("Cover Letter (PDF, DOCX – Optional)");
    const fileInputRef2 = useRef(null);

    const [fileName3, setFileName3] = useState("Additional Documents (Certificates, References - Optional)");
    const fileInputRef3 = useRef(null);

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

        resume_cv: '',// required
        cover_letter: '',
        additional_document: '',
        question_answers: {},
        is_information_true: '', //checkbox // required
        consent_data_processing: '',//checkbox // required
    });

    const validate = () => {
        const newErrors = {};
        if (!formData.first_name.trim()) newErrors.first_name = 'First name is required';
        if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.position_applied_for.trim()) newErrors.position_applied_for = 'Position Applied for is required';

        if (!formData.resume_cv || formData.resume_cv.length === 0) {
            console.log({ formData })
            newErrors.resume_cv = 'Resume is required';
        }

        if (!formData.is_information_true) {
            newErrors.is_information_true = "Required";
        }
        if (!formData.consent_data_processing) {
            newErrors.consent_data_processing = "Required";
        }
        return newErrors;
    };

    const questions = [
        { id: "q1", text: "Why are you interested in this position?" },
        { id: "q2", text: "Describe your most relevant experience for this role" },
    ];

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null); // success/error message

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox" && name !== 'employment_type') {
            setFormData((prev) => ({
                ...prev,
                [name]: checked,
            }));
        } else if (type === "checkbox" && name === "employment_type") {
            setFormData((prev) => {
                const currentValues = Array.isArray(prev.employment_type)
                    ? prev.employment_type
                    : [];

                if (checked) {
                    return { ...prev, employment_type: [...currentValues, value] };
                } else {
                    return {
                        ...prev,
                        employment_type: currentValues.filter((v) => v !== value),
                    };
                }
            });
        } else if (e.target.dataset.question) {
            // ✅ dynamic question answer update
            setFormData((prev) => ({
                ...prev,
                question_answers: {
                    ...prev.question_answers,
                    [e.target.dataset.question]: value,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleButtonClick = () => {
        fileInputRef1.current.click(); // open file dialog
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName1(file.name);
            setFormData((prev) => ({
                ...prev,
                resume_cv: file, // store actual file
            }));
        } else {
            setFileName1("Resume / CV (PDF, DOCX – Required)");
            setFormData((prev) => ({
                ...prev,
                resume_cv: '', // reset if no file
            }));
        }
    };

    const handleButtonClick2 = () => {
        fileInputRef2.current.click(); // open file dialog
    };

    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName2(file.name);
            setFormData((prev) => ({
                ...prev,
                cover_letter: file,
            }));
        } else {
            setFileName2("Cover Letter (PDF, DOCX – Optional)");
            setFormData((prev) => ({
                ...prev,
                cover_letter: '',
            }));
        }
    };

    const handleButtonClick3 = () => {
        fileInputRef3.current.click(); // open file dialog
    };

    const handleFileChange3 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName3(file.name);
            setFormData((prev) => ({
                ...prev,
                additional_document: file,
            }));
        } else {
            setFileName3("Additional Documents (Certificates, References - Optional)");
            setFormData((prev) => ({
                ...prev,
                additional_document: '',
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            console.log({ errors })
        } else {
            console.log('Form submitted:', formData);
            setErrors({});
            try {
                const fd = new FormData();

                // normal fields
                fd.append("salutation", formData.salutation);
                fd.append("first_name", formData.first_name);
                fd.append("last_name", formData.last_name);
                fd.append("email", formData.email);
                fd.append("phone", formData.phone);
                fd.append("linkedin_profile", formData.linkedin_profile);
                fd.append("portfolio_website", formData.portfolio_website);
                fd.append("position_applied_for", formData.position_applied_for);
                fd.append("preferred_location", formData.preferred_location);

                // employment_type is array → append multiple
                formData.employment_type.forEach((type) => {
                    fd.append("employment_type[]", type);
                });

                // files (if selected)
                if (formData.resume_cv) fd.append("resume_cv", formData.resume_cv);
                if (formData.cover_letter) fd.append("cover_letter", formData.cover_letter);
                if (formData.additional_document) fd.append("additional_document", formData.additional_document);

                // questions (JSON → string)
                fd.append("question_answers", JSON.stringify(formData.question_answers));

                // checkboxes
                fd.append("is_information_true", formData.is_information_true ? 1 : 0);
                fd.append("consent_data_processing", formData.consent_data_processing ? 1 : 0);

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/job-applications`, {
                    method: "POST",
                    body: fd, // ✅ no JSON.stringify
                });

                const data = await res.json();

                if (!res.ok || data.status === false) {
                    if (data.errors) {
                        const apiErrors = {};
                        Object.keys(data.errors).forEach((field) => {
                            apiErrors[field] = data.errors[field][0];
                        });
                        setErrors(apiErrors);
                    }

                    setStatus({
                        type: "error",
                        msg: data.message || "Form submission failed.",
                    });
                    return;
                }

                setStatus({ type: "success", msg: "Form submitted successfully!" });
                // Reset form
                setFormData({
                    salutation: "",
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    linkedin_profile: "",
                    portfolio_website: "",
                    position_applied_for: slugWithSpace,
                    employment_type: [],
                    preferred_location: "",
                    resume_cv: "",
                    cover_letter: "",
                    additional_document: "",
                    question_answers: {},
                    is_information_true: false,
                    consent_data_processing: false,
                });
            } catch (error) {
                setStatus({ type: "error", msg: "Server error. Try again later." });
            }
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
                                    name={'first_name'}
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    className={` input-field ${errors['first_name'] ? 'error' : ''}`}
                                    placeholder={'First Name'}
                                />
                                {errors['first_name'] && <p className="text-red-500 text-sm mt-1">{errors['first_name']}</p>}
                            </div>
                            <div className="relative !w-[45%]">
                                <input
                                    name={'last_name'}
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    className={` input-field ${errors['last_name'] ? 'error' : ''}`}
                                    placeholder={'Last Name'}
                                />
                                {errors['last_name'] && <p className="text-red-500 text-sm mt-1">{errors['last_name']}</p>}
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
                                    placeholder="Email Address"
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
                                    placeholder="Phone"
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
                        <div className="doubleRows input-field">
                            <div className="relative">
                                <div className=' w-full'>
                                    Position Applying For
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    name="position_applied_for"
                                    value={formData.position_applied_for}
                                    onChange={handleChange}
                                    className={`capitalize  ${errors.position_applied_for ? 'error' : ''}`}
                                    placeholder="Position Applying For"
                                    readOnly
                                />
                                {errors.position_applied_for && <p className="text-red-500 text-sm mt-1">{errors.position_applied_for}</p>}
                            </div>
                        </div>

                        {/* Empolyment Type */}
                        <div className="doubleRows input-field">
                            <div className="relative">
                                <div className=' w-full flex flex-col gap-2 items-start'>
                                    <span>Empolyment Type</span>
                                    <span className="text-sm">(Select one or more)</span>
                                </div>
                            </div>
                            <div className="relative flex flex-col gap-2">
                                <div className="reative flex items-center gap-3">

                                    <label className="check-container text-lg font-medium flex items-center">Full Time
                                        <input type="checkbox" id="fulltime" name="employment_type" onChange={handleChange} value="Full-Time" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="reative flex items-center gap-3">

                                    <label className="check-container text-lg font-medium flex items-center">Part Time
                                        <input type="checkbox" id="Part" name="employment_type" onChange={handleChange} value="Part-Time" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="reative flex items-center gap-3">

                                    <label className="check-container text-lg font-medium flex items-center">Contract
                                        <input type="checkbox" id="Contract" name="employment_type" onChange={handleChange} value="Contract" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="reative flex items-center gap-3">

                                    <label className="check-container text-lg font-medium flex items-center">Freelance
                                        <input type="checkbox" id="Freelance" name="employment_type" onChange={handleChange} value="Freelance" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                {errors.employment_type && <p className="text-red-500 text-sm mt-1">{errors.employment_type}</p>}
                            </div>
                        </div>

                        {/* Preferred Location */}
                        <div className="doubleRows input-field">
                            <div className="relative">
                                <div className=' w-full flex gap-2 items-center'>
                                    <span>Preferred Location </span>
                                </div>
                            </div>
                            <div className="relative flex flex-col gap-2">
                                <div className="reative flex items-center gap-3">

                                    <label className="check-container text-lg font-medium flex items-center">Japan
                                        <input type="radio" id="Japan" name="preferred_location" onChange={handleChange} value="Japan" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="reative flex items-center gap-3">

                                    <label className="check-container text-lg font-medium flex items-center">Hong Kong
                                        <input type="radio" id="hong" name="preferred_location" onChange={handleChange} value="Hong Kong" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="reative flex items-center gap-3">

                                    <label className="check-container text-lg font-medium flex items-center">Remote
                                        <input type="radio" id="Remote" name="preferred_location" onChange={handleChange} value="Remote" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="reative flex items-center gap-3">

                                    <label className="check-container text-lg font-medium flex items-center">Hybrid
                                        <input type="radio" id="Hybrid" name="preferred_location" onChange={handleChange} value="Hybrid" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                {errors.preferred_location && <p className="text-red-500 text-sm mt-1">{errors.preferred_location}</p>}
                            </div>
                        </div>

                        <p className='text-center input-field !text-2xl gradient-background'>Documents</p>

                        <div className='relative'>
                            <input
                                type='file'
                                ref={fileInputRef1}
                                onChange={handleFileChange}
                                className="hidden"
                                name="resume_cv"
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
                        {errors.resume_cv && <p className="text-red-500 text-sm mt-1">{errors.resume_cv}</p>}

                        <div className='relative'>
                            <input
                                type='file'
                                ref={fileInputRef2}
                                onChange={handleFileChange2}
                                className="hidden"
                                name="cover_letter"
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
                        {errors.cover_letter && <p className="text-red-500 text-sm mt-1">{errors.cover_letter}</p>}

                        <div className='relative'>
                            <input
                                type='file'
                                ref={fileInputRef3}
                                onChange={handleFileChange3}
                                className="hidden"
                                name="additional_document"
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
                        {errors.additional_document && <p className="text-red-500 text-sm mt-1">{errors.additional_document}</p>}

                        <p className='text-center input-field !text-2xl gradient-background'>Questionnaire</p>

                        {questions.map((q) => (
                            <div key={q.id} className="relative">
                                <textarea
                                    className="input-field resize-none"
                                    rows={2}
                                    placeholder={q.text}
                                    data-question={q.id}   // ✅ dynamic key
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        ))}

                        <p className='text-center input-field !text-2xl gradient-background'>Consent</p>

                        <div className="reative flex items-center gap-3">

                            <label className="check-container text-lg font-medium flex items-center">I certify that the information submitted is true and complete.
                                <input type="checkbox" onChange={handleChange} name="is_information_true" />
                                <span className="checkmark"></span>
                            </label>
                            {errors.is_information_true && <p className="text-red-500 text-sm mt-1">{errors.is_information_true}</p>}
                        </div>

                        <div className="reative flex items-center gap-3">

                            <label className="check-container text-lg font-medium flex items-center">I consent to the processing of my data for recruitment purposes.
                                <input type="checkbox" onChange={handleChange} name="consent_data_processing" />
                                <span className="checkmark"></span>
                            </label>
                            {errors.consent_data_processing && <p className="text-red-500 text-sm mt-1">{errors.consent_data_processing}</p>}
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
                        {status && (
                            <p
                                className={`mt-3 !font-semibold ${status.type === "success" ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {status.msg}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}