# Lifelyn Landing Page — Claude Code Build Brief

## Project Overview

Build a production-grade landing page for **Lifelyn** (www.trylifelyn.com), the access & revenue-cycle layer for African healthcare providers.

**Primary goals:**
1. Investor signal — proves Lifelyn is a real, well-designed company (credibility)
2. Provider lead-gen — convert mid-tier hospital CTOs/admins to book a demo

**Target audiences (in order):**
1. VCs/angels researching African healthtech infrastructure (proof of execution)
2. Mid-tier Nigerian hospital managers (10–50 bed range) looking for scheduling/HMO solution
3. HMO executives considering partnerships

---

## Design System & Visual Direction

**Use the pitch deck as the design source of truth.**

### Color Palette
- **Background:** `#0A1414` (near-black, slightly green-tinted)
- **Soft background:** `#0F1C1C`
- **Text (primary):** `#F5F1E8` (off-white, warm)
- **Text (secondary):** `#C8C0A8` (muted tan)
- **Text (mute):** `#8A8270` (gray)
- **Accent:** `#2DD4BF` (teal/cyan)
- **Accent deep:** `#0F766E` (dark teal)
- **Signal/alert:** `#FF6B35` (orange-red)
- **Gold/secondary accent:** `#E5B567`

### Typography
- **Headers:** Georgia (serif), 36–56pt, bold or 300-weight italic for emphasis
- **Body:** Calibri (sans), 14–16pt, left-aligned
- **Mono/data:** Consolas (monospace), 8–10pt, for labels and numbers

### Visual Language
- Minimal decoration; whitespace is your ally
- No full-width colored bars or ribbons (avoid AI-slop aesthetics)
- Grids of 2, 3, or 4 columns for cards/stats
- Icons in small colored circles (36–40px) when needed
- Large stat callouts (60–72pt numbers with small labels below)
- Italic accent text for key phrases

---

## Page Structure & Sections

### 1. Hero Section
- **Goal:** Immediately communicate value to both investors and providers
- **Content:**
  - Headline: "Every patient request, captured. Every appointment, kept. **Every claim, paid.**"
  - Subheading: "The access & revenue-cycle layer for Africa's healthcare providers."
  - CTA: "Book a demo" (primary) + "View investor deck" (secondary, opens PDF link to pitch deck)
  - Optional: Small social proof line (e.g., "Trusted by [X] hospitals across Nigeria") — use placeholder if no traction yet
- **Visual:** No hero image. Rely on color, typography, and negative space. Optional: subtle animated accent shape (teal circle, very light opacity) in background
- **Layout:** Left-align text, CTA buttons below

### 2. Problem Statement
- **Goal:** Frame the pain in a way that resonates with both audiences
- **Content:**
  - Section header: "The chaos at the front door"
  - 2–3 short stats (pulled from pitch deck Slide 2):
    - "220 min average outpatient wait"
    - "33% missed-appointment rate"
    - "<23% of hospitals have EMR"
  - One short narrative paragraph (~2 sentences) about operational loss
- **Visual:** 2-column layout or stat cards (teal accent border on left side of each stat)
- **Tone:** Direct, not alarmist

### 3. Solution (How It Works)
- **Goal:** Explain the workflow simply enough for a hospital admin to "get it" in 10 seconds
- **Content:**
  - Section header: "One operating layer that turns patient demand into paid care"
  - Flow diagram: 5-step inline process (Patient Request → Capture → Schedule → Visit → Claim)
    - Each step is a card or inline box with an italic number (i, ii, iii, iv, v)
    - Brief 1-line description per step
  - Below flow: "What this means for providers" (1 short paragraph)
- **Visual:** Horizontal flow with arrows between steps. Use accent color for step numbers.
- **Mobile:** Stack vertically, remove arrows

### 4. Why Lifelyn (Value Props)
- **Goal:** Differentiate from competitors and signal moat
- **Content:**
  - Section header: "Why Lifelyn"
  - 3–4 value prop cards:
    1. **EMR-agnostic** — Works with any hospital system (not a competitor)
    2. **Offline-first** — Built for Nigerian power/connectivity reality
    3. **HMO-native** — Real-time eligibility checks, claim packaging (solves the pain VCs care about)
    4. **Data moat** — Every request builds a proprietary access dataset
  - Each card: Icon + bold title + 1-sentence description
