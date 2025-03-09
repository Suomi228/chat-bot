import "./index.css";
import userAvatar from "../../../assets/chat-avatar.svg";
import botAvatar from "../../../assets/chat-avatar.svg";
interface MessageProps {
  text: string;
  isBot: boolean;
  timestamp: string;
}

export default function Message({ text, isBot, timestamp }: MessageProps) {
  return (
    <div className={`message ${isBot ? "bot" : "user"}`}>
      <img
        src={isBot ? botAvatar : userAvatar}
        alt="avatar"
        className="message__avatar"
      />
      <div className="message__content">
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
