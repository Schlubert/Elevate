// src/pages/about/our-story.tsx
import React from "react";
import Layout from "../../components/Layout";

const OurStory: React.FC = () => (
  <Layout>
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
      <p className="text-gray-700 mb-4">
        Every business has a beginning — and Elevate started with a simple idea: to help leaders grow.
        This page will soon share the people, principles, and purpose behind that journey.
      </p>
      <p className="text-gray-700 italic">Page under development — content coming soon.</p>
    </section>
  </Layout>
);

export default OurStory;
