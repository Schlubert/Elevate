// src/pages/expertise/strategic-planning.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Target, TrendingUp, Users, Lightbulb, CheckCircle, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
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

const StrategicPlanning: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "We start by deeply understanding your organization, market position, and strategic challenges through stakeholder interviews, data analysis, and environmental scanning.",
      deliverables: ["Current state assessment", "Stakeholder alignment sessions", "Market & competitive analysis", "SWOT analysis"]
    },
    {
      number: "02",
      title: "Vision & Direction",
      description: "Working collaboratively with your leadership team, we clarify your vision, define your strategic intent, and identify the key strategic themes that will drive your success.",
      deliverables: ["Vision & mission refinement", "Strategic objectives definition", "Key performance indicators", "Strategic priorities roadmap"]
    },
    {
      number: "03",
      title: "Strategy Development",
      description: "We develop detailed strategies and initiatives that translate your vision into actionable plans, with clear ownership, timelines, and resource requirements.",
      deliverables: ["Strategic initiatives portfolio", "Resource allocation plan", "Risk assessment", "Implementation timeline"]
    },
    {
      number: "04",
      title: "Activation & Execution",
      description: "Strategy means nothing without execution. We work alongside your team to implement plans, track progress, and adapt as needed to ensure your strategy delivers results.",
      deliverables: ["Implementation support", "Progress dashboards", "Change management", "Course correction guidance"]
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: <Target className="text-[#6BA94D]" size={32} />,
      title: "Clear Direction",
      description: "Replace uncertainty with a clear, shared understanding of where you're going and how you'll get there."
    },
    {
      icon: <TrendingUp className="text-[#6BA94D]" size={32} />,
      title: "Accelerated Growth",
      description: "Focus resources on the highest-impact opportunities and eliminate activities that don't drive value."
    },
    {
      icon: <Users className="text-[#6BA94D]" size={32} />,
      title: "Aligned Organization",
      description: "Get everyone rowing in the same direction with clarity on priorities and how individual roles contribute."
    },
    {
      icon: <Lightbulb className="text-[#6BA94D]" size={32} />,
      title: "Competitive Advantage",
      description: "Identify and exploit opportunities that your competitors miss, creating sustainable differentiation."
    }
  ];

  const faqs = [
    {
      question: "How long does strategic planning take?",
      answer: "Typically 8-12 weeks from kickoff to final strategy document, though this varies based on organization size and complexity. We can also run accelerated planning sprints for time-sensitive situations."
    },
    {
      question: "Who should be involved in the strategic planning process?",
      answer: "At minimum, the executive leadership team and board (if applicable). We often include key managers, subject matter experts, and sometimes external stakeholders depending on your needs. We'll help you identify the right participants during our scoping discussion."
    },
    {
      question: "What if our strategy needs to change after we've developed it?",
      answer: "Strategy should be dynamic, not static. We build in regular review points and help you establish processes for monitoring assumptions and adapting as conditions change. The best strategies are living documents that evolve with your business."
    },
    {
      question: "Do you use a specific strategic planning methodology?",
      answer: "We draw on proven frameworks like Balanced Scorecard, Porter's Five Forces, and Blue Ocean Strategy, but we don't believe in one-size-fits-all approaches. We adapt our methodology to your organization's culture, maturity, and specific needs."
    },
    {
      question: "What makes Elevate's approach different?",
      answer: "We're operators, not just consultants. Our focus is on strategies that actually get implemented, not beautiful documents that sit on shelves. We work alongside your team during execution and measure success by your results, not just our recommendations."
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
              Strategic Planning & Execution
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Transform your vision into a clear, actionable strategy that aligns your organization and drives measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              >
                Start a Conversation <ArrowRight size={20} />
              </Link>
              
                <a href="#process"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center"
              >
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
              The Challenge: Strategy vs. Execution Gap
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Most organizations don't fail for lack of good ideas—they fail because their strategies are either unclear, unrealistic, or never properly implemented.
              </p>
              <p className="mb-4">
                Common challenges we see include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Lack of clarity:</strong> Teams don't understand the strategy or how their work connects to it</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Too many priorities:</strong> Everything is important, so nothing gets the focus it needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Implementation failure:</strong> Great plans that never translate into action and results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Rigid planning:</strong> Strategies that can't adapt when market conditions change</span>
                </li>
              </ul>
              <p className="text-lg italic text-[#0B6E4F]">
                We help you create strategies that are clear, focused, actionable, and built for execution.
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
              Why Strategic Planning Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A well-crafted strategy provides the foundation for sustainable growth and competitive advantage.
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
              Our Strategic Planning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven, collaborative approach that delivers strategies you can actually execute.
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
              What You'll Walk Away With
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "A clear, documented strategy that everyone understands",
                "Prioritized initiatives with owners and timelines",
                "Metrics and KPIs to track progress",
                "Resource allocation plan",
                "Risk mitigation strategies",
                "Implementation roadmap and governance structure",
                "Change management and communication plan",
                "Capability to maintain and evolve the strategy"
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
            Ready to Create a Strategy That Drives Results?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your strategic challenges and how we can help you develop a clear path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              Schedule a Consultation <ArrowRight size={20} />
            </Link>
            <Link
              to="/expertise"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StrategicPlanning;