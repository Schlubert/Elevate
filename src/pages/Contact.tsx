// src/pages/Contact.tsx
import React from "react";
import Layout from "../components/Layout";

const Contact: React.FC = () => (
  <Layout>
    <section className="container mx-auto px-6 py-16 max-w-2xl">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-3 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
        <textarea placeholder="Message" className="w-full border p-3 rounded h-32" />
        <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
          Send Message
        </button>
      </form>
    </section>
  </Layout>
);

export default Contact;
