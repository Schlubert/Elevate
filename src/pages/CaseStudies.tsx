// src/pages/CaseStudies.tsx
import React from "react";
import Layout from "../components/Layout";

type CaseStudy = {
  id: string;
  title: string;
  sector: string;
  challenge: string;
  approach: string;
  outcome: string;
};

const sampleCaseStudies: CaseStudy[] = [
  {
    id: "cs1",
    title: "Leadership lift for a regional services firm",
    sector: "Professional Services",
    challenge:
      "Leaders were promoted for technical skill but lacked coaching and delegation capabilities, causing bottlenecks.",
    approach:
      "Delivered a 6-week blended programme (workshops + 1:1 coaching) to consolidate management fundamentals, feedback skills and delegation routines.",
    outcome:
      "Within 4 months the client reported 28% faster project delivery times and higher staff retention.",
  },
  {
    id: "cs2",
    title: "Operational alignment for a growing trades business",
    sector: "Construction & Trades",
    challenge:
      "Rapid growth created inconsistent processes and variable performance across teams.",
    approach:
      "We mapped core workflows, facilitated cross-team workshops and coached site managers in performance conversations.",
    outcome:
      "A standardised operating rhythm reduced rework and boosted on-time completion by 22%.",
  },
  {
    id: "cs3",
    title: "Culture & accountability reset for a hospitality group",
    sector: "Hospitality",
    challenge:
      "Multiple outlets had differing standards; managers avoided difficult conversations and morale slipped.",
    approach:
      "Delivered tailored management modules with practical role plays and coaching labs combined with a 90-day accountability plan.",
    outcome:
      "Consistent service KPIs across outlets and a measurable uplift in NPS and staff engagement.",
  },
];

const CaseStudies: React.FC = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[var(--brand-700)] mb-4">
          Case Studies
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl">
          We deliver practical, measurable leadership and operational outcomes. Below are a few
          anonymised examples that highlight our pragmatic, people-first approach.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {sampleCaseStudies.map((cs) => (
            <article
              key={cs.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
              aria-labelledby={`title-${cs.id}`}
            >
              <header>
                <h3
                  id={`title-${cs.id}`}
                  className="text-xl font-semibold text-[var(--brand-600)]"
                >
                  {cs.title}
                </h3>
                <div className="text-sm text-gray-500 mt-1">{cs.sector}</div>
              </header>

              <dl className="mt-4 space-y-3 text-gray-700">
                <div>
                  <dt className="font-semibold">Challenge</dt>
                  <dd className="mt-1">{cs.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Approach</dt>
                  <dd className="mt-1">{cs.approach}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Outcome</dt>
                  <dd className="mt-1">{cs.outcome}</dd>
                </div>
              </dl>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Measurable results and long-term capability uplift.
                </div>
                <a
                  href="/contact"
                  className="inline-block bg-[var(--brand-600)] text-white px-4 py-2 rounded hover:bg-[var(--brand-700)]"
                >
                  Talk to us about this
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
