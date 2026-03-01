import type { ArtProject } from "../types";

const item: ArtProject = {
  id: "2",
  title: "Somewhere Between",
  year: "2024",
  medium: "Photography · Digital Compositing",
  category: "Cinematic",
  tagline: "The space between waking and dreaming, documented",
  coverImage:
    "https://images.unsplash.com/photo-1770034285769-4a5a3f410346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
  sections: [
    {
      type: "text",
      heading: "The In-Between",
      body: "This project began on a night I couldn't sleep. I picked up my camera at 3am and drove to a forest two hours from the city, not really knowing why. The first frame I shot felt wrong. The second one felt like I'd been waiting to take it for years. There's a quality of light in that territory — between 3am and first dawn — that I've been trying to reconstruct in this work ever since. Pale. Uncommitted. Light that doesn't know if it belongs to night or day.",
    },
    {
      type: "images",
      layout: "full",
      images: [
        {
          src: "https://images.unsplash.com/photo-1770034285769-4a5a3f410346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400",
          alt: "Surreal dreamlike landscape purple atmospheric",
          caption: "Between I — the establishing image. Shot at 4:12am, no post-processing applied to the atmosphere.",
        },
      ],
    },
    {
      type: "images",
      layout: "asymmetric-left",
      images: [
        {
          src: "https://images.unsplash.com/photo-1598527440654-83716afb3fb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900",
          alt: "Cinematic foggy forest alone figure",
          caption: "Between III — the figure as punctuation mark inside fog.",
        },
        {
          src: "https://images.unsplash.com/photo-1762160767084-fb4fb425a0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          alt: "Portrait artistic character lighting",
          caption: "Between IV — detail study, available light only.",
        },
      ],
    },
    {
      type: "text",
      heading: "Making the Music Fit",
      body: "The collaboration with Tran Nhu Quynh happened because I showed her this photography series while we were in the studio together. She said the images sounded like something she'd been trying to write for months. The song 'nowhere' was finished in four hours after that conversation. I've never had a piece of music arrive so quickly. The vocal performance in the final chorus is first take. We kept it.",
    },
    {
      type: "video",
      youtubeId: "eJaY8IcUmiw",
      caption: "'nowhere ft. Tran Nhu Quynh' — built on the same emotional territory as this image series.",
    },
    {
      type: "images",
      layout: "trio",
      images: [
        {
          src: "https://images.unsplash.com/photo-1598527440654-83716afb3fb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          alt: "Foggy forest cinematic",
          caption: "Between VI",
        },
        {
          src: "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          alt: "Warm toned atmospheric texture",
          caption: "Between VII",
        },
        {
          src: "https://images.unsplash.com/photo-1770034285769-4a5a3f410346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
          alt: "Surreal dreamscape",
          caption: "Between VIII",
        },
      ],
    },
    {
      type: "text",
      heading: "Continuity",
      body: "The series isn't finished. I go back to that forest a few times a year, always around the same hours, looking for the light. It changes slightly each visit. I keep finding new frames inside the same geography. I think this might be a permanent project — one I add to quietly over years without ever declaring it complete.",
    },
  ],
};

export default item;
