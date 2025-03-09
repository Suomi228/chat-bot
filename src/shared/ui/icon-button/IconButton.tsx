import "./index.css";
import vector from "../../../assets/Vector.svg";
import search from "../../../assets/search-simple.svg";
import addChat from "../../../assets/add-chat.svg";

type IconButtonProps = {
  icon: string;
  onClick?: () => void;
  backgroundColor?: "blue" | "transparent";
  
};

export default function IconButton({
  icon,
  onClick,
  backgroundColor,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        backgroundColor === "blue"
          ? "icon-button blue"
          : "icon-button transparent"
      }
      type="button"
    >
      <img src={icon} alt="icon" className="icon-button__image" />
    </button>
  );
}
