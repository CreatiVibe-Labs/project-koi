'use client';

import { useState } from 'react';
import FormLoading from "@/components/formLoading";

export default function ContactForm({ apiData, lang }) {
  const [formData, setFormData] = useState({
    company: '',
    salutation: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    subject: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // success/error message
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Please select a subject';
    if (!formData.description.trim()) newErrors.description = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus(null);
      setFormSubmitting(false);
    } else {
      setErrors({});
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!res.ok || data.status === false) {
          if (data.errors) {
            // Laravel ke validation errors ko React state me map karo
            const apiErrors = {};
            Object.keys(data.errors).forEach((field) => {
              apiErrors[field] = data.errors[field][0]; // har field ka pehla error le lo
            });
            setErrors(apiErrors);
          }

          setStatus({
            type: "error",
            msg: data.message || "Form submission failed.",
          });
          setFormSubmitting(false);
          return;
        }

        // Success
        setStatus({ type: "success", msg: "Form submitted successfully!" });
        setFormData({
          company: '',
          salutation: '',
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          subject: '',
          description: ''
        });
        setFormSubmitting(false);
      } catch (error) {
        setStatus({ type: "error", msg: "Server error. Try again later." });
        setFormSubmitting(false);
      }
    }
  };



  return (
    <form onSubmit={handleSubmit} className="contact-form md:0 pb-2.5 !md:gap-5 !gap-2.5">

      {/* Company */}
      <div className="relative">
        {/* <label>Company (Optional)</label> */}
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          className=" input-field"
          placeholder={apiData?.content?.company?.[lang] || "Company (Optional)"}
        />
      </div>

      {/* First Name & Last Name */}
      {/* First Name & Last Name */}
      <div className="flex justify-between md:flex-row flex-col !md:gap-5 !gap-2.5">
        <div className="flex gap-[20px] md:!w-[50%] w-full">
          <div className="relative lg:!w-[20%] w-[30%]">
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
            {errors.salutation && (
              <p className="text-red-500 text-sm mt-1">{errors.salutation}</p>
            )}
          </div>
          <div className="relative md:!w-[80%] w-[70%]">
            <input
              name={'first_name'}
              value={formData.first_name}
              onChange={handleChange}
              className={` input-field ${errors['first_name'] ? 'error' : ''}`}
              placeholder={apiData?.content?.first_name?.[lang] || 'First Name (Optional) '}
            />
          </div>
        </div>
        <div className="relative md:!w-[50%] w-full">
          <input
            name={'last_name'}
            value={formData.last_name}
            onChange={handleChange}
            className={` input-field ${errors['last_name'] ? 'error' : ''}`}
            placeholder={apiData?.content?.last_name?.[lang] || 'Last Name  '}
          />
          {errors['last_name'] && <p className="text-red-500 text-sm mt-1">{errors['last_name']}</p>}
        </div>

      </div>

      {/* Email & Phone */}
      <div className="doubleRows">
        {/* Email */}
        <div className="relative">
          {/* <label>Email address</label> */}

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={` input-field ${errors.email ? 'error' : ''}`}
            placeholder={apiData?.content?.email?.[lang] || "Email"}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone (optional) */}
        <div className="relative">
          {/* <label>Phone (Optional)</label> */}

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className=" input-field"
            placeholder={apiData?.content?.phone?.[lang] || "Phone (Optional)"}
          />
        </div>
      </div>

      {/* Subject Dropdown */}
      <div className="relative">
        {/* <label>Subject</label> */}

        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={` input-field ${errors.subject ? 'error' : ''}`}
        >
          <option className='text-black' value="" disabled defaultValue>{apiData?.content?.subject?.[lang] || "Subject"}</option>
          <option className='text-black' value="General inquiry">{apiData?.content?.general_inquiry?.[lang] || "General inquiry"}</option>
          <option className='text-black' value="Request a quotation">{apiData?.content?.request_a_quotation?.[lang] || "Request a quotation"}</option>
          <option className='text-black' value="Book a consultation">{apiData?.content?.book_a_consultation?.[lang] || "Book a consultation"}</option>
          <option className='text-black' value="Others">{apiData?.content?.others?.[lang] || "Others"}</option>
        </select>
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>

      {/* Detailed Description */}
      <div className="relative">
        {/* <label>Your message</label> */}

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className={` input-field textarea ${errors.description ? 'error' : ''}`}
          placeholder={apiData?.content?.detailed_description?.[lang] || "Detailed Description"}
        ></textarea>
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      {/* Submit Button */}
      <div className='text-center'>
        <button
          type="submit"
          className="button flex justify-center m-auto !max-h-[51px] md:px-5 md:py-2.5 !px-8 !py-2"
          disabled={formSubmitting ? true : false}
        >
          {formSubmitting ? <FormLoading /> : apiData?.content?.submit?.[lang] || 'Submit'}
        </button>
      </div>
      {status && (
        <p
          className={`text-2xl mt-3 !font-semibold ${status.type === "success" ? "text-[#FF5F1F]" : "text-red-600"
            }`}
        >
          {status.msg}
        </p>
      )}
    </form>
  );
}
