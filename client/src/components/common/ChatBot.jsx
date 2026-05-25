import { useState } from "react";

import {
  HiOutlineChatAlt2,
  HiOutlineX,
  HiOutlinePaperAirplane,
} from "react-icons/hi";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hi 👋 Welcome to EverGrow Digital. How can we help you today?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    const lowerText = input.toLowerCase();

    let botReply =
      "Please contact us at +91 9876543210 or hello@evergrowdigital.com for more information 🚀";

    if (
      lowerText.includes("service") ||
      lowerText.includes("services")
    ) {
      botReply =
        "We provide Web Development, SEO Optimization, Digital Marketing, Graphics Designing, Branding and Video Editing services 🚀";
    }

    else if (
      lowerText.includes("price") ||
      lowerText.includes("pricing") ||
      lowerText.includes("cost")
    ) {
      botReply =
        "Pricing depends on project requirements. Contact us at +91 9876543210 or hello@evergrowdigital.com 💰";
    }

    else if (
      lowerText.includes("contact") ||
      lowerText.includes("phone") ||
      lowerText.includes("email")
    ) {
      botReply =
        "You can contact us at +91 9876543210 or hello@evergrowdigital.com 📞";
    }

    else if (
      lowerText.includes("website") ||
      lowerText.includes("web development")
    ) {
      botReply =
        "Yes 🚀 We create premium modern websites for startups and businesses.";
    }

    else if (
      lowerText.includes("seo")
    ) {
      botReply =
        "We provide complete SEO optimization and Google ranking services 📈";
    }

    else if (
      lowerText.includes("video")
    ) {
      botReply =
        "We provide professional video editing services including reels, ads and YouTube videos 🎬";
    }

    else if (
      lowerText.includes("hello") ||
      lowerText.includes("hi")
    ) {
      botReply =
        "Hello 👋 Welcome to EverGrow Digital. How can we help you today?";
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: botReply,
          sender: "bot",
        },
      ]);
    }, 500);

    setInput("");
  };

  return (
    <div className="chatbot-wrapper">
      {/* CHAT WINDOW */}

      {open && (
        <div className="chatbot-window">
          {/* HEADER */}

          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <div className="chatbot-logo">
                E
              </div>

              <div>
                <h3 className="chatbot-title">
                  EverGrow Digital
                </h3>

                <p className="chatbot-status">
                  Online • Ready to help
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="chatbot-close"
            >
              <HiOutlineX />
            </button>
          </div>

          {/* BODY */}

          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message-row ${
                  msg.sender === "user"
                    ? "user"
                    : "bot"
                }`}
              >
                <div
                  className={`chatbot-message ${
                    msg.sender === "user"
                      ? "user-message"
                      : "bot-message"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* QUICK BUTTONS */}

          <div className="chatbot-quick-buttons">
            <button
              onClick={() =>
                setInput("Tell me about services")
              }
              className="chatbot-quick-btn"
            >
              Services
            </button>

            <button
              onClick={() =>
                setInput("Pricing details")
              }
              className="chatbot-quick-btn"
            >
              Pricing
            </button>

            <button
              onClick={() =>
                setInput("Contact information")
              }
              className="chatbot-quick-btn"
            >
              Contact
            </button>
          </div>

          {/* INPUT */}

          <div className="chatbot-input-wrapper">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              className="chatbot-input"
            />

            <button
              onClick={sendMessage}
              className="chatbot-send-btn"
            >
              <HiOutlinePaperAirplane />
            </button>
          </div>
        </div>
      )}

      {/* FLOAT BUTTON */}

      <button
        onClick={() => setOpen(!open)}
        className="chatbot-toggle-btn"
      >
        {open ? (
          <HiOutlineX />
        ) : (
          <HiOutlineChatAlt2 />
        )}
      </button>
    </div>
  );
};

export default ChatBot;