# BacktoFotos | Capturing Your Moments

A professional photography portfolio landing page built with HTML, CSS, and JavaScript. BacktoFotos showcases photography services, portfolio work, client testimonials, and a blog — all in one elegant, responsive design.

## Features

- **Responsive Design** — looks great on mobile, tablet, and desktop
- **Portfolio Gallery** — organized by categories: Portraits, Weddings, Fashions
- **Gallery & Instagram Sections** — masonry-style image grids with lightbox viewer
- **Lightbox Viewer** — click any image to view full-size, with arrow navigation and keyboard support (← → Esc)
- **Client Showcase** — swiper carousel featuring trusted clients
- **Blog Section** — "Read More" expandable content
- **Services Section** — overview of photography offerings
- **Scroll Animations** — smooth reveal effects powered by ScrollReveal.js
- **Favicon** — custom browser tab icon

## Project Structure

```
BacktoFotos-Landing-Page/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── main.js             # JavaScript (lightbox, navigation, animations)
└── assets/
    ├── logo-white.png
    ├── logo-black.jpg
    ├── favicon.jpg
    ├── header.jpg
    ├── service.jpg
    ├── blog.jpg
    ├── client-1.jpg ~ client-3.jpg
    ├── gallery/
    │   └── image-1.jpg ~ image-8.jpg
    ├── instagram/
    │   └── image-1.jpg ~ image-8.jpg
    └── portfolio/
        ├── portraits/    → portfolio-1.jpg
        ├── weddings/     → portfolio-2.jpg
        └── fashions/     → portfolio-3.jpg
```

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- Vanilla JavaScript
- [Remix Icons](https://remixicon.com/)
- [Swiper.js](https://swiperjs.com/) — client carousel
- [ScrollReveal.js](https://scrollrevealjs.org/) — scroll animations

## How to Run

1. Clone this repository
2. Open `index.html` in your browser
3. Or serve with any static server:
   ```bash
   npx serve .
   ```

## Adding Images

- **Portfolio** — add images to `assets/portfolio/{portraits|weddings|fashions}/`
- **Gallery** — add images to `assets/gallery/` and update the HTML grid
- **Instagram** — add images to `assets/instagram/` and update the HTML flex row

## License

All rights reserved. BacktoFotos © 2026.
