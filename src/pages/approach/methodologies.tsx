// src/pages/approach/methodologies.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Target, TrendingUp, Users, Zap, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Compass, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

interface Methodology {
  icon: React.ReactNode;
  title: string;
  description: string;
  whenToUse: string;
  keyPrinciples: string[];
}

const Methodologies: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const methodologies: Methodology[] = [
    {
      icon: <Zap className="text-[#6BA94D]" size={32} />,
      title: "Lean Thinking",
      description: "Focus on eliminating waste, improving flow, and creating value from the customer's perspective. We apply lean principles across all types of organisations—not just manufacturing.",
      whenToUse: "When you need to improve efficiency, reduce costs, eliminate bottlenecks, or streamline processes without sacrificing quality.",
      keyPrinciples: [
        "Value from the customer perspective",
        "Map and improve value streams",
        "Create continuous flow",
        "Pull rather than push",
        "Pursue perfection through continuous improvement"
      ]
    },
    {
      icon: <Target className="text-[#6BA94D]" size={32} />,
      title: "Strategic Planning Frameworks",
      description: "Structured approaches to developing and executing strategy, from vision through to implementation. We use frameworks like Balanced Scorecard, OKRs, and strategy mapping—adapted to your needs.",
      whenToUse: "When you need clarity on direction, alignment across the organisation, or systematic execution of strategic priorities.",
      keyPrinciples: [
        "Clear vision and strategic priorities",
        "Cascading goals throughout organisation",
        "Balance short-term and long-term focus",
        "Measurable outcomes and accountability",
        "Regular review and adaptation"
      ]
    },
    {
      icon: <Users className="text-[#6BA94D]" size={32} />,
      title: "Change Management",
      description: "Systematic approaches to managing the human side of change, drawing on models like Kotter, ADKAR, and our own experience. We adapt the approach to fit your culture and change readiness.",
      whenToUse: "When implementing significant changes that require people to work differently, adopt new systems, or shift behaviours and mindsets.",
      keyPrinciples: [
        "Build compelling case for change",
        "Engage stakeholders early and often",
        "Address resistance constructively",
        "Communicate relentlessly",
        "Celebrate wins and maintain momentum"
      ]
    },
    {
      icon: <TrendingUp className="text-[#6BA94D]" size={32} />,
      title: "Performance Management",
      description: "Systems for setting expectations, measuring performance, providing feedback, and driving accountability. We help you build performance cultures without creating bureaucracy.",
      whenToUse: "When you need clearer accountability, better alignment of individual and organisational goals, or more consistent performance across teams.",
      keyPrinciples: [
        "Clear, measurable expectations",
        "Regular feedback and coaching",
        "Fair recognition and consequences",
        "Link individual to organisational goals",
        "Continuous improvement focus"
      ]
    }
  ];

  const faqs = [
    {
      question: "Do you follow these methodologies rigidly?",
      answer: "No. We're pragmatic, not purists. These frameworks provide proven principles and tools, but we adapt them to your situation. What matters is results, not methodology compliance. Sometimes the best approach combines elements from multiple frameworks. We use what works, not what's textbook perfect."
    },
    {
      question: "Will you try to make us adopt complex new systems?",
      answer: "Only if they're genuinely needed. Often, simpler is better. We're not trying to justify our fees through complexity. If a straightforward approach will work, that's what we'll recommend. Sophistication should serve purpose, not impress clients."
    },
    {
      question: "How do you decide which methodology to use?",
      answer: "By understanding your situation, culture, and what you're trying to achieve. Different challenges require different approaches. Sometimes we'll recommend a specific framework; other times we'll blend elements from several. The choice is driven by what will work best for you, not what we're most comfortable with."
    },
    {
      question: "Do we need to learn these methodologies?",
      answer: "You need to understand the principles and how to apply them in your context—not become methodology experts. We handle the technical aspects and translate them into practical approaches your team can use. Our goal is building your capability to improve, not making you dependent on consultants who speak in jargon."
    },
    {
      question: "What if these approaches don't fit our culture?",
      answer: "Then we adapt them. Every organisation has unique culture, and approaches must fit rather than force change. Sometimes that means significant modification of standard frameworks. We're honest when we think something won't work in your environment and help you find alternatives that will."
    },
    {
      question: "How do you stay current with new approaches?",
      answer: "Through continuous learning, peer networks, and—most importantly—learning from what works and doesn't in practice. The best insights often come from implementation experience, not textbooks. We're sceptical of management fads but open to genuinely better ways of working."
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
              How We Work
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Methodologies
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              We draw on proven frameworks and methodologies—but we're pragmatic, not purists. We adapt approaches to fit your organisation, not force-fit your business into rigid frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2">
                Start a Conversation <ArrowRight size={20} />
              </Link>
              <Link to="/approach/our-process" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center">
                Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Compass className="text-[#6BA94D]" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Philosophy on Methodologies
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Methodologies are tools, not religions. They provide proven principles and frameworks that save you from reinventing the wheel—but they must be adapted to your reality, not applied dogmatically.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">How We Use Methodologies</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                    <span><strong>Draw on proven frameworks</strong> that have worked across thousands of organisations and situations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                    <span><strong>Adapt to your context</strong>—your culture, capability, resources, and specific challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                    <span><strong>Blend approaches</strong> when combining elements from different methodologies serves you better</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                    <span><strong>Focus on principles</strong> over process—understanding why things work, not just following steps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                    <span><strong>Prioritise results</strong> over methodology purity—what works matters more than what's textbook correct</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg italic text-[#0B6E4F]">
                We're experienced enough to know the methodologies well, and wise enough to know when to deviate from them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Methodologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Methodologies We Draw Upon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven frameworks adapted to your unique circumstances and combined as needed.
            </p>
          </div>
          <div className="max-w-6xl mx-auto space-y-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 bg-gray-50 p-4 rounded-lg">
                      {methodology.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0B6E4F] mb-3">{methodology.title}</h3>
                      <p className="text-gray-700 mb-4">{methodology.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900 mb-2">When to use this approach:</p>
                        <p className="text-gray-600">{methodology.whenToUse}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Principles:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {methodology.keyPrinciples.map((principle, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-700">{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Approaches Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Other Frameworks & Approaches
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Depending on your needs, we may also draw upon:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: "Six Sigma & Quality Management", 
                  description: "Statistical approaches to reducing variation, improving quality, and solving complex problems systematically"
                },
                { 
                  title: "Theory of Constraints", 
                  description: "Focus on identifying and addressing the biggest constraint limiting performance—the bottleneck that matters most"
                },
                { 
                  title: "Agile & Iterative Approaches", 
                  description: "Rapid experimentation, learning, and adaptation—particularly valuable in uncertain or rapidly changing environments"
                },
                { 
                  title: "Design Thinking", 
                  description: "Human-centred approach to innovation and problem-solving, particularly powerful for customer experience work"
                },
                { 
                  title: "Systems Thinking", 
                  description: "Understanding interconnections, feedback loops, and unintended consequences in complex organisational systems"
                },
                { 
                  title: "Appreciative Inquiry", 
                  description: "Building on strengths and what's working well, rather than only focusing on problems and deficits"
                }
              ].map((approach, index) => (
                <div key={index} className="border-l-4 border-[#6BA94D] bg-gray-50 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-2">{approach.title}</h3>
                  <p className="text-gray-600">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles Over Process Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Lightbulb className="mx-auto mb-6 text-[#6BA94D]" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Principles Over Process
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Great consultants understand not just <em>what</em> methodologies say, but <em>why</em> they work—and when they don't.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "We understand the principles behind methodologies deeply",
                "We know when to follow the framework and when to adapt",
                "We combine approaches when it serves you better",
                "We focus on outcomes, not methodology compliance",
                "We translate complex frameworks into practical actions",
                "We build your capability, not dependency on us"
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
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
            Let's Find the Right Approach for You
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Every situation is different. Let's discuss your challenges and design an approach that works for your organisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2">
              Get in Touch <ArrowRight size={20} />
            </Link>
            <Link to="/approach" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center">
              Learn More About Our Approach
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Methodologies;