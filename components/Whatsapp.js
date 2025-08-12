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
            chatMessage="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            chatboxClassName="whatsappButton"
            className="whatsappButtonWrapper"
        />
    );
}