# Lifelyn Landing Page — Claude Code Handover Summary

## What You Now Have

✅ **CLAUDE_CODE_PROMPT.txt** — Exact text to paste into Claude Code to start the build
✅ **lifelyn-landing-brief.md** — Full detailed brief (9 sections, content, tone, technical specs)
✅ **design-tokens.json** — Color palette, typography, spacing, animations (machine-readable)
✅ **lifelyn-pitch-deck.html** — Design reference (for visual patterns, not content)
✅ **lifelyn-pitch-deck.pptx** — Investor deck (link on landing page + reference)

## Next Steps (After Claude Code Builds)

### 1. **Access Claude Code**
Go to [claude.ai/code](https://claude.ai/code) or open the Claude Code app from the web interface.

### 2. **Paste the Prompt**
1. Click "+ New Project" or "Create"
2. Paste the entire content of **CLAUDE_CODE_PROMPT.txt** into the input field
3. Attach the 3 files as reference:
   - lifelyn-landing-brief.md
   - design-tokens.json
   - lifelyn-pitch-deck.html
4. Send

### 3. **Monitor the Build** (30–45 min)
Claude Code will:
- Scaffold a Next.js project
- Install Tailwind CSS
- Build all 9 sections (Hero → Footer)
- Set up responsive design
- Create placeholder images & links

You don't need to do anything; just watch the terminal output.

### 4. **Review & Test** (10 min)
Once built, Claude Code will give you a local URL (e.g., `http://localhost:3000`). 
- Open it in your browser
- Test on mobile (dev tools F12 → responsive mode)
- Check Lighthouse (DevTools → Lighthouse)
- Look for:
  - Text overflow on mobile
  - Color contrast issues
  - Broken links or missing placeholders

### 5. **Iterate if Needed** (Optional, 15–30 min)
If you find issues, tell Claude Code. Common fixes:
- "Button text wraps on mobile — make font smaller"
- "Stat cards feel cramped — increase padding"
- "Hero image placeholder looks weird — use a different source"

Claude Code will fix and retest.

### 6. **Deploy to Vercel** (5 min)
Once satisfied:
1. Claude Code will provide deployment instructions
2. **Recommended:** Push to GitHub first (Claude Code can do this)
3. Connect GitHub repo to Vercel
4. Point www.trylifelyn.com to Vercel (DNS CNAME)

---

## Key Decisions Locked In

| Item | Decision |
|------|----------|
| **Goal** | Investor signal + Provider lead-gen |
| **Tech** | Next.js 14+ + Tailwind CSS |
| **Domain** | www.trylifelyn.com |
| **Primary CTA** | "Book a demo" → Calendly |
| **Secondary CTA** | "View investor deck" → pitch-deck.pdf |
| **Color scheme** | Dark (#0A1414) with teal accent (#2DD4BF) |
| **Responsiveness** | Mobile-first, tested on phone/tablet/desktop |

---

## What Claude Code Will Handle

✅ Project scaffolding (Next.js, Tailwind setup)
✅ All 9 page sections (HTML + Tailwind styling)
✅ Responsive design (tested on multiple breakpoints)
✅ Placeholder images & links
✅ Performance optimization (next/image, lazy loading)
✅ Accessibility (semantic HTML, alt text, color contrast)
✅ Clean git history (commits per section)
✅ Deployment-ready code (Vercel-compatible)

---

## What YOU Still Need to Do (Later)

- [ ] Replace placeholder team photos with real headshots
- [ ] Set up Calendly booking link + update CTA URL
- [ ] Upload pitch deck PDF to `/public/files/lifelyn-pitch-deck.pdf`
- [ ] Set up founder email (founders@lifelyn.health)
- [ ] Add real social media links (LinkedIn, Twitter)
- [ ] Domain DNS setup (point www.trylifelyn.com to Vercel)
- [ ] Optional: Analytics setup (Google Analytics tag)
- [ ] Optional: Blog setup (later phase, not needed for launch)

---

## Timeline

- **Claude Code build:** 30–45 min (hands-off)
- **Review & test:** 10–15 min
- **Iterations (if needed):** 15–30 min per round
- **Deploy to Vercel:** 5 min
- **Total time to live:** ~2 hours (mostly Claude Code working)

---

## If Claude Code Asks for Clarification

The brief is comprehensive, but if Claude Code asks for details, here are quick answers:

**Q: How many team members should we show?**
A: 3 founders/advisors; photos can be placeholders for now.

**Q: What's the exact Calendly URL?**
A: Use `https://calendly.com/lifelyn/demo` (placeholder); replace when your real Calendly is set up.

**Q: Should we include a newsletter signup?**
A: No — focus on "book demo" and "view deck" CTAs only.

**Q: Do we need dark/light mode toggle?**
A: No — stay dark theme throughout.

**Q: What about animations?**
A: Minimal. Fade-in on scroll is nice but not required.

---

## Success Checklist

By the end, your landing page should:

- [ ] Display all 9 sections without scroll/layout breaks
- [ ] Have two working CTAs (Book demo + View deck)
- [ ] Look good on iPhone 12, iPad, and desktop (1920px)
- [ ] Achieve Lighthouse >85 (aim for >90)
- [ ] Have no console errors in DevTools
- [ ] Deploy to Vercel without errors
- [ ] Be ready to show investors & providers

---

## Need Help?

If something breaks:
1. **Check the brief** — it has all the details
2. **Ask Claude Code directly** — it knows the codebase
3. **Reference the design tokens** — for colors, spacing
4. **Look at the pitch deck HTML** — for design patterns

---

## Ready to Go?

**Open Claude Code, paste CLAUDE_CODE_PROMPT.txt, attach the 3 reference files, and hit send.**

Claude Code will take it from there. You'll have a live landing page in under 2 hours. 🚀

---

**Questions before you start?** Feel free to ask. Otherwise, go build! 💪
