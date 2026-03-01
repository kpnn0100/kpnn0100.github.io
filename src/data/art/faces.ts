import type { ArtProject } from "../types";

const item: ArtProject = {
  id: "3",
  title: "Faces",
  year: "2025",
  medium: "Photography",
  category: "Portrait",
  tagline: "Studies in expression, light, and the truth of presence",
  coverImage:
    "https://images.unsplash.com/photo-1762160767084-fb4fb425a0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
  sections: [
    {
      type: "text",
      heading: "Why Faces",
      body: "I started photographing strangers after months of making music alone in a room. I needed to remember what other people looked like when they weren't performing. Not posed. Not ready. Just present. The camera became a way of having a reason to look closely at someone for a long time — something that's socially unusual without a lens between you.",
    },
    {
      type: "images",
      layout: "asymmetric-right",
      images: [
        {
          src: "https://images.unsplash.com/photo-1617428882838-655fa863d613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700",
          alt: "Close up eye macro emotion photography",
          caption: "Faces 002 — the eye holds more than the whole face sometimes.",
        },
        {
          src: "https://images.unsplash.com/photo-1762160767084-fb4fb425a0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900",
          alt: "Artistic portrait character lighting studio",
          caption: "Faces 001 — first frame of the series. Available light, late afternoon.",
        },
      ],
    },
    {
      type: "text",
      heading: "Conditions",
      body: "I imposed three rules on myself: no flash, no direction, and no more than three frames per person. The restriction on frames is the important one. When you know you only have three, you stop fussing. You stop trying to control the situation. You wait. Then you wait more. Then something true happens and you press the shutter. Almost every keeper in this series is the second frame. Rarely the third. Never the first.",
    },
    {
      type: "images",
      layout: "full",
      images: [
        {
          src: "https://images.unsplash.com/photo-1617428882838-655fa863d613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400",
          alt: "Macro eye detail close up",
          caption: "Faces 014 — detail study. I keep returning to the eye as an image of attention.",
        },
      ],
    },
    {
      type: "text",
      heading: "Going Forward",
      body: "This project will become a book at some point. A hundred faces. Small print run. I don't know when. But the shape of it is already there in my mind — square format, uncoated paper, no text except names and a year. Just faces, looking back.",
    },
  ],
};

export default item;
