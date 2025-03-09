import "./index.css";
import Sidebar from "../../widgets/sidebar/Sidebar";
import Chat from "../../widgets/chat/Chat";
export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="content"><Chat/></main>
    </div>
  );
}
