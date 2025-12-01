// src/pages/approach/engagement-models.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Clock, Briefcase, Users, Target, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Calendar, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

interface EngagementModel {
  icon: React.ReactNode;
  title: string;
  description: string;
  bestFor: string;
  howItWorks: string;
  typicalDuration: string;
  benefits: string[];
}

const EngagementModels: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const models: EngagementModel[] = [
    {
      icon: <Target className="text-[#6BA94D]" size={32} />,
      title: "Project-Based Consulting",
      description: "Defined projects with clear scope, deliverables, and timelines. We work intensively on specific challenges or initiatives from start to finish.",
      bestFor: "Discrete challenges with clear boundaries—strategic planning, process redesign, system implementation, or specific improvement initiatives.",
      howItWorks: "We agree on scope, deliverables, and timeline upfront. You get dedicated focus on achieving specific outcomes within a defined timeframe.",
      typicalDuration: "6 weeks to 6 months",
      benefits: [
        "Clear scope and deliverables",
        "Predictable timeline and investment",
        "Intensive focus on specific outcomes",
        "Defined beginning and end point"
      ]
    },
    {
      icon: <Handshake className="text-[#6BA94D]" size={32} />,
      title: "Retained Advisory",
      description: "Ongoing partnership providing regular strategic counsel, problem-solving support, and guidance as challenges arise. Think of us as an extension of your leadership team.",
      bestFor: "Leaders who value having experienced advisors available for ongoing counsel, strategic thinking, and support navigating complex challenges.",
      howItWorks: "Regular touchpoints (monthly or quarterly) plus availability between sessions for advice, problem-solving, and strategic discussions as needed.",
      typicalDuration: "12+ months, often ongoing",
      benefits: [
        "Consistent strategic partnership",
        "Deep understanding of your business",
        "Responsive support when challenges arise",
        "Lower cost than full projects"
      ]
    },
    {
      icon: <Users className="text-[#6BA94D]" size={32} />,
      title: "Interim Management",
      description: "Step into leadership roles during transitions, transformations, or capability gaps. We provide senior operational or strategic leadership whilst you recruit, develop successors, or navigate change.",
      bestFor: "Leadership gaps, major transitions, transformations requiring experienced interim leadership, or building capability for future permanent leaders.",
      howItWorks: "We take on defined leadership responsibilities for a fixed period, operating as part of your team whilst building sustainable capability.",
      typicalDuration: "3 to 12 months",
      benefits: [
        "Immediate leadership capability",
        "Hands-on operational involvement",
        "Stability during transitions",
        "Knowledge transfer to permanent team"
      ]
    },
    {
      icon: <Calendar className="text-[#6BA94D]" size={32} />,
      title: "Workshop Facilitation",
      description: "Design and facilitate strategic workshops, planning sessions, team development, or problem-solving workshops. We bring structure, expertise, and neutral facilitation.",
      bestFor: "Strategy development, planning sessions, team alignment, problem-solving, or when you need expert facilitation for important discussions.",
      howItWorks: "We design workshop approach based on your objectives, facilitate the session(s), and provide documentation of outcomes and next steps.",
      typicalDuration: "Half-day to multi-day sessions",
      benefits: [
        "Expert facilitation and structure",
        "Neutral, objective perspective",
        "Engaging, productive sessions",
        "Clear outcomes and action plans"
      ]
    },
    {
      icon: <Briefcase className="text-[#6BA94D]" size={32} />,
      title: "Diagnostic Assessment",
      description: "Rapid, focused assessment of specific areas—operations, strategy, culture, or performance. We provide objective diagnosis and recommendations for improvement.",
      bestFor: "Understanding current state before major decisions, identifying improvement opportunities, or getting external perspective on challenges.",
      howItWorks: "Intensive assessment period (typically 2-4 weeks) involving interviews, observation, and analysis, followed by findings and recommendations.",
      typicalDuration: "2 to 6 weeks",
      benefits: [
        "Quick, objective assessment",
        "External perspective on challenges",
        "Clear recommendations",
        "Foundation for larger initiatives"
      ]
    },
    {
      icon: <Clock className="text-[#6BA94D]" size={32} />,
      title: "Capability Building Programmes",
      description: "Design and deliver training, coaching, and development programmes that build lasting capability in leadership, management, or specific skills.",
      bestFor: "Building internal capability in leadership, management, specific methodologies, or when developing your team is as important as solving immediate problems.",
      howItWorks: "We design tailored programmes combining workshops, coaching, action learning, and practical application over several months.",
      typicalDuration: "3 to 12 months",
      benefits: [
        "Lasting capability development",
        "Cohort learning and peer support",
        "Real-world application",
        "Sustainable improvement beyond engagement"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do we know which engagement model is right for us?",
      answer: "Through conversation about your situation, objectives, timeline, and resources. Sometimes it's obvious (you need a strategic plan = project-based; you want ongoing counsel = retained advisory). Other times we'll recommend a combination or phased approach. We're honest about what will work best, even if it means less revenue for us."
    },
    {
      question: "Can we start with one model and change to another?",
      answer: "Absolutely. Many clients start with a diagnostic or short project, then move to retained advisory or larger transformation work. Or begin with interim leadership that transitions to project-based support. We're flexible and adapt as your needs evolve. No need to commit to everything upfront."
    },
    {
      question: "What if we're not sure exactly what we need?",
      answer: "That's common and perfectly fine. We can start with a discovery phase or diagnostic to clarify the real challenges and best path forward. Sometimes a few hours of conversation is enough to get clarity on the right approach. We don't need you to have it all figured out before we start talking."
    },
    {
      question: "Do you work on hourly rates or fixed fees?",
      answer: "Depends on the engagement model and what serves you best. Project-based work is typically fixed fee (you know the investment upfront). Retained advisory and interim management might be monthly retainers. Diagnostics and workshops are usually fixed. We're transparent about pricing and structure fees to align our interests with yours."
    },
    {
      question: "What's the minimum engagement size you'll take on?",
      answer: "We're pragmatic. Sometimes a half-day workshop or quick diagnostic is exactly what's needed. We're not interested in unnecessary scope or forcing large engagements. That said, very small pieces of work need to be right-sized to the value we can actually deliver. We're honest about when we can help meaningfully and when the scope is too limited."
    },
    {
      question: "Can you work alongside other consultants or advisors?",
      answer: "Yes, if it serves you. We're comfortable working as part of broader initiatives with other specialists, or complementing work from other advisors. We're not territorial—what matters is achieving your objectives. We're also honest if we see overlaps or conflicts that might waste your money."
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
              Engagement Models
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Flexible partnership structures designed around your needs, timeline, and how you prefer to work. From intensive projects to ongoing advisory relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2">
                Discuss Your Needs <ArrowRight size={20} />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Flexible Partnerships That Fit Your Needs
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                There's no one-size-fits-all approach to consulting engagements. Different situations require different structures. We offer flexibility to match how you work and what you're trying to achieve.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">Our Approach to Engagements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                    <span><strong>Flexible structures</strong> tailored to your situation, not rigid packages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                    <span><strong>Transparent pricing</strong> so you know what you're investing and why</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                    <span><strong>Right-sized scope</strong>—we won't sell you more than you need</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                    <span><strong>Adaptable approach</strong> that can evolve as your needs change</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                    <span><strong>Clear expectations</strong> about deliverables, timeline, and investment</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg italic text-[#0B6E4F]">
                We're more interested in doing what serves you than fitting you into our preferred engagement model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Can Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different engagement structures for different needs and circumstances.
            </p>
          </div>
          <div className="max-w-6xl mx-auto space-y-8">
            {models.map((model, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 bg-gray-50 p-4 rounded-lg">
                      {model.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0B6E4F] mb-3">{model.title}</h3>
                      <p className="text-gray-700 mb-4">{model.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm font-semibold text-gray-900 mb-2">Best for:</p>
                          <p className="text-gray-600 text-sm">{model.bestFor}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm font-semibold text-gray-900 mb-2">Typical duration:</p>
                          <p className="text-gray-600 text-sm">{model.typicalDuration}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-900 mb-2">How it works:</p>
                        <p className="text-gray-600">{model.howItWorks}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Key benefits:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {model.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-700">{benefit}</span>
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

      {/* Hybrid Approaches Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Combining Engagement Models
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Often the best approach combines elements from different models or phases over time.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: "Discovery Then Project", 
                  description: "Start with diagnostic assessment to clarify challenges, then move to project-based work addressing what we found"
                },
                { 
                  title: "Project Plus Advisory", 
                  description: "Intensive project work followed by retained advisory to support ongoing implementation and new challenges"
                },
                { 
                  title: "Interim to Permanent", 
                  description: "Interim leadership during transition, evolving to advisory role once permanent leader in place"
                },
                { 
                  title: "Workshop Series", 
                  description: "Regular workshop facilitation over time for strategic planning, team development, or problem-solving"
                },
                { 
                  title: "Phased Approach", 
                  description: "Break large transformation into phases, with defined projects and outcomes for each phase"
                },
                { 
                  title: "Capability Plus Delivery", 
                  description: "Combine capability building programmes with project delivery so learning happens through real work"
                }
              ].map((approach, index) => (
                <div key={index} className="border-l-4 border-[#6BA94D] bg-gray-50 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-2">{approach.title}</h3>
                  <p className="text-gray-600">{approach.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gradient-to-r from-[#0B6E4F] to-[#6BA94D] text-white p-6 rounded-lg text-center">
              <p className="text-lg">
                <strong>The key principle:</strong> We design engagement structures around your needs, not our preferences. Let's discuss what would work best for you.
              </p>
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
            Let's Design the Right Engagement for You
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Every situation is different. Let's talk about your challenges, timeline, and what engagement structure would serve you best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2">
              Start a Conversation <ArrowRight size={20} />
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

export default EngagementModels;