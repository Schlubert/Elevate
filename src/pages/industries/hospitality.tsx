// src/pages/industries/hospitality.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Coffee, Users, Star, TrendingUp, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Award, Briefcase } from "lucide-react";
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

const Hospitality: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const challenges: Challenge[] = [
    {
      title: "Staffing Challenges",
      description: "Finding, training, and retaining quality staff in a high-turnover industry with thin margins"
    },
    {
      title: "Inconsistent Guest Experience",
      description: "Maintaining service standards across shifts, locations, and varying staff capability"
    },
    {
      title: "Operational Complexity",
      description: "Managing multiple revenue streams, peak demand fluctuations, and complex operations"
    },
    {
      title: "Sustainability integration",
      description: "Incorporating eco-friendly practices without compromising guest experience or profitability"
    }
  ];

  const solutions: Solution[] = [
    {
      icon: <Star className="text-[#6BA94D]" size={32} />,
      title: "Service Excellence",
      description: "Systems and training that deliver consistently exceptional guest experiences"
    },
    {
      icon: <Users className="text-[#6BA94D]" size={32} />,
      title: "Team Development",
      description: "Build engaged, capable teams that deliver hospitality from the heart"
    },
    {
      icon: <TrendingUp className="text-[#6BA94D]" size={32} />,
      title: "Revenue Optimization",
      description: "Maximize revenue per guest through pricing, upselling, and experience design"
    },
    {
      icon: <Award className="text-[#6BA94D]" size={32} />,
      title: "Operational Excellence",
      description: "Streamline operations to reduce costs while improving quality and guest satisfaction"
    }
  ];

  const faqs = [
    {
      question: "How can we reduce staff turnover in hospitality?",
      answer: "Turnover is reduced through better hiring (finding people who love hospitality), comprehensive onboarding, clear career paths, recognition programs, and creating a culture where staff feel valued. We help you build systems that make your business an employer of choice in your market."
    },
    {
      question: "How do we maintain service standards across multiple locations?",
      answer: "Through documented service standards, comprehensive training programs, regular quality audits, sharing best practices, and empowering local teams within clear guardrails. We help you balance consistency with local flexibility."
    },
    {
      question: "Should we invest in technology or people?",
      answer: "Both, strategically. Technology should free your people to focus on what humans do best—creating genuine connections with guests. We help you identify where technology adds value and where personal touch is irreplaceable."
    },
    {
      question: "How can small operators compete with large chains?",
      answer: "Through differentiation—authentic experiences, personal service, local connections, and flexibility that chains can't match. We help independent operators leverage their advantages while building operational rigor."
    },
    {
      question: "What's the ROI timeline for hospitality improvements?",
      answer: "Many improvements—better staff training, service recovery, upselling—deliver immediate returns. Strategic changes like repositioning or renovation take longer but build lasting value. We help you balance quick wins with long-term transformation."
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
              Hospitality & Tourism
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Transform your hospitality business with insights from leaders who've spent their careers creating exceptional guest experiences.
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
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-[#6BA94D]" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Deep Hospitality Expertise
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Kevin and Esther Gilbert bring decades of senior leadership experience across hotels, restaurants, tourism operations, and hospitality services. They've lived the challenges you face—from front-line service delivery to executive strategy.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">Kevin's Experience</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                      <span>Senior leadership roles across multiple hospitality brands</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                      <span>Expertise in operations, revenue management, and guest experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                      <span>Track record of turning around underperforming properties</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">Esther's Experience</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                      <span>Extensive background in hotel and tourism management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                      <span>Specialist in people development and organizational culture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                      <span>Proven success in building high-performing hospitality teams</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-lg italic text-[#0B6E4F]">
                We understand hospitality from the inside—the operational realities, the people challenges, and what it takes to deliver exceptional experiences profitably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Hospitality Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help hospitality businesses navigate the unique pressures of this demanding industry.
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
              Practical solutions that address the real challenges of hospitality operations.
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
              Hospitality-Specific Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: "Service Standards & Training", 
                  description: "Develop and implement service standards that create consistently exceptional guest experiences, with training programs that embed standards into daily operations"
                },
                { 
                  title: "Revenue Management", 
                  description: "Optimize pricing, distribution, and yield management to maximize revenue per available room or seat while maintaining occupancy"
                },
                { 
                  title: "Guest Experience Design", 
                  description: "Map and enhance every touchpoint of the guest journey, from booking through post-stay, creating memorable moments that drive loyalty"
                },
                { 
                  title: "Food & Beverage Optimization", 
                  description: "Improve F&B operations through menu engineering, kitchen efficiency, cost control, and creating compelling dining experiences"
                },
                { 
                  title: "Multi-Site Operations", 
                  description: "Implement systems and structures that maintain quality and consistency across multiple properties or locations"
                },
                { 
                  title: "Sustainability Strategies", 
                  description: "Integrate eco-friendly practices into operations that reduce costs and appeal to environmentally conscious guests"
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
              Typical Outcomes in Hospitality
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Notable improvement in guest satisfaction scores",
                "Reduction in staff turnover",
                "Increase in revenue per available room/seat",
                "Reduced labour costs through improved productivity",
                "Improved food cost percentages and kitchen efficiency",
                "Stronger team culture and employee engagement"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 mt-8 italic">
              Results vary based on starting point and engagement scope. We tailor our approach to your unique hospitality business needs.
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
              Our hospitality expertise spans accommodation, food & beverage, tourism attractions, and hospitality services.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Accommodation</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Hotels & Resorts</li>
                  <li>• Motels & Motor Lodges</li>
                  <li>• Boutique Properties</li>
                  <li>• Holiday Parks</li>
                  <li>• Backpackers & Hostels</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Food & Beverage</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Restaurants & Cafes</li>
                  <li>• Bars & Pubs</li>
                  <li>• Catering Services</li>
                  <li>• Event Venues</li>
                  
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#0B6E4F] mb-3">Tourism & Attractions</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Tour Operators</li>
                  <li>• Attractions & Experiences</li>
                  <li>• Activity Providers</li>
                  <li>• Transport Services</li>
                  <li>• Visitor Information</li>
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
            Ready to Elevate Your Hospitality Business?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your challenges and how our hospitality expertise can help you create exceptional experiences and stronger results.
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

export default Hospitality;