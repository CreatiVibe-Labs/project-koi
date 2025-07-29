'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    company: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <form onSubmit={handleSubmit} className="contact-form">

      {/* Company */}
      <div className="relative">
        {/* <label>Company (Optional)</label> */}
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          className=" input-field"
          placeholder="Company (Optional)"
        />
      </div>

      {/* First Name & Last Name */}
      <div className="doubleRows">
        {['firstName', 'lastName'].map((field, i) => (
          <div key={i} className="relative">
            {/* <label>{field === 'firstName' ? 'First Name' : 'Last Name'}</label> */}


            <input
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className={` input-field ${errors[field] ? 'error' : ''} `}
              placeholder={field === 'firstName' ? 'First Name' : 'Last Name'}
            />
            {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
          </div>
        ))}
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
            placeholder="Email"
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
            placeholder="Phone (Optional)"
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
          <option className='text-black' value="" disabled defaultValue>Subject</option>
          <option className='text-black' value="General inquiry">General inquiry</option>
          <option className='text-black' value="Request a quotation">Request a quotation</option>
          <option className='text-black' value="Book a consultation">Book a consultation</option>
          <option className='text-black' value="Others">Others</option>
        </select>
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>

      {/* Detailed Description */}
      <div className="relative">
        {/* <label>Your message</label> */}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className={` input-field textarea ${errors.message ? 'error' : ''}`}
          placeholder="Detailed Description"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
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
  );
}
