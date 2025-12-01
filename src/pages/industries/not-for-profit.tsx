// src/pages/industries/not-for-profit.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Heart, Users, Target, TrendingUp, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Award, Globe } from "lucide-react";
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

const NotForProfit: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const challenges: Challenge[] = [
    {
      title: "Limited Resources",
      description: "Achieving mission impact with constrained budgets, volunteer capacity, and competing priorities"
    },
    {
      title: "Funding Sustainability",
      description: "Building diverse, reliable funding streams whilst maintaining mission focus and donor relationships"
    },
    {
      title: "Governance & Compliance",
      description: "Meeting regulatory requirements, maintaining good governance, and managing risk with limited administrative capacity"
    },
    {
      title: "Stakeholder Management",
      description: "Balancing needs of beneficiaries, funders, volunteers, staff, board, and community expectations"
    }
  ];

  const solutions: Solution[] = [
    {
      icon: <Target className="text-[#6BA94D]" size={32} />,
      title: "Strategic Clarity",
      description: "Sharpen focus on what creates greatest impact and align resources accordingly"
    },
    {
      icon: <TrendingUp className="text-[#6BA94D]" size={32} />,
      title: "Operational Efficiency",
      description: "Maximise impact by doing more with existing resources through better systems and processes"
    },
    {
      icon: <Users className="text-[#6BA94D]" size={32} />,
      title: "Capability Building",
      description: "Develop staff, volunteers, and board to deliver mission effectively and sustainably"
    },
    {
      icon: <Award className="text-[#6BA94D]" size={32} />,
      title: "Funding Strategy",
      description: "Build diversified, sustainable funding that supports long-term mission delivery"
    }
  ];

  const faqs = [
    {
      question: "How can we do strategic planning with so many stakeholder voices?",
      answer: "By creating clear processes for stakeholder input whilst maintaining strategic discipline. We help you gather diverse perspectives, identify common ground, and make strategic choices that serve mission—not just compromise amongst competing interests. Good strategy requires saying no to some things."
    },
    {
      question: "Should we operate more like a business?",
      answer: "You should adopt business disciplines that serve your mission—sound financial management, operational efficiency, performance measurement. But your purpose is fundamentally different. We help you find the right balance: business-like in operations, mission-driven in purpose."
    },
    {
      question: "How do we measure impact beyond numbers served?",
      answer: "Through outcome measurement that captures real change in people's lives, not just activities delivered. We help you develop meaningful impact frameworks that satisfy funders whilst staying true to what matters. Sometimes the most important impact is hardest to measure, but that doesn't make it less real."
    },
    {
      question: "How can small organisations with limited staff capacity improve operations?",
      answer: "Through small, high-impact changes and leveraging technology. Not every improvement requires significant investment. We help you identify quick wins, prioritise ruthlessly, and build systems that reduce administrative burden. Often simplification is more valuable than sophistication."
    },
    {
      question: "How do we build organisational sustainability beyond founder dependence?",
      answer: "Through systematic knowledge capture, developing leadership depth, building processes that don't depend on individuals, and creating culture of shared ownership. This transition is critical for long-term mission delivery. We guide founders and boards through this sensitive but essential evolution."
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
              Not-for-Profit Organisations
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Build sustainable organisations that maximise mission impact whilst maintaining sound governance and operational excellence.
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
              Understanding Not-for-Profit Organisations
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Over the years, Kevin and Esther have worked alongside charities, community groups, social enterprises, and mission-driven organisations—helping them navigate the unique challenges of operating with purpose rather than profit.
              </p>
              <p className="mb-4">
                They understand that not-for-profits face a distinctive set of pressures: maximising impact with limited resources, maintaining mission focus amidst funding pressures, managing complex stakeholder relationships, and building sustainable organisations despite high staff turnover and volunteer dependency.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">What We Bring</h3>
                <p className="text-gray-700 mb-3">
                  From their work with not-for-profit organisations, Kevin and Esther understand:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>The importance of staying true to mission whilst building sustainable operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>How to balance stakeholder needs—beneficiaries, funders, volunteers, staff, and community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>The reality of doing more with less whilst maintaining quality and avoiding burnout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>The critical role of good governance, sound financial management, and risk mitigation</span>
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
              Not-for-Profit Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate the unique pressures of mission-driven organisations operating with constrained resources.
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
              Practical solutions that honour your mission whilst building sustainable, effective organisations.
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
              Not-for-Profit-Specific Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: "Strategic Planning", 
                  description: "Develop clear strategies that focus resources on highest-impact activities whilst engaging stakeholders meaningfully"
                },
                { 
                  title: "Governance Strengthening", 
                  description: "Build effective boards that provide strategic guidance, oversight, and support without micromanagement"
                },
                { 
                  title: "Funding Strategy", 
                  description: "Diversify funding sources, strengthen donor relationships, and build sustainable revenue streams"
                },
                { 
                  title: "Impact Measurement", 
                  description: "Develop frameworks that capture real outcomes and communicate impact effectively to stakeholders"
                },
                { 
                  title: "Operational Systems", 
                  description: "Build efficient processes, administrative systems, and technology infrastructure that maximise mission delivery"
                },
                { 
                  title: "Volunteer Management", 
                  description: "Create structures that engage, develop, and retain volunteers whilst protecting paid staff roles"
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
              Typical Outcomes for Not-for-Profits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Clearer strategic focus and prioritisation",
                "Improved operational efficiency and resource utilisation",
                "Stronger governance and risk management",
                "Enhanced funding sustainability and diversification",
                "Better impact measurement and reporting",
                "Increased staff and volunteer engagement",
                "Reduced administrative burden on mission delivery",
                "More sustainable organisational model"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 mt-8 italic">
              Results vary based on starting point and engagement scope. We tailor our approach to your unique organisational needs and mission.
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
              We support diverse not-for-profit organisations committed to maximising their mission impact.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Social Services</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Community Support Organisations</li>
                  <li>• Family Services</li>
                  <li>• Youth Organisations</li>
                  <li>• Housing & Homelessness Services</li>
                  <li>• Mental Health Support</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Community & Culture</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Arts & Cultural Organisations</li>
                  <li>• Sports Clubs & Associations</li>
                  <li>• Community Centres</li>
                  <li>• Heritage & Conservation</li>
                  <li>• Advocacy Groups</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Education & Development</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Educational Trusts</li>
                  <li>• Training Providers</li>
                  <li>• Research Organisations</li>
                  <li>• Environmental Groups</li>
                  <li>• International Development</li>
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
            Ready to Build a Stronger, More Sustainable Organisation?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your mission, challenges, and how we can help you maximise impact whilst building organisational sustainability.
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

export default NotForProfit;