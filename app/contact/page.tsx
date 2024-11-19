"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div
      className="h-screen flex flex-col justify-between text-white"
      style={{
        backgroundImage: "url('https://www.tcfusa.org/wp-content/uploads/2023/05/visit-a-tcf-school_banner_new.jpg')", // Replace with your background image URL
        backgroundSize: "cover", // Ensure the background image covers the screen
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent background repetition
      }}
    >
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg">
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
          <p className="mb-4 text-center">
            Have questions about The Citizens Foundation? Want to volunteer? Get in touch with me!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-600 bg-gray-700 text-white p-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-600 bg-gray-700 text-white p-2 rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-600 bg-gray-700 text-white p-2 rounded"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-teal-500 px-4 py-2 rounded-lg hover:bg-teal-400 text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-gray-600 w-full h-16 flex justify-center items-center">
        <p>© 2024 Rabiya Rafiq</p>
      </footer>
    </div>
  );
};

export default Contact;




