// src/pages/Expertise.tsx
import React from "react";
import Layout from "../components/Layout";

const Expertise: React.FC = () => (
  <Layout>
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Our Expertise</h2>
      <p className="text-gray-700 mb-4">
        With decades of leadership experience, we provide training and coaching across:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Leadership and Management Development</li>
        <li>Change and Performance Management</li>
        <li>Team Communication and Culture</li>
        <li>Strategic Planning and Execution</li>
      </ul>
    </section>
  </Layout>
);

export default Expertise;
