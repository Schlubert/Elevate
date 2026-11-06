// src/pages/websites.tsx
import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  Globe,
  Monitor,
  Lock,
  Languages,
  Video,
  LayoutGrid,
  GraduationCap,
  LifeBuoy,
  Wallet,
  Layers,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";

type Tier = "All" | "Basic" | "Multi-page" | "Advanced";

interface GalleryItem {
  title: string;
  tier: Exclude<Tier, "All">;
  platform: string;
  image: string;
  description: string;
  attributes: string[];
}

interface Principle {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Websites: React.FC = () => {
  const [activeTier, setActiveTier] = useState<Tier>("All");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const heroShots = [
  { src: "./public/images/elevateSplash.jpg", alt: "Multi-page business website example" },
  { src: "./public/images/feedSplash.jpg", alt: "Business marketing website example" },
  { src: "./public/images/appetiteSplash.jpg", alt: "Advanced website with gateway example" },
  { src: "./public/images/swissSplash.jpg", alt: "Cultural website with regional event calendars" },
  { src: "./public/images/bocuseSplash.jpg", alt: "Squarespace website example" },
  { src: "./public/images/pgSplash.jpg", alt: "Basic site example" },
 

];

  const principles: Principle[] = [
    {
      icon: <Wallet className="text-[#6BA94D]" size={32} />,
      title: "Reasonable Pricing",
      description:
        "We keep our pricing sensible so that a good website is within reach, whether you're just starting out or simply can't justify a quote that runs into the tens of thousands.",
    },
    {
      icon: <Layers className="text-[#6BA94D]" size={32} />,
      title: "Useful, Not Showy",
      description:
        "We build sites that do a job for your business. Some are simple, some are sophisticated, but every feature earns its place. No gimmicks, no bloat.",
    },
    {
      icon: <Monitor className="text-[#6BA94D]" size={32} />,
      title: "You Stay in Control",
      description:
        "Wherever possible, we build on platforms you can update yourself, so you're not waiting on us to change a phone number or add a news post.",
    },
    {
      icon: <GraduationCap className="text-[#6BA94D]" size={32} />,
      title: "Training Included",
      description:
        "We walk you through the site, show you how to make updates confidently, provide a useful guide, and are always happy to answer questions if you get stuck.",
    },
  ];

  const gallery: GalleryItem[] = [
    {
      title: "Multi-page, business information site",
      tier: "Multi-page",
      platform: "React (Vite)",
      image: "./public/images/elevateSplash.jpg",
      description:
        "A site driven by information. Designed to be explored by users, answer as many questions as possible, and still provide a great user experience. The site has pages easily categorised and organised. Services, team, news, and contact pages with plenty of room to cover most business needs.",
      attributes: [
        "Multi-page site",
        "Contact details and enquiry form",
        "Mobile responsive",
        "Fast to load and simple to maintain",
      ],
    },
    {
      title: "Basic Business Profile Website",
      tier: "Basic",
      platform: "WordPress",
      image: "./public/images/feedSplash.jpg",
      description:
        "A simple site with room to grow. All the information is easily accessible, and the client can manage content through the WordPress dashboard. The site is structured to be search engine friendly, with a blog or news section to keep content fresh.",
      attributes: [
        "Multiple pages: home, services, about, news, contact",
        "Client-managed content through the WordPress dashboard",
        "Blog or news section",
        "Search engine friendly structure",
      ],
    },
    {
      title: "Multi-language site with a secured login area",
      tier: "Advanced",
      platform: "React (Vite)",
      image: "./public/images/appetiteSplash.jpg",
      description:
        "Designed for businesses reaching different groups of people in different places. An easy-to-use homepage guides visitors right where they need to go, while features like language switching, video, and private member areas make exploring the site simple and personal.",
      attributes: [
        "Gateway page directing different audiences",
        "Language toggle (for example, English and te reo Māori)",
        "Accordions and structured information panels",
        "Embedded video content",
        "Login-protected sections for members, clients, or staff",
      ],
    },
    {
      title: "Brand-Led Basic Site",
      tier: "Basic",
      platform: "Squarespace",
      image: "./public/images/bocuseSplash.jpg",
      description:
        "A visually driven site for brands, makers, and small retailers. Squarespace gives you strong design templates and built-in tools for product listings, bookings, and newsletters. The client can manage content and products through the Squarespace dashboard, with no coding required.",
      attributes: [
        "Template-based design with brand customisation",
        "Product or service listings",
        "Built-in booking or newsletter tools",
        "Easy for you to update without developer help",
      ],
    },
    {
      title: "Community and Cultural Website",
      tier: "Multi-page",
      platform: "Wordpress",
      image: "./public/images/swissSplash.jpg",
      description:
        "A site for a community organisation with regional, national, and international audiences. The homepage is designed to guide visitors to the right information, while the site structure allows for easy updates and additions with each region having control over their content. Features include event calendars, news posts, and the potential for both members only areas and language toggles.",
      attributes: [
        "Template-based design with brand customisation",
        "Event calendars and news posts",
        "Built-in booking or newsletter tools",
        "Easy for you to update without developer help",
      ],
    },
    {
      title: "Profile and marketing site for a small business",
      tier: "Multi-page",
      platform: "Wordpress",
      image: "./public/images/pgSplash.jpg",
      description:
        "A visually driven site for brands, makers, and small retailers. Squarespace gives you strong design templates and built-in tools for product listings, bookings, and newsletters. The client can manage content and products through the Squarespace dashboard, with no coding required.",
      attributes: [
        "Template-based design with easy customisation",
        "Product listing and contact forms",
        "designed as a marketing tool for the business",
        "Once the site is live, the client can manage content through the WordPress dashboard",
      ],
    },
  ];

