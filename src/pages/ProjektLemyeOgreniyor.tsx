import Layout from "@/components/Layout";

const ProjektLemyeOgreniyor = () => {
  return (
    <Layout>
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 gradient-text">Lemye ögreniyor</h1>
          <p className="text-muted-foreground mb-4">
            Kısa vlog tarzı proje: Lemye ile gezi, günlük öğrenme notları ve kısa deneyimler.
          </p>

          <div className="glass rounded-xl p-6 text-left">
            <p className="mb-3">
              İçerik: gezi vlogları, kısa öğretici klipler, yerel kültür ve pratik ipuçları.
            </p>

            <p className="mb-2 font-semibold">Neden?</p>
            <p className="text-sm text-muted-foreground mb-3">Keşif ve öğrenme deneyimini belgeleyip paylaşmak için.</p>

            <p className="mb-2 font-semibold">Nereleri gezmeli & Ne kadar süre?</p>
            <p className="text-sm text-muted-foreground">
              Kısa şehir kaçamakları: 1–3 gün; bölgesel keşif: 3–7 gün. İçerik için günlük 1–2 kısa çekim yeterli.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjektLemyeOgreniyor;
