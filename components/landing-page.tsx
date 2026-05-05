"use client";

import type { ReactNode } from "react";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Calendar,
  CheckCircle,
  Hospital,
  Lock,
  PhoneCall,
  TrendingUp,
  User,
  Heart,
  Users,
  Shield,
  Clock,
  Sparkles,
  MessageSquare,
} from "lucide-react";

// --- Data ---

const workflow = [
  {
    icon: PhoneCall,
    title: "Request Capture",
    body: "Every request—WhatsApp, call, or walk-in—is captured instantly. Patients never feel unheard.",
  },
  {
    icon: Calendar,
    title: "Seamless Access",
    body: "Beautifully branded scheduling and automated reminders that keep care on track.",
  },
  {
    icon: Hospital,
    title: "Coordinated Care",
    body: "Provider teams stay in sync with real-time intake data. No more fragmented handoffs.",
  },
  {
    icon: TrendingUp,
    title: "Resolved Outcomes",
    body: "Every encounter is documented and verified, ensuring healthcare stays focused on healing.",
  },
];

const moats = [
  {
    title: "Rooted in Workflow",
    body: "We don't just provide software; we provide the operational heartbeat of the modern clinic.",
  },
  {
    title: "Network of Trust",
    body: "Direct integrations with health insurers ensure that coverage is clear before care begins.",
  },
  {
    title: "Intelligence that Heals",
    body: "Our data helps providers predict demand and resource care where it's needed most.",
  },
  {
    title: "Resilient by Design",
    body: "Built for local reality. Connectivity and power shouldn't dictate the quality of care.",
  },
];

const liveRequests = [
  { id: "LL-2048", patient: "Aisha M.", need: "Antenatal follow-up", channel: "WhatsApp", time: "09:42" },
  { id: "LL-2049", patient: "Emeka O.", need: "Lab review", channel: "Phone call", time: "09:44" },
  { id: "LL-2050", patient: "Musa I.", need: "Pediatric consult", channel: "Walk-in", time: "09:46" },
  { id: "LL-2051", patient: "Grace T.", need: "Pharmacy refill", channel: "WhatsApp", time: "09:48" },
  { id: "LL-2052", patient: "Chidi N.", need: "Cardiology", channel: "Referral", time: "09:51" },
];

// --- Components ---

function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function LandingPage() {
  const [showPortal, setShowPortal] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <main className="min-h-screen bg-[#0A1414] text-[#F5F1E8] selection:bg-accent/30 selection:text-white">
      <SiteHeader onPortalClick={() => setShowPortal(true)} onDemoClick={() => setShowDemoForm(true)} />
      
      <AnimatePresence>
        {showPortal && <AuthPortal onClose={() => setShowPortal(false)} />}
        {showDemoForm && <DemoForm onClose={() => setShowDemoForm(false)} />}
      </AnimatePresence>

      <Hero onDemoClick={() => setShowDemoForm(true)} />
      <AboutSection />
      <ExperienceSection />
      <DesignPartnerSection onDemoClick={() => setShowDemoForm(true)} />
      <PhilosophySection />
      <ClosingSection onDemoClick={() => setShowDemoForm(true)} />

      <footer className="border-t border-white/[0.05] py-20 text-center bg-[#0A1414]">
        <div className="container-page">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="size-5 rounded-full bg-accent relative">
                <div className="absolute inset-1 border-2 border-[#0A1414] rounded-full" />
              </div>
              <span className="font-serif text-lg font-medium tracking-tight text-white">Lifelyn</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8270]">
              &copy; 2026 &middot; Lagos, Nigeria &middot; Modern Healthcare Infrastructure
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SiteHeader({ onPortalClick, onDemoClick }: { onPortalClick: () => void; onDemoClick: () => void }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.05] bg-[#0A1414]/60 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-6 rounded-full bg-accent relative">
            <div className="absolute inset-1.5 border-2 border-[#0A1414] rounded-full" />
          </div>
          <span className="font-serif text-xl font-medium tracking-tight text-white">Lifelyn</span>
        </div>

        <nav className="hidden items-center gap-10 text-[10px] font-mono uppercase tracking-[0.2em] text-[#C8C0A8] md:flex">
          <a href="#about" className="transition hover:text-accent">About</a>
          <a href="#how-it-works" className="transition hover:text-accent">How it Works</a>
          <button onClick={onDemoClick} className="transition hover:text-accent">Book a Demo</button>
        </nav>

        <button onClick={onPortalClick} className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-[10px] font-mono uppercase tracking-[0.2em] text-[#F5F1E8] hover:bg-white/[0.08] transition-colors">
          Sign In
        </button>
      </div>
    </header>
  );
}

