import "./index.css";
import logo from "../../assets/logo.svg";
import UserInfo from "../../shared/ui/user-info/UserInfo";
import IconButton from "../../shared/ui/icon-button/IconButton";
import vector from "../../assets/Vector.svg";
import search from "../../assets/search-simple.svg";
import addChat from "../../assets/add-chat.svg";
import ChatRow from "../../shared/ui/chat-row/ChatRow";
import { useEffect, useState } from "react";
import LanguagePicker from "../../shared/ui/lang-picker/LanguagePicker";
import { useAppDispatch } from "../../shared/api/hooks";
import { useSelector } from "react-redux";
import {
  showChatList,
  createChat,
  deleteChat,
} from "../../shared/api/slices/chat";
import { RootState } from "../../shared/api/store";
import spin from "../../assets/loader.svg";
interface ChatItem {
  id: string;
  name: string;
}
export default function Sidebar() {
  const dispatch = useAppDispatch();

  const chatList = useSelector<RootState, ChatItem[]>(
    (state) => state.chat.data?.data || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState<string>(() => {
    const savedId = localStorage.getItem("selectedChatId");
    return savedId || "";
  });
  const onCreate = async () => {
    setIsLoading(true);
    try {
      await dispatch(createChat());
      await dispatch(showChatList());
    } catch (error) {
      window.alert("Произошла ошибка при создании чата");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const onDelete = async (chatId: string) => {
    setIsLoading(true);
    try {
      await dispatch(deleteChat(chatId));

      if (chatId === selectedChatId) {
        localStorage.removeItem("selectedChatId");
        setSelectedChatId("");
      }
      await dispatch(showChatList());
    } catch (error) {
      window.alert("Произошла ошибка при удалении чата");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedChatId) {
      localStorage.setItem("selectedChatId", selectedChatId);
    }
  }, [selectedChatId]);
  useEffect(() => {
    if (chatList.length > 0) {
      const isValidId = chatList.some((chat) => chat.id === selectedChatId);

      if (!isValidId) {
        setSelectedChatId("");
      }
    }
  }, [chatList, selectedChatId]);

  useEffect(() => {
    dispatch(showChatList());
  }, [dispatch]);

  console.log("chatlist", chatList);
  return (
    <div className="sidebar-tab">
      <div className="sidebar__inner">
        <div className="sidebar__up-content">
          <img src={logo} alt="logo" />
          <LanguagePicker />
        </div>
        <div className="sidebar__wrapper">
          <div className="sidebar__chat">
            <div className="sidebar__icons">
              <IconButton
                icon={addChat}
                backgroundColor="blue"
                onClick={onCreate}
              />
              <IconButton icon={search} backgroundColor="transparent" />
            </div>
            <div className="sidebar__chat-list">
              <div className="sidebar__chat-list--spin">
                {isLoading && (
                  <img
                    src={spin}
                    alt="Loading"
                    width={24}
                    height={24}
                    className="animate-spin"
                  />
                )}
              </div>
              {chatList.map((chat) => (
                <ChatRow
                  key={chat.id}
                  id={chat.id}
                  name={chat.name}
                  active={selectedChatId === chat.id}
                  onSelect={setSelectedChatId}
                  onDeleteClick={() => onDelete(chat.id)}
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
