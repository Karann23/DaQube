import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NetworkPage.css";
import {
  Globe2,
  Users,
  ShieldCheck,
  Award,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Stethoscope,
  Scale,
  Code2,
  Mic,
  Eye,
  Languages,
  BadgeCheck,
  Building2,
  Lock,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading } from "../components/section-heading";
import { GithubGlobe } from "../components/GithubGlobe";

const REGIONAL_HUBS = [
  {
    region: "North America",
    countries: "US, Canada, Mexico",
    specialists: "5,500+",
    languages: "English (US/CA/Regional), French Canadian, Spanish (MX/US)",
    focus: "Frontier RLHF, Medical AI, Legal Annotation, Autonomous Driving",
  },
  {
    region: "Europe & UK",
    countries: "UK, Germany, France, Netherlands, Nordics, Spain, Italy",
    specialists: "7,200+",
    languages: "35+ European Languages & Regional Dialects",
    focus: "GDPR-Compliant Data, Multilingual LLMs, Industrial Computer Vision",
  },
  {
    region: "Asia-Pacific",
    countries: "India, Japan, South Korea, Singapore, Vietnam, Australia",
    specialists: "6,800+",
    languages: "Hindi, Japanese, Korean, Mandarin, Vietnamese, 40+ Indic Dialects",
    focus: "Dense LiDAR Segmentation, ASR Speech Corpora, Document Intelligence",
  },
  {
    region: "Latin America",
    countries: "Brazil, Colombia, Argentina, Chile, Peru",
    specialists: "3,100+",
    languages: "Brazilian Portuguese, Latin American Spanish Variants",
    focus: "Conversational AI, Localized Retail Datasets, Audio Capture",
  },
  {
    region: "Middle East & Africa",
    countries: "UAE, Saudi Arabia, Egypt, Nigeria, Kenya, South Africa",
    specialists: "2,400+",
    languages: "Modern Standard Arabic & 12 Dialects, Swahili, Yoruba, Zulu",
    focus: "Dialectal Speech Processing, Agriculture Vision, Localized OCR",
  },
];

const DOMAIN_EXPERTS = [
  {
    icon: Code2,
    domain: "Software Engineering & Code LLMs",
    talent: "Senior Developers, Systems Architects, Security Engineers",
    useCases:
      "Code generation evaluation, unit test generation, vulnerability auditing, complex repo refactoring evaluation.",
  },
  {
    icon: Stethoscope,
    domain: "Healthcare & Clinical AI",
    talent: "Board-Certified MDs, Radiologists, Clinical Researchers",
    useCases:
      "Medical imaging segmentation, clinical summary evaluation, EHR query understanding, diagnostic safety red-teaming.",
  },
  {
    icon: Scale,
    domain: "Legal & Regulatory Compliance",
    talent: "Licensed Attorneys, Legal Scholars, Compliance Officers",
    useCases:
      "Contract clause classification, legal reasoning benchmark tests, statutory cross-jurisdiction analysis.",
  },
  {
    icon: Languages,
    domain: "Linguistics & Native Dialects",
    talent: "Phoneticists, Native Speakers, Professional Translators",
    useCases:
      "Acoustic event tagging, low-resource language corpus collection, nuanced sentiment analysis, cultural nuance alignment.",
  },
  {
    icon: Eye,
    domain: "Computer Vision & Robotics Perception",
    talent: "Perception Engineers, Autonomous Systems Annotators",
    useCases:
      "3D point-cloud bounding, polyline road marking, multi-camera temporal tracking, rare anomaly edge cases.",
  },
  {
    icon: Cpu,
    domain: "Frontier Alignment & Red Teaming",
    talent: "AI Safety Researchers, Domain Experts, Adversarial Testers",
    useCases:
      "Jailbreak vulnerability testing, hallucination mitigation, ethical boundary alignment, multi-turn preference ranking.",
  },
];

