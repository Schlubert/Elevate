// src/pages/Home.tsx
import React, { useState } from "react";
import Layout from "../components/Layout";
import { Play } from "lucide-react";
import { getImagePath } from '@/utils/paths';

const Home: React.FC = () => {
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  
  // Toggle between image and video for demonstration
  // In production, you'd just set this to whichever you want to use
  const useVideo = mediaType === 'video';

  return (
    <Layout>
      <section className="py-6 md:py-12 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            <div className="order-1 md:order-1">
              {useVideo ? (
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <video
                    className="w-full h-auto"
                    controls
                    poster="/video-thumbnail.jpg"
                  >
                    <source src="/elevate-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="relative rounded-lg overflow-hidden shadow-2xl group">
                  <img
                    src={getImagePath('hero-image.jpg')}
                    alt="Elevate Management Solutions - Leadership and Team Development"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </div>

            <div className="order-2 md:order-2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B6E4F] mb-6 leading-tight">
                Elevate Management Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                We help organisations develop confident, capable leaders and strong, cohesive teams.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="/contact" className="bg-[#0B6E4F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6BA94D] transition-colors shadow-lg">
                  Get Started
                </a>
                <a href="/expertise" className="border-2 border-[#0B6E4F] text-[#0B6E4F] px-8 py-3 rounded-lg font-semibold hover:bg-[#0B6E4F] hover:text-white transition-colors">
                  Our Services
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
