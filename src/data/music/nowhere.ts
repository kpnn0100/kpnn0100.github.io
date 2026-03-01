import type { Album } from "../types";

const item: Album = {
  id: "nowhere-ep",
  title: "nowhere",
  year: "2024",
  genre: "Indie · Ambient · Bedroom Pop",
  type: "EP",
  coverImage:
    "https://images.unsplash.com/photo-1612868921892-93882ddfc22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  story:
    "The 'nowhere' EP started as a note I kept returning to — a single sustained pitch in a minor key that I couldn't get out of my head for weeks. I kept building things around it and tearing them down. Eventually Tran Nhu Quynh came into the studio on a different day entirely, heard the instrumental, and sang over it for the first time. What she did in that session is what you hear. The word 'nowhere' came from her, not me — but it named the feeling exactly: not lost, exactly, not destination-less, just in between. I've been there for most of my life. This EP is about living there willingly.",
  featuredVideoId: "eJaY8IcUmiw",
  featuredVideoLabel: "nowhere (Official Video)",
  tracks: [
    {
      num: 1,
      title: "nowhere",
      featuring: "Tran Nhu Quynh",
      duration: "4:01",
      youtubeId: "eJaY8IcUmiw",
      note: "Written by Nam Doan · Vocals by Tran Nhu Quynh",
    },
    {
      num: 2,
      title: "drift",
      duration: "3:18",
      note: "Instrumental — placeholder for your next release",
    },
    {
      num: 3,
      title: "4am signal",
      duration: "2:57",
      note: "Instrumental — placeholder for your next release",
    },
  ],
};

export default item;
