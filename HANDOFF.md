# Portfolio Codebase Handoff

Last analyzed: 2026-10-03

## Project Snapshot

This is a single-page portfolio site for Art Jazmines, built with React, TypeScript, Vite, and Tailwind CSS v4. The UI has a sci-fi/foundry visual direction with a dark brown shell, amber highlights, fixed-width 1280px compositions, local fonts, image-heavy sections, and a scroll-scrubbed hero video.

The app is currently a static frontend. There is no routing, backend, state management, API layer, test suite, or real contact submission.

## How To Reorient Quickly

Use `MEMORY_PALACE.md` before making changes if you want the fast mental model. It describes the app as a foundry corridor where each room maps to one component: gate (`index.html`), switch (`main.tsx`), corridor (`App.tsx`), furnace (`Hero.tsx`), balcony (`Navigation.tsx`), identity chamber (`About.tsx`), portfolio vault (`Work.tsx`), fabrication bay (`Services.tsx`), signal station (`Contact.tsx`), and exit ramp (`Footer.tsx`).

Use this handoff file when you need the literal technical details, commands, constraints, and next-work list.

## Stack

- React 19 with `react-dom/client`
- TypeScript 6 project references
- Vite 8
- Tailwind CSS 4 via `@tailwindcss/vite`
- Oxlint
- Local fonts loaded from `public/assets/fonts/fonts.css`
- Static media served from `public/assets`

## Important Commands

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

`npm run build` runs `tsc -b` first, then `vite build`.

## Repository Shape

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    About.tsx
    Contact.tsx
    Footer.tsx
    Hero.tsx
    Navigation.tsx
    Services.tsx
    Work.tsx
public/
  assets/
    fonts/
    images/
    videos/
  favicon.svg
  icons.svg
dist/
  Built output currently present in the workspace
```

There is no `.git` directory in this workspace, so treat it as a plain project folder unless a repository is initialized later.

## App Flow

`src/main.tsx` mounts `<App />` into `#root`.

`src/App.tsx` renders the whole page in this order:

1. `Hero`
2. `About`
3. `Work`
4. `Services`
5. `Contact`
6. `Footer`

The top-level shell uses `bg-[#290c01]`, centers all sections, hides horizontal overflow, and sets a minimum internal height of `3811px`.

## Component Notes

### `Hero.tsx`

- Renders the header navigation and the first-viewport visual.
- Uses `/assets/videos/android-hoist.mp4`.
- The video is not autoplayed; it is scroll-scrubbed.
- `useEffect` maps global scroll progress to `video.currentTime`, then interpolates toward that target with `requestAnimationFrame`.
- Cleanup removes the scroll and metadata listeners and cancels the animation frame.
- The layout is fixed around `1280px` wide and `705px` high.

### `Navigation.tsx`

- Absolute-positioned inside the hero.
- Logo source: `/assets/images/logo.svg`.
- Anchor links target `#work`, `#about`, `#portfolio`, `#services`, and `#contact`.
- Styling uses a translucent rounded navigation bar with the site-wide default `Lato`.

### `About.tsx`

- Contains the `#about` section.
- Uses large `Koulen` headings, `Lekton` metadata labels, and the site-wide default `Lato` body font.
- Bio visual source: `/assets/images/amber-hologram-on-sci-fi-platform-1.png`.
- Layout is fixed and desktop-oriented.

### `Work.tsx`

- Contains `#portfolio` for the main portfolio cards and `#work` for additional work thumbnails.
- Main cards are static content blocks for Music Museum Group, Trilite RMS Board, and Lutong Bahay.
- Additional fabrications use images for Fulda, Ebay, Esperanza, and Larc & Asset.
- Portfolio card layout uses absolute positioning and rotated vertical labels.

### `Services.tsx`

- Contains `#services`.
- Presents service categories as vertical strips.
- The Print Design panel is expanded; Web Design, Branding, and Prototyping panels are collapsed with `w-0` content areas.
- Uses several layered assets, including `/assets/images/fulda-page-1-1.jpg`, `/assets/images/image-4.png`, and SVG overlays.

### `Contact.tsx`

- Contains `#contact`.
- The form prevents default submit and does not send data anywhere.
- Inputs have aria labels but no validation or persistence.
- Decorative telemetry/status visuals are static.

### `Footer.tsx`

- Uses `/assets/images/footer-section.png` as a CSS background image.
- Includes a Meta icon image: `/assets/images/meta-color.svg`.

## Styling And Assets

- `src/index.css` imports Tailwind with `@import "tailwindcss";`.
- `index.html` links `/assets/fonts/fonts.css`.
- Fonts defined locally:
  - `Koulen`
  - `Lekton`
  - `Lato` weights 400 and 700
- The app uses many arbitrary Tailwind values and exact pixel measurements, likely from a design export.
- Most image paths are root-relative under `/assets/...`, which works because Vite serves `public` as the web root.

## Known Constraints And Gotchas

- Responsiveness is limited. Many elements have fixed widths near or above `1280px`, absolute positioning, and hard-coded heights.
- Some text in the current files appears mojibake-encoded, for example `â€¢` and `â€”`, where the intended characters are likely bullet and em dash.
- `dist/` is present and appears to contain built output. Source changes require rebuilding before `dist/` reflects them.
- The contact form is cosmetic only.
- The Services section looks like an accordion concept, but there is no interactivity yet.
- `lucide-react` is installed but not currently used.
- `src/assets/react.svg` and `src/assets/vite.svg` appear to be unused starter assets.
- The README is still the default React + TypeScript + Vite template text, not project-specific documentation.

## Suggested Next Work

- Replace the template README with project-specific setup and deployment notes.
- Add responsive breakpoints for tablet/mobile, especially for fixed `1280px` sections.
- Decide whether `dist/` should be committed or ignored depending on deployment flow.
- Wire the contact form to a real service or clearly mark it as a visual prototype.
- Convert repeated portfolio/service card patterns into data-driven components if the content will grow.
- Fix encoding artifacts in user-visible text.
- Add basic smoke tests or visual checks if this site will be maintained actively.
