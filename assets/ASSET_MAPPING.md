# Asset Path Mapping

This document maps all external URLs currently used in the project to their intended local paths.

## Images

### Home Page (Home.tsx)
- `https://images.unsplash.com/photo-1677442136019-21780ecad995` → `/assets/images/service-as-agent.jpg`
- `https://images.unsplash.com/photo-1576091160550-217358c7db81` → `/assets/images/domain-engineering.jpg`
- `https://images.unsplash.com/photo-1558494949-ef526b0042a0` → `/assets/images/production-systems.jpg`
- `https://images.unsplash.com/photo-1518770660439-4636190af475` → `/assets/images/ai-engineering.jpg`
- `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d` → `/assets/images/healthcare.jpg`
- `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe` → `/assets/images/creative.jpg`
- `https://images.unsplash.com/photo-1563986768609-322da13575f3` → `/assets/images/secure-data-layer.jpg`
- `https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5` → `/assets/images/orchestration.jpg`
- `https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d` → `/assets/images/governance.jpg`
- `https://images.unsplash.com/photo-1551288049-bebda4e38f71` → `/assets/images/observability.jpg`
- `https://upload.wikimedia.org/wikipedia/commons/c/c3/Skyline_at_Jamshedpur.jpg` → `/assets/images/jamshedpur-skyline.jpg`

### About Page (About.tsx)
- `https://images.unsplash.com/photo-1451187580459-43490279c0fa` → `/assets/images/about-hero.jpg`

### Capability Center (CapabilityCenter.tsx)
- `https://upload.wikimedia.org/wikipedia/commons/c/c3/Skyline_at_Jamshedpur.jpg` → `/assets/images/jamshedpur-skyline.jpg`
- `https://images.unsplash.com/photo-1565514020125-99d6387796d8` → `/assets/images/capability-training.jpg`
- `https://images.unsplash.com/photo-1522071820081-009f0129c71c` → `/assets/images/capability-team.jpg`
- `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab` → `/assets/images/capability-city.jpg`

### Case Studies (CaseStudies.tsx)
- `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40` → `/assets/images/case-financial.jpg`
- `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d` → `/assets/images/case-healthcare.jpg`
- `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158` → `/assets/images/case-robotics.jpg`

### Insights (Insights.tsx)
- `https://images.unsplash.com/photo-1661956602116-aa6865609028` → `/assets/images/insight-ai-agents.jpg`
- `https://images.unsplash.com/photo-1551288049-bebda4e38f71` → `/assets/images/insight-rag-systems.jpg`
- `https://images.unsplash.com/photo-1576091160550-217358c7db81` → `/assets/images/insight-healthcare-ai.jpg`
- `https://images.unsplash.com/photo-1558494949-ef526b0042a0` → `/assets/images/insight-production.jpg`
- `https://images.unsplash.com/photo-1505751172876-fa1923c5c528` → `/assets/images/insight-compliance.jpg`
- `https://images.unsplash.com/photo-1518770660439-4636190af475` → `/assets/images/insight-infrastructure.jpg`

## Videos

### Home Page (Home.tsx)
- `https://assets.mixkit.co/videos/preview/mixkit-software-interface-scrolling-on-computer-screen-29774-large.mp4` → `/assets/videos/nextcomply-demo.mp4`
- Poster: `https://images.unsplash.com/photo-1551288049-bebda4e38f71` → `/assets/images/video-poster-dashboard.jpg`

## Icons

Currently using Lucide React icons (no local files needed).
Any future custom icons should be placed in `/assets/icons/`

## Notes

- All external URLs are currently live and working
- To migrate to local assets, download each image and place in the mapped path
- Recommended image optimization: WebP format, multiple sizes for responsive images
- Video optimization: Compressed MP4, add WebM alternative for browser compatibility
