import "./index.css";
import chat from "../../../assets/sidebar-chat.svg";
import trash from "../../../assets/trash.svg";
type ChatRowProps = {
  name: string;
  active: boolean;
};

export default function ChatRow({ name, active }: ChatRowProps) {
  return (
    <div className={`chat-row ${active ? "active" : ""}`}>
      <div className="chat-row__left">
        <button className="chat-row__chat">
          <img src={chat} alt="Чат" />
        </button>
        <span className="chat-row__name">{name}</span>
      </div>
      <button className="chat-row__trash">
        <img src={trash} alt="Удалить" />
      </button>
    </div>
  );
}