- **Visual:** 2×2 grid (or responsive 4-col on desktop, 2-col on tablet, 1-col on mobile)
- **Tone:** Product-focused, not marketing-speak

### 5. Market Opportunity (for investors)
- **Goal:** Signal to VCs that this is a real, sized market
- **Content:**
  - Headline: "$2B+ opportunity in African healthcare provider software"
  - TAM/SAM/SOM visualization (simplified):
    - 3 concentric rectangles or boxes (not rings, to avoid complexity)
    - TAM: $2.1B (210K providers across sub-Saharan Africa)
    - SAM: $420M (42K facilities in Anglophone West Africa)
    - SOM: $48M (5-year target, 5K Nigerian providers)
  - Below: Brief stat line (e.g., "18–23% EMR adoption in Nigeria vs 96% in US")
- **Visual:** Simple, clean diagram. Use accent color for SOM layer.
- **Note:** This section is primarily for investor traffic; providers will skim it

### 6. Go-to-Market / How We Win
- **Goal:** Show execution credibility
- **Content:**
  - Headline: "How we're building this"
  - 3-phase timeline (visual card layout):
    - **Phase 1 (Now–Q2 2026):** "Design partners & wedge" — 10 Lagos design partners, prove -50% no-shows
    - **Phase 2 (Q2–Q4 2026):** "Channel partnerships" — Sign HMO co-marketing deal, 100+ paying providers
    - **Phase 3 (2027+):** "Scale & financing" — Ghana expansion, claims financing rail, $1.5M+ ARR
  - Each phase: Number, period, title, 2–3 bullet points
- **Visual:** 3-column layout on desktop, stack on mobile. Use accent color for phase numbers.
- **Tone:** Ambitious but grounded; show path to Series A

### 7. Team & Advisors
- **Goal:** Signal credibility, especially for investors
- **Content:**
  - Section header: "The team"
  - 3 founder/co-founder cards (photo placeholder + name + role + 1 line bio):
    - [Founder Name] — CEO & Co-founder
    - [Co-founder Name] — CTO & Co-founder
    - [Advisor Name] — Medical Director / Advisor
  - Optional: 3–4 advisor mini-cards (just name + title, no photo)
- **Visual:** 3-column grid on desktop, 1 per row on mobile. Use accent color for role label.
- **Note:** Photos are optional; text-only is fine. Placeholder text is acceptable for now.

### 8. CTA Section (Demo Booking)
- **Goal:** Convert inbound traffic to demo bookings
- **Content:**
  - Headline: "See Lifelyn in action"
  - Subheading: "Book a 15-minute demo with our team. We'll show you how to reduce no-shows by 50% and recover lost claim revenue."
  - CTA button: "Book a demo" (links to Calendly or similar booking tool)
  - Optional: "or email founders@lifelyn.health" (with fallback email)
- **Visual:** Centered, minimal. No form fields on the landing page itself — link to external booking tool.
- **Tone:** Direct, not pushy

### 9. Footer
- **Content:**
  - Logo + "Lifelyn" text
  - Links: "About" (future), "Blog" (future), "Docs" (future), "Privacy", "Terms"
  - Social links (LinkedIn, Twitter): optional, use placeholders
  - Copyright: "© 2026 Lifelyn. All rights reserved."
- **Visual:** Sparse, dark background (use `#0F1C1C`). No flashy decoration.

---

## Technical Requirements

### Framework & Setup
- **Framework:** Next.js 14+ (with App Router)
- **Styling:** Tailwind CSS (install via `npm install -D tailwindcss`)
- **Deployment:** Vercel (native Next.js support, zero config)
- **Performance:** Aim for Lighthouse scores >90 (Core Web Vitals: LCP <2.5s, CLS <0.1)

### Key Pages
- `/` — Main landing page (all sections above)
- `/pitch-deck` — Redirect or embed the PPTX (optional; can just link externally to avoid payload bloat)
- Future: `/about`, `/blog`, `/docs`

