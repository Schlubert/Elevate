// src/pages/expertise/performance-management.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Target, BarChart3, Award, TrendingUp, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Activity } from "lucide-react";
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

const PerformanceManagement: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Performance Framework Design",
      description: "We design performance management systems aligned with your strategy, culture, and business model—from goal-setting to measurement to consequences.",
      deliverables: ["Performance framework", "KPI architecture", "Goal-setting methodology", "Review process design"]
    },
    {
      number: "02",
      title: "Metrics & Measurement",
      description: "We establish the right metrics and dashboards to track individual, team, and organizational performance—ensuring visibility and accountability.",
      deliverables: ["Balanced scorecard", "Performance dashboards", "Data collection systems", "Reporting mechanisms"]
    },
    {
      number: "03",
      title: "Implementation & Training",
      description: "We support rollout of new performance systems, training leaders and staff on effective goal-setting, feedback, and performance conversations.",
      deliverables: ["Manager training programs", "Employee communication", "System setup and testing", "Implementation support"]
    },
    {
      number: "04",
      title: "Continuous Improvement",
      description: "Performance management isn't set-and-forget. We help you review effectiveness, address gaps, and continuously refine your approach.",
      deliverables: ["System effectiveness reviews", "Refinement recommendations", "Best practice integration", "Ongoing optimization"]
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: <Target className="text-[#6BA94D]" size={32} />,
      title: "Clear Expectations",
      description: "Everyone knows what success looks like and how their work contributes to organizational goals."
    },
    {
      icon: <Activity className="text-[#6BA94D]" size={32} />,
      title: "Better Accountability",
      description: "Create cultures where people take ownership for results and follow-through on commitments."
    },
    {
      icon: <TrendingUp className="text-[#6BA94D]" size={32} />,
      title: "Improved Performance",
      description: "Drive measurable improvements in individual, team, and organizational outcomes."
    },
    {
      icon: <Award className="text-[#6BA94D]" size={32} />,
      title: "Fair Recognition",
      description: "Reward and recognize high performers while addressing underperformance constructively."
    }
  ];

  const faqs = [
    {
      question: "How is performance management different from annual reviews?",
      answer: "Traditional annual reviews are just one component. Modern performance management is ongoing—continuous feedback, regular check-ins, real-time course correction, and development conversations throughout the year. It's about improving performance, not just rating it once a year."
    },
    {
      question: "How do you handle underperformance?",
      answer: "Effective systems catch underperformance early through regular check-ins and clear metrics. We help you create processes that provide support and development opportunities first, with clear escalation paths for persistent issues. The goal is improvement, not punishment, but accountability is essential."
    },
    {
      question: "What makes a good performance metric?",
      answer: "Good metrics are specific, measurable, meaningful, and within someone's control. They balance leading and lagging indicators, focus on outcomes not just activities, and align individual goals with organizational priorities. We help you avoid metric overload while ensuring comprehensive coverage."
    },
    {
      question: "How do you link performance to compensation?",
      answer: "The link between performance and pay should be clear but not mechanical. We help you design systems that reward high performance and address persistent underperformance, while avoiding the pitfalls of rigid rating systems that can damage culture and collaboration."
    },
    {
      question: "Can performance management work in creative or knowledge-based roles?",
      answer: "Absolutely. While measuring output is more complex than production roles, performance management is even more important in knowledge work. We help you establish clear outcomes and success measures while maintaining flexibility for the nature of the work."
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
              Performance Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Create a performance culture where expectations are clear, accountability is strong, and high performance is recognized and rewarded.
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
              The Performance Management Problem
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Most organizations struggle with performance management. Systems are seen as bureaucratic box-ticking exercises that consume time without driving improvement.
              </p>
              <p className="mb-4">
                Common challenges include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Unclear expectations:</strong> People don't know what good performance looks like or how they're measured</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Weak accountability:</strong> Underperformance tolerated while high performers feel unrecognized</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Process-focused:</strong> Systems designed for compliance rather than performance improvement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Disconnected from strategy:</strong> Individual goals not aligned with organizational priorities</span>
                </li>
              </ul>
              <p className="text-lg italic text-[#0B6E4F]">
                We help you build performance management systems that drive results, develop people, and create accountability without bureaucracy.
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
              Why Performance Management Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Effective performance management is one of the highest-leverage interventions for organizational success.
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

      {/* Components Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Key Components We Address
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Goal Setting & Cascading", description: "Aligning individual and team goals with organizational strategy through clear cascading frameworks" },
                { title: "Metrics & KPIs", description: "Establishing the right measures at each level to track progress and drive accountability" },
                { title: "Regular Feedback & Check-ins", description: "Moving beyond annual reviews to ongoing conversations about performance and development" },
                { title: "Performance Reviews", description: "Structured evaluation processes that are fair, meaningful, and development-focused" },
                { title: "Calibration & Consistency", description: "Ensuring performance ratings are consistent and fair across teams and managers" },
                { title: "Recognition & Consequences", description: "Linking performance to rewards, development opportunities, and addressing underperformance" }
              ].map((component, index) => (
                <div key={index} className="border-l-4 border-[#6BA94D] bg-gray-50 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-2">{component.title}</h3>
                  <p className="text-gray-700">{component.description}</p>
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
              Our Performance Management Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to designing and implementing performance systems that actually drive results.
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
              What a Great Performance System Delivers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Clear line of sight from individual goals to strategy",
                "Regular, meaningful performance conversations",
                "Objective metrics that drive the right behaviors",
                "Fair and consistent performance evaluation",
                "High performers recognized and rewarded",
                "Underperformance addressed constructively",
                "Managers skilled in performance coaching",
                "Culture of accountability and continuous improvement"
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
            Ready to Build a High-Performance Culture?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you design performance management systems that drive results.
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

export default PerformanceManagement;