// src/pages/Home.tsx
import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Users, Compass, CheckSquare, Zap, TrendingUp, Building2, BarChart3, Users2 } from "lucide-react";
import { getImagePath } from '@/utils/paths';

const Home: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description: "We start by understanding your context, challenges and opportunities.",
      icon: Users
    },
    {
      number: "02",
      title: "Clarify",
      description: "Together we define a clear strategic direction and priorities that matter.",
      icon: Compass
    },
    {
      number: "03",
      title: "Plan",
      description: "We translate strategy into practical plans, capabilities and accountabilities.",
      icon: CheckSquare
    },
    {
      number: "04",
      title: "Execute",
      description: "We help your team take aligned action and build early momentum.",
      icon: Zap
    },
    {
      number: "05",
      title: "Improve",
      description: "We monitor progress, learn and adapt to keep moving forward.",
      icon: TrendingUp
    }
  ];

  const changes = [
    "Leadership teams align faster",
    "Decisions become clearer",
    "Plans turn into actions",
    "Accountability improves",
    "Execution gains momentum",
    "Results become measurable"
  ];

  const sectors = [
    {
      icon: Building2,
      title: "Public & Not for Profit",
      description: "Stronger communities through better strategy and governance."
    },
    {
      icon: BarChart3,
      title: "Private Enterprise",
      description: "Clear direction and focus that drives performance and growth."
    },
    {
      icon: Users2,
      title: "Professional Services",
      description: "Helping firms align strategy, people and operations for long-term success."
    }
  ];

  return (
    <Layout>
      {/* HERO SECTION WITH IMAGE FADE */}
      <section className="relative bg-gradient-to-b from-elevate-darkgreen via-elevate-darkgreen to-brand-700 overflow-hidden mt-0">
        <div className="absolute inset-0">
          {/* Background image with fade gradient overlay */}
          <div className="absolute inset-0 opacity-60">
            <img
              src={getImagePath('generic_consultation.jpg')}
              alt="Strategy in action"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Gradient fade from dark to transparent */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #0B6E4F 0%, #0B6E4F 20%, rgba(11, 110, 79, 0) 35%)'
            }}
          ></div>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10">
          <div className="container mx-6 px-4 sm:px-6 lg:px-8 py-12 md:py-12 flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif">
                Strategy that moves into <span className="text-elevate-green">action</span>.
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                We help organisations turn strategic intent into practical plans, aligned teams, and measurable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/Contact" 
                  className="bg-accent text-white px-8 py-3 rounded font-semibold hover:bg-elevate-darkgreen transition-colors shadow-lg inline-block text-center"
                >
                  Book a Strategy Discussion
                </Link>
                <Link 
                  to="/Expertise" 
                  className="text-white border-b-2 border-white pb-1 hover:text-accent hover:border-accent transition-colors font-semibold inline-block"
                >
                  See how we work →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-12 md:py-12 bg-brand-50 flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-start">
            
            {/* Section header - LEFT */}
            <div className="flex flex-col justify-start">
              <p className="text-sm uppercase tracking-wider text-gray-600 font-semibold mb-2">
                A PRACTICAL APPROACH
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                From clarity to momentum.
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our proven approach helps leadership teams create strategy that is clear, aligned and executable.
              </p>
              <Link to="/Expertise" className="text-accent font-semibold hover:text-elevate-green inline-block">
                How we work →
              </Link>
            </div>

            {/* 5-STEP PROCESS - RIGHT (spans 2 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:col-span-2">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="flex flex-col">
                    {/* Step connector */}
                    <div className="flex items-center mb-6">
                      <div className="flex-1">
                        <div className="bg-elevate-darkgreen rounded-full w-16 h-16 flex items-center justify-center mb-4">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-4xl font-bold text-gray-300 mb-2">{step.number}</p>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Visual connector arrow for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:flex items-center justify-center mb-6 mt-auto">
                        <div className="text-gray-400 text-2xl">›</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

     {/* BOTTOM SECTIONS - COMBINED */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-0 bg-white w-full">
        {/* WHAT CHANGES - Dark section */}
        <div className="bg-elevate-darkgreen text-white p-12 md:p-16 lg:col-span-1 flex flex-col justify-center">
          <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4">
            WHAT CHANGES
          </p>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            Strategy that works in the real world.
          </h3>
          
          <ul className="space-y-4 mb-8">
            {changes.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <span className="text-gray-100">{item}</span>
              </li>
            ))}
          </ul>
 
          <Link to="/Expertise" className="text-accent font-semibold hover:text-elevate-green inline-block">
            Explore the benefits →
          </Link>
        </div>
 
        {/* EXPERIENCE THAT COUNTS - Light section with sectors */}
        <div className="bg-white p-12 md:p-16 lg:col-span-2 flex flex-col justify-center">
          <p className="text-sm uppercase tracking-wider text-gray-600 font-semibold mb-4">
            EXPERIENCE THAT COUNTS
          </p>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12">
            Trusted by leaders across sectors and organisations.
          </h3>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => {
              const SectorIcon = sector.icon;
              return (
                <div key={index} className="flex flex-col">
                  <div className="mb-4 bg-elevate-darkgreen rounded-full w-12 h-12 flex items-center justify-center">
                    <SectorIcon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{sector.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
 
        {/* TESTIMONIAL - Right section */}
        <div className="bg-elevate-darkgreen text-white p-12 md:p-16 lg:col-span-1 flex flex-col justify-center">
          <div className="text-6xl text-accent mb-6 font-serif">"</div>
          <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
            Elevates helped us cut through the noise and create a plan that our team could actually execute. The impact has been significant.
          </p>
          <div>
            <p className="font-bold text-lg text-accent">Chief Executive</p>
            <p className="text-gray-400 text-sm">REGIONAL ORGANISATION</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
 
export default Home;
 