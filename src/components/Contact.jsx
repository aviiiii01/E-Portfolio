import React, { useState } from "react";
import logo from "../assets/logo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gradient-to-b from-purple-100 to-purple-200 min-h-screen flex flex-col items-center px-4">
      <div className="flex flex-col items-center pt-16 pb-8">
        <img className="w-16 mb-4" src={logo} alt="Logo" />
        <p className="text-4xl font-bold mb-2">Contact Me!</p>
        <p className="text-lg text-gray-600">I’d love to hear from you</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-md w-full p-6 rounded-md shadow"
      >
        <label className="block mb-1 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-1 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-1 font-semibold">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border rounded h-24"
        />

<button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 :focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Submit!
            </button>
      </form>
    </div>
  );
};

export default Contact;
