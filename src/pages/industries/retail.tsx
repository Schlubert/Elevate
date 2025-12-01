// src/pages/industries/retail.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { ShoppingBag, Users, TrendingUp, Smartphone, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Store, Target } from "lucide-react";
import { Link } from "react-router-dom";

interface Challenge {
  title: string;
  description: string;
}

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Retail: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const challenges: Challenge[] = [
    {
      title: "Omnichannel Complexity",
      description: "Integrating online and physical retail seamlessly while maintaining profitability across channels"
    },
    {
      title: "Changing Consumer Expectations",
      description: "Meeting demands for convenience, personalization, and experience in increasingly competitive markets"
    },
    {
      title: "Margin Pressure",
      description: "Maintaining profitability amid pricing pressure, rising costs, and expensive customer acquisition"
    },
    {
      title: "Staff Capability",
      description: "Finding and developing retail staff who can deliver consultative service beyond transactions"
    }
  ];

  const solutions: Solution[] = [
    {
      icon: <Store className="text-[#6BA94D]" size={32} />,
      title: "Customer Experience",
      description: "Create compelling in-store and online experiences that differentiate and drive loyalty"
    },
    {
      icon: <Target className="text-[#6BA94D]" size={32} />,
      title: "Operational Efficiency",
      description: "Optimize inventory, staffing, and processes to improve margins without sacrificing service"
    },
    {
      icon: <Users className="text-[#6BA94D]" size={32} />,
      title: "Team Development",
      description: "Build retail teams with product knowledge and service skills that drive conversion"
    },
    {
      icon: <Smartphone className="text-[#6BA94D]" size={32} />,
      title: "Digital Integration",
      description: "Leverage technology to enhance customer experience and operational effectiveness"
    }
  ];

  const faqs = [
    {
      question: "How do physical retailers compete with online giants?",
      answer: "Through experience, expertise, and immediacy that online can't match. Successful physical retailers create destinations—places customers want to visit for the experience, not just the transaction. We help you identify and amplify your unique advantages while integrating digital capabilities."
    },
    {
      question: "Should we invest in e-commerce or improve our stores?",
      answer: "Most successful retailers need both, but the priority depends on your customer base and competitive position. We help you make strategic choices about where to invest based on customer behavior, competition, and your capabilities. Often, improving in-store experience drives online traffic too."
    },
    {
      question: "How can we improve conversion rates?",
      answer: "Through better customer service, product knowledge, store layout, merchandising, and removing friction from the purchase process. Small improvements in conversion can dramatically impact profitability. We identify quick wins and longer-term enhancements."
    },
    {
      question: "What's the key to omnichannel success?",
      answer: "Seamless customer experience across all touchpoints—online, in-store, mobile, social. Customers don't think in channels; they want convenience and consistency. We help you integrate systems, inventory, and processes while training staff to support customers regardless of how they shop."
    },
    {
      question: "How do we build customer loyalty in retail?",
      answer: "Through consistent excellent experiences, genuine relationships, personalized service, and rewards that matter. Loyalty isn't bought with points—it's earned through making customers' lives better. We help you design loyalty strategies that create real emotional connection."
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
              Industries We Serve
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Retail & Consumer Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Build retail and service businesses that create compelling customer experiences and sustainable competitive advantage.
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

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Retail & Consumer Services
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Drawing on extensive customer service and operational experience from hospitality and their own retail stores, Kevin and Esther bring deep understanding of what it takes to create exceptional consumer experiences across retail and service environments.
              </p>
              <p className="mb-4">
                The principles of great hospitality and service — anticipating needs, personalizing service, creating genuine connection, and operational excellence — translate powerfully to retail and consumer services. We help you apply these principles to build businesses customers love.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">Cross-Industry Expertise</h3>
                <p className="text-gray-700 mb-3">
                  We don't just talk it, we've lived it. While our hospitality background is extensive, we've successfully applied customer experience principles across  retail and service sectors:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>Customer journey mapping and experience design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>Service standards development and training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>Operational efficiency and cost optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                    <span>Team development and performance management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Retail & Consumer Services Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate the unique pressures facing modern retail and consumer service businesses.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#6BA94D]">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-2">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical solutions that address the evolving retail and service landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Retail & Service-Specific Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: "Customer Experience Strategy", 
                  description: "Design and implement compelling customer experiences across all touchpoints that drive loyalty and differentiation"
                },
                { 
                  title: "Store Operations Optimization", 
                  description: "Streamline processes, optimize layouts, improve inventory management, and enhance productivity"
                },
                { 
                  title: "Sales Team Development", 
                  description: "Build consultative selling skills, product knowledge, and service mindset in your retail teams"
                },
                { 
                  title: "Omnichannel Integration", 
                  description: "Create seamless experiences across physical, digital, and social channels with integrated systems"
                },
                { 
                  title: "Visual Merchandising & Layout", 
                  description: "Optimize store design, product placement, and merchandising to maximize conversion and average transaction"
                },
                { 
                  title: "Performance Management", 
                  description: "Implement KPIs and management systems that drive accountability for sales, service, and operational metrics"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Typical Outcomes in Retail & Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Improvement in conversion rates",
                "Increase in average transaction value",
                "Improvement in customer satisfaction scores",
                "Reduction in staff turnover",
                "Improved inventory turns and reduced markdowns",
                "Higher customer lifetime value and repeat purchase rates",
                "Better staff productivity",
                "Stronger competitive positioning and brand loyalty"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 mt-8 italic">
              Results vary based on starting point and engagement scope. We tailor solutions to your unique needs.
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

      {/* Who We Work With Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Work With
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We support diverse retail and consumer service businesses committed to exceptional customer experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Retail</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Specialty Retail</li>
                  <li>• Fashion & Apparel</li>
                  <li>• Home & Lifestyle</li>
                  <li>• Sporting Goods</li>
                  <li>• Electronics & Technology</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Consumer Services</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Personal Services</li>
                  <li>• Beauty & Wellness</li>
                  <li>• Fitness & Recreation</li>
                  <li>• Automotive Services</li>
                  <li>• Home Services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Food & Beverage Retail</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Specialty Food Stores</li>
                  <li>• Cafes & Coffee Shops</li>
                  <li>• Bakeries & Patisseries</li>
                  <li>• Wine & Spirits</li>
                  <li>• Quick Service Restaurants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0B6E4F] to-[#6BA94D] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Retail or Service Business?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you create exceptional customer experiences and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2">
              Schedule a Consultation <ArrowRight size={20} />
            </Link>
            <Link to="/industries" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center">
              View All Industries
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Retail;