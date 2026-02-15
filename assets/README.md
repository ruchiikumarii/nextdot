# Assets Folder

This folder contains all media assets for the Nextdot website.

## Structure

```
assets/
├── images/          # All image files (.jpg, .png, .webp, .svg)
├── videos/          # All video files (.mp4, .webm)
└── icons/           # All icon files (.svg, .ico)
```

## Current Status

All media assets are currently hosted externally on:
- Unsplash (images.unsplash.com)
- Wikimedia (upload.wikimedia.org)
- Mixkit (assets.mixkit.co)

## Migration Plan

To use local assets:
1. Download required images/videos
2. Place them in appropriate subdirectories
3. Update paths in code to reference /assets/* instead of external URLs
4. Optimize images for web (compression, multiple sizes, WebP format)

## Path Convention

All assets should be referenced using absolute paths from root:
- `/assets/images/filename.jpg`
- `/assets/videos/filename.mp4`
- `/assets/icons/filename.svg`
