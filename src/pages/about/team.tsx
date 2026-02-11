// src/pages/about/team.tsx
import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getImagePath } from "../../utils/paths";

interface Credential {
  label: string;
}

interface TeamMember {
  name: string;
  title: string;
  tagline: string;
  image: string;
  intro: string;
  story: string[];
  credentials: Credential[];
  brings: string[];
  accentColor: string;
}

const team: TeamMember[] = [
  {
    name: "Kevin Gilbert",
    title: "Co-Founder & Principal Consultant",
    tagline: "The 'why' guy",
    image: "kevin.png",
    intro:
      "Kevin brings a rare combination of trade craft, culinary training, hotel management, national industry leadership, and elected governance experience — all earned the hard way, by actually doing it.",
    story: [
      "Kevin's career began with a baker's apprenticeship in Christchurch — he'd wanted to leave school but was only allowed to do so if he had a job or an apprenticeship lined up. That pragmatic start set the tone for everything that followed: always curious, always learning, always asking 'why?'",
      "He went on his OE, ending up in Scotland, where exposure to European baking traditions opened his eyes to what bread could really be. Back in New Zealand, he retrained as a chef, working in respected kitchens including Thornley's and Te Papa's Icon restaurant. From there, he stepped into hotel management — front office and management roles in Wellington, Queenstown, and Auckland — building a deep understanding of hospitality operations from multiple vantage points.",
      "In 2006, Kevin and Esther bought Charlotte's French Bakery in Dunedin, the start of what would become Gilbert's Fine Food — a 20-year journey building a beloved Dunedin institution known for authentic sourdough, European-style pastries, and an uncompromising commitment to real ingredients and sustainable practices.",
      "Beyond the bakery, Kevin served as President of the Baking Industry Association of New Zealand (now Baking New Zealand) for five years — representing the industry at parliament, in the media, and at international conferences and competitions. He is among the first cohort to be awarded a Bachelor of Culinary Arts, and has lectured, mentored, and judged at industry events in New Zealand and overseas.",
      "In 2022, Kevin was elected to the Dunedin City Council, where he has served as Deputy Chair of the Strategy, Planning and Engagement Committee, as a Resource Management Commissioner, and as a member of multiple community boards. His decade-plus of mentoring businesses — cafés, retailers, charities, professional services, and beyond — led naturally to the founding of Elevate.",
    ],
    credentials: [
      { label: "Trade Qualified Baker" },
      { label: "Qualified Chef" },
      { label: "Bachelor of Culinary Arts (inaugural cohort)" },
      { label: "Former President, Baking New Zealand" },
      { label: "Dunedin City Councillor" },
      { label: "Deputy Chair, Strategy, Planning & Engagement Committee (DCC)" },
      { label: "Resource Management Commissioner" },
      { label: "20+ years in hospitality & food industry leadership" },
      { label: "International speaker, judge & industry educator" },
    ],
    brings: [
      "Operational know-how from the floor up — not just the boardroom down",
      "A systems-thinking, 'why before how' approach to strategy",
      "Deep experience in SME leadership, team building, and culture",
      "Industry advocacy, government engagement, and policy navigation",
      "Hands-on expertise in sustainable and ethical business practices",
    ],
    accentColor: "from-[#0B6E4F] to-[#6BA94D]",
  },
  {
    name: "Esther Gilbert",
    title: "Co-Founder & Principal Consultant",
    tagline: "The 'how' person",
    image: "esther.jpg",
    intro:
      "Esther is the operational engine behind every successful organisation she has touched — quietly but very necessarily making things work. A Swiss-born New Zealander with dual degrees, she brings financial rigour, administrative precision, and a grounded human intelligence to every engagement.",
    story: [
      "Esther was born in Switzerland and moved to New Zealand with her family in 1986. Her Swiss background — precise, practical, quality-obsessed — shaped her instincts in ways that still show up in her work every single day. She will tell you she still doesn't know what she wants to do when she grows up, but don't be fooled: she has been quietly excellent at a remarkable number of things.",
      "After high school and a Bachelor of Arts at the University of Otago, she spent the better part of a decade working in hospitality — hotel reception, conferencing, and management roles in Queenstown, Wellington, and Auckland. It was grounded, demanding work that gave her an intimate understanding of how service businesses actually function.",
      "Senior management roles followed, providing the foundation for what she does best: running the operational and administrative backbone of a complex business. When she and Kevin launched Gilbert's Fine Food in 2006, Esther took on virtually every function that kept the business alive — invoicing, payroll, budgets versus actuals, Food Safety Programmes, supplier management, HR, and everything else that falls under the catch-all of 'admin' but is, in reality, the difference between a business that survives and one that doesn't.",
      "Alongside the bakery, Esther completed a Bachelor of Applied Management at Otago Polytechnic, worked as an Executive Assistant at Polson Higgs (one of Otago's leading accountancy firms), and served as a Trust Advisor at the Otago Farmers Market. She has mentored small business owners across a wide range of industries and brings a calm, methodical intelligence to the often chaotic reality of business ownership.",
      "Where Kevin asks 'why?', Esther asks 'how?' — and then makes it happen. That complementary dynamic is at the heart of Elevate.",
    ],
    credentials: [
      { label: "Bachelor of Arts, University of Otago" },
      { label: "Bachelor of Applied Management, Otago Polytechnic" },
      { label: "20+ years in hospitality & business operations" },
      { label: "Former Executive Assistant, Polson Higgs" },
      { label: "Trust Advisor, Otago Farmers Market" },
      { label: "Business Mentor" },
      { label: "Financial management, payroll & compliance specialist" },
      { label: "Food Safety Programme management" },
      { label: "Team building & HR across SME environments" },
    ],
    brings: [
      "Financial literacy and operational rigour without the jargon",
      "An eye for the systems and processes that keep organisations honest",
      "Deep empathy for the realities of running a small or medium business",
      "Compliance and risk management grounded in real-world experience",
      "A calm, methodical approach to complexity and change",
    ],
    accentColor: "from-[#6BA94D] to-[#0B6E4F]",
  },
];

const TeamPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0B6E4F] to-[#6BA94D] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Leadership Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-4 leading-relaxed">
              Two people. Decades of experience. One complementary partnership.
            </p>
            <p className="text-lg text-gray-200 max-w-3xl leading-relaxed">
              Kevin and Esther Gilbert founded Elevate on a simple premise: that
              the best consulting comes from people who have actually run things
              — who know what a payroll crisis feels like at 11pm, what it means
              to lead a team through uncertainty, and what separates a strategy
              that works from one that just looks good on paper.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      {team.map((member, index) => (
        <div key={index}>
          <section
            className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">

                {/* Header — circular photo + name/title */}
                <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                  <div className="flex-shrink-0">
                    <img
                      src={getImagePath(member.image)}
                      alt={member.name}
                      className="w-48 h-48 rounded-full object-cover shadow-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {member.name}
                    </h2>
                    <p className="text-[#0B6E4F] font-semibold text-lg mt-1">
                      {member.title}
                    </p>
                    <p className="text-gray-500 italic mt-1">
                      "{member.tagline}"
                    </p>
                    <p className="text-gray-700 mt-4 text-lg leading-relaxed max-w-3xl">
                      {member.intro}
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Story — takes 2 cols */}
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-xl font-bold text-[#0B6E4F] mb-4">
                      Background
                    </h3>
                    {member.story.map((paragraph, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-100 rounded-lg shadow-md p-6">
                      <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">
                        Credentials
                      </h3>
                      <ul className="space-y-2">
                        {member.credentials.map((cred, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <CheckCircle
                              className="text-[#6BA94D] flex-shrink-0 mt-0.5"
                              size={15}
                            />
                            {cred.label}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`bg-gradient-to-br ${member.accentColor} rounded-lg p-6 text-white`}
                    >
                      <h3 className="text-base font-bold mb-4 uppercase tracking-wide">
                        What They Bring
                      </h3>
                      <ul className="space-y-3">
                        {member.brings.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <ArrowRight
                              className="flex-shrink-0 mt-0.5 opacity-80"
                              size={15}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {index < team.length - 1 && (
            <div className="h-1 bg-gradient-to-r from-[#0B6E4F] to-[#6BA94D]" />
          )}
        </div>
      ))}

      {/* Together section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Better Together
            </h2>
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              The Kevin-and-Esther dynamic is not an accident — it's the whole
              point. Kevin pushes into strategy, vision, culture, and the big
              'why'. Esther grounds everything in operational reality, financial
              discipline, and the 'how'. Together, they've built and run real
              businesses, led people through genuine difficulty, and mentored
              dozens of owners and operators across New Zealand and beyond.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When you work with Elevate, you're not getting advice from someone
              who has only ever consulted. You're getting guidance from people
              who have stood where you're standing — who have made payroll on a
              tight week, navigated a difficult restructure, earned the trust of
              a team, and built something worth being proud of.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0B6E4F] to-[#6BA94D] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            A conversation costs nothing. Let's find out if we're the right fit
            for what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
            <Link
              to="/about/our-story"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;