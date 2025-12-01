// src/pages/approach/tools-techniques.tsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Wrench, TrendingUp, Users, Target, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Lightbulb, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  whenToUse: string;
  examples: string[];
}

interface ToolCategory {
  category: string;
  description: string;
  tools: string[];
}

const ToolsTechniques: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const coreTools: Tool[] = [
    {
      icon: <Target className="text-[#6BA94D]" size={32} />,
      title: "Strategic Planning Tools",
      description: "Frameworks and techniques for developing clear strategy and aligning organisations around shared direction.",
      whenToUse: "When you need clarity on where you're going, how to get there, or how to align your organisation around strategic priorities.",
      examples: [
        "SWOT and PESTLE analysis for environmental scanning",
        "Strategy canvas and value proposition design",
        "Balanced Scorecard for strategy execution",
        "OKRs (Objectives and Key Results) for goal cascading",
        "Scenario planning for uncertain futures"
      ]
    },
    {
      icon: <BarChart3 className="text-[#6BA94D]" size={32} />,
      title: "Process Analysis & Improvement",
      description: "Tools for mapping, analysing, and optimising how work gets done—eliminating waste and improving flow.",
      whenToUse: "When processes are inefficient, bottlenecked, inconsistent, or when you're trying to understand how work actually happens versus how you think it happens.",
      examples: [
        "Process mapping and value stream mapping",
        "Root cause analysis (5 Whys, Fishbone diagrams)",
        "Time and motion studies",
        "Bottleneck identification and analysis",
        "Standard work documentation"
      ]
    },
    {
      icon: <Users className="text-[#6BA94D]" size={32} />,
      title: "Stakeholder & Change Tools",
      description: "Techniques for understanding stakeholders, managing change, and bringing people along through transitions.",
      whenToUse: "When implementing change, managing diverse stakeholder groups, or when success depends on people adopting new ways of working.",
      examples: [
        "Stakeholder mapping and analysis",
        "Change impact assessments",
        "Communication planning frameworks",
        "Resistance management approaches",
        "Change readiness assessments"
      ]
    },
    {
      icon: <Lightbulb className="text-[#6BA94D]" size={32} />,
      title: "Problem-Solving Frameworks",
      description: "Structured approaches to identifying root causes, generating solutions, and making decisions systematically.",
      whenToUse: "When facing complex problems, needing to make important decisions, or when you want systematic rather than intuitive problem-solving.",
      examples: [
        "A3 problem-solving methodology",
        "Decision matrices and criteria weighting",
        "Pareto analysis (80/20 rule)",
        "Force field analysis",
        "Design thinking and ideation techniques"
      ]
    }
  ];

  const toolCategories: ToolCategory[] = [
    {
      category: "Customer & Market Understanding",
      description: "Tools for understanding customers, markets, and competitive dynamics",
      tools: [
        "Customer journey mapping",
        "Voice of customer research",
        "Competitive analysis frameworks",
        "Market segmentation",
        "Net Promoter Score (NPS) and satisfaction measurement"
      ]
    },
    {
      category: "Performance Measurement",
      description: "Techniques for establishing metrics, tracking progress, and driving accountability",
      tools: [
        "KPI development and dashboards",
        "Performance scorecards",
        "Benchmarking approaches",
        "Statistical process control",
        "Outcome measurement frameworks"
      ]
    },
    {
      category: "Team & Culture",
      description: "Methods for building teams, developing culture, and improving collaboration",
      tools: [
        "Team effectiveness assessments",
        "Culture audits and surveys",
        "Working agreements and team charters",
        "Feedback frameworks (360-degree, etc.)",
        "Recognition and reward system design"
      ]
    },
    {
      category: "Planning & Prioritisation",
      description: "Frameworks for managing priorities, allocating resources, and planning work",
      tools: [
        "Impact/effort matrices",
        "Eisenhower urgent/important grids",
        "Capacity planning tools",
        "Gantt charts and project timelines",
        "Resource allocation frameworks"
      ]
    }
  ];

  const faqs = [
    {
      question: "Will you teach us these tools or just use them yourselves?",
      answer: "Both. We use tools to deliver results, but we also transfer knowledge so your team can continue using them independently. Part of every engagement involves building your capability—not creating dependency on us knowing tools you don't. We explain why tools work, not just how to use them."
    },
    {
      question: "Do we need to learn complex new methodologies?",
      answer: "No. We translate sophisticated tools into practical, usable approaches your team can apply. You don't need to become methodology experts—you need practical techniques that solve problems. We handle the complexity and give you the simplified, useful bits."
    },
    {
      question: "What if our team doesn't like workshops and facilitation exercises?",
      answer: "Then we adapt. Not every team responds well to sticky notes and group activities. Some prefer data analysis and straightforward discussion. We read the room and adjust our approach. The goal is insight and progress, not adherence to a particular facilitation style."
    },
    {
      question: "How do you choose which tools to use?",
      answer: "Based on what you're trying to achieve, your team's capability, your culture, and time available. Sometimes simple tools work best; other times sophisticated analysis is needed. We match tools to situation, not force situations to fit our favourite tools. Experience helps us know what will work in your context."
    },
    {
      question: "Can we use these tools after you've left?",
      answer: "Absolutely—that's the point. We document approaches, train your team, and create templates or guides for ongoing use. The best engagements leave you with both solved problems and enhanced capability to solve future problems yourselves."
    },
    {
      question: "Do you use software tools or just frameworks and techniques?",
      answer: "Mostly frameworks and techniques that work with your existing systems. We're not selling software. When technology helps (data analysis, project management, dashboarding), we'll recommend approaches or integrate with what you already have. We're tool-agnostic—focused on what delivers results."
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
              Tools & Techniques
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Proven frameworks, practical tools, and systematic techniques that bring structure to complex challenges—adapted to fit your organisation and transferred to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2">
                Start a Conversation <ArrowRight size={20} />
              </Link>
              <Link to="/approach/methodologies" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center">
                Our Methodologies
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
              <Wrench className="text-[#6BA94D]" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Philosophy on Tools
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Tools and techniques bring structure to messy problems. They help us think systematically, make better decisions, and avoid common pitfalls. But they're means, not ends—valuable when they serve your objectives, not when they become the objective.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">How We Use Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                      <span>Match tools to your situation and culture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                      <span>Simplify sophisticated techniques for practical use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                      <span>Transfer knowledge so you can continue independently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={18} />
                      <span>Focus on insight and results, not tool perfection</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#0B6E4F] to-[#6BA94D] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">What We Avoid</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">×</span>
                      <span>Tools for tools' sake or methodology theatre</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">×</span>
                      <span>Complex techniques when simple approaches work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">×</span>
                      <span>Creating dependency through proprietary tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">×</span>
                      <span>One-size-fits-all application of frameworks</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-lg italic text-[#0B6E4F]">
                We bring a comprehensive toolkit and the experience to know which tools fit which situations. More importantly, we transfer capability so these tools become yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Tools We Bring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven techniques and frameworks adapted to your needs and transferred to your team.
            </p>
          </div>
          <div className="max-w-6xl mx-auto space-y-8">
            {coreTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 bg-gray-50 p-4 rounded-lg">
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0B6E4F] mb-3">{tool.title}</h3>
                      <p className="text-gray-700 mb-4">{tool.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <p className="text-sm font-semibold text-gray-900 mb-2">When to use:</p>
                        <p className="text-gray-600">{tool.whenToUse}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Examples include:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {tool.examples.map((example, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-700">{example}</span>
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

      {/* Additional Tools Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Additional Toolsets
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Beyond our core tools, we bring techniques across multiple domains depending on your needs.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {toolCategories.map((category, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">{category.category}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.tools.map((tool, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-gray-700">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practical Application Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              From Tools to Results
            </h2>
            <p className="text-xl text-gray-100 mb-8 text-center">
              Tools only matter if they deliver insight and drive action. Here's how we ensure they do:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Simplify techniques for practical application",
                "Match tools to your team's capability and culture",
                "Facilitate workshops that generate real insights",
                "Create templates and guides for ongoing use",
                "Train your team to use tools independently",
                "Focus on outcomes, not tool sophistication",
                "Adapt approaches when they're not working",
                "Build capability, not dependency on consultants"
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
            Let's Apply the Right Tools to Your Challenges
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Every situation requires different tools. Let's discuss your challenges and how we can bring structure and insight to solving them.
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

export default ToolsTechniques;