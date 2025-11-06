"use client";
import React, { useMemo, useState } from "react";

export default function ToolkitsTemplates({ resources, lang, toolkit }) {

  console.log({ resources, lang, toolkit })

  const [checkedFiles, setCheckedFiles] = useState({});
  const [isZipping, setIsZipping] = useState(false);

  const handleCheckbox = (sectionTitle, itemName) => {
    setCheckedFiles((prev) => ({
      ...prev,
      [`${sectionTitle}-${itemName}`]: !prev[`${sectionTitle}-${itemName}`],
    }));
  };

  const handleDownload = (file, format) => {
    const path = file;
    const link = document.createElement("a");
    link.href = path;
    link.download = file;
    link.click();
  };

  const handleDownloadAll = async () => {
    const selectedFiles = [];
    
    // Collect all selected files
    toolkit.data.forEach((section) => {
      const sectionTitle = section.titles[lang] || section.titles['en'];
      section.templates.forEach((item) => {
        const itemTitle = item.titles[lang] || item.titles['en'];
        if (checkedFiles[`${sectionTitle}-${itemTitle}`]) {
          if (item.files.docx) {
            selectedFiles.push({
              url: item.files.docx,
              name: `${itemTitle}.docx`
            });
          }
          if (item.files.pdf) {
            selectedFiles.push({
              url: item.files.pdf,
              name: `${itemTitle}.pdf`
            });
          }
        }
      });
    });

    console.log('🔍 Selected files for ZIP:', selectedFiles);
    console.log('📁 Total files selected:', selectedFiles.length);
    
    if (selectedFiles.length === 0) {
      alert('Please select at least one file to download.');
      return;
    }

    try {
      // Show loading state via React state
      setIsZipping(true);

      // Create ZIP via backend API
      const response = await fetch('/api/download-zip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ files: selectedFiles })
      });

      if (response.ok) {
        // Download the ZIP file
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'selected-templates.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        throw new Error('Failed to create ZIP');
      }

      // Restore button state
      setIsZipping(false);

    } catch (error) {
      console.error('ZIP download failed:', error);
      alert('ZIP creation failed. Downloading files individually...');
      
      // Fallback to individual downloads
      downloadIndividually(selectedFiles);
      
      // Restore button state
      setIsZipping(false);
    }
  };

  const downloadIndividually = async (files) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const link = document.createElement("a");
      link.href = file.url;
      link.download = file.name;
      link.click();
      
      // Add delay between downloads to avoid browser blocking
      if (i < files.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
  };

  // Determine if any checkbox is selected to toggle the Download All button
  const hasAnySelection = useMemo(() => Object.values(checkedFiles).some(Boolean), [checkedFiles]);



  return (
    <>
  <div className="relative w-full py-[15px] px-[18px] bg-none bg-cover bg-center flex items-center justify-start  mb-6 gradient-background rounded-xl ">
<h1 className="text-3xl xs:text-xl xxs:text-lg md:text-3xl font-bold text-[#C3F8D9]  ">
              {resources.content.toolkits_text[lang] || "Toolkits & Templates"}
            </h1>
    </div>


    <div className="bg-none backdrop-blur-[15px] p-6 xxs:p-6 xs:p-7 md:p-8 text-white font-inter border border-white/15 rounded-2xl overflow-hidden">
      
      <p className="text-[16px] xs:text-[18px] text-white"></p>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 border border-white/15">
        {toolkit.data.length > 0 && toolkit.data.map((section, index) => (
          <div
            key={section.titles[lang]}
            className={`
              ${index > 0 ? "border-t border-white/15" : ""}
            `}
          >
            {console.log(section)}
            {/* Header */}
            <div className="p-3 xs:p-4 md:p-3 border-b border-white/15">
              <h3 className="text-[18px] xs:text-[20px] font-semibold text-[#C3F8D9] mb-1">
                {section.titles[lang] || section.titles['en']}
              </h3>
              <p className="text-[16px] xs:text-[18px] text-white">{section.descriptions[lang] || section.descriptions['en']}</p>
            </div>

            {/* Rows (replacing table) */}
            <div>
              {section.templates.length > 0 && section.templates.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row border-b border-white/15 last:border-0`}
                >
                  <div className="md:w-[27%] w-full py-3 px-3 md:border-r border-white/15 text-[#C3F8D9] flex flex-col justify-start">
                    <div className="flex items-start gap-2">
                      <div
                        onClick={() => handleCheckbox(section.titles[lang] || section.titles['en'], item.titles[lang] || item.titles['en'])}
                        className={`h-8 w-8 border border-[#46D3A7] rounded-lg flex items-center justify-center font-bold cursor-pointer shrink-0 ${checkedFiles[`${section.titles[lang] || section.titles['en']}-${item.titles[lang] || item.titles['en']}`]
                          ? "bg-[#0F4D3A] text-[#46D3A7]"
                          : "bg-transparent text-[#46D3A7]"
                          }`}
                      >
                        {checkedFiles[`${section.titles[lang] || section.titles['en']}-${item.titles[lang] || item.titles['en']}`] ? "✓" : ""}
                      </div>
                      <span>{item.titles[lang] || item.titles['en']}</span>
                    </div>
                  </div>
                  <div className="md:w-[35%] w-full py-3 px-3 md:border-r border-white/15 text-white font-medium flex items-start">
                    {item.descriptions[lang] || item.descriptions['en']}
                  </div>

                  <div className="md:w-[20%] w-full py-3 px-3 md:border-r border-white/15 flex items-start md:justify-center">
                    {item.files.docx && (
                      <button
                        onClick={() => handleDownload(item.files.docx || item.titles['en'], "docx")}
                        className="bg-[#162F20] border border-white rounded-lg text-white h-9 w-full md:h-8 md:w-24 text-[16px] cursor-pointer hover:scale-105 transition-all"
                      >
                        .docx
                      </button>
                    )}
                  </div>

                  <div className="md:w-[18%] w-full py-3 px-3 flex items-start md:justify-center">
                    {item.files.pdf && (
                      <button
                        onClick={() => handleDownload(item.files.pdf || item.titles['en'], "pdf")}
                        className="bg-[#162F20] border border-white rounded-lg text-white h-9 w-full md:h-8 md:w-16 text-[16px] cursor-pointer hover:scale-105 transition-all"
                      >
                        .pdf
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Download All: only visible when at least one checkbox selected */}
      {hasAnySelection && (
        <div className="text-center mt-8">
          <button
            onClick={handleDownloadAll}
            disabled={isZipping}
            aria-disabled={isZipping}
            className={`bg-none backdrop-blur-[15px] text-[#39ff14] py-[11px] px-10 xs:px-12 md:px-[120px] border border-[#39ff14] rounded-full font-bold text-[17px] xs:text-[18px] md:text-[19px] cursor-pointer shadow-[0_4px_15px_rgba(255,255,255,0.4)] transition-all duration-300 ${isZipping ? 'opacity-70 pointer-events-none' : 'hover:bg-white/40'}`}
          >
            {isZipping ? 'Creating ZIP…' : 'Download All'}
          </button>
        </div>
      )}
    </div>
    </>
  );
}
