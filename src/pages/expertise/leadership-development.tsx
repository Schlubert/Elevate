// src/pages/expertise/leadership-development.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Users, Award, Compass, Brain, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Star } from "lucide-react";
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

const LeadershipDevelopment: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Leadership Assessment",
      description: "We assess current leadership capability, identify development needs, and understand your organization's unique leadership requirements and culture.",
      deliverables: ["Leadership capability audit", "Individual assessments", "Organizational culture analysis", "Development needs identification"]
    },
    {
      number: "02",
      title: "Program Design",
      description: "We design tailored development programs that address your specific needs, combining various learning modalities for maximum impact.",
      deliverables: ["Customized curriculum", "Learning pathways", "Coaching frameworks", "Measurement approach"]
    },
    {
      number: "03",
      title: "Development Delivery",
      description: "Through workshops, coaching, action learning, and real-world application, we build leadership capability in ways that stick.",
      deliverables: ["Interactive workshops", "Individual and group coaching", "Action learning projects", "Peer learning forums"]
    },
    {
      number: "04",
      title: "Sustain & Embed",
      description: "Leadership development is an ongoing journey. We help you create systems and culture that continue developing leaders long after our engagement.",
      deliverables: ["Leadership framework", "Ongoing coaching structure", "Succession planning process", "Development culture building"]
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: <Users className="text-[#6BA94D]" size={32} />,
      title: "Stronger Teams",
      description: "Build leaders who inspire, engage, and get the best from their teams."
    },
    {
      icon: <Award className="text-[#6BA94D]" size={32} />,
      title: "Better Results",
      description: "Leadership capability directly translates to improved organizational performance and outcomes."
    },
    {
      icon: <Compass className="text-[#6BA94D]" size={32} />,
      title: "Clear Direction",
      description: "Develop leaders who can navigate complexity, make tough decisions, and drive execution."
    },
    {
      icon: <Star className="text-[#6BA94D]" size={32} />,
      title: "Talent Retention",
      description: "Invest in your people and they'll invest in your organization. Great leaders attract and keep great talent."
    }
  ];

  const faqs = [
    {
      question: "Who should participate in leadership development programs?",
      answer: "It depends on your goals. We work with emerging leaders being prepared for greater responsibility, mid-level managers looking to enhance their impact, senior executives driving strategic change, and entire leadership teams building collective capability. We tailor programs to each level."
    },
    {
      question: "How long does a leadership development program take?",
      answer: "Effective leadership development takes time. Most programs run 3-12 months, combining intensive learning sessions with real-world application and coaching. We can also design shorter executive programs or longer-term development pathways for emerging leaders."
    },
    {
      question: "How do you measure the impact of leadership development?",
      answer: "We use multiple measures: participant feedback, behavioral changes observed by direct reports and peers, progress on real business challenges tackled during the program, and organizational performance metrics. The best evidence is when leaders demonstrate new capabilities in their day-to-day work."
    },
    {
      question: "Do you offer individual executive coaching?",
      answer: "Yes. While many of our programs involve cohort-based learning, we also provide one-on-one executive coaching for senior leaders. This is particularly valuable for CEOs, newly appointed executives, or leaders navigating significant transitions."
    },
    {
      question: "What makes your approach different?",
      answer: "We're practitioners, not academics. Our leadership development is grounded in real-world experience and focused on practical capability building. We emphasize action learning—applying concepts to actual business challenges—rather than theoretical discussion. And we work to build capability that lasts, not just deliver training events."
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
              Leadership Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Develop confident, capable leaders who inspire teams, drive results, and create lasting organizational impact.
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
              The Leadership Challenge
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Organizations don't fail because of bad strategies or inadequate systems—they fail because of leadership. Great leaders make average strategies work; poor leaders make great strategies fail.
              </p>
              <p className="mb-4">
                Common leadership development challenges include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Leadership gaps:</strong> Promoting technical experts without developing their leadership capability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Inconsistent capability:</strong> Wide variation in leadership quality across the organization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Succession risk:</strong> No pipeline of leaders ready to step up when needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Generic programs:</strong> Off-the-shelf training that doesn't address your specific context and needs</span>
                </li>
              </ul>
              <p className="text-lg italic text-[#0B6E4F]">
                We help you build leadership capability that drives performance and creates a sustainable pipeline of talented leaders.
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
              Why Leadership Development Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investment in leadership development delivers returns across every aspect of organizational performance.
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

      {/* Core Leadership Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Core Leadership Capabilities We Develop
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Strategic Thinking", description: "See the big picture, anticipate trends, and make decisions that position the organization for long-term success" },
                { title: "People Leadership", description: "Build high-performing teams, develop talent, and create environments where people thrive" },
                { title: "Change Leadership", description: "Navigate ambiguity, manage resistance, and successfully lead organizations through transformation" },
                { title: "Decision Making", description: "Make sound decisions under pressure, balance competing priorities, and take responsibility for outcomes" },
                { title: "Communication", description: "Inspire and influence through clear, compelling communication that engages hearts and minds" },
                { title: "Execution Excellence", description: "Turn vision into reality through disciplined execution, accountability, and driving results" }
              ].map((capability, index) => (
                <div key={index} className="border-l-4 border-[#6BA94D] bg-gray-50 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-2">{capability.title}</h3>
                  <p className="text-gray-700">{capability.description}</p>
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
              Our Leadership Development Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical, action-oriented development that builds real capability and delivers measurable impact.
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
              What Participants Gain
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Enhanced self-awareness and leadership style",
                "Practical tools and frameworks used daily",
                "Expanded network of peer leaders",
                "Coaching relationship for ongoing support",
                "Confidence to tackle bigger challenges",
                "Clear personal development plan",
                "Skills to develop others",
                "Measurable improvement in leadership effectiveness"
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
            Ready to Develop Your Leadership Capability?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your leadership development needs and how we can help build capability at all levels.
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

export default LeadershipDevelopment;