# Asset Path Reference Guide

Quick reference for updating paths when migrating from external URLs to local assets.

---

## 🏠 Home Page (pages/Home.tsx)

### "What Makes Us Different" Section
```typescript
// Line ~156 - Service as an Agent
image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/service-as-agent.jpg"

// Line ~161 - Domain Engineering  
image: "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/domain-engineering.jpg"

// Line ~166 - Production Systems
image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/production-systems.jpg"
```

### "Vertical Focus" Section
```typescript
// Line ~198 - AI Engineering Card
src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
→ src="/assets/images/ai-engineering.jpg"

// Line ~217 - Healthcare Card
src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
→ src="/assets/images/healthcare.jpg"

// Line ~236 - Creative Card
src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
→ src="/assets/images/creative.jpg"
```

### "NextComply AI" Section (Video)
```typescript
// Line ~335 - Video Poster
poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
→ poster="/assets/images/video-poster-dashboard.jpg"

// Line ~338 - Video Source
<source src="https://assets.mixkit.co/videos/preview/mixkit-software-interface-scrolling-on-computer-screen-29774-large.mp4" type="video/mp4" />
→ <source src="/assets/videos/nextcomply-demo.mp4" type="video/mp4" />
```

### "Production AI Methodology" Section
```typescript
// Line ~369 - Secure Data Layer
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/secure-data-layer.jpg"

// Line ~375 - Orchestration
image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/orchestration.jpg"

// Line ~381 - Governance
image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/governance.jpg"

// Line ~387 - Observability
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/observability.jpg"
```

### "Capability Center" Section
```typescript
// Line ~446 - Jamshedpur Skyline
src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Skyline_at_Jamshedpur.jpg"
→ src="/assets/images/jamshedpur-skyline.jpg"
```

---

## 📄 About Page (pages/About.tsx)

```typescript
// Line ~24 - Hero Background
src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
→ src="/assets/images/about-hero.jpg"
```

---

## 🏢 Capability Center (pages/CapabilityCenter.tsx)

```typescript
// Line ~11 - Hero Image
src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Skyline_at_Jamshedpur.jpg"
→ src="/assets/images/jamshedpur-skyline.jpg"

// Line ~35 - Training Lab
src="https://images.unsplash.com/photo-1565514020125-99d6387796d8?auto=format&fit=crop&q=80&w=800"
→ src="/assets/images/capability-training.jpg"

// Line ~53 - Team Collaboration
src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
→ src="/assets/images/capability-team.jpg"

// Line ~71 - City View
src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
→ src="/assets/images/capability-city.jpg"
```

---

## 📚 Case Studies (pages/resources/CaseStudies.tsx)

```typescript
// Line ~11 - Financial Services
image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/case-financial.jpg"

// Line ~23 - Healthcare Provider
image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/case-healthcare.jpg"

// Line ~35 - Robotics Manufacturer
image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/case-robotics.jpg"
```

---

## 💡 Insights (pages/resources/Insights.tsx)

```typescript
// Line ~14 - AI Agents in Production
image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/insight-ai-agents.jpg"

// Line ~23 - RAG Systems
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/insight-rag-systems.jpg"

// Line ~32 - Healthcare AI
image: "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/insight-healthcare-ai.jpg"

// Line ~41 - Production Systems
image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/insight-production.jpg"

// Line ~50 - Compliance
image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/insight-compliance.jpg"

// Line ~59 - Infrastructure
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
→ image: "/assets/images/insight-infrastructure.jpg"
```

---

## 🔍 Search & Replace Tips

### Using VS Code:
1. Press `Ctrl+Shift+F` (Find in Files)
2. Enable regex mode (icon with `.*`)
3. Search: `https://images\.unsplash\.com/[^"]+`
4. Replace manually with local paths

### Using sed (Linux/Mac):
```bash
sed -i 's|https://images.unsplash.com/photo-1677442136019-21780ecad995[^"]*|/assets/images/service-as-agent.jpg|g' pages/Home.tsx
```

### Using PowerShell (Windows):
```powershell
(Get-Content pages/Home.tsx) -replace 'https://images\.unsplash\.com/photo-1677442136019-21780ecad995[^"]*', '/assets/images/service-as-agent.jpg' | Set-Content pages/Home.tsx
```

---

## ✅ Verification Checklist

After updating paths:

- [ ] Run `npm run dev`
- [ ] Check Home page loads all images
- [ ] Check About page hero image
- [ ] Check Capability Center images
- [ ] Check Case Studies thumbnails
- [ ] Check Insights page cards
- [ ] Check video plays correctly
- [ ] Check browser console for 404 errors
- [ ] Test on multiple screen sizes
- [ ] Verify lazy loading works

---

## 📝 Notes

- All paths use absolute URLs starting with `/assets/`
- Vite serves from project root automatically
- No special configuration needed
- Images should be optimized before adding (compress, resize)
- Consider WebP format for better compression
- Keep original filenames descriptive

---

## 🎯 Quick Migration Script

Save this as `migrate-assets.sh`:

```bash
#!/bin/bash

# Download all images
curl "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" -o assets/images/service-as-agent.jpg
curl "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=800" -o assets/images/domain-engineering.jpg
# ... add all other URLs

# Update paths in files (example)
sed -i 's|https://images.unsplash.com/photo-1677442136019-21780ecad995[^"]*|/assets/images/service-as-agent.jpg|g' pages/Home.tsx

echo "Migration complete! Run npm run dev to test."
```

Run with: `bash migrate-assets.sh`
