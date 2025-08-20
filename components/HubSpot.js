import { useEffect, useImperativeHandle, forwardRef } from 'react';

const HubSpotMeetings = forwardRef(({ onMeetingOpened }, ref) => {
  useEffect(() => {
    // Dynamically load the HubSpot script
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const prefillParams = {
    email: 'example@example.com',
    firstname: 'John',
    lastname: 'Doe',
  };

  // Create a query string from the prefill params
  const queryString = new URLSearchParams(prefillParams).toString();
  const meetingUrl = `https://meetings-eu1.hubspot.com/creativibe-labs?embed=true&${queryString}`;

  const openHubSpotMeeting = () => {
    // Trigger the HubSpot popup
    const script = document.createElement('script');
    script.innerHTML = `
      var hsMeetings = window.HubSpotMeetings;
      hsMeetings.create('https://meetings-eu1.hubspot.com/creativibe-labs', {
        email: '${prefillParams.email}',
        firstname: '${prefillParams.firstname}',
        lastname: '${prefillParams.lastname}'
      }).open();
    `;
    document.body.appendChild(script);

    // Call the callback after opening the popup
    if (onMeetingOpened) onMeetingOpened();
  };

  // Expose the method to parent component
  useImperativeHandle(ref, () => ({
    openHubSpotMeeting,
  }));

  return (
    <div className="meetings-iframe-container" data-src={meetingUrl}>
      {/* HubSpot Meetings will be embedded here */}
    </div>
  );
});

export default HubSpotMeetings;
