import { useMemo, useState } from "react";
import HudTabs from "./HudTabs";
import VideoGrid from "./VideoGrid";
import VideoModal from "./VideoModal";
import { videos, type CategoryKey } from "../../data/videos";

export default function ClipsSection({ whatsappHref }: { whatsappHref: string }) {
    const [active, setActive] = useState<CategoryKey>("shootdays");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const filtered = useMemo(() => videos.filter((v) => v.category === active), [active]);

    const openAt = (i: number) => {
        setModalIndex(i);
        setModalOpen(true);
    };

    const close = () => setModalOpen(false);
    const next = () => setModalIndex((p) => (filtered.length ? (p + 1) % filtered.length : 0));
    const prev = () => setModalIndex((p) => (filtered.length ? (p - 1 + filtered.length) % filtered.length : 0));

    return (
        <section id="clips" className="w-full py-12">
            <div className="gc-container">
                <div className="text-center">
                    <div className="text-xs tracking-[0.22em] uppercase text-gc-muted/80">Gallery</div>
                    <div className="mt-2 text-3xl leading-none font-heading text-gc-text">CLIPS</div>
                </div>

                <div className="flex justify-center mt-6">
                    <div className="w-full max-w-[520px]">
                        <HudTabs active={active} onChange={setActive} />
                    </div>
                </div>

                {filtered.length > 0 ? (
                    <div className="mt-6">
                        <VideoGrid items={filtered} onOpenIndex={openAt} />
                    </div>
                ) : (
                    <div className="mt-6 text-sm text-center text-gc-muted">אין קליפים להצגה בקטגוריה הזאת כרגע.</div>
                )}

                <VideoModal
                    open={modalOpen && filtered.length > 0}
                    items={filtered}
                    index={modalIndex}
                    onClose={close}
                    onPrev={prev}
                    onNext={next}
                    whatsappHref={whatsappHref}
                />
            </div>
        </section>
    );
}