function Hero({ onDemoClick }: { onDemoClick: () => void }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [2, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative pt-40 pb-40 overflow-hidden border-b border-white/[0.05]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(245,241,232,0.025)_1px,transparent_0)] bg-[size:32px_32px]" />

      <div className="container-page relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <FadeIn>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light leading-[0.95] tracking-[-0.03em] font-serif text-[#F5F1E8]">
              Every patient request, <em className="italic text-accent font-normal">captured.</em><br />
              Every appointment, kept.<br />
              Every encounter, <em className="italic text-gold font-normal">valued.</em>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="mt-12 mx-auto max-w-2xl font-serif text-2xl sm:text-3xl font-light leading-relaxed text-[#C8C0A8]">
              Join our exclusive design-partner program. We&apos;re building the future of African healthcare access, starting with your hospital.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-16 flex justify-center">
              <button onClick={onDemoClick} className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-accent px-12 text-lg font-medium text-[#0A1414] transition-all hover:scale-[1.02] shadow-[0_20px_40px_rgba(45,212,191,0.2)]">
                Book a Demo
                <ArrowRight className="size-5" />
              </button>
            </div>
          </FadeIn>
        </div>

        <motion.div 
          className="mt-32 w-full max-w-5xl mx-auto"
          style={{ y, rotateX, opacity, perspective: 1200 }}
        >
          <HeroDashboard />
        </motion.div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  const [tick, setTick] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setTick((current) => current + 1), 3000);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const request = liveRequests[tick % liveRequests.length];

  return (
    <div className="relative rounded-2xl transform-gpu">
      <div className="absolute -inset-1 bg-accent/10 blur-xl rounded-2xl opacity-50" />
      
      <div 
        className="relative overflow-hidden rounded-2xl bg-[#0F1C1C]/90 backdrop-blur-2xl border border-white/[0.08]"
        style={{
          boxShadow: "0 40px 100px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.05)",
        }}
      >
        <div className="flex h-14 items-center justify-between border-b border-white/[0.05] bg-black/10 px-6">
          <div className="flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-white/10" />
            <div className="size-2.5 rounded-full bg-white/10" />
            <div className="size-2.5 rounded-full bg-white/10" />
          </div>
          <div className="flex items-center gap-2 font-mono text-[9px] text-[#8A8270] uppercase tracking-[0.2em]">
            <Lock className="size-3" />
            lifelyn.app/provider-console
          </div>
          <div className="w-10" />
        </div>
        
        <div className="p-8 sm:p-12 grid md:grid-cols-2 gap-12">
           <div className="flex flex-col">
             <div className="text-[10px] font-mono text-[#8A8270] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
               <span className="size-1.5 rounded-full bg-accent animate-pulse" />
               Live Intake Preview
             </div>
             
             <div className="relative h-[140px]">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={tick}
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 10 }}
                   transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                   className="absolute inset-0 p-6 rounded-xl border border-white/[0.05] bg-white/[0.02] shadow-xl"
                 >
                   <div className="flex justify-between items-start">
                     <div className="flex items-center gap-4">
                       <div className="size-10 rounded-full bg-accent/10 text-accent flex items-center justify-center border border-accent/20">
                         <User className="size-5" />
                       </div>
                       <div>
                         <div className="font-medium text-[#F5F1E8] text-lg tracking-tight">{request.patient}</div>
                         <div className="text-sm text-[#C8C0A8]">{request.need}</div>
                       </div>
                     </div>
                     <div className="font-mono text-[10px] text-accent">{request.time}</div>
                   </div>
                   
                   <div className="mt-6 flex gap-3">
                     <span className="inline-flex items-center px-3 py-1 rounded bg-white/5 text-[9px] uppercase tracking-[0.2em] text-[#8A8270] font-mono border border-white/5">
                       {request.channel}
                     </span>
                     <span className="inline-flex items-center px-3 py-1 rounded bg-accent/5 text-[9px] uppercase tracking-[0.2em] text-accent font-mono border border-accent/10">
                       Awaiting Triage
                     </span>
                   </div>
                 </motion.div>
               </AnimatePresence>
             </div>
           </div>
           
           <div className="flex flex-col">
             <div className="text-[10px] font-mono text-[#8A8270] uppercase tracking-[0.2em] mb-8">System Pulse</div>
             <div className="grid grid-cols-1 gap-4">
                <div className="p-6 rounded-xl border border-white/[0.05] bg-white/[0.01]">
                   <div className="text-4xl font-serif font-light text-[#F5F1E8]">248</div>
                   <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8A8270] mt-3">Captured Requests</div>
                </div>
                <div className="p-6 rounded-xl border border-white/[0.05] bg-white/[0.01]">
                   <div className="text-4xl font-serif font-light text-accent">98.2%</div>
                   <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8A8270] mt-3">SLA Compliance</div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="border-b border-white/[0.05] py-40 bg-[#0A1414]">
      <div className="container-page grid gap-24 lg:grid-cols-2 items-center">
        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/[0.1] bg-white/[0.02]">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A1414] to-transparent opacity-40 z-10" />
           <div className="absolute inset-0 flex items-center justify-center">
              <Users className="size-20 text-accent/20" strokeWidth={1} />
           </div>
           <div className="absolute bottom-10 left-10 right-10 z-20">
              <p className="font-serif italic text-2xl text-[#F5F1E8]">&quot;Care begins the moment a patient reaches out. Not when they finally see a doctor.&quot;</p>
           </div>
        </div>

        <div>
          <FadeIn>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 inline-block">Our Mission</span>
            <h2 className="text-5xl font-light leading-tight sm:text-6xl text-[#F5F1E8] font-serif tracking-tight">
              Restoring the human link in <em className="italic text-accent font-normal">healthcare.</em>
            </h2>
            <div className="mt-12 h-px w-20 bg-accent/40" />
            <p className="mt-12 text-2xl font-light leading-relaxed text-[#C8C0A8] font-serif">
              Lifelyn is replacing fragmented, manual tracking with a modern access layer designed for the African context. We empower providers to capture every request and coordinate care with compassion.
            </p>
          </FadeIn>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <Stat num="220" suffix="min" label="Wait times reduced by structured digital intake" />
            <Stat num="98" suffix="%" label="Clinical engagement achieved through unified channels" tone="gold" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ num, suffix, label, tone = "accent" }: { num: string; suffix: string; label: string; tone?: string }) {
  const toneMap: any = {
    accent: "text-accent",
    signal: "text-[#FF6B35]",
    gold: "text-[#E5B567]",
  };
  return (
    <FadeIn className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
      <div className={`font-serif text-5xl font-light ${toneMap[tone] || "text-accent"}`}>
        {num}<span className="text-2xl text-[#8A8270] font-sans ml-1">{suffix}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#C8C0A8] max-w-[20ch]">{label}</p>
    </FadeIn>
  );
}

