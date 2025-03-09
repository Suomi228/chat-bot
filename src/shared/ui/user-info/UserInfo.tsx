import "./index.css";
import avatar from "../../../assets/default-avatar.svg";

export default function UserInfo() {
  return (
    <div className="user-info">
      <div className="user-info__inner">
        <div className="user-info__left">
          <img src={avatar} alt="avatar" />
          <div className="user-info__details">
            <span className="user-info__name">Василий</span>
            <span className="user-info__token">9 012 TKN</span>
          </div>
        </div>
        <button
          className="user-info__logout"
          aria-label="Выйти из приложения"
          title="Выйти"
        >
          <svg
            className="logout-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
