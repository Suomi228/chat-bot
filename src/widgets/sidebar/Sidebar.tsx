import "./index.css";
import logo from "../../assets/logo.svg";
import UserInfo from "../../shared/ui/user-info/UserInfo";
import IconButton from "../../shared/ui/icon-button/IconButton";
import vector from "../../assets/Vector.svg";
import search from "../../assets/search-simple.svg";
import addChat from "../../assets/add-chat.svg";
import ChatRow from "../../shared/ui/chat-row/ChatRow";
export default function Sidebar() {
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
              <ChatRow name="Новый чат" active={true} />
              <ChatRow name="История за апрель" active={false} />
              <ChatRow name="Техподдержка" active={false} />
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
