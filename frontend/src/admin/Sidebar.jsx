import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ width: "220px", background: "#3f4b7f", color: "white", padding: "20px" }}>
      <h2>Admin Panel</h2>

      <nav style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link to="/admin/add-project" style={{ color: "white" }}>Add Project</Link>
        <Link to="/admin/add-client" style={{ color: "white" }}>Add Client</Link>
        <Link to="/admin/contacts" style={{ color: "white" }}>Contacts</Link>
        <Link to="/admin/subscribers" style={{ color: "white" }}>Subscribers</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
