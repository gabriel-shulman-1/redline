import React from "react";
import wpsLogo from "../assets/wps.png"
export const WhatsAppLink = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <img src={wpsLogo} alt="WhatsApp" width="30"/>
    </a>
  );
};
