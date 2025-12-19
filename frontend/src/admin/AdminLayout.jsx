import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProject from "./pages/AddProject";
import AddClient from "./pages/AddClient";
import Contacts from "./pages/Contacts";
import Subscribers from "./pages/Subscribers";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="add-project" element={<AddProject />} />
          <Route path="add-client" element={<AddClient />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="subscribers" element={<Subscribers />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
