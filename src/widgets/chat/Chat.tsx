import { useEffect, useState } from "react";
import "./index.css";
import Input from "../../shared/ui/input/Input";
import IconButton from "../../shared/ui/icon-button/IconButton";
import vector from "../../assets/Vector.svg";
import AiPicker from "../../shared/ui/ai-picker/AiPicker";
import Message from "../../shared/ui/message/Message";
import { useAppDispatch } from "../../shared/api/hooks";
import { useSelector } from "react-redux";
import { showMessagesPerChat, sendMessage } from "../../shared/api/slices/chat";
import { RootState } from "../../shared/api/store";

interface ApiMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  created_at: string;
  model_id: string;
  model: { parent: { label: string } };
}

export default function Chat() {
  const dispatch = useAppDispatch();
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSendMessage = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    try {
      await dispatch(
        sendMessage({
          chatId: "b0e014d5-d8ca-410c-8c29-a08aad4c02c8",
          message: inputText,
        })
      ).unwrap();

      setInputText("");
      await dispatch(
        showMessagesPerChat("b0e014d5-d8ca-410c-8c29-a08aad4c02c8")
      );
    } catch (error) {
      window.alert("Произошла ошибка при отправке сообщения");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  // Добавляем обработчик нажатия Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      onSendMessage();
    }
  };
  const messagesData = useSelector<RootState, ApiMessage[]>(
    (state: RootState) => state.chat.messages.data || []
  );
  useEffect(() => {
    dispatch(showMessagesPerChat("b0e014d5-d8ca-410c-8c29-a08aad4c02c8"));
  }, [dispatch]);
  console.log("", messagesData);
  return (
    <div className="chat">
      <div className="chat__inner">
        <div className="chat__top-part">
          <div className="messages-container">
            {!isLoading
              ? messagesData?.map((msg, index) => (
                  <Message
                    key={index}
                    text={msg.content}
                    isBot={msg.role === "assistant"}
                    timestamp={new Date(msg.created_at).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    model_id={msg.model_id}
                    model_name={msg.model?.parent?.label}
                  />
                ))
              : ""}
          </div>
        </div>
        <div className="chat__bottom-part">
          <AiPicker />
          <Input
            type="text"
            placeholder="Спроси о чем-нибудь..."
            fontSize={14}
            fontWeight={500}
            height={66}
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          >
            <IconButton
              icon={vector}
              backgroundColor="blue"
              onClick={onSendMessage}
            />
          </Input>
        </div>
      </div>
    </div>
  );
}