### Dynamic Content to Prepare
- **Calendly/Booking URL:** Placeholder for now; replace with real booking link once set up
- **Email address:** founders@lifelyn.health (or equivalent)
- **Pitch deck URL:** Link to `/files/lifelyn-pitch-deck.pdf` (you'll upload the PDF to `public/files/`)
- **Team photos:** Use placeholder images (e.g., Unsplash or placeholder.com) for now; replace with real photos later

### Performance Checklist
- [ ] No unoptimized images (use `next/image`)
- [ ] Responsive design (mobile-first)
- [ ] Light DOM, lazy-load where possible
- [ ] No external font files that block render (use system fonts or Google Fonts with `font-display: swap`)

### Accessibility (A11y)
- [ ] Semantic HTML (headings hierarchy, nav landmarks, main, footer)
- [ ] Color contrast WCAG AA compliant
- [ ] Alt text on all images (even decorative shapes should have `alt=""`)
- [ ] Keyboard-navigable CTAs

---

## Content Tone & Voice

- **For investors:** Professional, data-driven, confident but not arrogant
- **For providers:** Clear, jargon-light, benefit-focused (not feature-dumping)
- **Overall:** Warm but authoritative. Nigerian healthcare context should be visible without being preachy.

---

## Deployment & Next Steps

1. **Build locally:** Claude Code will scaffold the Next.js repo with all sections
2. **Test:** Verify responsiveness (mobile, tablet, desktop) and 404 on typos
3. **Deploy to Vercel:**
   - Connect your GitHub repo to Vercel
   - Set environment variables if any (e.g., booking link, email)
   - Deploy with `vercel`
4. **DNS:** Point www.trylifelyn.com to Vercel (via CNAME or Nameserver)
5. **Replace placeholders:** As soon as you have real team photos, booking link, etc., update and redeploy

---

## Files to Attach to Claude Code

1. **lifelyn-landing-brief.md** (this file)
2. **lifelyn-pitch-deck.html** (for design reference — Claude Code will extract color palette and typography)
3. **design-tokens.json** (optional; I'll create this if needed)

---

## Initial Claude Code Prompt

Paste this into Claude Code to start:

```
Build a production-grade Next.js landing page for Lifelyn (www.trylifelyn.com) using this brief:

[paste entire brief above]

Key requirements:
- Use Tailwind CSS for styling
- Match the color palette from the pitch deck (see attached HTML for reference)
- Build all 9 sections (Hero → Footer)
- Make it fully responsive (mobile-first)
- Use next/image for images
- Include placeholder team photos
- CTA buttons link to Calendly (use placeholder URL for now)
- Aim for Lighthouse >90
- Deploy-ready for Vercel

Start with the Hero section and work down. After building, run `npm run build` and fix any errors before committing.
```

---

## Iteration Plan (Post-Build)

After Claude Code ships the first version, here's the review/iteration cycle:

1. **Visual QA:** Take screenshots of Hero + one other section, eyeball for:
   - Text overflow on mobile
   - Color contrast issues
   - Alignment inconsistencies
2. **Performance QA:** Run Lighthouse locally
3. **Copy polish:** Tweak headlines and CTAs based on investor feedback
4. **Swap placeholders:** Replace team photos, booking link, etc.

Expected time: 2–4 iterations, 30 min each.

---

## Out of Scope (For Later)

- Blog functionality (Next.js MDX setup can wait)
- Analytics (Google Analytics tag can be added post-launch)
- Email signup form (use Substack/ConvertKit widget if needed)
- Dark/light mode toggle (stick with dark theme for now)

---

## Success Criteria

By end of Claude Code session, you should have:
- [ ] A live-deployable Next.js repo with all 9 sections
- [ ] Mobile-responsive design (tested on phone, tablet, desktop)
- [ ] Tailwind-styled, matching pitch deck colors
- [ ] Two clear CTAs (Book demo + View pitch deck)
- [ ] Lighthouse score >85 (can optimize to >90 in next iteration)
- [ ] Clean git history (commits for each section)
- [ ] README with deploy instructions

---

## Contact & Questions During Build

If Claude Code hits blockers:
1. Check the brief section again — it's comprehensive
2. Review the attached pitch deck HTML for design patterns
3. Ask Claude Code to reference specific sections (e.g., "Hero should match slide 1 styling")
4. If truly stuck, pause and ask for clarification in this chat

Good luck! 🚀
