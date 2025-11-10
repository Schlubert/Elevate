// src/pages/expertise/sustainable-practices.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Leaf, Recycle, TrendingUp, Globe, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Award } from "lucide-react";
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

const SustainablePractices: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Sustainability Assessment",
      description: "We assess your current environmental, social, and governance (ESG) practices, identify gaps and risks, and benchmark against industry standards.",
      deliverables: ["Sustainability audit", "ESG gap analysis", "Stakeholder expectations review", "Risk and opportunity assessment"]
    },
    {
      number: "02",
      title: "Strategy & Roadmap",
      description: "We develop a practical sustainability strategy aligned with your business objectives, with clear targets, initiatives, and timelines.",
      deliverables: ["Sustainability strategy", "Target setting and KPIs", "Implementation roadmap", "Business case development"]
    },
    {
      number: "03",
      title: "Implementation Support",
      description: "We guide implementation of sustainability initiatives, helping you integrate sustainable practices into operations, culture, and decision-making.",
      deliverables: ["Initiative implementation", "Process integration", "Staff training and engagement", "Change management support"]
    },
    {
      number: "04",
      title: "Measure & Report",
      description: "We establish systems to measure impact, track progress against targets, and communicate your sustainability performance to stakeholders.",
      deliverables: ["Measurement frameworks", "Reporting systems", "Stakeholder communication", "Continuous improvement processes"]
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: <Leaf className="text-[#6BA94D]" size={32} />,
      title: "Reduced Impact",
      description: "Minimize environmental footprint and contribute positively to society and communities."
    },
    {
      icon: <TrendingUp className="text-[#6BA94D]" size={32} />,
      title: "Cost Savings",
      description: "Resource efficiency, waste reduction, and energy optimization deliver bottom-line benefits."
    },
    {
      icon: <Award className="text-[#6BA94D]" size={32} />,
      title: "Enhanced Reputation",
      description: "Strengthen brand, attract conscious consumers, and build trust with stakeholders."
    },
    {
      icon: <Globe className="text-[#6BA94D]" size={32} />,
      title: "Future-Proofing",
      description: "Prepare for regulatory changes, stakeholder expectations, and market shifts toward sustainability."
    }
  ];

  const faqs = [
    {
      question: "Isn't sustainability just a cost with no real business benefit?",
      answer: "This is a common misconception. While some sustainability initiatives require investment, many deliver clear ROI through reduced energy costs, waste reduction, efficiency improvements, and risk mitigation. Beyond financial returns, sustainability drives brand value, attracts talent, meets customer expectations, and prepares you for inevitable regulatory changes."
    },
    {
      question: "Where should we start with sustainability?",
      answer: "Start with low-hanging fruit that delivers quick wins—energy efficiency, waste reduction, supply chain optimization. Build momentum and capability before tackling more complex initiatives. We help you prioritize based on impact, feasibility, and alignment with your business strategy."
    },
    {
      question: "How do we avoid greenwashing accusations?",
      answer: "Authenticity is critical. We help you set meaningful targets, measure real impact, be transparent about challenges, and communicate honestly about your journey. Greenwashing comes from overstating progress or making claims you can't substantiate—we ensure your sustainability efforts are genuine and verifiable."
    },
    {
      question: "Do small and medium businesses need to worry about sustainability?",
      answer: "Absolutely. Sustainability isn't just for large corporations. SMEs face pressure from customers, suppliers, employees, and increasingly from regulations. Starting now builds competitive advantage, reduces risk, and positions you well as sustainability requirements become more mainstream."
    },
    {
      question: "How do you measure the ROI of sustainability initiatives?",
      answer: "We track both financial returns (cost savings, revenue growth, risk reduction) and non-financial value (brand strength, employee engagement, customer loyalty, regulatory compliance). Many benefits are tangible and measurable; some are strategic and longer-term. We help you build comprehensive business cases that capture the full value."
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
              Sustainable Practices
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Build a sustainable business that balances profit with positive impact on people, communities, and the environment.
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
              The Business Case for Sustainability
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Sustainability is no longer optional—it's a business imperative. Customers demand it, employees expect it, investors evaluate it, and regulations increasingly require it.
              </p>
              <p className="mb-4">
                Organizations face growing sustainability pressures:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Stakeholder expectations:</strong> Customers, employees, and communities expecting responsible business practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Regulatory requirements:</strong> Increasing environmental and social compliance obligations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Resource constraints:</strong> Rising costs and scarcity of energy, materials, and resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Climate risks:</strong> Physical and transition risks from climate change affecting operations and supply chains</span>
                </li>
              </ul>
              <p className="text-lg italic text-[#0B6E4F]">
                We help you integrate sustainability into your business strategy, operations, and culture—creating value while reducing impact.
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
              Why Sustainability Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sustainable businesses are more resilient, attractive, and profitable over the long term.
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

      {/* Focus Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Sustainability Focus Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Environmental Stewardship", description: "Carbon reduction, energy efficiency, waste minimization, water management, and circular economy principles" },
                { title: "Social Responsibility", description: "Fair labor practices, diversity and inclusion, community engagement, and positive social impact" },
                { title: "Governance & Ethics", description: "Ethical business practices, transparency, accountability, and responsible decision-making" },
                { title: "Sustainable Supply Chains", description: "Working with suppliers to improve environmental and social performance across your value chain" },
                { title: "Circular Economy", description: "Designing out waste, keeping materials in use, and regenerating natural systems" },
                { title: "Stakeholder Engagement", description: "Understanding and responding to expectations from customers, employees, communities, and investors" }
              ].map((area, index) => (
                <div key={index} className="border-l-4 border-[#6BA94D] bg-gray-50 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-2">{area.title}</h3>
                  <p className="text-gray-700">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sustainability Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A practical, business-focused approach to building sustainability into your organization.
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
                <div className="flex-1 bg-white p-6 rounded-lg group-hover:shadow-lg transition-shadow">
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
              What Sustainable Business Looks Like
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Clear sustainability strategy aligned with business goals",
                "Measurable targets and progress tracking",
                "Reduced environmental footprint and costs",
                "Enhanced reputation and brand value",
                "Engaged employees proud of company values",
                "Stronger relationships with conscious customers",
                "Compliance with current and future regulations",
                "Resilience to climate and resource risks"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
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
            Ready to Build a More Sustainable Business?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your sustainability goals and how we can help you create positive impact while driving business value.
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

export default SustainablePractices;