function ExperienceSection() {
  return (
    <section id="how-it-works" className="border-b border-white/[0.05] py-40 bg-[#0A1414]">
      <div className="container-page">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 inline-block">The Experience</span>
          <h2 className="text-5xl font-light sm:text-6xl text-[#F5F1E8] font-serif tracking-tight">How it works.</h2>
        </FadeIn>

        <div className="mt-32 grid gap-8 lg:grid-cols-4">
          {workflow.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <div className="relative p-10 rounded-2xl border border-white/[0.05] h-full bg-white/[0.01]">
                <div className="mb-10 flex items-center justify-between">
                  <div className="size-12 flex items-center justify-center rounded-full border border-accent/20 text-accent">
                    <step.icon className="size-5" />
                  </div>
                  <span className="font-mono text-[10px] text-[#8A8270]">STAGE 0{i + 1}</span>
                </div>
                <h4 className="text-xl font-medium mb-4 text-[#F5F1E8] font-serif">{step.title}</h4>
                <p className="text-sm leading-relaxed text-[#C8C0A8]">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignPartnerSection({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section className="relative border-b border-white/[0.05] py-40 bg-[#0F1C1C]">
      <div className="container-page">
        <div className="max-w-4xl">
          <FadeIn>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 inline-block">Design Partner Program</span>
            <h2 className="text-5xl font-light leading-tight sm:text-6xl text-[#F5F1E8] font-serif tracking-tight">
              Shape the future of <em className="italic text-accent font-normal">African healthcare.</em>
            </h2>
            <p className="mt-10 text-2xl font-light text-[#C8C0A8] font-serif leading-relaxed">
              We are seeking one visionary hospital to join us as our first design partner. You&apos;ll get early access to our platform, direct influence on our roadmap, and dedicated support to transform your patient experience.
            </p>
            <div className="mt-16">
               <button onClick={onDemoClick} className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-white px-12 text-lg font-medium text-[#0A1414] transition-all hover:scale-[1.02]">
                  Become a Design Partner
                  <Sparkles className="size-5 text-accent" />
               </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="py-40 border-b border-white/[0.05] bg-[#0A1414] overflow-hidden">
      <div className="container-page grid gap-24 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <FadeIn>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6 inline-block">Our Approach</span>
            <h2 className="text-5xl font-light leading-tight text-white font-serif tracking-tight">Built for <em className="italic text-accent font-normal">resilience.</em></h2>
            <p className="mt-10 text-[#C8C0A8] text-2xl font-light font-serif leading-relaxed">
              Healthcare infrastructure should be as resilient as the providers who use it and as human as the patients they serve.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {moats.map((moat, i) => (
            <FadeIn key={moat.title} delay={i * 0.1}>
              <div className="p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] h-full backdrop-blur-sm">
                <div className="font-serif italic text-accent text-2xl mb-6 opacity-60">{(i + 1).toString().padStart(2, '0')}</div>
                <h4 className="text-xl font-medium mb-4 text-white font-serif">{moat.title}</h4>
                <p className="text-sm leading-relaxed text-[#C8C0A8]">{moat.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingSection({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section className="py-60 text-center relative overflow-hidden bg-[#0A1414]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[800px] bg-accent/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="container-page relative z-10">
        <FadeIn>
          <h2 className="text-5xl font-light leading-tight max-w-4xl mx-auto sm:text-7xl lg:text-8xl text-white font-serif tracking-tight">
            Ready to reclaim your <em className="italic text-accent font-normal">revenue?</em>
          </h2>
          <p className="mt-12 text-2xl sm:text-3xl font-light text-[#C8C0A8] font-serif max-w-2xl mx-auto leading-relaxed">
            Join the visionary hospitals putting the patient experience first with the modern access layer.
          </p>
          <div className="mt-20 flex justify-center">
            <button onClick={onDemoClick} className="inline-flex h-20 items-center justify-center gap-4 rounded-full bg-accent px-16 text-xl font-medium text-[#0A1414] transition-all hover:scale-[1.05] shadow-[0_20px_40px_rgba(45,212,191,0.3)]">
              Book a Demo
              <ArrowRight className="size-6" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- Modals ---

function DemoForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
    >
      <div className="absolute inset-0 bg-[#0A1414]/90 backdrop-blur-2xl" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-[#0F1C1C] border border-white/[0.08] shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
      >
        <div className="p-10 pb-6">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="size-5 rounded-full bg-accent relative">
                <div className="absolute inset-1 border-2 border-[#0F1C1C] rounded-full" />
              </div>
              <span className="font-serif text-lg font-medium text-white">Book a Demo</span>
            </div>
            <button onClick={onClose} className="text-[#8A8270] hover:text-[#F5F1E8] transition-colors">
              <span className="sr-only">Close</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <h2 className="text-3xl font-light mb-2 text-[#F5F1E8] font-serif">
            Let&apos;s transform your hospital.
          </h2>
          <p className="text-[#8A8270] text-[10px] font-mono uppercase tracking-[0.2em]">
            Schedule a conversation with our founding team.
          </p>
        </div>

        {!submitted ? (
          <form className="px-10 pb-10 space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div className="grid sm:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-[0.2em] text-[#8A8270] font-mono ml-1">Hospital Name</label>
                 <input type="text" required placeholder="Lagos General Specialist" className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#0A1414] px-4 text-sm text-[#F5F1E8] outline-none transition placeholder:text-white/10 focus:border-accent/40" />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-[0.2em] text-[#8A8270] font-mono ml-1">Your Name</label>
                 <input type="text" required placeholder="Dr. Adewale" className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#0A1414] px-4 text-sm text-[#F5F1E8] outline-none transition placeholder:text-white/10 focus:border-accent/40" />
               </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-[0.2em] text-[#8A8270] font-mono ml-1">Work Email</label>
                 <input type="email" required placeholder="admin@hospital.com" className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#0A1414] px-4 text-sm text-[#F5F1E8] outline-none transition placeholder:text-white/10 focus:border-accent/40" />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-[0.2em] text-[#8A8270] font-mono ml-1">Phone Number</label>
                 <input type="tel" required placeholder="+234..." className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#0A1414] px-4 text-sm text-[#F5F1E8] outline-none transition placeholder:text-white/10 focus:border-accent/40" />
               </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#8A8270] font-mono ml-1">What is your biggest operational challenge?</label>
              <textarea rows={3} placeholder="Tell us a bit about your current intake process..." className="w-full rounded-xl border border-white/[0.08] bg-[#0A1414] p-4 text-sm text-[#F5F1E8] outline-none transition placeholder:text-white/10 focus:border-accent/40 resize-none" />
            </div>

            <button type="submit" className="h-14 w-full rounded-full bg-[#F5F1E8] text-[#0A1414] font-medium mt-4 hover:bg-white transition-colors">
              Request Demo Access
            </button>
          </form>
        ) : (
          <div className="px-10 pb-20 pt-10 text-center">
             <div className="size-16 rounded-full bg-accent/10 text-accent flex items-center justify-center border border-accent/20 mx-auto mb-6">
                <CheckCircle className="size-8" />
             </div>
             <h3 className="text-2xl font-serif text-white mb-4">Request Received.</h3>
             <p className="text-[#C8C0A8] leading-relaxed">Our founding team will reach out within 24 hours to schedule your walkthrough.</p>
          </div>
        )}

        <div className="bg-black/20 p-8 flex items-center gap-4 border-t border-white/[0.05]">
          <Shield className="size-4 text-accent" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A8270] font-mono">
            Direct Founder Access &middot; Priority Onboarding
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AuthPortal({ onClose }: { onClose: () => void }) {
  const [view, setView] = useState<"login" | "signup">("login");

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
    >
      <div className="absolute inset-0 bg-[#0A1414]/90 backdrop-blur-2xl" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-[#0F1C1C] border border-white/[0.08] shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
      >
        <div className="p-10 pb-6">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="size-5 rounded-full bg-accent relative">
                <div className="absolute inset-1 border-2 border-[#0F1C1C] rounded-full" />
              </div>
              <span className="font-serif text-lg font-medium text-white">Portal</span>
            </div>
            <button onClick={onClose} className="text-[#8A8270] hover:text-[#F5F1E8] transition-colors">
              <span className="sr-only">Close</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <h2 className="text-3xl font-light mb-2 text-[#F5F1E8] font-serif">
            {view === "login" ? "Welcome back" : "Register Site"}
          </h2>
          <p className="text-[#8A8270] text-[10px] font-mono uppercase tracking-[0.2em]">
            {view === "login" ? "Partner Authentication" : "Request Partner Access"}
          </p>
        </div>

        <form className="px-10 pb-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
          {view === "signup" && (
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#8A8270] font-mono ml-1">Hospital Name</label>
              <input type="text" placeholder="Lagos General Specialist" className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#0A1414] px-4 text-sm text-[#F5F1E8] outline-none transition placeholder:text-white/10 focus:border-accent/40" />
            </div>
          )}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#8A8270] font-mono ml-1">Email Address</label>
            <input type="email" placeholder="admin@hospital.com" className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#0A1414] px-4 text-sm text-[#F5F1E8] outline-none transition placeholder:text-white/10 focus:border-accent/40" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#8A8270] font-mono ml-1">Password</label>
            <input type="password" placeholder="••••••••" className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#0A1414] px-4 text-sm text-[#F5F1E8] outline-none transition placeholder:text-white/10 focus:border-accent/40" />
          </div>

          <button className="h-14 w-full rounded-full bg-[#F5F1E8] text-[#0A1414] font-medium mt-4 hover:bg-white transition-colors">
            {view === "login" ? "Sign In" : "Request Access"}
          </button>
          
          <button 
            type="button"
            onClick={() => setView(view === "login" ? "signup" : "login")}
            className="w-full text-center text-[10px] text-[#8A8270] hover:text-accent transition mt-4 font-mono uppercase tracking-[0.2em]"
          >
            {view === "login" ? "Register provider site" : "Back to sign in"}
          </button>
        </form>

        <div className="bg-black/20 p-8 flex items-center gap-4 border-t border-white/[0.05]">
          <Lock className="size-4 text-accent" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A8270] font-mono">
            Secure Infrastructure &middot; NDPC Compliant
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
