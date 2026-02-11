// src/pages/about/our-story.tsx
import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const OurStory: React.FC = () => {
  const milestones = [
    {
      year: "2000",
      title: "The Beginning",
      description: "Kevin and Esther Gilbert meet through their management roles in an international hotel chain. They quickly discover a shared interest in organisational development, a strategic approach to leadership, and a passion for helping people reach their potential and as a result, help organisations succeed. This interest would soon evolve into a passion."
    },
    {
      year: "2006",
      title: "The First Business",
      description: "Deciding to put their belief into action, they purchased their own business - a bakery. Over the next few years, they experienced firsthand the challenges and opportunities of running a business, and the critical role that strong leadership and clear strategy play in success. They also developed a deep understanding of the unique context of New Zealand businesses — the scale, the culture, and the opportunities."
    },
    {
      year: "2011",
      title: "Advisory Support",
      description: "Having survived the Global Financial Crisis, they engaged with a business advisor to help them with their next phase. This experience was transformative — they saw the power of practical, hands-on advice and support, and the difference it made in their business."
    },
    {
      year: "2012",
      title: "Growing the Business",
      description: "With regular and ongoing support from their advisor, they extended their vision for the business, developed a vision and strategy, gathered a larger team, and moved into a new, and much larger, location."
    },
    {
      year: "2016",
      title: "Mentoring Others",
      description: "Now, with a decade of business ownership behind them, they felt comfortable enough to agree to take on a few advisory clients. They quickly realised that the same practical, hands-on approach that had transformed their business could do the same for other organisations. "
    },
    {
      year: "2022",
      title: "Formalising Our Commitment",
      description: "Having survived the impacts of natural disasters, a global pandemic, lockdowns, recessions, and spiralling costs on top of the usual challenges of running a business, they decided to make a more formal commitment to advisory work. They started actively seeking out organisations to work alongside, and the spark for Elevate Management Solutions was born."
    },
    {
      year: "2025",
      title: "Looking Ahead",
      description: "Today, Elevate offers a range of advisory services to organisations across New Zealand and around the world. From small owner-operated businesses to large enterprises, from hospitality and retail to professional services and not-for-profits. We are proud of the impact we've had so far, and we're excited about the future — the organisations we'll work with, the challenges we'll tackle, and the impact we'll create together."
    }
  ];

  const values = [
    "We lead with purpose and integrity in everything we do",
    "We build genuine, long-term partnerships with our clients",
    "We transfer capability — not create dependency",
    "We combine evidence-based practice with real-world experience",
    "We are committed to lasting, measurable impact"
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
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Built on a belief that great organisations are made by great people — and that every organisation has the potential to be extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Where It All Started
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                Elevate Management Solutions was born out of a simple but powerful observation: too many talented organisations were falling short of their potential — not because of lack of ambition, but because of gaps in leadership, strategy, and operational execution.
              </p>
              <p className="leading-relaxed">
                Kevin and Esther Gilbert had spent years working inside organisations, experiencing firsthand the difference that strong leadership and clear strategy could make. They saw teams transform when given the right tools, frameworks, and support. And they saw what happened when those things were missing.
              </p>
              <p className="leading-relaxed">
                In [year], they made a decision: to bring that same transformative experience to organisations across New Zealand. Not as outside advisors delivering reports from a distance, but as genuine partners — working alongside leadership teams, rolling up their sleeves, and staying committed until real, lasting change was embedded.
              </p>
              <p className="text-lg italic text-[#0B6E4F] border-l-4 border-[#6BA94D] pl-6">
                "We started Elevate because we believed there was a better way to consult — more practical, more human, and more focused on leaving lasting capability behind."
                <span className="block mt-2 text-base not-italic font-semibold text-gray-700">— Kevin & Esther Gilbert, Founders</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Journey
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6BA94D] to-[#0B6E4F] hidden md:block" />

              <div className="space-y-10">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6 group">
                    {/* Year bubble */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#6BA94D] to-[#0B6E4F] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform z-10 relative">
                        {milestone.year}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-md group-hover:shadow-xl transition-shadow pb-8">
                      <h3 className="text-xl font-bold text-[#0B6E4F] mb-2">{milestone.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 text-center mb-10">
              Our story is shaped by the principles we've held since day one.
            </p>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg border-l-4 border-[#6BA94D]">
                  <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-0.5" size={22} />
                  <p className="text-gray-800 text-lg">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Zealand & International */}
<section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Proudly New Zealand. Ready for the World.
      </h2>
      <p className="text-xl text-gray-200 mb-6 leading-relaxed text-center">
        We understand the unique context of New Zealand organisations — the scale, the culture, the opportunities, and the challenges. Our work is grounded in local experience and a genuine commitment to the success of New Zealand businesses and communities.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed text-center mb-12">
        From small owner-operated businesses to large enterprises, from hospitality and retail to professional services and not-for-profits, we've had the privilege of working alongside a diverse range of organisations across Aotearoa.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <div className="text-[#6BA94D] mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">International Reach</h3>
          <p className="text-gray-300 leading-relaxed">
            While New Zealand is home, our work doesn't stop at the border. We work with organisations operating internationally and are experienced in navigating the complexities of cross-cultural leadership, multi-market operations, and global team dynamics.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <div className="text-[#6BA94D] mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/>
              <path d="M16.5 9.4 7.55 4.24"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/>
              <circle cx="18.5" cy="15.5" r="2.5"/><path d="M20.27 17.27 22 19"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Supporting New Zealand Exporters</h3>
          <p className="text-gray-300 leading-relaxed">
            Exporting is one of the most demanding and rewarding growth strategies available to New Zealand businesses. We work with established exporters and those building their export capability for the first time — helping develop the leadership, strategy, and operational foundations needed to succeed in international markets.
          </p>
        </div>
      </div>

      <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-3">Export-Ready Organisations</h3>
        <p className="text-gray-300 leading-relaxed">
          Breaking into international markets requires more than a great product. It demands clear strategic positioning, scalable operations, culturally-aware leadership, and the organisational resilience to manage the inevitable complexity of operating across borders. Whether you're exploring your first export market or scaling an existing international presence, we help you build an organisation that's genuinely ready for the challenge.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0B6E4F] to-[#6BA94D] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become Part of Our Story
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Every organisation we work with adds a new chapter. We'd love to hear about yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
            <Link
              to="/about/team"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurStory;
