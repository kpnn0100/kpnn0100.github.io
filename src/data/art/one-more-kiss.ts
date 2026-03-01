import type { ArtProject } from "../types";

const item: ArtProject = {
  id: "1",
  title: "Harose - One More Kiss",
  year: "2022",
  medium: "Digital Illustration · Animation · Music Video",
  category: "Illustration",
  tagline: "Every line drawn to the feeling of a song that refuses to let go",
  coverImage: "/art/one-more-kiss/canvas-01.svg",
  sections: [
    {
      type: "text",
      heading: "The Project",
      body: "One More Kiss is a single by Harose - and I was brought in to do everything visual: the artwork, the illustrations, and the animated music video. The brief was open. The only directive was that the visuals should feel the way the song feels - tender, a little desperate, suspended in that moment of wanting something back. I took that as permission to go slow and go personal.",
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
      body: "My drawing style was inspired by Funilab.",
    },
    {
      type: "images",
      layout: "duo",
      images: [
        {
          src: "/art/one-more-kiss/canvas-02.svg",
          alt: "One More Kiss — canvas 02",
          caption: "Artboard",
        },
        {
          src: "/art/one-more-kiss/canvas-03.svg",
          alt: "One More Kiss — canvas 03",
          caption: "My signature: Normally closed switch",
        },
      ],
    },
    {
      type: "text",
      heading: "Animation",
      body: "Animation is more like ",
    },
    {
      type: "video",
      youtubeId: "CoCu1elHsjQ",
      caption: "One More Kiss - Harose. Artwork, illustration and animation by kpnn.",
    },
    {
      type: "text",
      heading: "Reflection",
      body: "This help me have confident for my art style and the way I express myself through visuals. It also made me realize how much I enjoy working on music videos, and how rewarding it is to create something that complements and enhances the music.",
    },
  ],
};

export default item;
