// src/pages/about/values.tsx
import React from "react";
import Layout from "../../components/Layout";
import { Heart, Shield, Users, Compass, Lightbulb, Handshake, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Value {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  inPractice: string[];
}

const Values: React.FC = () => {
  const values: Value[] = [
    {
      icon: <Heart className="text-[#6BA94D]" size={48} />,
      title: "Integrity",
      tagline: "Doing what's right, even when no-one's watching",
      description: "We operate with honesty, transparency, and consistency. Our advice is based on what serves you, not what maximises our fees. When we make mistakes, we own them. When we don't know something, we say so.",
      inPractice: [
        "We're honest when we think we can't help or when someone else would serve you better",
        "We tell you what you need to hear, not just what you want to hear",
        "We're transparent about our approach, pricing, and what to expect",
        "We keep confidences and respect the trust you place in us",
        "We do the work we commit to, to the standard we promise"
      ]
    },
    {
      icon: <Users className="text-[#6BA94D]" size={48} />,
      title: "Partnership",
      tagline: "Your success is our success",
      description: "We're not external experts with all the answers—we're partners working alongside you. The best solutions emerge from combining our expertise with your knowledge of your business, customers, and people.",
      inPractice: [
        "We listen more than we talk, especially at the beginning",
        "We involve your team in developing solutions, not just implementing ours",
        "We celebrate your wins as our wins",
        "We're honest about challenges and work through them together",
        "We make ourselves available when you need us, not just when it suits us"
      ]
    },
    {
      icon: <Compass className="text-[#6BA94D]" size={48} />,
      title: "Pragmatism",
      tagline: "What works matters more than what's perfect",
      description: "We're practical, not theoretical. We focus on solutions that work in your reality—with your resources, culture, and constraints. Good enough executed beats perfect left on the shelf.",
      inPractice: [
        "We design approaches that fit your situation, not force-fit frameworks",
        "We prioritise quick wins alongside longer-term improvements",
        "We adapt when something isn't working rather than persisting rigidly",
        "We focus on outcomes and results, not methodology compliance",
        "We keep things as simple as possible whilst achieving objectives"
      ]
    },
    {
      icon: <Lightbulb className="text-[#6BA94D]" size={48} />,
      title: "Curiosity",
      tagline: "Always learning, always improving",
      description: "We stay curious about your business, your industry, and better ways of working. We learn from every engagement, read widely, and question our own assumptions. The day we think we know it all is the day we should stop consulting.",
      inPractice: [
        "We ask questions to understand before jumping to solutions",
        "We stay current with new thinking and proven innovations",
        "We learn from what works and doesn't work in practice",
        "We're open to being wrong and changing our minds",
        "We bring fresh perspectives from diverse industries and situations"
      ]
    },
    {
      icon: <Shield className="text-[#6BA94D]" size={48} />,
      title: "Respect",
      tagline: "For people, for businesses, for what you've built",
      description: "We respect what you've achieved, the challenges you face, and the people in your organisation. We bring humility—recognising that you know your business, customers, and context better than we ever will.",
      inPractice: [
        "We honour your business's history and what makes it special",
        "We treat everyone with dignity, regardless of position",
        "We respect your time and don't waste it with unnecessary meetings",
        "We acknowledge the difficulty of the challenges you're navigating",
        "We build on your strengths rather than only focusing on problems"
      ]
    },
    {
      icon: <Handshake className="text-[#6BA94D]" size={48} />,
      title: "Generosity",
      tagline: "Giving more than we take",
      description: "We're generous with our knowledge, time, and support. We share insights freely, connect people who can help each other, and measure success by the value we create for you, not just the fees we earn.",
      inPractice: [
        "We share knowledge and tools that help you continue independently",
        "We answer questions and provide guidance between formal sessions",
        "We connect you with others who might help, even when there's nothing in it for us",
        "We celebrate when you solve problems without needing us",
        "We're open with our thinking and don't hoard knowledge to create dependency"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B6E4F] to-[#6BA94D] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Values
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              The principles that guide how we work, make decisions, and show up for the people and organisations we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Values aren't what you say—they're what you do when choices get difficult. They're the commitments that guide how we work, particularly when no-one's watching or when doing the right thing is inconvenient.
              </p>
              <p className="text-lg mb-6">
                These aren't aspirational statements we'd like to live up to. They're non-negotiable commitments about how we operate. When we fail to uphold them, we've failed regardless of the work's quality or the outcome achieved.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg italic text-[#0B6E4F] mb-0">
                  "If you've appreciated the clarity of Gilbert's branding, the tone of our writing, or the way we build ideas from the ground up, that same approach—grounded in these values—now lives at Elevate."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Icon and Title Column */}
                    <div className="md:w-1/3">
                      <div className="bg-gray-50 w-20 h-20 rounded-lg flex items-center justify-center mb-6">
                        {value.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-[#0B6E4F] mb-3">{value.title}</h2>
                      <p className="text-lg italic text-gray-600 mb-6">{value.tagline}</p>
                    </div>

                    {/* Content Column */}
                    <div className="md:w-2/3">
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {value.description}
                      </p>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <CheckCircle className="text-[#6BA94D]" size={20} />
                          What this means in practice:
                        </h3>
                        <ul className="space-y-3">
                          {value.inPractice.map((practice, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-0.5" size={18} />
                              <span className="text-gray-700">{practice}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              How We Live These Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-4">When We Succeed</h3>
                <p className="text-gray-700 mb-4">
                  We succeed when we help you achieve meaningful results whilst building your capability and maintaining relationships built on trust and respect.
                </p>
                <p className="text-gray-700">
                  Success isn't just delivering good work—it's doing it in ways that honour these values and leave you better equipped for the future.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-4">When We Fall Short</h3>
                <p className="text-gray-700 mb-4">
                  We're human and imperfect. We'll sometimes fall short of these commitments. When we do, we own it, apologise genuinely, and make it right.
                </p>
                <p className="text-gray-700">
                  If we're not living up to these values in our work with you, we want to know. Please tell us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values in Action Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Values Drive Decisions
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              These values guide the everyday choices that shape how we work with clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about/team"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Meet Our Team
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Values;