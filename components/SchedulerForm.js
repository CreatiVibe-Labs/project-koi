'use client';

import React, { useState, useRef } from "react";
import HubSpotMeetings from '@/components/HubSpot';

export default function SchedulerForm() {
  const [formData, setFormData] = useState({
    organization: '',
    title: '',
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    serviceRequest: '',
    description: '',
    attachment: null,
  });

  // Reference for HubSpotMeetings component
  const hubSpotMeetingRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data
    console.log("Form Data:", formData);

    // Trigger HubSpot meeting popup
    if (hubSpotMeetingRef.current) {
      hubSpotMeetingRef.current.openHubSpotMeeting();
    }
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
          <form onSubmit={handleSubmit}>
            {/* Row 1: Organization (Optional) */}
            <div>
              <input
                type="text"
                name="organization"
                placeholder="Organization (Optional)"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            {/* Row 2: Mr/Mrs Dropdown, Last Name (Required), First Name (Optional) */}
            <div>
              <select
                name="title"
                value={formData.title}
                onChange={handleChange}
              >
                <option value="">Select Mr/Mrs</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
              </select>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name (Required)"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="firstName"
                placeholder="First Name (Optional)"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            {/* Row 3: Email Address (Required), Phone Number (Required) */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address (Required)"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Required)"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Row 4: Request Service */}
            <div>
              <input
                type="text"
                name="serviceRequest"
                placeholder="Request Service"
                value={formData.serviceRequest}
                onChange={handleChange}
              />
            </div>

            {/* Row 5: Brief Description */}
            <div>
              <textarea
                name="description"
                placeholder="Brief Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            {/* Row 6: Attachment (Optional) */}
            <div>
              <input
                type="file"
                name="attachment"
                onChange={handleFileChange}
              />
            </div>

            {/* Row 7: Confirm */}
            <div>
              <button type="submit">Confirm</button>
            </div>
          </form>
        </div>
      </div>

      {/* HubSpot Meetings Component */}
      <HubSpotMeetings ref={hubSpotMeetingRef} onMeetingOpened={() => console.log("HubSpot Meeting Popup Opened")} />
    </>
  );
}
