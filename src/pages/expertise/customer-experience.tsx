// src/pages/expertise/customer-experience.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Heart, Users, Star, Repeat, CheckCircle, ArrowRight, ChevronDown, ChevronUp, ThumbsUp, TrendingUp } from "lucide-react";
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

const CustomerExperience: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Customer Journey Mapping",
      description: "We map the complete customer journey, identifying moments of truth, pain points, and opportunities to create exceptional experiences.",
      deliverables: ["Customer journey maps", "Touchpoint analysis", "Pain point identification", "Moment of truth mapping"]
    },
    {
      number: "02",
      title: "Experience Design",
      description: "We design improved experiences that delight customers, differentiate your offering, and build loyalty—balancing aspiration with operational reality.",
      deliverables: ["Experience blueprints", "Service standards", "Process redesign", "Technology enablement plan"]
    },
    {
      number: "03",
      title: "Implementation & Training",
      description: "We support implementation of new experiences, training frontline staff, and ensuring leaders model and reinforce service excellence.",
      deliverables: ["Staff training programs", "Service recovery protocols", "Quality assurance systems", "Implementation support"]
    },
    {
      number: "04",
      title: "Measure & Improve",
      description: "We establish systems to measure customer satisfaction, gather feedback, and continuously improve experiences based on customer insights.",
      deliverables: ["Customer feedback systems", "NPS and satisfaction tracking", "Service quality metrics", "Continuous improvement process"]
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: <Heart className="text-[#6BA94D]" size={32} />,
      title: "Customer Loyalty",
      description: "Create experiences that turn customers into advocates who return and refer others."
    },
    {
      icon: <TrendingUp className="text-[#6BA94D]" size={32} />,
      title: "Revenue Growth",
      description: "Exceptional experiences drive higher spend, repeat business, and premium pricing power."
    },
    {
      icon: <Star className="text-[#6BA94D]" size={32} />,
      title: "Differentiation",
      description: "Stand out in crowded markets where products are similar but experiences can be exceptional."
    },
    {
      icon: <Repeat className="text-[#6BA94D]" size={32} />,
      title: "Retention",
      description: "Keep customers longer, reduce churn, and build predictable recurring revenue."
    }
  ];

  const faqs = [
    {
      question: "What's the difference between customer service and customer experience?",
      answer: "Customer service is one touchpoint—typically when something goes wrong. Customer experience is the entire journey with your organization, from first awareness through purchase, use, and advocacy. Great service is important, but experience encompasses everything."
    },
    {
      question: "How do you measure customer experience?",
      answer: "We use multiple measures: Net Promoter Score (NPS) for loyalty, Customer Satisfaction (CSAT) for specific interactions, Customer Effort Score (CES) for ease, along with qualitative feedback, complaint rates, and behavioral metrics like retention and lifetime value."
    },
    {
      question: "Does improving customer experience require significant investment?",
      answer: "Not necessarily. Many impactful improvements come from fixing broken processes, training staff, and removing friction—not expensive technology. We prioritize high-impact, low-cost improvements first, then help you build the business case for larger investments."
    },
    {
      question: "How do you balance customer experience with operational efficiency?",
      answer: "The best experiences are often efficient experiences—easy, fast, and frictionless. We find the sweet spot where efficiency and experience reinforce each other. Drawing on hospitality expertise, we know how to deliver exceptional experiences sustainably."
    },
    {
      question: "Can B2B companies benefit from customer experience work?",
      answer: "Absolutely. B2B customers have the same expectations for easy, responsive, personalized experiences as consumers. Many B2B companies gain significant competitive advantage through superior customer experience in markets where products are similar."
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
              Customer Experience Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Create exceptional customer experiences that drive loyalty, differentiation, and sustainable competitive advantage.
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
              Why Customer Experience Matters More Than Ever
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                In markets where products and prices are similar, customer experience is often the primary differentiator. Customers will pay more, stay longer, and refer others to organizations that make their lives easier and better.
              </p>
              <p className="mb-4">
                Common customer experience challenges include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Inconsistent experiences:</strong> Quality varies across touchpoints, channels, and individual staff members</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Internal focus:</strong> Processes designed for organizational convenience rather than customer ease</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Broken journeys:</strong> Friction, handoffs, and pain points that frustrate customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                  <span><strong>Lack of empowerment:</strong> Frontline staff unable to solve problems or personalize experiences</span>
                </li>
              </ul>
              <p className="text-lg italic text-[#0B6E4F]">
                Drawing on deep hospitality experience, we help organizations across sectors create exceptional customer experiences.
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
              The Business Impact of Great Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customer experience isn't just about satisfaction—it directly drives business results.
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

      {/* Hospitality Principles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Hospitality Principles for Any Industry
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Our founders' extensive hospitality experience informs our approach to customer experience across all sectors.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Anticipate Needs", description: "Great service anticipates what customers need before they ask, creating moments of delight" },
                { title: "Empower the Frontline", description: "Give staff the authority and skills to solve problems and personalize experiences" },
                { title: "Recover with Grace", description: "When things go wrong (and they will), how you recover can strengthen relationships" },
                { title: "Create Emotional Connection", description: "Move beyond transactions to create genuine human connections and memorable moments" },
                { title: "Attention to Detail", description: "Excellence lives in the small things—the details customers notice and remember" },
                { title: "Consistent Excellence", description: "Every touchpoint, every time—reliability builds trust and loyalty" }
              ].map((principle, index) => (
                <div key={index} className="border-l-4 border-[#6BA94D] bg-gray-50 p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-2">{principle.title}</h3>
                  <p className="text-gray-700">{principle.description}</p>
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
              Our Customer Experience Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic methodology to understand, design, and deliver experiences that customers love.
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
              What Great Customer Experience Delivers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Higher customer satisfaction and NPS scores",
                "Increased customer lifetime value",
                "Reduced churn and attrition",
                "More referrals and word-of-mouth growth",
                "Premium pricing power",
                "Competitive differentiation",
                "Engaged, empowered frontline staff",
                "Sustainable processes that scale"
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
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you create experiences that customers love and that drive business results.
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

export default CustomerExperience;