# Project Instructions

This repository contains the GitHub Pages version of Gordon Ji's personal website.

## Website Project

- Treat this folder as the website repository root when making site changes.
- Keep the site compatible with GitHub Pages static hosting unless the user explicitly requests a different stack.

## Design & Content

- **Tone and Language:** Ensure all written content maintains a rigorous, academic tone appropriate for professional economic research.
- **Typography:** Implement a clean, modern academic pairing using **Lora** for page/section titles and **Inter** for the body text. Adjust heading styles to reduce the font size of all titles, ensuring the visual hierarchy remains compact, clean, and well-proportioned.
- **Color Palette:** Use a professional color scheme that is clearly aligned with Econic Partners but distinct.
    - **Dominant Colors:** Rely on deep, sophisticated Slate Blue/Navy (e.g., `#1C3B5A`) for backgrounds/headers.
    - **Accent Colors:** Use a refined metallic Gold (e.g., `#D4AF37`) for links and calls-to-action.
    - **Neutrals:** Maintain bright white or light grey for body text and contrast.
    - **Constraint:** Avoid using the specific deep teal/green and muted tan hues identical to https://econicpartners.com/ to establish a personal brand distinct from the firm’s main identity.
- **Dark Mode Constraints:** The night mode must not mirror the firm's corporate dark theme. Implement a distinct, neutral dark theme (using deep charcoal or near-black backgrounds like `#121212` or `#1E1E1E`) with crisp, soft off-white text. The aesthetic should echo a clean, high-contrast IDE environment used for statistical programming in Python or R, completely separating your personal academic site from the firm's primary identity.


## Publishing Workflow

- After making and verifying changes, use git to commit the changes locally.
- Push the commit to the `origin` remote so the GitHub Pages site goes live.
- Before committing, review the diff and avoid including unrelated workspace or generated files.
- If pushing fails because authentication, network access, or a missing remote blocks the operation, report the blocker clearly and leave the local commit ready to push.
