// src/pages/industries/professional-services.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Briefcase, Users, TrendingUp, Target, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Award, Scale } from "lucide-react";
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

const ProfessionalServices: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const challenges: Challenge[] = [
    {
      title: "Leveraged Business Model",
      description: "Balancing utilisation, pricing, and profitability while maintaining quality and avoiding burnout"
    },
    {
      title: "Talent Management",
      description: "Attracting, developing, and retaining excellent people in competitive markets for professional talent"
    },
    {
      title: "Client Acquisition",
      description: "Building sustainable pipelines and converting prospects without compromising on the right clients"
    },
    {
      title: "Scaling Challenges",
      description: "Growing beyond founder capability whilst maintaining quality, culture, and client relationships"
    }
  ];

  const solutions: Solution[] = [
    {
      icon: <Target className="text-[#6BA94D]" size={32} />,
      title: "Strategic Positioning",
      description: "Clarify what makes you different and who you serve best to command premium fees"
    },
    {
      icon: <Users className="text-[#6BA94D]" size={32} />,
      title: "Team Development",
      description: "Build capability and create pathways that retain talent and reduce founder dependency"
    },
    {
      icon: <TrendingUp className="text-[#6BA94D]" size={32} />,
      title: "Business Development",
      description: "Create repeatable systems for client acquisition that don't rely on heroic effort"
    },
    {
      icon: <Award className="text-[#6BA94D]" size={32} />,
      title: "Operational Excellence",
      description: "Optimise delivery, pricing, and resource allocation for sustainable profitability"
    }
  ];

  const faqs = [
    {
      question: "How do professional services firms grow without losing quality?",
      answer: "Through systematic capability building, documented methodologies, clear quality standards, and creating leverage through junior staff and technology—not just adding more senior people. We help you build scalable delivery models that maintain the quality clients expect."
    },
    {
      question: "How should we price our services?",
      answer: "Move away from hourly rates towards value-based pricing wherever possible. Price based on the value you create, not the time you spend. We help you understand your true costs, position for premium pricing, and structure offerings that improve margins whilst delivering client value."
    },
    {
      question: "How can we reduce our dependence on the founders?",
      answer: "Through deliberate succession planning, developing senior leadership, creating systematic approaches to client management, and building institutional knowledge. This requires both technical systems and cultural change. We guide you through this critical transition."
    },
    {
      question: "Should we specialise or stay generalist?",
      answer: "Specialisation typically commands higher fees and easier marketing, but requires sufficient market size. We help you evaluate your options, considering your capabilities, market opportunity, and strategic goals. Often the answer is 'both'—being specialist in positioning whilst maintaining broader capability."
    },
    {
      question: "How do we build a strong firm culture?",
      answer: "Culture in professional services comes from clear values, how you treat clients and each other, development opportunities, and creating meaning beyond billable hours. We help you define and embed culture that attracts great people and delivers for clients."
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
              Professional Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Build professional services firms that scale sustainably whilst maintaining quality, culture, and client satisfaction.
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
              Understanding Professional Services
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Over the years, Kevin and Esther have quietly worked with professional services firms across New Zealand and internationally—from boutique consultancies to established practices—helping them navigate growth, build capability, and create sustainable businesses.
              </p>
              <p className="mb-4">
                Whether it's legal firms, consultancies, accountants, architects, engineers, or specialist advisors, the fundamental challenges are similar: how do you grow whilst maintaining quality? How do you develop people? How do you create systems without losing the personal touch that clients value?
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">What We Bring</h3>
                <p className="text-gray-700 mb-3">
                  From their work with professional services firms, Kevin and Esther understand:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>The leveraged business model and its implications for pricing, staffing, and profitability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>How to build systematic approaches without losing the craft of professional work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>The importance of culture, development, and creating meaning for professional staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>Balancing client service excellence with sustainable business practices</span>
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
              Professional Services Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate the unique pressures of knowledge-based, people-dependent businesses.
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
              Practical solutions for building sustainable, scalable professional services firms.
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
              Professional Services-Specific Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: "Firm Strategy & Positioning", 
                  description: "Define clear positioning, target clients, and service offerings that differentiate you and command premium pricing"
                },
                { 
                  title: "Business Development Systems", 
                  description: "Create repeatable approaches to client acquisition, relationship management, and pipeline development"
                },
                { 
                  title: "Pricing & Profitability", 
                  description: "Optimise pricing models, improve realisation rates, and enhance profitability whilst delivering client value"
                },
                { 
                  title: "Talent Development", 
                  description: "Build career pathways, develop capabilities, and create culture that attracts and retains excellent people"
                },
                { 
                  title: "Operational Excellence", 
                  description: "Streamline delivery, improve resource allocation, reduce write-offs, and enhance productivity"
                },
                { 
                  title: "Leadership & Succession", 
                  description: "Develop next-generation leaders and create smooth transitions that protect client relationships and firm value"
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
              Typical Outcomes in Professional Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "10-25% improvement in realisation rates",
                "15-30% increase in revenue per professional",
                "20-40% reduction in partner dependency for delivery",
                "Improved profit margins through better pricing and efficiency",
                "Stronger client retention and lifetime value",
                "Enhanced staff engagement and reduced turnover",
                "Clear succession plans and leadership pipeline",
                "Scalable delivery models that maintain quality"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 mt-8 italic">
              Results vary based on starting point and engagement scope.  We tailor our approach to your unique organisational needs and mission. 
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
              We support diverse professional services firms committed to excellence and sustainable growth.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Legal & Advisory</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Law Firms</li>
                  <li>• Accounting Practices</li>
                  <li>• Financial Advisors</li>
                  <li>• Tax Specialists</li>
                  <li>• Business Consultancies</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Technical Services</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Engineering Firms</li>
                  <li>• Architecture Practices</li>
                  <li>• Surveyors & Planners</li>
                  <li>• IT Consultancies</li>
                  <li>• Technical Specialists</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Creative & Strategy</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Design Studios</li>
                  <li>• Marketing Agencies</li>
                  <li>• Brand Consultancies</li>
                  <li>• Management Consultants</li>
                  <li>• Strategy Firms</li>
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
            Ready to Build a Stronger Professional Services Firm?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your challenges and how we can help you scale sustainably whilst maintaining quality and culture.
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

export default ProfessionalServices;