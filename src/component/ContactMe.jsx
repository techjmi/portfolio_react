import React, { useState } from 'react';
import Particle from './Particle';
import axios from 'axios';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://formspree.io/f/myzggrwe', formData);
      if (response.status === 200) {
        setSubmitted(true);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        console.error('Failed to send message:', response.statusText);
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
      alert('Error sending message. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Particle />
      <div className="rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-4 text-gray-300">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md text-gray-400 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 font-bold mb-2">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-400 font-bold mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
