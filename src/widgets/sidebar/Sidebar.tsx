import "./index.css";
import logo from "../../assets/logo.svg";
import UserInfo from "../../shared/ui/user-info/UserInfo";
import IconButton from "../../shared/ui/icon-button/IconButton";
import vector from "../../assets/Vector.svg";
import search from "../../assets/search-simple.svg";
import addChat from "../../assets/add-chat.svg";
import ChatRow from "../../shared/ui/chat-row/ChatRow";
import { useState } from "react";
interface ChatItem {
  id: string;
  name: string;
}
export default function Sidebar() {
  const [chats, setChats] = useState<ChatItem[]>([
    { id: "1", name: "Новый чат" },
    { id: "2", name: "История за апрель" },
    { id: "3", name: "Техподдержка" },
  ]);
  const [selectedChatId, setSelectedChatId] = useState<string>("1");

  const handleChatSelect = (chatId: string) => {
    setSelectedChatId(chatId);
  };
  return (
    <div className="sidebar-tab">
      <div className="sidebar__inner">
        <div className="sidebar__up-content">
          <img src={logo} alt="logo" />
        </div>
        <div className="sidebar__wrapper">
          <div className="sidebar__chat">
            <div className="sidebar__icons">
              <IconButton icon={addChat} backgroundColor="blue" />
              <IconButton icon={search} backgroundColor="transparent" />
            </div>
            <div className="sidebar__chat-list">
              {chats.map((chat) => (
                <ChatRow
                  key={chat.id}
                  id={chat.id}
                  name={chat.name}
                  active={selectedChatId === chat.id}
                  onSelect={handleChatSelect}
                />
              ))}
            </div>
          </div>
          <div>
            <UserInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
