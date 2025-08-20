'use client';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function Whatsapp() {
    return (
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
    );
}