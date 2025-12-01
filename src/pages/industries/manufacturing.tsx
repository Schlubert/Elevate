// src/pages/industries/manufacturing.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Package, TrendingUp, Settings, Truck, CheckCircle, ArrowRight, ChevronDown, ChevronUp, BarChart3, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface Challenge {
  title: string;
  description: string;
}

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Manufacturing: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const challenges: Challenge[] = [
    {
      title: "Operational Efficiency",
      description: "Eliminating waste, reducing downtime, and optimising throughput whilst maintaining quality standards"
    },
    {
      title: "Supply Chain Complexity",
      description: "Managing supplier relationships, inventory levels, and logistics in increasingly volatile global markets"
    },
    {
      title: "Quality & Compliance",
      description: "Meeting stringent quality standards, regulatory requirements, and customer specifications consistently"
    },
    {
      title: "Workforce Capability",
      description: "Attracting, training, and retaining skilled workers in competitive labour markets"
    }
  ];

  const solutions: Solution[] = [
    {
      icon: <Settings className="text-[#6BA94D]" size={32} />,
      title: "Operational Excellence",
      description: "Implement lean principles and continuous improvement to maximise efficiency and eliminate waste"
    },
    {
      icon: <BarChart3 className="text-[#6BA94D]" size={32} />,
      title: "Performance Systems",
      description: "Build measurement and management systems that drive accountability and continuous improvement"
    },
    {
      icon: <Truck className="text-[#6BA94D]" size={32} />,
      title: "Supply Chain Optimisation",
      description: "Strengthen supplier relationships, optimise inventory, and improve logistics efficiency"
    },
    {
      icon: <Zap className="text-[#6BA94D]" size={32} />,
      title: "Capability Development",
      description: "Build skilled, engaged workforce capable of problem-solving and driving improvement"
    }
  ];

  const faqs = [
    {
      question: "How can we improve productivity without major capital investment?",
      answer: "Through process improvement, better planning, eliminating bottlenecks, and engaging your workforce in problem-solving. Many significant productivity gains come from better ways of working rather than new equipment. We help you identify and implement high-impact, low-cost improvements first."
    },
    {
      question: "How do we reduce waste and improve quality?",
      answer: "By implementing systematic approaches to identifying root causes, standardising work, building quality into processes rather than inspecting it in, and creating culture where everyone takes ownership for quality. We bring proven methodologies adapted to your specific context."
    },
    {
      question: "Should we pursue lean manufacturing or six sigma?",
      answer: "Both offer valuable tools, but rigid adherence to any methodology can be counterproductive. We take pragmatic approach—using proven principles from lean, six sigma, and theory of constraints, adapted to your culture and circumstances. Focus should be on results, not methodology purity."
    },
    {
      question: "How can we better manage inventory levels?",
      answer: "Through improved demand forecasting, better supplier relationships, optimised ordering systems, and tighter production scheduling. The goal is reducing inventory whilst maintaining service levels—which requires balancing multiple factors. We help you find the right equilibrium for your business."
    },
    {
      question: "How do we build a culture of continuous improvement?",
      answer: "By creating systems where improvement is everyone's job, not just management's. This means training frontline staff in problem-solving, empowering them to make improvements, recognising contributions, and building improvement into daily work. Culture change takes time but delivers lasting competitive advantage."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B6E4F] to-[#6BA94D] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Industries We Serve
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Manufacturing & Logistics
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Build lean, efficient operations that deliver quality products on time, every time, whilst continuously improving performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2">
                Start a Conversation <ArrowRight size={20} />
              </Link>
              <Link to="/expertise" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Manufacturing & Logistics
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Whilst Kevin and Esther's primary background lies in service industries, the principles of operational excellence, process improvement, and performance management translate powerfully to manufacturing and logistics environments.
              </p>
              <p className="mb-4">
                Whether managing hotel operations with multiple departments, coordinating tourism logistics, or optimising restaurant production flows, they've developed deep expertise in process optimisation, quality management, inventory control, and building high-performing operations teams—skills directly applicable to manufacturing and logistics.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">What We Bring</h3>
                <p className="text-gray-700 mb-3">
                  From their operational leadership experience, Kevin and Esther understand:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>How to eliminate waste, reduce variation, and optimise workflows for efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>The importance of standardisation, documentation, and continuous improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>Building quality into processes and creating accountability for outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>Engaging frontline teams in problem-solving and performance improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing & Logistics Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate the operational pressures of production and distribution environments.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#6BA94D]">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-2">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical solutions that drive operational improvement and sustainable competitive advantage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Manufacturing & Logistics-Specific Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: "Process Optimisation", 
                  description: "Analyse workflows, eliminate bottlenecks, reduce cycle times, and improve throughput through systematic improvement"
                },
                { 
                  title: "Quality Management", 
                  description: "Implement quality systems, reduce defects, improve first-pass yield, and build culture of quality ownership"
                },
                { 
                  title: "Lean Implementation", 
                  description: "Apply lean principles to eliminate waste, improve flow, reduce inventory, and enhance productivity"
                },
                { 
                  title: "Supply Chain Management", 
                  description: "Optimise supplier relationships, improve procurement processes, and enhance logistics efficiency"
                },
                { 
                  title: "Performance Management", 
                  description: "Establish KPIs, implement visual management, and create accountability for operational performance"
                },
                { 
                  title: "Team Development", 
                  description: "Build problem-solving capability, engage workforce in improvement, and develop operational leadership"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Typical Outcomes in Manufacturing & Logistics
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Improved productivity and throughput",
                "Reduced cycle times and lead times",
                "Lower defect rates and improved quality",
                "Reduced inventory levels and carrying costs",
                "Better on-time delivery performance",
                "Enhanced equipment utilisation and uptime",
                "Stronger safety performance and compliance",
                "More engaged, problem-solving workforce"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 mt-8 italic">
              Results vary based on starting point and engagement scope. We tailor our approach to your unique operational environment and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="text-[#0B6E4F] flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-[#0B6E4F] flex-shrink-0" size={24} />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Work With
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We support diverse manufacturing and logistics operations committed to operational excellence.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Manufacturing</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Food & Beverage Production</li>
                  <li>• Light Manufacturing</li>
                  <li>• Product Assembly</li>
                  <li>• Packaging Operations</li>
                  <li>• Contract Manufacturing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Logistics & Distribution</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Warehousing & Distribution</li>
                  <li>• Freight & Transport</li>
                  <li>• Third-Party Logistics</li>
                  <li>• Supply Chain Services</li>
                  <li>• E-commerce Fulfilment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Specialised Operations</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Cold Chain Operations</li>
                  <li>• Quality-Critical Production</li>
                  <li>• Custom Fabrication</li>
                  <li>• Print & Publishing</li>
                  <li>• Processing Operations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0B6E4F] to-[#6BA94D] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Improve Your Operations?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your operational challenges and how we can help you build lean, efficient operations that deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2">
              Schedule a Consultation <ArrowRight size={20} />
            </Link>
            <Link to="/industries" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center">
              View All Industries
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Manufacturing;