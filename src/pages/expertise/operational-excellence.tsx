// src/pages/expertise/operational-excellence.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Zap, Settings, TrendingUp, BarChart3, CheckCircle, ArrowRight, ChevronDown, ChevronUp, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OperationalExcellence: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Current State Analysis",
      description: "We conduct a comprehensive assessment of your operations, mapping processes, identifying bottlenecks, and quantifying opportunities for improvement.",
      deliverables: ["Process maps and workflows", "Performance baseline metrics", "Waste and inefficiency analysis", "Quick win identification"]
    },
    {
      number: "02",
      title: "Design & Optimization",
      description: "Working collaboratively with your team, we redesign processes to eliminate waste, reduce complexity, and optimize for speed, quality, and cost.",
      deliverables: ["Optimized process designs", "Standard operating procedures", "Capacity and resource planning", "Technology recommendations"]
    },
    {
      number: "03",
      title: "Implementation & Change",
      description: "We support your team through implementation, providing training, managing change resistance, and ensuring new processes are properly embedded.",
      deliverables: ["Implementation roadmap", "Training programs", "Change management support", "Pilot testing and refinement"]
    },
    {
      number: "04",
      title: "Sustain & Improve",
      description: "Excellence is a journey, not a destination. We help you build a culture of continuous improvement with the systems and capabilities to sustain gains.",
      deliverables: ["Performance dashboards", "Continuous improvement framework", "Team capability building", "Governance and review processes"]
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: <Zap className="text-[#6BA94D]" size={32} />,
      title: "Increased Efficiency",
      description: "Reduce cycle times, eliminate bottlenecks, and get more done with the same resources."
    },
    {
      icon: <TrendingUp className="text-[#6BA94D]" size={32} />,
      title: "Cost Reduction",
      description: "Eliminate waste, optimize resource utilization, and reduce operating costs by 15-30%."
    },
    {
      icon: <BarChart3 className="text-[#6BA94D]" size={32} />,
      title: "Quality Improvement",
      description: "Reduce errors, improve consistency, and deliver better outcomes for customers."
    },
    {
      icon: <RefreshCw className="text-[#6BA94D]" size={32} />,
      title: "Scalable Systems",
      description: "Build processes that can handle growth without proportional increases in cost or complexity."
    }
  ];

  const faqs = [
    {
      question: "How quickly can we expect to see results?",
      answer: "Many improvements deliver quick wins within weeks. Comprehensive operational transformation typically shows measurable results within 3-6 months, with full impact realized over 12-18 months as changes become embedded."
    },
    {
      question: "Will operational improvements require technology investments?",
      answer: "Not necessarily. Many significant improvements come from better process design and ways of working. When technology is needed, we help you prioritize investments that deliver the highest ROI and can often leverage existing systems more effectively."
    },
    {
      question: "How do you handle resistance from staff?",
      answer: "Change is always challenging. We involve frontline staff early in the process, incorporate their insights, and demonstrate how improvements make their jobs easier. Our approach builds buy-in rather than imposing change from above."
    },
    {
      question: "What methodologies do you use?",
      answer: "We draw on Lean, Six Sigma, Theory of Constraints, and Agile principles, adapting our approach to your organization's culture and needs. We're pragmatic—focused on results, not rigid adherence to any single methodology."
    },
    {
      question: "How do you ensure improvements stick?",
      answer: "Sustainability comes from building capability within your team and creating systems for ongoing monitoring and improvement. We don't just fix problems—we build your organization's muscle for continuous improvement."
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
              Our Expertise
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Operational Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Transform your operations to deliver better results with less waste, lower costs, and greater agility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2">
                Start a Conversation <ArrowRight size={20} />
              </Link>
              <a href="#process" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center">
                Our Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Hidden Cost of Operational Inefficiency
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Most organizations are sitting on significant untapped potential. Inefficient processes, duplicated effort, and unnecessary complexity drain resources and limit growth.
              </p>
              <p className="mb-4">
                Common operational challenges include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Process inefficiency:</strong> Work takes longer than it should due to unclear workflows and handoffs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Quality issues:</strong> Errors and rework that frustrate customers and increase costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Bottlenecks:</strong> Key constraints that limit throughput and responsiveness</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Scaling challenges:</strong> Operations that break down as volume increases</span>
                </li>
              </ul>
              <p className="text-lg italic text-[#0B6E4F]">
                We help you build lean, efficient operations that scale without adding complexity or cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Impact of Operational Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations that prioritize operational excellence consistently outperform their peers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Operational Excellence Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic methodology that delivers measurable improvements quickly while building long-term capability.
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6BA94D] to-[#0B6E4F] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 p-6 rounded-lg group-hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-[#0B6E4F] mb-3">{step.title}</h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Deliverables:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-0.5" size={16} />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Typical Outcomes from Our Engagements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "15-30% reduction in operating costs",
                "25-50% improvement in cycle times",
                "40-60% reduction in defects and errors",
                "20-40% increase in capacity with existing resources",
                "Documented, standardized processes",
                "Performance dashboards and metrics",
                "Trained staff capable of continuous improvement",
                "Sustainable systems that maintain gains"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 mt-8 italic">
              Results vary by organization and engagement scope. These represent typical ranges from our client work.
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0B6E4F] to-[#6BA94D] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Unlock Your Operational Potential?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your operational challenges and identify opportunities for breakthrough improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2">
              Schedule a Consultation <ArrowRight size={20} />
            </Link>
            <Link to="/expertise" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OperationalExcellence;