const VETTING_STEPS = [
  {
    step: "01",
    title: "Identity & Credential Verification",
    desc: "Rigorous identity authentication, country of residence confirmation, and strict verification of professional degrees or licenses for specialized tracks.",
  },
  {
    step: "02",
    title: "Domain & Modality Competency Exam",
    desc: "Proprietary benchmarking tests assessing annotation accuracy, guideline interpretation, and domain reasoning under timed conditions (pass rate < 18%).",
  },
  {
    step: "03",
    title: "Project-Specific Calibration Pilot",
    desc: "Before joining live pipelines, candidates complete calibrated gold-standard tasks with feedback from senior project leads to align on edge-case taxonomy.",
  },
  {
    step: "04",
    title: "Continuous Blind QA & Drift Monitoring",
    desc: "Ongoing injection of blind gold-label tasks, inter-annotator agreement (IAA) metrics, and real-time supervisor audits to prevent annotation fatigue.",
  },
];

export function NetworkPage() {
  const [selectedRegion, setSelectedRegion] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay fallback
      });
    }
  }, []);

  return (
    <>
      {/* Video Background Hero Section */}
      <section className="network-video-hero" aria-label="Global Contributor Network">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="network-video-bg"
        >
          <source src="/videos/network_global.mp4" type="video/mp4" />
        </video>

        {/* High-Contrast Gradient Dark Overlay for Perfect Legibility */}
        <div className="network-video-overlay" aria-hidden="true" />

        {/* Ambient Subtle Glow */}
        <div className="network-hero-ambient-glow" aria-hidden="true" />

        {/* Main Content Layer */}
        <div className="container relative z-10 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            {/* Left Column: Headline, Lead & CTAs */}
            <div className="max-w-2xl">
              <div className="network-breadcrumb">
                <Link to="/">Home</Link>
                <span className="opacity-50 mx-2">/</span>
                <span className="text-white font-medium">Network</span>
              </div>

              <div className="network-hero-eyebrow">
                <Globe2 size={14} className="text-[#EC5E27]" />
                <span>GLOBAL EXPERT & CONTRIBUTOR NETWORK</span>
              </div>

              <h1 className="network-hero-headline">
                Real human insight.
                <br />
                <span className="network-hero-headline-highlight">At global scale.</span>
              </h1>

              <p className="network-hero-lead">
                Access 25,000+ verified contributors and 850+ specialized domain experts across 100+
                countries, delivering high-precision data collection, annotation, and alignment for
                Frontier AI.
              </p>

              <div className="hero-actions flex flex-wrap items-center gap-4">
                <Link className="button button-crimson shadow-xl" to="/contact">
                  Deploy Our Network <ArrowUpRight size={17} />
                </Link>
                <a className="network-hero-secondary-btn" href="#vetting">
                  <span>See Vetting Standards</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Column: Floating Live Network Indicators */}
            <div className="hidden lg:flex flex-col gap-3.5 max-w-xs shrink-0">
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#0F131C]/80 backdrop-blur-md border border-white/10 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#EC5E27]/20 flex items-center justify-center text-[#EC5E27] shrink-0">
                  <Globe2 size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    100+ Countries
                  </div>
                  <div className="text-[11px] text-[#94A3B8]">Active in-field contributors</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#0F131C]/80 backdrop-blur-md border border-white/10 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#EC5E27]/20 flex items-center justify-center text-[#EC5E27] shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    25,000+ Vetted
                  </div>
                  <div className="text-[11px] text-[#94A3B8]">Pre-screened human talent</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#0F131C]/80 backdrop-blur-md border border-white/10 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#EC5E27]/20 flex items-center justify-center text-[#EC5E27] shrink-0">
                  <Languages size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    120+ Languages
                  </div>
                  <div className="text-[11px] text-[#94A3B8]">Native acoustic fluency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade Gradient */}
        <div className="network-hero-bottom-fade" aria-hidden="true" />
      </section>

      {/* Network Metrics Strip */}
      <section
        className="section section-tint"
        style={{ padding: "40px 0", borderBottom: "1px solid var(--silver-border)" }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white rounded-2xl border border-[rgba(20,23,26,0.08)] shadow-sm">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-[#EC5E27] tracking-tight">
                100+
              </div>
              <div className="text-sm font-semibold text-[#12151A] mt-1">Countries Represented</div>
              <div className="text-xs text-[#5F646D] mt-0.5">True geographic diversity</div>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[rgba(20,23,26,0.08)] shadow-sm">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-[#EC5E27] tracking-tight">
                120+
              </div>
              <div className="text-sm font-semibold text-[#12151A] mt-1">Languages & Dialects</div>
              <div className="text-xs text-[#5F646D] mt-0.5">Native speaker fluency</div>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[rgba(20,23,26,0.08)] shadow-sm">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-[#EC5E27] tracking-tight">
                25K+
              </div>
              <div className="text-sm font-semibold text-[#12151A] mt-1">Vetted Annotators</div>
              <div className="text-xs text-[#5F646D] mt-0.5">Pre-screened & calibrated</div>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[rgba(20,23,26,0.08)] shadow-sm">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-[#EC5E27] tracking-tight">
                99.8%
              </div>
              <div className="text-sm font-semibold text-[#12151A] mt-1">QA Benchmark</div>
              <div className="text-xs text-[#5F646D] mt-0.5">Multi-pass agreement rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Experts Section */}
      <section className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="DOMAIN-SPECIFIC TALENT"
            title="When general crowds are not enough."
            description="Frontier models require nuanced feedback from actual practitioners. We match your project with verified specialists who understand the terminology, context, and edge cases of your domain."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {DOMAIN_EXPERTS.map((expert, idx) => (
              <article
                key={idx}
                className="flex flex-col p-6 rounded-2xl bg-white border border-[rgba(20,23,26,0.08)] hover:border-[#EC5E27] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(236,94,39,0.1)] text-[#EC5E27] flex items-center justify-center mb-5">
                  <expert.icon size={24} />
                </div>
                <h3 className="font-display text-lg font-bold text-[#12151A] mb-2">{expert.domain}</h3>
                <div className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F5F5E2] text-[#2D3139] mb-3 self-start">
                  {expert.talent}
                </div>
                <p className="text-sm text-[#5F646D] leading-relaxed mt-auto">{expert.useCases}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Coverage Tabs & Borderless 3D Interactive GitHub Globe */}
      <section className="section section-tint relative overflow-visible !py-12 md:!py-20">
        <div className="container max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center overflow-visible">
            {/* Left Column: Heading, description, stats, regional buttons, and spotlight card */}
            <div className="lg:col-span-6 flex flex-col justify-center relative z-10">
              <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[1.8px] text-[#8E939D]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#EC5E27] shadow-[0_0_10px_#EC5E27]" />
                GEOGRAPHIC FOOTPRINT
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-[-1.5px] text-[#12151A] md:text-5xl">
                Global reach, <span className="text-[#EC5E27]">local nuance.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5F646D] max-w-xl">
                AI models deployed worldwide must understand accents, dialects, cultural contexts,
                and localized environments. Select a regional hub to inspect coverage and focus the
                globe.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-mono text-[#5F646D]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E9ECEF] shadow-xs">
                  <Globe2 size={13} className="text-[#EC5E27]" /> 1,000+ Global Locales
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E9ECEF] shadow-xs">
                  <Users size={13} className="text-[#EC5E27]" /> 25,000+ Native Contributors
                </span>
              </div>

              {/* Regional Hub Buttons */}
              <div className="mt-8 flex flex-wrap gap-2">
                {REGIONAL_HUBS.map((hub, i) => (
                  <button
                    key={hub.region}
                    type="button"
                    onClick={() => setSelectedRegion(i)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      selectedRegion === i
                        ? "bg-[#12151A] text-white shadow-md ring-2 ring-[#38bdf8]/60 scale-[1.02]"
                        : "bg-white text-[#2D3139] border border-[rgba(20,23,26,0.08)] hover:bg-[#F5F5E2] hover:border-[rgba(20,23,26,0.18)]"
                    }`}
                  >
                    {hub.region}
                  </button>
                ))}
              </div>

              {/* Selected Regional Spotlight Card */}
              <div className="mt-6 p-6 rounded-2xl bg-white border border-[rgba(20,23,26,0.08)] shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-[rgba(20,23,26,0.06)]">
                  <span className="text-xs font-bold tracking-wider text-[#EC5E27] uppercase">
                    REGIONAL SPOTLIGHT · {REGIONAL_HUBS[selectedRegion].region}
                  </span>
                  <span className="text-[11px] font-mono text-[#8E939D] bg-[#F5F5E2] px-2.5 py-0.5 rounded-full">
                    {REGIONAL_HUBS[selectedRegion].specialists} vetted contributors
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-[#12151A] block mb-0.5">Key Countries</span>
                    <span className="text-[#5F646D] text-xs leading-relaxed">
                      {REGIONAL_HUBS[selectedRegion].countries}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#12151A] block mb-0.5">Language Coverage</span>
                    <span className="text-[#5F646D] text-xs leading-relaxed">
                      {REGIONAL_HUBS[selectedRegion].languages}
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-semibold text-[#12151A] block mb-0.5">
                      Specialty Capabilities
                    </span>
                    <span className="text-[#5F646D] text-xs leading-relaxed">
                      {REGIONAL_HUBS[selectedRegion].focus}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[rgba(20,23,26,0.06)] flex items-center justify-between">
                  <span className="text-xs text-[#8E939D]">
                    Need on-premise recording or localized field capture?
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#EC5E27] hover:underline"
                  >
                    Request cohort quote <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Borderless 3D Interactive GitHub Globe (~30% smaller, constant distance, continuous rotation) */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-6 lg:py-0 overflow-visible min-h-[420px] lg:min-h-[520px]">
              <div className="w-full max-w-[460px] lg:max-w-[520px] aspect-square flex items-center justify-center overflow-visible pointer-events-auto">
                <GithubGlobe
                  selectedRegionIndex={selectedRegion}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vetting Funnel Section */}
      <section id="vetting" className="section section-white">
        <div className="container">
          <SectionHeading
            eyebrow="RIGOROUS CALIBRATION"
            title="The DaQube 4-tier vetting funnel."
            description="Only 1 in 6 applicants joins our active production pipelines. We prioritize precision, domain depth, and consistency over unvetted crowd scale."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {VETTING_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white border border-[rgba(20,23,26,0.08)] relative flex flex-col"
              >
                <div className="font-display text-4xl font-extrabold text-[rgba(236,94,39,0.25)] mb-3">
                  {step.step}
                </div>
                <h3 className="font-display text-base font-bold text-[#12151A] mb-2">{step.title}</h3>
                <p className="text-xs text-[#5F646D] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planetary Contributor Network Density Showcase */}
      <section className="section section-tint !py-12">
        <div className="container">
          <div className="bg-[#0B0E14] text-white rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.08)] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Column: Planetary Operations Info */}
              <div className="lg:col-span-5 p-8 md:p-12 z-10 flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EC5E27] mb-3">
                  <Globe2 size={16} /> PLANETARY DATA DENSITY
                </span>
                <h2 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                  Follow-the-sun throughput across 100+ countries.
                </h2>
                <p className="text-sm md:text-base text-[#CBD5E1] leading-relaxed mb-6">
                  Continuous 24/7 global operations delivering synchronized collection, multi-modal
                  annotation, and real-time model evaluation across every major continent.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono text-[#E2E8F0] mb-8">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[#EC5E27] font-bold text-base">24 Time Zones</div>
                    <div className="text-[11px] text-[#94A3B8]">Uninterrupted delivery</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[#EC5E27] font-bold text-base">100+ Sovereign Hubs</div>
                    <div className="text-[11px] text-[#94A3B8]">Localized provenance</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link to="/contact" className="button button-crimson">
                    Deploy Global Network <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Seamless Global Orbital Visual */}
              <div className="lg:col-span-7 relative h-[360px] lg:h-[480px] w-full overflow-hidden">
                <img
                  src="/images/network_globe.jpg"
                  alt="DaQube Global Contributor Network Density"
                  className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E14] via-[#0B0E14]/30 to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/30 to-transparent lg:hidden" />

                {/* HUD Glass Tag in corner */}
                <div className="absolute bottom-5 right-5 bg-[#0B0E14]/85 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl flex items-center gap-2 text-xs font-mono text-white shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span>Real-Time Contributor Mesh · Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-white">
        <div className="container cta-panel">
          <div className="cta-symbol">
            <Globe2 size={26} />
          </div>
          <div className="cta-copy">
            <span className="eyebrow">TAILORED COHORTS</span>
            <h2>Need a custom demographic or specialist cohort?</h2>
            <p>
              Tell us your exact target criteria, language requirements, and volume. We assemble
              calibrated contributor teams in as little as 48 hours.
            </p>
          </div>
          <Link className="button button-crimson" to="/contact">
            Request Specialist Cohort <ArrowRight size={17} />
          </Link>
          <span className="cta-watermark">NET</span>
        </div>
      </section>
    </>
  );
}

export default NetworkPage;
