'use client';

import React, { useState, useRef } from "react";
import { DtPicker } from 'react-calendar-datetime-picker';
import 'react-calendar-datetime-picker/dist/style.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FormLoading from "@/components/formLoading";

export default function SchedulerForm({ params }) {

  const router = useRouter();
  const { service } = React.use(params); // unwrap the params Promise
  const formattedService = service.replace(/-/g, " ");

  const [fileName1, setFileName1] = useState("Attachment (Optional)");
  const fileInputRef1 = useRef(null);

  const handleButtonClick = () => {
    fileInputRef1.current.click(); // open file dialog
  };

  const [errors, setErrors] = useState({});

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // success/error message

  const [formData, setFormData] = useState({
    salutation: '',
    last_name: '',
    first_name: '',
    email: '',
    phone: '',
    requested_service: formattedService,
    organization: '',
    brief_description: '',
    attachment: null,
  });

  const [date, setDate] = useState(null)

  const validate = () => {
    const newErrors = {};
    if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target; // ✅ use files, not file
    if (files && files.length > 0) {
      const file = files[0];
      console.log("File selected:", file);

      setFileName1(file.name);

      setFormData((prevData) => ({
        ...prevData,
        [name]: file, // ✅ store in state under input name
      }));
    } else {
      setFileName1("Attachment (Optional)");
    }
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
        // prepare FormData
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          if (value !== null) {
            data.append(key, value);
          }
        });

        const { year, month, day, hour, minute } = date;
        const formattedDate = `${year}/${String(month).padStart(2, "0")}/${String(day).padStart(2, "0")} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
        data.append('schedule_date_time', formattedDate);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schedules`, {
          method: "POST",
          body: data, // 👈 no headers, browser sets multipart/form-data automatically
        });

        const responseData = await res.json();

        if (!res.ok || responseData.status === false) {
          if (responseData.errors) {
            const apiErrors = {};
            Object.keys(responseData.errors).forEach((field) => {
              apiErrors[field] = responseData.errors[field][0];
            });
            setErrors(apiErrors);
          }

          setStatus({
            type: "error",
            msg: responseData.message || "Form submission failed.",
          });
          setFormSubmitting(false);
          return;
        }

        // Success
        setStatus({ type: "success", msg: "Form submitted successfully!" });
        setFormData({
          salutation: "",
          last_name: "",
          first_name: "",
          email: "",
          phone: "",
          requested_service: formattedService,
          organization: "",
          brief_description: "",
          attachment: null,
        });
        setDate(null);
        setFileName1("Attachment (Optional)");
        setFormSubmitting(false);
        router.push("/thank-you");
      } catch (error) {
        setStatus({ type: "error", msg: "Server error. Try again later." });
        setFormSubmitting(false);
      }
    }
  };

  const openWhatsapp = (e) => {
    e.preventDefault();
    const el = document.getElementsByClassName("floating-whatsapp-button");
    console.log({ el })
    if (el) {
      el[0].click();
    }
  }

  return (
    <>
      <div className="jobApplyWrap flex flex-col gap-4">
        <div className="flex gap-5 items-center">
          <p className="title !text-2xl !font-semibold">Get Instant Help</p>
          <span className="!w-[40px] !min-w-[40px] cursor-pointer" id="openWhatsapp" onClick={openWhatsapp}>
            <svg viewBox="0 0 48 48" className="w-[40px] h-[40px]" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Whatsapp-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-700.000000, -360.000000)" fill="#67C15E"> <path d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z" id="Whatsapp"> </path> </g> </g> </g></svg>
          </span>
          <Link href="tel:+81788552760">
            <Image src="/icons/phone.svg" width={600} height={600} className="w-[40px] h-[40px] mt-[5px]"></Image>
          </Link>
        </div>
      </div>

      <div className="whyCHooseUsWrapper coreValues careerOp">
        <div className="whyChooseUsHeading gradient-background">
          <h2>Let’s Get This Sorted</h2>
        </div>
        <div className="contactForm whyChooseUsCardContents">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="calender">
              <DtPicker
                type='single'
                local='en'
                withTime
                showWeekend
                todayBtn="true"
                inputClass="input-field"
                placeholder="Select Schedule Date"
                showTimeInput
                onChange={setDate}
              />
              {errors['schedule_date_time'] && <p className="text-red-500 text-sm mt-1">{errors['schedule_date_time']}</p>}
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
              {errors['organization'] && <p className="text-red-500 text-sm mt-1">{errors['organization']}</p>}
            </div>

            {/* Row 2: Mr/Mrs Dropdown, Last Name , First Name (Optional) */}
            <div className="flex gap-[20px]">
              <select
                name="salutation"
                value={formData.salutation}
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
                name="last_name"
                placeholder="Last Name "
                required
                value={formData.last_name}
                onChange={handleChange}
                className="input-field !w-[45%]"
              />
              {errors['last_name'] && <p className="text-red-500 text-sm mt-1">{errors['last_name']}</p>}
              <input
                type="text"
                name="first_name"
                placeholder="First Name (Optional)"
                value={formData.first_name}
                onChange={handleChange}
                className="input-field !w-[45%]"
              />
              {errors['first_name'] && <p className="text-red-500 text-sm mt-1">{errors['first_name']}</p>}
            </div>

            {/* Row 3: Email Address , Phone Number  */}
            <div className="flex gap-[20px]">
              <input
                type="email"
                name="email"
                placeholder="Email Address "
                required
                value={formData.email}
                className="input-field"
                onChange={handleChange}
              />
              {errors['email'] && <p className="text-red-500 text-sm mt-1">{errors['email']}</p>}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number "
                required
                value={formData.phone}
                className="input-field"
                onChange={handleChange}
              />
              {errors['phone'] && <p className="text-red-500 text-sm mt-1">{errors['phone']}</p>}
            </div>

            {/* Row 4: Request Service */}
            <div className="flex gap-[20px]">
              <span className="input-field">Requested Service</span>
              <input
                type="text"
                name="serviceRequest"
                readOnly
                placeholder="Request Service"
                value={formData.requested_service}
                onChange={handleChange}
                className="input-field capitalize"
              />
            </div>

            {/* Row 5: Brief Description */}
            <div>
              <textarea
                name="brief_description"
                placeholder="Brief Description"
                value={formData.brief_description}
                onChange={handleChange}
                rows="2"
                className="input-field resize-none"
              />
              {errors['brief_description'] && <p className="text-red-500 text-sm mt-1">{errors['brief_description']}</p>}
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
              {errors['attachment'] && <p className="text-red-500 text-sm mt-1">{errors['attachment']}</p>}
            </div>

            {/* Row 7: Confirm */}
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="button flex justify-center m-auto !max-h-[51px]"
                disabled={formSubmitting ? true : false}
              >
                {formSubmitting ? <FormLoading /> : 'Confirm'}
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
