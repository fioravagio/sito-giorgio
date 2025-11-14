import { Megaphone } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export default function CivicaPoliticaPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <section className="py-20 border-b border-zinc-200 bg-[#F8F7F4]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <Megaphone className="h-8 w-8 text-[#C8A14A]" />
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Attività Civica & Politica
            </h1>
          </div>

          <p className="text-lg text-zinc-600 leading-relaxed">
            L’Aquila è una città che non assomiglia a nessun’altra. Ha una
            storia millenaria, un’identità forte, una geografia complessa...
            {/* QUI INCOLLO LA VERSIONE LUNGA COMPLETA */}
          </p>
        </div>
      </section>

      {/* eventuali blocchi foto, citazioni, highlights */}

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">
            Approfondimenti & Documenti
          </h2>
          <p className="text-zinc-600">
            In questa sezione saranno disponibili report, proposte, interventi
            e materiali di approfondimento sulle iniziative civiche e politiche
            legate al territorio aquilano.
          </p>
        </div>
      </section>
    </div>
  );
}