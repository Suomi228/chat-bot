import { useState } from "react";
import "./index.css";
import userAvatar from "../../../assets/chat-avatar.svg";
import botAvatar from "../../../assets/chat-avatar.svg";
import copyIcon from "../../../assets/copy.svg";

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
    <div className={`message ${isBot ? "message--bot" : "message--user"}`}>
      {isBot && (
        <div className="message__bot-name">
          Bot Name <span className="message__bot-badge">gpt-3.5-turbo</span>
        </div>
      )}
      <div className={`message__body${isBot ? "" : "--user"}`}>
        <img
          src={isBot ? botAvatar : userAvatar}
          alt="avatar"
          className="message__avatar"
        />

        <div className="message__content">
          {isBot ? (
            <>
              <div className="message__text message__text--bot">{text}</div>
              <div className="message__footer">
                <div className="message__controls">
                  <span className="message__caps">CAPS</span>
                  <button
                    className="message__copy"
                    onClick={handleCopy}
                    aria-label="Copy message"
                  >
                    {isCopied ? "✓" : <img src={copyIcon} alt="Copy" />}
                  </button>
                </div>
                <time className="message__time">{timestamp}</time>
              </div>
            </>
          ) : (
            <div className="message__text">
              <span>{text}</span>
              <time className="message__time message__time--inline">
                {timestamp}
              </time>
            </div>
          )}
        </div>
        {!isBot ? (
          <button
            className="message__copy"
            onClick={handleCopy}
            aria-label="Copy message"
          >
            {isCopied ? "✓" : <img src={copyIcon} alt="Copy" />}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
