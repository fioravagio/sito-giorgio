import { ExternalLink, Youtube } from "lucide-react";
import { PageHero, PageStructuredData, PhotoGrid, SectionHeading } from "../../components/PageElements";
import YouTubeEmbed from "../../components/YouTubeEmbed";
import { buildPageMetadata, pageSeo } from "../../lib/site";

export const metadata = buildPageMetadata(pageSeo.youtubeMedia);

const concertPhotos = [
  { src: "live-anfiteatro.jpg", title: "Anfiteatro", caption: "La musica dal vivo in luoghi ricchi di atmosfera." },
  { src: "live-festival-birra.jpg", title: "Festival", caption: "Palchi, pubblico e serate all’aperto." },
  { src: "live-laquila-scalinata.jpg", title: "L’Aquila", caption: "Eventi e concerti negli spazi della città." },
  { src: "live-olimpico-scale.jpg", title: "Stadio Olimpico", caption: "Il racconto dei grandi concerti italiani." },
  { src: "live-stadio-parterre.jpg", title: "Parterre", caption: "L’esperienza del live vista da vicino." },
];

export default function YoutubeMediaPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageStructuredData page={pageSeo.youtubeMedia} type="CollectionPage" />
      <PageHero
        eyebrow="@fioravanti81"
        title="YouTube e media"
        description="Concerti, musica live, DJ set e racconti dal territorio. Il canale raccoglie esperienze, passioni e momenti che meritano di essere condivisi."
        image="/assets/live-anfiteatro.jpg"
        imageAlt="Concerto dal vivo in un anfiteatro"
      >
        <a
          href="https://www.youtube.com/@fioravanti81"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#4A4A4A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8A6A25]"
        >
          Apri il canale <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </PageHero>

      <section>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Playlist" title="Live (concerti)" description="Il player viene collegato a YouTube soltanto dopo una tua scelta esplicita, così la pagina resta più veloce e rispettosa della privacy." />
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://www.youtube.com/playlist?list=PLccUvT8MuupAVZkBYqoqBoTU42b9Zy5sV" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-[#8A6A25] hover:underline">
                <Youtube className="h-5 w-5" aria-hidden="true" /> Apri la playlist su YouTube
              </a>
            </div>
          </div>
          <div className="min-h-[220px] overflow-hidden rounded-3xl bg-zinc-950 ring-1 ring-zinc-200 sm:aspect-video sm:min-h-0">
            <YouTubeEmbed />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-[#F7F5EF]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Galleria" title="La musica vista dal pubblico" description="Alcuni momenti vissuti tra anfiteatri, festival, piazze e stadi." />
          <PhotoGrid items={concertPhotos} />
        </div>
      </section>
    </main>
  );
}
