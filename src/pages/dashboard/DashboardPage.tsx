import "./index.css";
import Sidebar from "../../widgets/sidebar/Sidebar";
import Chat from "../../widgets/chat/Chat";
import { useState } from "react";
import OpenIcon from "../../assets/add-chat.svg";
import IconButton from "../../shared/ui/icon-button/IconButton";
export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="dashboard-page">
      <aside className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <Sidebar />
      </aside>
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      )}
      <main className="content">
        <div className="burger-button">
          <IconButton icon={OpenIcon} onClick={() => setIsSidebarOpen(!isSidebarOpen)} backgroundColor="blue"></IconButton>
        </div>
        <Chat />
      </main>
    </div>
  );
}
