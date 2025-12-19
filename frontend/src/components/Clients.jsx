import { useEffect, useState } from "react";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("fullstack-consultancy-app-production.up.railway.app/api/clients")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="clients" id="testimonials">

      <h2>Happy Clients</h2>

      <div className="client-grid">
        {clients.length === 0 && <p>No clients available</p>}

        {clients.map((client) => (
          <div className="client-card" key={client._id}>
            {/* Optional image */}
            {client.image && (
              <img
                src={client.image}
                alt={client.name}
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            )}

            <p>{client.description}</p>
            <h4>{client.name}</h4>
            <small>{client.designation}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
