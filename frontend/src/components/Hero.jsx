import { useState } from "react";

const Hero = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("fullstack-consultancy-app-production.up.railway.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setMessage("Thank you! We will contact you shortly.");
        setForm({
          fullName: "",
          email: "",
          mobile: "",
          city: "",
        });
      } else {
        setMessage("Something went wrong. Try again.");
      }
    } catch {
      setMessage("Server error. Try later.");
    }
  };

  return (
   <section className="hero" id="home">

      <div className="hero-left">
        <h1>
          Consultation,<br />
          Design & Marketing
        </h1>
        <p>
          Helping you grow your business with expert solutions.
        </p>
      </div>

      <div className="hero-form">
        <h3>Get a Free Consultation</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
          />

          <input
            name="city"
            placeholder="Area, City"
            value={form.city}
            onChange={handleChange}
            required
          />

          <button type="submit">Get Quick Quote</button>
        </form>

        {message && <p style={{ marginTop: "10px" }}>{message}</p>}
      </div>
    </section>
  );
};

export default Hero;
