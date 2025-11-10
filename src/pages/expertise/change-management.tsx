// src/pages/expertise/change-management.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { GitBranch, Users, Compass, Shield, CheckCircle, ArrowRight, ChevronDown, ChevronUp, TrendingUp } from "lucide-react";
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

const ChangeManagement: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Change Readiness & Planning",
      description: "We assess your organization's readiness for change, identify stakeholders, understand resistance points, and develop a comprehensive change strategy.",
      deliverables: ["Stakeholder analysis", "Impact assessment", "Change readiness evaluation", "Communication strategy"]
    },
    {
      number: "02",
      title: "Engagement & Alignment",
      description: "Building early buy-in is critical. We engage key stakeholders, create change champions, and ensure leadership alignment on the path forward.",
      deliverables: ["Stakeholder engagement plan", "Change champion network", "Leadership alignment sessions", "Resistance management approach"]
    },
    {
      number: "03",
      title: "Implementation Support",
      description: "We guide your organization through the transition, providing hands-on support, addressing resistance, and keeping momentum through challenges.",
      deliverables: ["Training and capability building", "Communication campaigns", "Quick win identification", "Issue resolution support"]
    },
    {
      number: "04",
      title: "Embed & Sustain",
      description: "Change only succeeds when it becomes the new normal. We help you reinforce new behaviors, celebrate progress, and build systems that sustain change.",
      deliverables: ["Reinforcement mechanisms", "Performance tracking", "Culture integration", "Continuous improvement framework"]
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: <GitBranch className="text-[#6BA94D]" size={32} />,
      title: "Faster Adoption",
      description: "Reduce the time it takes for changes to be fully adopted and delivering value."
    },
    {
      icon: <Users className="text-[#6BA94D]" size={32} />,
      title: "Higher Engagement",
      description: "Keep people engaged and committed throughout the transition rather than resistant and disengaged."
    },
    {
      icon: <Shield className="text-[#6BA94D]" size={32} />,
      title: "Reduced Risk",
      description: "Minimize the risks of failed initiatives, productivity dips, and talent loss during transitions."
    },
    {
      icon: <TrendingUp className="text-[#6BA94D]" size={32} />,
      title: "Better Outcomes",
      description: "Achieve the full intended benefits of change rather than partial implementation."
    }
  ];

  const faqs = [
    {
      question: "Why do so many change initiatives fail?",
      answer: "Most failures aren't due to poor strategy or technology—they fail because of inadequate attention to the human side of change. People resist change when they don't understand it, weren't involved, don't see the benefits, or lack the skills to succeed. We address these root causes systematically."
    },
    {
      question: "How long does change management support typically last?",
      answer: "It varies based on the scope of change. Small changes might need 2-3 months of support, while major transformations often require 12-18 months. The key is staying engaged until new behaviors are embedded and self-sustaining."
    },
    {
      question: "When should we bring in change management support?",
      answer: "Ideally, as early as possible—during planning rather than after decisions are made. Early involvement allows us to shape the change approach, build stakeholder buy-in, and avoid common pitfalls. That said, it's never too late to course-correct a struggling initiative."
    },
    {
      question: "How do you handle resistance to change?",
      answer: "We view resistance as information, not opposition. Through one-on-one engagement, listening sessions, and addressing legitimate concerns, we convert resisters into champions. Sometimes resistance signals real problems with the change approach that need addressing."
    },
    {
      question: "What's the role of leadership in change management?",
      answer: "Leadership is critical. Leaders set the tone, model new behaviors, make tough decisions, and maintain momentum when things get difficult. We work closely with leadership teams to ensure they're visible, aligned, and actively championing the change."
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
              Change Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Navigate organizational transformation successfully by addressing both the technical and human dimensions of change.
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
              The Reality of Organizational Change
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700"><p className="text-xl mb-6">
             Academic research consistently shows that most organizational change initiatives fail to achieve their objectives, with failure rates ranging from 60-70% 
            <a 
              href="https://doi.org/10.1177/1742715015571393" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm italic text-[#0B6E4F] hover:underline"
            >
             {" "}  (Hughes, 2016;
            </a>
            <a 
              href="https://doi.org/10.1080/14697017.2010.524655" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm italic text-[#0B6E4F] hover:underline"
            >
              Burnes & Jackson, 2011)
            </a>
            . The reason is rarely technical—it's the human element that derails transformation.
              </p>
              <p className="mb-4">
                Common change management challenges include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Resistance and pushback:</strong> People actively or passively resisting new ways of working</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Loss of momentum:</strong> Initial enthusiasm fading as implementation gets difficult</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Change fatigue:</strong> Organizations exhausted from too many initiatives competing for attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Capability gaps:</strong> People lacking the skills or confidence to operate in the new environment</span>
                </li>
              </ul>
              <p className="text-lg italic text-[#0B6E4F]">
                We help you navigate change successfully by managing both the technical implementation and the critical human dimensions.
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
              Why Change Management Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Effective change management dramatically increases your chances of transformation success.
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

      {/* Change Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Types of Change We Support
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Strategic Transformation", description: "Major shifts in direction, business model, or market positioning" },
                { title: "Technology Implementation", description: "New systems, platforms, or digital transformation initiatives" },
                { title: "Organizational Restructure", description: "Changes to structure, roles, reporting lines, or ways of working" },
                { title: "Culture Change", description: "Shifting values, behaviors, and how work gets done" },
                { title: "Mergers & Acquisitions", description: "Integrating organizations, systems, and cultures" },
                { title: "Process Redesign", description: "New workflows, procedures, or operating models" }
              ].map((type, index) => (
                <div key={index} className="border-l-4 border-[#6BA94D] bg-gray-50 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-2">{type.title}</h3>
                  <p className="text-gray-700">{type.description}</p>
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
              Our Change Management Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured methodology that addresses the human side of change while maintaining focus on business outcomes.
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
              What Success Looks Like
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Change objectives achieved on time and on budget",
                "High adoption rates and minimal resistance",
                "Sustained behavior change beyond the transition period",
                "Strong stakeholder engagement throughout",
                "Minimal productivity disruption during change",
                "Positive employee sentiment and morale",
                "Enhanced change capability for future initiatives",
                "Measurable business outcomes realized"
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
            Ready to Navigate Change Successfully?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your change initiative and how we can help you achieve a smooth, successful transition.
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

export default ChangeManagement;