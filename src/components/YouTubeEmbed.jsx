"use client";

import { useState } from "react";
import { Play, Youtube } from "lucide-react";

const PLAYLIST_ID = "PLccUvT8MuupAVZkBYqoqBoTU42b9Zy5sV";

export default function YouTubeEmbed() {
  const [enabled, setEnabled] = useState(false);

  if (enabled) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1`}
        title="Playlist Live (concerti) — fioravanti81"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-center bg-zinc-950 px-6 text-center text-white">
      <Youtube className="h-10 w-10 text-[#C8A14A]" aria-hidden="true" />
      <p className="mt-3 text-sm font-semibold">Playlist Live (concerti)</p>
      <p className="mt-2 max-w-sm text-xs leading-relaxed text-zinc-300">
        Il video si collega a YouTube soltanto dopo la tua scelta.
      </p>
      <button
        type="button"
        onClick={() => setEnabled(true)}
        className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-[#C8A14A] px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-[#E0C273]"
      >
        <Play className="h-4 w-4" aria-hidden="true" />
        Carica il video
      </button>
    </div>
  );
}