  const filteredGallery =
    activeTier === "All" ? gallery : gallery.filter((item) => item.tier === activeTier);

  const tierDescriptions: { tier: Exclude<Tier, "All">; title: string; description: string; bestFor: string }[] = [
    {
      tier: "Basic",
      title: "Basic Site",
      description: "A simple site that introduces your brand and provides a clear call to action. These can be as simple as a single page with contact details, or a few pages with a clear structure.",
      bestFor: "New businesses, sole traders, and quick online presence",
    },
    {
      tier: "Multi-page",
      title: "Multi-Page Site",
      description: "A structured site with several pages, news or blog, and easy content updates.",
      bestFor: "Established businesses and organisations that want room to grow",
    },
    {
      tier: "Advanced",
      title: "Advanced Site",
      description: "Gateways, language toggles, embedded media, and login-protected sections.",
      bestFor: "Organisations with multiple audiences, members, or bilingual needs",
    },
  ];

  const faqs = [
    {
      question: "Why are your prices lower than larger agencies?",
      answer:
        "We don't carry the overheads of a large agency: no account management layers, no glossy pitch process, and no inflated timelines. You work directly with the people building your site. We'd rather earn your trust through good work at a fair price than charge for the reputation of a big name.",
    },
    {
      question: "Will I be able to update the site myself?",
      answer:
        "In most cases, yes. Where possible we build on platforms like WordPress or Squarespace that are designed for non-developers. For custom builds, we set things up so that common updates, such as text, images, news posts, and contact details, can be made without touching code. We'll confirm what you can and can't edit before we start.",
    },
    {
      question: "What training do you provide?",
      answer:
        "We run a hands-on walkthrough of your site once it's complete, showing you how to make the everyday changes you'll need. You'll also receive simple notes with screenshots, so you're never left guessing a month later. We're always happy to answer questions if you get stuck, and ongoing support can be arranged on a clear, simple basis if you'd like it.",
    },
    {
      question: "What happens if something goes wrong after launch?",
      answer:
        "We're here to put things back on track. If an update breaks something, or you're unsure how to do something, get in touch and we'll help you sort it out. Ongoing support can be arranged on a simple, clearly scoped basis if you'd like it.",
    },
    {
      question: "Can you build a site if I already have a domain and hosting?",
      answer:
        "Yes. We can work with your existing domain and hosting, or help you set up new services where needed. We'll talk through the options and tell you honestly what makes most sense for your situation.",
    },
    {
      question: "How do I know which type of site I need?",
      answer:
        "Start with what you need the site to do. If it's primarily to share who you are and how to contact you, a basic site is often enough. If you have services, news, or several audiences to cater to, a multi-page site is the next step. Advanced features like login areas or language toggles are added where they serve a clear purpose. We're happy to talk it through with you.",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <Layout>
      {/* Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#0B6E4F] to-[#6BA94D] text-white py-8">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <div>
        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Websites
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Useful Websites, Without the Ego
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
          We build websites that do a job for your business: clear, practical, and easy to look after. Whether you're starting out or ready to replace an outdated site, we'll help you get it right.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
          >
            Start a Conversation <ArrowRight size={20} />
          </Link>
          <a
            href="#examples"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center"
          >
            See Examples
          </a>
        </div>
      </div>

      {/* Screenshot mosaic */}
      <div className="grid grid-cols-2 gap-2 lg:gap-3">
        {heroShots.map((shot, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-2xl overflow-hidden border border-white/20 ${
              index % 2 === 1 ? "translate-y-6" : ""
            }`}
          >
            {/* Browser chrome */}
            <div className="bg-gray-200 h-6 flex items-center gap-1.5 px-3">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="aspect-video bg-gray-100 overflow-hidden">
              <img
                src={shot.src}
                alt={shot.alt}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Philosophy Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-[#6BA94D]" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Not the Full-Noise Agency
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Plenty of agencies will happily sell you a website that costs more than it should, takes longer than it needs to, and leaves you unable to change a single word without calling them back. We don't work that way.
              </p>
              <p className="mb-6">
                Many businesses have been quoted prices they simply can't justify, and many others never get started at all because a website feels out of reach. We keep our pricing reasonable so that a good website is achievable, and we build in a way that gives you control over your own site.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">We Don't Need to Be the Biggest Name in the Room</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                    <span>Sensible, clearly scoped quotes with nothing hidden in the fine print</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                    <span>Platforms chosen for your needs, not for what earns us the most</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-1" size={20} />
                    <span>Direct access to the people who build your site, with no account manager in between</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Build Your Website
            </h2>
            <p className="text-xl text-white-600 max-w-5xl mx-auto">
              Practical principles that keep the process straightforward and the result genuinely useful.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="mb-4 flex justify-center">{principle.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control and Training Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Control Stays With You
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-[#6BA94D] bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Monitor className="text-[#6BA94D]" size={24} />
                  <h3 className="text-xl font-bold text-[#0B6E4F]">Update It Yourself</h3>
                </div>
                <p className="text-gray-700">
                  Change your text, images, opening hours, news, and contact details without waiting on us. We'll confirm exactly what's editable before we begin.
                </p>
              </div>
              <div className="border-l-4 border-[#6BA94D] bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="text-[#6BA94D]" size={24} />
                  <h3 className="text-xl font-bold text-[#0B6E4F]">Trained to Manage It</h3>
                </div>
                <p className="text-gray-700">
                  A hands-on walkthrough and a simple guide with screenshots, so you can manage the site with confidence.
                </p>
              </div>
              <div className="border-l-4 border-[#6BA94D] bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <LifeBuoy className="text-[#6BA94D]" size={24} />
                  <h3 className="text-xl font-bold text-[#0B6E4F]">Back on Track When Needed</h3>
                </div>
                <p className="text-gray-700">
                  If something goes slightly awry, we'll help you put it right. Ongoing support can be arranged on a clear, simple basis.
                </p>
              </div>
              <div className="border-l-4 border-[#6BA94D] bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="text-[#6BA94D]" size={24} />
                  <h3 className="text-xl font-bold text-[#0B6E4F]">Secure by Design</h3>
                </div>
                <p className="text-gray-700">
                  Where your site includes member or staff areas, access is protected and set up so you can manage who gets in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complexity Tiers Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose the Right Level for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              Websites come in different shapes. The right one depends on what you need the site to do, not on what's most impressive.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tierDescriptions.map((tier, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
  <div className="w-14 h-14 bg-gradient-to-br from-[#6BA94D] to-[#0B6E4F] rounded-full flex items-center justify-center mx-auto mb-6">
    {tier.tier === "Basic" && <Monitor className="text-white" size={26} />}
    {tier.tier === "Multi-page" && <LayoutGrid className="text-white" size={26} />}
    {tier.tier === "Advanced" && <Languages className="text-white" size={26} />}
  </div>
  <h3 className="text-2xl font-bold text-[#0B6E4F] mb-3">{tier.title}</h3>
  <p className="text-gray-700 mb-4">{tier.description}</p>
  <div className="bg-gray-50 p-4 rounded-lg">
    <p className="text-sm font-semibold text-gray-900 mb-1">Best for:</p>
    <p className="text-gray-600 text-sm">{tier.bestFor}</p>
  </div>
</div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Gallery Section */}
      <section id="examples" className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Examples of Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              A range of sites across different platforms and levels of complexity, each built to suit its purpose.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(["All", "Basic", "Multi-page", "Advanced"] as Tier[]).map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  activeTier === tier
                    ? "bg-[#0B6E4F] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tier}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredGallery.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-100 aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Screenshot of ${item.title}`}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-[#6BA94D] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {item.tier}
                    </span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.platform}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B6E4F] mb-3">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key features:</h4>
                    <ul className="space-y-2">
                      {item.attributes.map((attribute, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="text-[#6BA94D] flex-shrink-0 mt-0.5" size={16} />
                          <span>{attribute}</span>
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

      {/* Process Section */}
      <section className="py-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              How a Project Usually Runs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "We start by understanding your business, your customers, and what the site needs to achieve",
                "We recommend the platform and level of complexity that suits you, and say so if a simpler option will do",
                "We agree on a clear scope and quote before any work begins",
                "We build, share progress with you, and make adjustments along the way",
                "We train you on managing the site and leave you with a useful guide",
                "We stay available to help you keep things running smoothly",
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
      <section className="py-8 bg-white">
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
                    <div className="px-6 pb-6 text-gray-700">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-r from-[#0B6E4F] to-[#6BA94D] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for a Website That Works?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Tell us what you need your site to do and we'll be honest about the best way to get there, and what it will cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#0B6E4F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              Get a Quote <ArrowRight size={20} />
            </Link>
            <Link
              to="/expertise"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B6E4F] transition-colors inline-flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Websites;