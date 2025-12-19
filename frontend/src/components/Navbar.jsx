import { useState } from "react";

const Navbar = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Enter email");
      return;
    }

    try {
      const res = await fetch("fullstack-consultancy-app-production.up.railway.app/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Subscribed!");
        setEmail("");
      } else {
        setMessage("Already subscribed");
      }
    } catch (err) {
      setMessage("Server error");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-right">
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>

      {message && <span className="nav-msg">{message}</span>}
    </nav>
  );
};

export default Navbar;
