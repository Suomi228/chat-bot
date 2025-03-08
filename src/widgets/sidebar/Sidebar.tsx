import "./index.css";
import logo from "../../assets/logo.svg";
import UserInfo from "../../shared/ui/user-info/UserInfo";
export default function Sidebar() {
  return (
    <div className="sidebar-tab">
      <div className="sidebar__inner">
        <div className="sidebar__up-content">
          <img src={logo} alt="logo" />
        </div>
      <UserInfo/>
      </div>
    </div>
  );
}
