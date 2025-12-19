import { useState } from "react";

const AddClient = () => {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    description: "",
    image: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("fullstack-consultancy-app-production.up.railway.app/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setMessage("Client added successfully ✅");
        setForm({ name: "", designation: "", description: "", image: "" });
      } else {
        setMessage("Failed to add client ❌");
      }
    } catch {
      setMessage("Server error ❌");
    }
  };

  return (
    <>
      <h2>Add Client</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Client Name" value={form.name} onChange={handleChange} /><br /><br />
        <input name="designation" placeholder="Designation" value={form.designation} onChange={handleChange} /><br /><br />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} /><br /><br />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} /><br /><br />
        <button>Add Client</button>
      </form>

      {message && <p>{message}</p>}
    </>
  );
};

export default AddClient;
