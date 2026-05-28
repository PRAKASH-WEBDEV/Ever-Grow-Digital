import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=917669338205&text=Hi+The+Evergrow+Digital%21+I+need+help+with+marketing+services.&type=phone_number&app_absent=0";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      className="whatsapp-float-btn"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
