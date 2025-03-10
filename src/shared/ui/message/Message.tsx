import "./index.css";
import userAvatar from "../../../assets/chat-avatar.svg";
import botAvatar from "../../../assets/chat-avatar.svg";
import copyIcon from "../../../assets/copy.svg";
import { useState } from "react";
interface MessageProps {
  text: string;
  isBot: boolean;
  timestamp: string;
}

export default function Message({ text, isBot, timestamp }: MessageProps) {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <div className={`message ${isBot ? "bot" : "user"}`}>
      <img
        src={isBot ? botAvatar : userAvatar}
        alt="avatar"
        className="message__avatar"
      />
      <div className="message__content">
        <div className="copy-button-wrapper">
          <img src={isCopied ? "" : copyIcon} onClick={handleCopy} />
          {isCopied && <span className="copy-checkmark">✓</span>}
        </div>
        {isBot ? (
          <>
            <div className="message__text">{text}</div>
            <div className="message__time">{timestamp}</div>
          </>
        ) : (
          <div className="message__text">
            <span>{text}</span>
            <span className="message__time-inline">{timestamp}</span>
          </div>
        )}
      </div>
    </div>
  );
}
