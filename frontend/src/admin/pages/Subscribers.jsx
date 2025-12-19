import { useEffect, useState } from "react";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/subscribers")
      .then((res) => res.json())
      .then((data) => setSubscribers(data));
  }, []);

  return (
    <div>
      <h2>Subscribed Emails</h2>

      {subscribers.length === 0 && <p>No subscribers yet.</p>}

      <ul>
        {subscribers.map((s) => (
          <li key={s._id}>
            {s.email} <small>({new Date(s.createdAt).toLocaleString()})</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subscribers;
