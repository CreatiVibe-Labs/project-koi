'use client';

import React, { useState, useRef } from "react";
import { DtCalendar } from 'react-calendar-datetime-picker';
import 'react-calendar-datetime-picker/dist/style.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function SchedulerForm({ params }) {
  const { service } = React.use(params); // unwrap the params Promise
  const formattedService = service.replace(/-/g, " ");

  const [fileName1, setFileName1] = useState("Attachment (Optional)");
  const fileInputRef1 = useRef(null);

  const handleButtonClick = () => {
    fileInputRef1.current.click(); // open file dialog
  };

  const [formData, setFormData] = useState({
    organization: '',
    title: '',
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    serviceRequest: formattedService,
    description: '',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const { name, file } = event.target;
    if (file) {
      setFileName1(file.name);
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFileName1("Attachment (Optional)");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div className="jobApplyWrap flex flex-col gap-4">
        <div className="flex gap-5 items-center">
          <p className="title !text-2xl !font-semibold">Get Instant Help</p>
        </div>
      </div>

      <div className="whyCHooseUsWrapper coreValues careerOp">
        <div className="whyChooseUsHeading gradient-background">
          <h2>Let’s Get This Sorted</h2>
        </div>
        <div className="contactForm whyChooseUsCardContents">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="calender">
              <DtCalendar
                type='single'
                local='en'
                withTime
                showWeekend
                todayBtn="true"
              />
            </div>

            {/* Row 1: Organization (Optional) */}
            <div>
              <input
                type="text"
                name="organization"
                placeholder="Organization (Optional)"
                value={formData.organization}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            {/* Row 2: Mr/Mrs Dropdown, Last Name (Required), First Name (Optional) */}
            <div className="flex gap-[20px]">
              <select
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="input-field !w-[10%]"
              >
                <option value="Dr.">Dr.</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                <option value="Miss.">Miss.</option>
              </select>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name (Required)"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="input-field !w-[45%]"
              />
              <input
                type="text"
                name="firstName"
                placeholder="First Name (Optional)"
                value={formData.firstName}
                onChange={handleChange}
                className="input-field !w-[45%]"
              />
            </div>

            {/* Row 3: Email Address (Required), Phone Number (Required) */}
            <div className="flex gap-[20px]">
              <input
                type="email"
                name="email"
                placeholder="Email Address (Required)"
                required
                value={formData.email}
                className="input-field"
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Required)"
                required
                value={formData.phone}
                className="input-field"
                onChange={handleChange}
              />
            </div>

            {/* Row 4: Request Service */}
            <div className="flex gap-[20px]">
              <span className="input-field">Requested Service</span>
              <input
                type="text"
                name="serviceRequest"
                placeholder="Request Service"
                value={formData.serviceRequest}
                onChange={handleChange}
                className="input-field capitalize"
              />
            </div>

            {/* Row 5: Brief Description */}
            <div>
              <textarea
                name="description"
                placeholder="Brief Description"
                value={formData.description}
                onChange={handleChange}
                rows="2"
                className="input-field resize-none"
              />
            </div>

            {/* Row 6: Attachment (Optional) */}
            <div className='relative'>
              <input
                type='file'
                ref={fileInputRef1}
                onChange={handleFileChange}
                name="attachment"
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

            {/* Row 7: Confirm */}
            <div className="flex justify-center mt-5">
              <button type="submit" className="button text-center">Confirm</button>
            </div>
          </form>
        </div>
      </div>
      <FloatingWhatsApp
        phoneNumber="+1 (701) 215-1639"
        accountName="Aerialink"
        avatar="/images/logo.png"
        statusMessage=""
        placeholder="Feel free to ask."
        darkMode
        // chatMessage="Hello there! 🤝 How can we help? Now i'm going yo show you how to distribute the things."
        chatMessage="Hi there! 👋Thanks for reaching out. One of our representatives will be with you shortly. 😊
      While we’re connecting you, could you please share your name and a brief description of how
      we can assist? This will help us serve you faster.
      Our working hours are: Monday to Friday, 9:00 AM – 5:00 PM
      If you’re messaging us outside of these hours, we’ll get back to you on the next business day.
      Thanks and talk soon!"
        chatboxClassName="whatsappButton"
        className="whatsappButtonWrapper"
        notification={false}
      />
    </>
  );
}
