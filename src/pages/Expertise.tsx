// src/pages/Expertise.tsx
import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Target, 
  Settings, 
  Users, 
  GitBranch, 
  TrendingUp, 
  Smile,
  Leaf
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  tagline: string;
  color: string;
}

const Expertise: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Target size={40} />,
      title: "Strategic Planning",
      tagline: "Vision to execution",
      description: "Transform your vision into actionable strategies. We help you set clear direction, prioritize effectively, and align your entire organization behind a compelling future.",
      href: "/expertise/strategic-planning",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Settings size={40} />,
      title: "Operational Excellence",
      tagline: "Optimize & scale",
      description: "Streamline operations and build systems that scale. We identify inefficiencies, redesign processes, and create operational frameworks that drive sustainable growth.",
      href: "/expertise/operational-excellence",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users size={40} />,
      title: "Leadership Development",
      tagline: "Build great leaders",
      description: "Develop leaders who inspire and deliver results. Our programs build the capabilities, confidence, and presence needed to lead effectively at every level.",
      href: "/expertise/leadership-development",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <GitBranch size={40} />,
      title: "Change Management",
      tagline: "Navigate transformation",
      description: "Successfully navigate organizational transformation. We address both technical and human dimensions to ensure changes stick and deliver intended outcomes.",
      href: "/expertise/change-management",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Performance Management",
      tagline: "Drive accountability",
      description: "Build a culture of high performance and accountability. We design systems that set clear expectations, provide meaningful feedback, and recognize excellence.",
      href: "/expertise/performance-management",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Smile size={40} />,
      title: "Customer Experience",
      tagline: "Service excellence",
      description: "Deliver exceptional experiences that build loyalty. We map journeys, identify pain points, and design service interactions that delight your customers.",
      href: "/expertise/customer-experience",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Leaf size={40} />,
      title: "Sustainable Practices",
      tagline: "Responsible growth",
      description: "Embed sustainability into your business model. We help you balance profitability with environmental and social responsibility for long-term success.",
      href: "/expertise/sustainable-practices",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B6E4F] to-[#6BA94D] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Expertise
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              We partner with organizations to build the leadership capabilities, operational systems, and strategic clarity needed for sustainable success.
            </p>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Whether you're navigating change, developing leaders, optimizing operations, or planning for the future, we bring deep expertise and practical frameworks to help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              How We Help Organizations Thrive
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6 text-center">
                Every organization faces unique challenges, but the fundamentals of success remain consistent: clear strategy, effective leadership, efficient operations, and engaged people.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0B6E4F] to-[#6BA94D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">01</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Practical Frameworks</h3>
                  <p className="text-gray-600">Proven methodologies adapted to your context, not generic templates</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0B6E4F] to-[#6BA94D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">02</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hands-On Partnership</h3>
                  <p className="text-gray-600">We work alongside you, building capability as we deliver results</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0B6E4F] to-[#6BA94D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">03</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainable Impact</h3>
                  <p className="text-gray-600">Solutions that endure beyond our engagement, embedded in your organization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our full range of consulting services designed to address your most pressing business challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90 font-semibold">{service.tagline}</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-700 mb-4 flex-1">{service.description}</p>
                  <div className="flex items-center text-[#0B6E4F] font-semibold group-hover:gap-3 transition-all">
                    Learn More 
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-[#6BA94D] bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">Real-World Experience</h3>
                <p className="text-gray-700">
                  We've been in your shoes. Our consultants have held senior operational and leadership roles, bringing practical insights earned through firsthand experience, not just theory.
                </p>
              </div>
              <div className="border-l-4 border-[#6BA94D] bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">Tailored Solutions</h3>
                <p className="text-gray-700">
                  No cookie-cutter approaches. We invest time to understand your unique context, challenges, and culture, then design solutions that fit your specific situation.
                </p>
              </div>
              <div className="border-l-4 border-[#6BA94D] bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">Capability Building</h3>
                <p className="text-gray-700">
                  We don't create dependency. Our approach transfers knowledge and skills to your team, ensuring you can sustain and build on the progress we make together.
                </p>
              </div>
              <div className="border-l-4 border-[#6BA94D] bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">Results-Focused</h3>
                <p className="text-gray-700">
                  We're committed to delivering tangible outcomes. Our engagements include clear success metrics and accountability for achieving the results that matter to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Integrated Approach
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              While we offer distinct service areas, we recognize that organizational challenges rarely fit into neat categories. Many engagements benefit from combining multiple areas of expertise.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-left">
              <p className="text-lg text-gray-200 mb-4">
                <strong className="text-white">For example:</strong> A strategic planning engagement might uncover the need for leadership development to execute the strategy effectively. An operational excellence initiative may require change management to ensure adoption. A customer experience transformation often needs process redesign and performance management systems.
              </p>
              <p className="text-lg text-gray-200">
                We work flexibly, bringing in the right expertise at the right time to address your evolving needs throughout our partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0B6E4F] to-[#6BA94D] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your challenges and explore how we can help your organization thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              Start a Conversation <ArrowRight size={20} />
            </Link>
            <Link 
              to="/approach/our-process" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center"
            >
              Our Process
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Expertise;