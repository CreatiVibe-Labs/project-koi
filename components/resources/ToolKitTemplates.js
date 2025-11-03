"use client";
import React, { useState } from "react";

const toolkitsData = {
  "Digital Asset evaluation Toolkit": {
    subtitle: "Audit and assess the current website/app before redevelopment",
    items: [
      { name: "Stakeholder Requirements Document", desc: "Template to collect input from key departments" },
      { name: "Function Requirements Specification", desc: "Define exact needs/features" },
      { name: "Redesign Project Gantt Chart", desc: "Visualize the timeline and phases" },
      { name: "Information Architecture Template", desc: "Sitemap builder" },
    ],
  },
  "Website/App Redevelopment Planning Toolkit": {
    subtitle: "Lay the foundation for a structured redesign project",
    items: [
      { name: "Stakeholder Requirements Document", desc: "Template to collect input from key departments" },
      { name: "Function Requirements Specification", desc: "Define exact needs/features" },
      { name: "Redesign Project Gantt Chart", desc: "Visualize the timeline and phases" },
      { name: "Information Architecture Template", desc: "Sitemap builder" },
    ],
  },
  "Technology Evaluation & Selection Toolkit": {
    subtitle: "Choose the right CMS, frontend/backend stack, vendors",
    items: [
      { name: "CMS Comparison Matrix", desc: "Side-by-side enterprise feature comparison" },
      { name: "Vendor RFP Template for Web/App Project", desc: "Solicit and evaluate proposals" },
      { name: "Tech Stack Pros & Cons Matrix", desc: "Compare React vs Angular, WordPress vs Headless CMS" },
      { name: "Integration Needs Checklist", desc: "Map API and third-party system needs" },
    ],
  },
  "UX & UI Design Strategy Toolkit": {
    subtitle: "Help to plan a new UX vision collaboratively",
    items: [
      { name: "Persona Development Template", desc: "Define core user segments" },
      { name: "Customer Journey Mapping Board", desc: "Multi-touchpoint flow template" },
      { name: "Design System Starter Kit", desc: "Typography, buttons, color palette components" },
      { name: "UX Research Interview Guide", desc: "Template for stakeholder/user interviews" },
    ],
  },
};

export default function ToolkitsTemplates({resources, lang, toolkit}) {

  console.log({resources, lang, toolkit})

  const [checkedFiles, setCheckedFiles] = useState({});

  const handleCheckbox = (sectionTitle, itemName) => {
    setCheckedFiles((prev) => ({
      ...prev,
      [`${sectionTitle}-${itemName}`]: !prev[`${sectionTitle}-${itemName}`],
    }));
  };

  const handleDownload = (name, format) => {
    const path = `/files/${name.toLowerCase().replace(/\s+/g, "_")}.${format}`;
    const link = document.createElement("a");
    link.href = path;
    link.download = `${name}.${format}`;
    link.click();
  };

  const handleDownloadAll = () => {
    Object.entries(toolkitsData).forEach(([sectionTitle, section]) => {
      section.items.forEach((item) => {
        if (checkedFiles[`${sectionTitle}-${item.name}`]) {
          ["docx", "pdf"].forEach((format) => {
            const path = `/files/${item.name.toLowerCase().replace(/\s+/g, "_")}.${format}`;
            const link = document.createElement("a");
            link.href = path;
            link.download = `${item.name}.${format}`;
            link.click();
          });
        }
      });
    });
  };

  return (
    <div className="bg-none backdrop-blur-[15px] p-6 xxs:p-6 xs:p-7 md:p-8 text-white font-inter border border-white/15 rounded-2xl overflow-hidden">
      <h2 className="text-2xl xxs:text-[28px] md:text-[30px] font-bold mb-5 xs:mb-6 md:mb-7 text-[#C3F8D9]">
        {resources.content.toolkits_text[lang] || 'Toolkits & Templates'}
      </h2>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border border-white/15">
        {Object.entries(toolkitsData).map(([title, section], index) => (
          <div
            key={title}
            className={`
              ${index > 0 ? "border-t border-white/15" : ""}
              ${index % 2 === 1 ? "md:border-l md:border-white/15" : ""}
              ${index < 2 ? "md:border-t-0" : "md:border-t md:border-white/15"}
            `}
          >
            {/* Header */}
            <div className="p-3 xs:p-4 md:p-3 border-b border-white/15">
              <h3 className="text-[18px] xs:text-[20px] font-semibold text-[#C3F8D9] mb-1">
                {title}
              </h3>
              <p className="text-[16px] xs:text-[18px] text-white">{section.subtitle}</p>
            </div>

            {/* Rows (replacing table) */}
            <div>
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row border-b border-white/15 last:border-0`}
                >
                  {/* Checkbox + Name */}
                  <div className="md:w-[27%] w-full py-3 px-3 md:border-r border-white/15 text-[#C3F8D9] flex flex-col justify-start">
                    <div className="flex items-start gap-2">
                      <div
                        onClick={() => handleCheckbox(title, item.name)}
                        className={`h-8 w-8 border border-[#46D3A7] rounded-lg flex items-center justify-center font-bold cursor-pointer shrink-0 ${checkedFiles[`${title}-${item.name}`]
                            ? "bg-[#0F4D3A] text-[#46D3A7]"
                            : "bg-transparent text-[#46D3A7]"
                          }`}
                      >
                        {checkedFiles[`${title}-${item.name}`] ? "✓" : ""}
                      </div>
                      <span>{item.name}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="md:w-[35%] w-full py-3 px-3 md:border-r border-white/15 text-white font-medium flex items-start">
                    {item.desc}
                  </div>

                  {/* DOCX */}

                  <div className="md:w-[20%] w-full py-3 px-3 md:border-r border-white/15 flex items-start md:justify-center">
                    <button
                      onClick={() => handleDownload(item.name, "docx")}
                      className="bg-[#162F20] border border-white rounded-lg text-white h-9 w-full md:h-8 md:w-24 text-[16px] cursor-pointer hover:scale-105 transition-all"
                    >
                      .docx
                    </button>
                  </div>

                  {/* PDF */}
                  <div className="md:w-[18%] w-full py-3 px-3 flex items-start md:justify-center">
                    <button
                      onClick={() => handleDownload(item.name, "pdf")}
                      className="bg-[#162F20] border border-white rounded-lg text-white h-9 w-full md:h-8 md:w-16 text-[16px] cursor-pointer hover:scale-105 transition-all"
                    >
                      .pdf
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Download All */}
      <div className="text-center mt-8">
        <button
          onClick={handleDownloadAll}
          className="bg-none backdrop-blur-[15px] text-[#39ff14] py-[11px] px-10 xs:px-12 md:px-[120px] border border-[#39ff14] rounded-full font-bold text-[17px] xs:text-[18px] md:text-[19px] cursor-pointer shadow-[0_4px_15px_rgba(255,255,255,0.4)] transition-all duration-300 hover:bg-white/40
 "
        >
          Download All
        </button>
      </div>
    </div>
  );
}
