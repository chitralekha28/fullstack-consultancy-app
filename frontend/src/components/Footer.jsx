import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter an email");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Subscribed successfully!");
        setEmail("");
      } else {
        setMessage("Already subscribed or error occurred");
      }
    } catch (err) {
      setMessage("Server error. Try again later.");
    }
  };

  return (
    <footer className="footer-bar">
      <div className="footer-left">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-right">
        <span>Subscribe Us</span>
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>

      {message && (
        <p style={{ color: "white", marginLeft: "20px" }}>{message}</p>
      )}
    </footer>
  );
};

export default Footer;
