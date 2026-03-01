import type { ArtProject } from "../types";

const item: ArtProject = {
  id: "1",
  title: "Chromatic Decay",
  year: "2025",
  medium: "Digital Illustration · Mixed Media",
  category: "Abstract",
  tagline: "Entropy as art — where structure dissolves into feeling",
  coverImage:
    "https://images.unsplash.com/photo-1771792997117-c833b0bc174b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
  sections: [
    {
      type: "text",
      heading: "Origin",
      body: "Every piece in this series started with a single question: what happens when precision loses its grip? I began by building rigid geometric compositions — grids, circles, exact proportions — and then systematically dismantled them. Heat maps. Blur. Ink flooding across edges. The result was something I hadn't planned for: chaos with memory. You can still feel the grid underneath even when you can't see it anymore.",
    },
    {
      type: "images",
      layout: "full",
      images: [
        {
          src: "https://images.unsplash.com/photo-1771792997117-c833b0bc174b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400",
          alt: "Abstract fluid painting — chromatic decay series",
          caption: "Chromatic Decay 001 — the initiating piece. Geometry submerged in pigment.",
        },
      ],
    },
    {
      type: "text",
      heading: "Process",
      body: "The technique evolved over three months. Each iteration began digitally — laying precise paths and anchor points — before being exported, printed, physically damaged (water, folding, scanning), and brought back into the computer for compositing. The physical damage is real. The cracks and bleeds aren't filters; they're artifacts of paper and time and water. The final pass added color only to the surviving structures, letting destroyed areas remain monochrome.",
    },
    {
      type: "images",
      layout: "duo",
      images: [
        {
          src: "https://images.unsplash.com/photo-1580122252289-8eccefa9ce2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
          alt: "Ink wash illustration texture",
          caption: "Study 04 — ink wash stage before digital reintegration.",
        },
        {
          src: "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
          alt: "Watercolor texture warm tones",
          caption: "Study 07 — watercolor substrate, warm tones prior to color removal.",
        },
      ],
    },
    {
      type: "text",
      heading: "The Music Connection",
      body: "These images were created alongside the production of 'Sugary Side'. The track and the visual work share the same DNA — sweetness eroding into dissonance, something familiar decaying into something uncertain. I wanted viewers of the artwork to feel the same thing listeners feel at the breakdown at 2:47: the sudden absence where sound used to be.",
    },
    {
      type: "video",
      youtubeId: "md_bNy_fiBo",
      caption: "Sugary Side — the sonic companion to this visual series.",
    },
    {
      type: "images",
      layout: "full",
      images: [
        {
          src: "https://images.unsplash.com/photo-1631379879495-23a8e79abed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400",
          alt: "Night city neon reflections",
          caption: "Reference photography — urban decay as a secondary visual language in the series.",
        },
      ],
    },
    {
      type: "text",
      heading: "Reflection",
      body: "What I learned is that audiences are deeply comfortable with beautiful imperfection. People often respond not to the polished pieces but to the studies — the ones where you can see the process hasn't finished yet. I've started leaving more visible. Less resolving. More asking.",
    },
  ],
};

export default item;
