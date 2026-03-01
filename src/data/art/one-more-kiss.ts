import type { ArtProject } from "../types";

const item: ArtProject = {
  id: "1",
  title: "Harose — One More Kiss",
  year: "2022",
  medium: "Digital Illustration · Animation · Music Video",
  category: "Illustration",
  tagline: "Every line drawn to the feeling of a song that refuses to let go",
  coverImage: "/art/one-more-kiss/canvas-01.svg",
  sections: [
    {
      type: "text",
      heading: "The Project",
      body: "One More Kiss is a single by Harose — and I was brought in to do everything visual: the artwork, the illustrations, and the animated music video. The brief was open. The only directive was that the visuals should feel the way the song feels — tender, a little desperate, suspended in that moment of wanting something back. I took that as permission to go slow and go personal.",
    },
    {
      type: "images",
      layout: "full",
      images: [
        {
          src: "/art/one-more-kiss/canvas-01.svg",
          alt: "One More Kiss — main artwork canvas",
          caption: "Main artwork — the central illustration for the single and cover.",
        },
      ],
    },
    {
      type: "text",
      heading: "Illustration Process",
      body: "The illustration started with the feeling of closeness just before it ends. Hands, faces at an angle, the geometry of two people in the same space for the last time. I worked in flat digital shapes first — silhouettes and blocked colour — then added texture passes to push warmth into scenes that could easily go cold. The palette was pulled from late-evening light: blues cooling down into purple, with moments of amber holding on.",
    },
    {
      type: "images",
      layout: "duo",
      images: [
        {
          src: "/art/one-more-kiss/canvas-02.svg",
          alt: "One More Kiss — canvas 02",
          caption: "Secondary canvas — compositional studies used across the MV.",
        },
        {
          src: "/art/one-more-kiss/canvas-03.svg",
          alt: "One More Kiss — canvas 03",
          caption: "Detail canvas — texture and colour exploration for animation frames.",
        },
      ],
    },
    {
      type: "text",
      heading: "Animation",
      body: "Animating something you've illustrated yourself is a different kind of problem. You already care too much about every line, so movement has to be earned. I kept the motion minimal and deliberate — slow dissolves, soft camera drifts, elements fading in and out like memories surfacing. Nothing snappy. The pacing follows the vocal — when the song breathes, the visuals breathe. When it swells, things shift.",
    },
    {
      type: "video",
      youtubeId: "CoCu1elHsjQ",
      caption: "One More Kiss — Harose. Artwork, illustration and animation by kpnn.",
    },
    {
      type: "text",
      heading: "Reflection",
      body: "This project taught me that the job of a visual artist on a song isn't to explain the music — it's to give the listener somewhere to put how they feel. The best moment is when someone watches the MV and says it sounds exactly like what they see. That's the thing I keep chasing.",
    },
  ],
};

export default item;
