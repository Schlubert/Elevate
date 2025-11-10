// src/pages/Industries.tsx
import React from "react";
import Layout from "../components/Layout";

const Industries: React.FC = () => (
  <Layout>
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Industries We Serve</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Professional Services</li>
        <li>Healthcare and Aged Care</li>
        <li>Hospitality and Tourism</li>
        <li>Construction and Trades</li>
        <li>Education and Not-for-Profit</li>
      </ul>
    </section>
  </Layout>
);

export default Industries;
