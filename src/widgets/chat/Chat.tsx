import "./index.css";
import Input from "../../shared/ui/input/Input";
import IconButton from "../../shared/ui/icon-button/IconButton";
import vector from "../../assets/Vector.svg";
import AiPicker from "../../shared/ui/ai-picker/AiPicker";
export default function Chat() {
  return (
    <div className="chat">
      <div className="chat__inner">
        <div className="chat__top-part"></div>
        <div className="chat__bottom-part">
        <AiPicker />
          <Input
            type="text"
            placeholder="Спроси о чем-нибудь..."
            fontSize={14}
            fontWeight={500}
            height={66}
          >
            <IconButton
              icon={vector}
              backgroundColor="blue"
              onClick={() => console.log("Send message")}
            />
          </Input>
        </div>
      </div>
    </div>
  );
}
