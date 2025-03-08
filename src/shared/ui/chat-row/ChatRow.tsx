import "./index.css";
import chat from "../../../assets/sidebar-chat.svg";
import trash from "../../../assets/trash.svg";
type ChatRowProps = {
  id: string;
  name: string;
  active: boolean;
  onSelect: (id: string) => void;
};

export default function ChatRow({ id, name, active, onSelect }: ChatRowProps) {
  const handleRowClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".chat-row__trash")) return;
    onSelect(id);
  };

  return (
    <div
      className={`chat-row ${active ? "active" : ""}`}
      onClick={handleRowClick}
    >
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
