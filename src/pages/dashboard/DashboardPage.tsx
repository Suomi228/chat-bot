import "./index.css";
import Sidebar from "../../widgets/sidebar/Sidebar";
export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="content">Контент</main>
    </div>
  );
}
