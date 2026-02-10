import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import HudTabs from "./components/HudTabs";
import VideoGrid from "./components/VideoGrid";
import VideoModal from "./components/VideoModal";
import StickyCta from "./components/StickyCta";
import { videos, type CategoryKey } from "./data/videos";

const WA_NUMBER = "972503823335";
const WA_TEXT = encodeURIComponent("היי, ראיתי את הרילסים ורוצה לשמוע פרטים");
const WHATSAPP_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

export default function App() {
  const [active, setActive] = useState<CategoryKey>("shootdays");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const filtered = useMemo(() => videos.filter((v) => v.category === active), [active]);

  const openAt = (i: number) => {
    setModalIndex(i);
    setModalOpen(true);
  };

  const close = () => setModalOpen(false);
  const next = () => setModalIndex((p) => (p + 1) % filtered.length);
  const prev = () => setModalIndex((p) => (p - 1 + filtered.length) % filtered.length);

  return (
    <div className="min-h-screen font-sans">
      <StickyCta whatsappHref={WHATSAPP_HREF} />

      <div className="w-full max-w-6xl px-4 pt-4 mx-auto sm:pt-6">
        <section className="min-h-[100svh] flex items-center justify-center">
          <div className="w-full gc-grid">
            <div className="border gc-cut border-gc-line/20 bg-gc-dark/25 shadow-glow">
              <div className="px-4 py-4">
                <div className="flex flex-col items-center text-center">
                  <div className="gc-logo">
                    <img
                      src="/LogoGC.png"
                      alt="Game Changer Studio"
                      className="h-20 w-20 object-contain drop-shadow-[0_0_22px_rgba(111,231,255,0.22)]"
                    />
                  </div>

                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="mt-3 font-heading font-normal text-3xl leading-[1.02] text-gc-text"
                  >
                    Game Changer Studio
                  </motion.h1>

                  <div className="mt-2 gc-cut-sm border border-gc-glow/25 bg-gc-dark/20 px-3 py-2 text-[12px] font-semibold tracking-[0.05em] text-gc-text/95 shadow-glow">
                    <span className="block whitespace-nowrap">נולד מתוך הבנה עמוקה של איך תוכן עובד היום באמת.</span>
                  </div>

                  <div className="mt-3 max-w-2xl text-center text-[14px] leading-relaxed text-gc-muted">
                    <p>לא טרנדים ריקים ולא רעש אלא רעיונות וסיפורים שמרגישים אותנטיים ומדברים לקהל בגובה העיניים.</p>
                    <p className="mt-2">
                      אנחנו מתמחים ביצירת תוכן מצולם לעסקים שרוצים להיראות מקצועיים, חדים ורלוונטיים, בלי לוותר על האישיות שלהם.
                    </p>
                    <p className="mt-2">
                      המטרה שלנו היא להפוך ידע וניסיון לתוכן מדויק שמחזק נוכחות, בונה אמון ומייצר השפעה אמיתית לאורך זמן.
                    </p>
                  </div>

                  <div className="mt-3 grid w-full max-w-[380px] grid-cols-2 gap-2">
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noreferrer"
                      className="gc-cut-sm gc-focus-ring flex min-h-[78px] items-center justify-center border border-gc-glow/45 bg-transparent px-4 text-center text-[13px] font-semibold text-gc-text hover:border-gc-glow/70"
                    >
                      <span className="flex items-center gap-2">
                        דברו איתנו <FaWhatsapp className="text-[18px]" />
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={() => document.getElementById("clips")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                      className="gc-cut-sm gc-focus-ring flex min-h-[78px] items-center justify-center border border-gc-line/30 bg-transparent px-4 text-center text-[13px] font-semibold text-gc-text hover:border-gc-line/55"
                    >
                      לצפייה
                      <br />
                      בעבודות
                    </button>
                  </div>

                  <div className="mt-3 w-full max-w-[520px]">
                    <HudTabs active={active} onChange={setActive} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-3">
              <button
                type="button"
                onClick={() => document.getElementById("clips")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="gc-focus-ring rounded-full border border-gc-line/25 bg-gc-dark/25 px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase text-gc-muted hover:border-gc-line/40"
              >
                Scroll
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="gc-grid">
        <div className="w-full max-w-6xl px-4 pb-16 mx-auto">
          <div id="clips" className="pt-6">
            <div className="text-center">
              <div className="text-xs tracking-[0.22em] uppercase text-gc-muted/80">Gallery</div>
              <div className="mt-2 text-3xl leading-none font-heading text-gc-text">CLIPS</div>
            </div>

            <VideoGrid items={filtered} onOpenIndex={openAt} />
          </div>

          <VideoModal
            open={modalOpen}
            items={filtered}
            index={modalIndex}
            onClose={close}
            onPrev={prev}
            onNext={next}
            whatsappHref={WHATSAPP_HREF}
          />
        </div>
      </div>
    </div>
  );
}
