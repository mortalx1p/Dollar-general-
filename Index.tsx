import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ShoppingBag,
  UserCheck,
  ClipboardList,
  Gift,
  CheckCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ValuePerks — Shopper Experience & Rewards" },
      {
        name: "description",
        content:
          "Share your retail shopping experience and explore partner savings and shopping perks.",
      },
      { property: "og:title", content: "ValuePerks — Shopper Experience & Rewards" },
      {
        property: "og:description",
        content: "Complete our quick survey to discover exclusive shopping offers and perks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ValuePerksPage,
});

const steps = [
  {
    icon: ShoppingBag,
    title: "1. Click Start Review",
    desc: "Begin our 2-minute independent shopper survey.",
  },
  {
    icon: ClipboardList,
    title: "2. Answer 3 Quick Questions",
    desc: "Tell us about your weekly household shopping habits.",
  },
  {
    icon: UserCheck,
    title: "3. Confirm Your Info",
    desc: "Verify your email to receive partner offers.",
  },
  {
    icon: Gift,
    title: "4. Explore Featured Offers",
    desc: "Browse deals and vouchers from participating sponsors.",
  },
  {
    icon: CheckCircle,
    title: "5. Unlock Member Perks",
    desc: "Access discounts, weekly savings guides, and partner perks.",
  },
];

export default function ValuePerksPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [frequency, setFrequency] = useState("");

  return (
    <div className="min-h-screen bg-[#F6F7F9] text-slate-900 flex flex-col items-center font-sans">
      {/* Top Banner */}
      <div className="w-full bg-[#111827] text-[#FFDD00] text-xs font-semibold py-2.5 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-[#FFDD00]" />
        <span>Independent Shopper Research & Community Savings Hub</span>
      </div>

      {/* Main Container */}
      <main className="w-full max-w-md px-4 py-6 flex flex-col items-center">
        {/* Brand Header */}
        <header className="w-full flex items-center justify-between pb-4">
          <div className="flex items-center gap-2 bg-[#FFDD00] border-2 border-black px-3 py-1.5 rounded-md shadow-[3px_3px_0px_#000]">
            <span className="text-black font-black text-xl tracking-tight uppercase">
              VALUE<span className="bg-black text-[#FFDD00] px-1 ml-1 rounded-sm">PERKS</span>
            </span>
          </div>
          <span className="text-xs font-bold bg-white border border-slate-300 text-slate-700 px-2.5 py-1 rounded-full shadow-xs">
            2026 Edition
          </span>
        </header>

        {/* Hero Card */}
        <div className="w-full mt-2 relative rounded-2xl p-6 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] text-white shadow-xl overflow-hidden border-2 border-black">
          <div className="absolute -right-10 -top-10 w-44 h-44 bg-[#FFDD00] rotate-45 rounded-2xl opacity-95 pointer-events-none" />
          <div className="absolute right-4 -bottom-10 w-32 h-32 bg-[#FFDD00]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex justify-between items-start">
            <span className="bg-[#FFDD00] text-black font-extrabold text-[11px] px-2.5 py-0.5 rounded tracking-wider uppercase border border-black">
              MEMBER PASS
            </span>
            <div className="text-right">
              <span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider block">
                Perk Level
              </span>
              <span className="text-2xl font-black text-[#FFDD00] tracking-tight">
                PREMIUM
              </span>
            </div>
          </div>

          <div className="relative z-10 my-6 text-center">
            <h2 className="text-3xl font-black italic tracking-wide text-white drop-shadow">
              VALUE PERKS
            </h2>
            <p className="text-xs font-bold tracking-widest text-[#FFDD00] uppercase mt-1">
              SHOPPER REWARDS & COMMUNITY DEALS
            </p>
          </div>

          <div className="relative z-10 flex justify-between items-end pt-3 border-t border-slate-700/80 text-[10px] text-slate-300">
            <span>OFFICIAL SAMPLE REWARD PASS</span>
            <span className="font-mono text-slate-400">VP-MEMBER-2026</span>
          </div>
        </div>

        {/* Value Heading */}
        <div className="mt-6 text-center">
          <h1 className="text-2xl font-black text-slate-950">
            Unlock Shopper Rewards
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-xs mx-auto">
            Share feedback on your neighborhood discount store visits and unlock curated sponsor deals.
          </p>
        </div>

        {/* 5-Step Process Checklist Card */}
        <section className="w-full mt-6 bg-white rounded-2xl p-5 shadow-sm border-2 border-slate-200 flex flex-col gap-3.5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FFF9C4] border border-[#FFD100] flex items-center justify-center text-slate-950 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA Button */}
        <div className="w-full mt-6 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={() => setSurveyOpen(true)}
            className="w-full py-4 px-6 rounded-xl bg-[#FFDD00] text-black font-black text-lg tracking-wider uppercase border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <span>★</span>
            <span>START REVIEW</span>
            <span>★</span>
          </button>
          <span className="text-xs text-slate-500 font-medium">
            (Quick 2-minute shopper opinion study · Free to participate)
          </span>
        </div>

        {/* Trust Badges */}
        <div className="w-full mt-8 p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>
            We respect your privacy. Survey feedback is used for shopping trends research.
          </span>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-xs text-slate-500 space-y-1 pb-6">
          <p>© 2026 ValuePerks. All rights reserved.</p>
          <p className="text-[10px] text-slate-400">
            Independent consumer opinion research. Not affiliated with or endorsed by Dollar General or any other retail chain.
          </p>
        </footer>
      </main>

      {/* Survey Modal */}
      {surveyOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border-2 border-black relative">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#FFDD00] text-black font-extrabold text-xs px-2.5 py-0.5 rounded border border-black">
                Step {currentStep} of 2
              </span>
              <button
                type="button"
                onClick={() => setSurveyOpen(false)}
                className="text-xs font-bold text-slate-500 hover:text-black"
              >
                Close ✕
              </button>
            </div>

            {currentStep === 1 ? (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  How often do you shop at discount or dollar stores?
                </h3>
                <div className="space-y-2">
                  {["2+ times a week", "Weekly", "A few times a month", "Rarely"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFrequency(opt)}
                      className={`w-full py-2.5 px-3 text-left text-sm rounded-lg border-2 font-medium transition-all ${
                        frequency === opt
                          ? "border-black bg-[#FFDD00] font-bold shadow-xs"
                          : "border-slate-200 hover:border-slate-300 bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  disabled={!frequency}
                  onClick={() => setCurrentStep(2)}
                  className="w-full py-3 bg-black text-[#FFDD00] disabled:opacity-40 font-bold rounded-xl text-sm"
                >
                  Continue →
                </button>
              </div>
            ) : (
              <div className="space-y-4 text-center">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-slate-900">
                  Feedback Recorded!
                </h3>
                <p className="text-xs text-slate-600">
                  Thank you for contributing. You can now explore verified partner deals and discounts.
                </p>
                <button
                  type="button"
                  onClick={() => setSurveyOpen(false)}
                  className="w-full py-3 bg-[#FFDD00] text-black font-extrabold border-2 border-black rounded-xl text-sm shadow-[2px_2px_0px_#000]"
                >
                  Explore Deals
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
