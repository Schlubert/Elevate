// src/pages/approach/our-process.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Users, Compass, Lightbulb, Rocket, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Heart, Search } from "lucide-react";
import { Link } from "react-router-dom";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  activities: string[];
  outcome: string;
}

const OurProcess: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Deep Discovery & Immersion",
      description: "We don't believe in solutions from afar. We start by immersing ourselves in your business—visiting your sites, observing operations, talking with your people, and understanding what makes you unique.",
      activities: [
        "On-site observation and workplace visits",
        "Conversations with staff at all levels",
        "Customer and stakeholder interviews",
        "Document and data review",
        "Understanding your philosophy, values, and culture",
        "Identifying what makes your business special"
      ],
      outcome: "Deep understanding of your business personality, challenges, strengths, and promise—not just surface symptoms but the underlying dynamics that shape your organisation."
    },
    {
      number: "02",
      title: "Collaborative Diagnosis",
      description: "We work alongside your team to make sense of what we've learned, identifying root causes rather than symptoms, and building shared understanding of challenges and opportunities.",
      activities: [
        "Collaborative analysis workshops",
        "Pattern identification and root cause analysis",
        "Prioritisation of opportunities",
        "Validation with key stakeholders",
        "Building shared understanding across leadership",
        "Identifying quick wins and strategic priorities"
      ],
      outcome: "Clear, shared understanding of what's really happening in your business, what's causing current challenges, and where the highest-impact opportunities lie."
    },
    {
      number: "03",
      title: "Tailored Solution Design",
      description: "Every business is different. We design approaches specifically for you—your culture, your people, your circumstances. We draw on proven methodologies but adapt them to fit your reality, not force-fit your business into generic frameworks.",
      activities: [
        "Custom strategy and initiative design",
        "Approach tailored to your culture and capability",
        "Resource and timeline planning",
        "Risk assessment and mitigation",
        "Change approach suited to your organisation",
        "Building on your existing strengths"
      ],
      outcome: "Practical, tailored solutions that honour what makes your business unique whilst applying proven principles adapted to your specific context."
    },
    {
      number: "04",
      title: "Hands-On Implementation",
      description: "We don't just hand over recommendations and walk away. We work alongside your team during implementation, adapting as we learn, solving problems as they arise, and ensuring momentum through the inevitable challenges.",
      activities: [
        "Working side-by-side with your team",
        "Pilot testing and rapid iteration",
        "Training and capability building",
        "Problem-solving and course correction",
        "Regular progress reviews and adaptation",
        "Celebrating wins and maintaining momentum"
      ],
      outcome: "Real change embedded in your organisation, not just plans on paper. Your team gains confidence and capability whilst achieving measurable results."
    },
    {
      number: "05",
      title: "Sustainable Capability Building",
      description: "Our goal is to work ourselves out of a job. Throughout our engagement, we focus on building your team's capability so improvements continue long after we've left.",
      activities: [
        "Knowledge transfer and documentation",
        "Coaching and skill development",
        "Creating systems for ongoing improvement",
        "Establishing measurement and feedback loops",
        "Building internal change capability",
        "Gradual transition to full ownership"
      ],
      outcome: "Your team has the capability, confidence, and systems to continue improving independently. The change becomes self-sustaining."
    }
  ];

  const faqs = [
    {
      question: "How long does a typical engagement take?",
      answer: "It varies enormously based on scope and complexity. Some focussed projects might be 6-8 weeks, whilst major transformations can span 12-18 months. We're honest upfront about realistic timeframes and flexible in our approach—sometimes a short diagnostic followed by longer implementation makes sense. What matters most is achieving lasting results, not adhering to arbitrary timelines."
    },
    {
      question: "Do you work on-site or remotely?",
      answer: "Both, depending on what's needed. Deep discovery requires on-site time—you can't understand a business from video calls alone. Implementation often involves regular on-site presence, interspersed with remote support. We're based in New Zealand and work with clients nationwide, adapting our approach to minimise travel costs whilst maintaining effectiveness."
    },
    {
      question: "How involved does our team need to be?",
      answer: "Very. We're not external experts parachuting in with answers—we're partners working alongside your people. The best results come when your team is actively involved: participating in discovery, co-designing solutions, and driving implementation. We bring expertise and fresh perspective; you bring knowledge of your business and customers. Together we achieve what neither could alone."
    },
    {
      question: "What if we disagree with your recommendations?",
      answer: "That's absolutely fine—and often valuable. We're not always right, and you know your business better than we ever will. Our role is to bring external perspective, challenge assumptions, and apply proven principles—but you make the final decisions. When we disagree, it's usually because we're seeing things differently, and exploring that difference often leads to better solutions."
    },
    {
      question: "How do you measure success?",
      answer: "By the results you achieve, not the elegance of our recommendations. We establish clear success measures at the start—sometimes quantitative (revenue, costs, satisfaction scores), sometimes qualitative (capability built, culture shifted, problems solved). We track progress throughout and adapt if we're not seeing the results we expect. Success means your business is meaningfully better."
    },
    {
      question: "What happens after the engagement ends?",
      answer: "You own everything we've created together, and your team has the capability to continue. We don't create dependency. That said, many clients maintain relationships for periodic check-ins, help with new challenges, or support with next-phase initiatives. We're here if you need us, but our goal is building your independence, not ongoing reliance."
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
              Our Process
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              We take time to truly understand your business—its personality, challenges, strengths, and promise—before designing tailored solutions that honour what makes you unique.
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

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-[#6BA94D]" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Philosophy
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Every business is different. Each has its own personality, challenges, strengths, and promise. Generic solutions and cookie-cutter approaches rarely work because they ignore what makes your business unique.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">We Don't Believe In</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0B6E4F] mt-1">×</span>
                      <span>Solutions designed from afar without understanding your reality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0B6E4F] mt-1">×</span>
                      <span>One-size-fits-all methodologies forced onto your business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0B6E4F] mt-1">×</span>
                      <span>Recommendations without implementation support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0B6E4F] mt-1">×</span>
                      <span>Creating dependency rather than building capability</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#0B6E4F] to-[#6BA94D] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">We Do Believe In</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="flex-shrink-0 mt-1" size={18} />
                      <span>Deep understanding before designing solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="flex-shrink-0 mt-1" size={18} />
                      <span>Approaches tailored to your culture and circumstances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="flex-shrink-0 mt-1" size={18} />
                      <span>Working alongside you through implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="flex-shrink-0 mt-1" size={18} />
                      <span>Building your capability for lasting independence</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-lg italic text-[#0B6E4F]">
                We visit your business, talk with your people, observe operations, understand your philosophy and ethics, and learn as much as we can about what makes you unique. Only then do we design approaches specifically for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our process is collaborative, adaptive, and focused on building lasting capability whilst delivering results.
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6BA94D] to-[#0B6E4F] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#0B6E4F] mb-3">{step.title}</h3>
                    <p className="text-gray-700 mb-4 text-lg">{step.description}</p>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">What We Do:</h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {step.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-0.5" size={16} />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border-l-4 border-[#6BA94D]">
                      <p className="text-gray-700"><strong className="text-[#0B6E4F]">Outcome:</strong> {step.outcome}</p>
                    </div>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="ml-8 h-12 w-0.5 bg-gradient-to-b from-[#6BA94D] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              What Makes Our Approach Different
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: <Search className="text-[#6BA94D]" size={28} />,
                  title: "Deep Understanding First", 
                  description: "We immerse ourselves in your business before designing solutions. We visit sites, observe operations, talk with people at all levels, and truly understand your context."
                },
                { 
                  icon: <Users className="text-[#6BA94D]" size={28} />,
                  title: "Partnership, Not Prescription", 
                  description: "We work alongside your team as partners, not external experts with all the answers. The best solutions emerge from combining our expertise with your business knowledge."
                },
                { 
                  icon: <Compass className="text-[#6BA94D]" size={28} />,
                  title: "Tailored to Your Culture", 
                  description: "We adapt proven methodologies to fit your organisation, not force-fit your business into generic frameworks. Your culture and circumstances shape our approach."
                },
                { 
                  icon: <Rocket className="text-[#6BA94D]" size={28} />,
                  title: "Implementation Focus", 
                  description: "Strategy without execution is just theory. We stay with you through implementation, solving problems and adapting as needed to ensure results."
                },
                { 
                  icon: <Lightbulb className="text-[#6BA94D]" size={28} />,
                  title: "Capability Building", 
                  description: "We're not trying to create dependency. We transfer knowledge, build skills, and create systems so improvements continue after we leave."
                },
                { 
                  icon: <Heart className="text-[#6BA94D]" size={28} />,
                  title: "Pragmatic Over Perfect", 
                  description: "We focus on solutions that work in your reality—not textbook perfection. Good enough executed beats perfect left on the shelf."
                }
              ].map((difference, index) => (
                <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">{difference.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B6E4F] mb-2">{difference.title}</h3>
                    <p className="text-gray-600">{difference.description}</p>
                  </div>
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
            Ready to Start a Conversation?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Every engagement starts with understanding your business. Let's talk about your challenges and explore how we might help.
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

export default OurProcess;