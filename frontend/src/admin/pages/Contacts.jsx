import { useEffect, useState } from "react";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("fullstack-consultancy-app-production.up.railway.app/api/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <>
      <h2>Contact Submissions</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id}>
              <td>{c.fullName}</td>
              <td>{c.email}</td>
              <td>{c.mobile}</td>
              <td>{c.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Contacts;
