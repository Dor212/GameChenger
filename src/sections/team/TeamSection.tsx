import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function OwnersSection({ whatsappHref }: { whatsappHref: string }) {
    const p1Img = encodeURI("/Photos/ShonP.png");
    const p2Img = encodeURI("/Photos/AmitP.png");

    const people = useMemo(
        () =>
            [
                {
                    key: "shon",
                    tag: "PLAYER",
                    name: "שון אדרי",
                    role: "אסטרטגיה | שיווק ופיתוח עסקי",
                    img: p1Img,
                    highlights: [
                        "בוגר תואר ראשון בהצטיינות בשיווק ופרסום",
                        "אבחון עסקי ובניית משפכים שיווקיים (Funnels)",
                        "ניסיון עשיר במכירות ושיפור תהליכי מכירה",
                        "הטמעת אוטומציות וייעול מערך עסקי",
                    ],
                    text: "המוח האסטרטגי של הסטודיו. איש שיווק, צלם וקופירייטר שמחבר ראייה עסקית רחבה עם יכולת ויזואלית. מבחינתו תוכן הוא כלי מכירה לכל דבר.",
                },
                {
                    key: "amit",
                    tag: "PLAYER",
                    name: "עמית גניש",
                    role: "ניהול קריאייטיב | הפקה וטכנולוגיה",
                    img: p2Img,
                    highlights: [
                        "הנדסאי אלקטרוניקה ומחשבים",
                        "איש סאונד ועורך: וידאו, אודיו וסטילס",
                        "בניית קונספטים, סצנות ואילוסטרציות",
                        "בחזית כלי AI לתוכן חדשני",
                    ],
                    text: "הלב הקריאייטיבי והטכנולוגי. מחבר בין טכנולוגיה לאומנות הסיפור, ומתרגם רעיונות לתוצרים ויזואליים מדויקים, נקיים ופורצי דרך.",
                },
            ] as const,
        []
    );

    const [open, setOpen] = useState(false);
    const [activeKey, setActiveKey] = useState<(typeof people)[number]["key"] | null>(null);

    const active = people.find((p) => p.key === activeKey) ?? null;

    const openPerson = (k: (typeof people)[number]["key"]) => {
        setActiveKey(k);
        setOpen(true);
    };

    const close = () => setOpen(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    return (
        <section id="team" className="pt-12 pb-16">
            <div className="text-center">
                <div className="text-xs tracking-[0.22em] uppercase text-gc-muted/80">Co-op</div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 lg:gap-4">
                {people.map((p) => (
                    <motion.button
                        key={p.key}
                        type="button"
                        onClick={() => openPerson(p.key)}
                        className="relative w-full overflow-hidden text-center border group gc-cut bg-gc-dark/25 border-gc-line/25 shadow-glow gc-focus-ring"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        whileTap={{ scale: 0.985 }}
                        aria-label={`Open ${p.name}`}
                    >
                        <div className="px-3 pt-4 pb-4 sm:px-5 sm:pt-6 sm:pb-5">
                            <div className="flex flex-col items-center text-center">
                                <div className="border gc-cut-sm border-gc-line/25 bg-gc-dark/40 shadow-glow overflow-hidden w-full aspect-[1/1] max-h-[240px]">
                                    <img
                                        src={p.img}
                                        alt={p.name}
                                        draggable={false}
                                        className="object-contain w-auto h-full mx-auto"
                                    />
                                </div>

                                <div className="mt-2">
                                    <div className="inline-flex px-3 py-1 text-[10px] font-extrabold tracking-[0.18em] uppercase border gc-cut-sm border-gc-glow/35 bg-gc-dark/70 text-gc-text shadow-glow leading-none">
                                        {p.tag}
                                    </div>
                                </div>

                                <div className="mt-3 text-[15px] font-semibold text-gc-text sm:text-lg">{p.name}</div>
                                <div className="mt-1 text-[11px] font-semibold text-gc-muted/90 sm:text-[12px]">{p.role}</div>

                                <div className="w-full mt-4">
                                    <ul className="flex flex-col items-center gap-2 text-[12px] text-gc-muted/90 sm:text-[13px]">
                                        {p.highlights.slice(0, 3).map((x) => (
                                            <li key={x} className="flex items-center justify-center gap-2 text-center">
                                                <span className="h-[6px] w-[6px] rounded-full bg-gc-glow/70 shadow-glow" />
                                                <span className="leading-relaxed">{x}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-4 flex items-center justify-center gap-2 text-[12px] font-semibold text-gc-muted/85">
                                    <motion.span
                                        aria-hidden="true"
                                        className="inline-flex items-center justify-center border rounded-full h-7 w-7 border-gc-line/25 bg-gc-dark/30 text-gc-text/90 shadow-glow"
                                        animate={{ y: [0, -2, 0], scale: [1, 1.04, 1] }}
                                        transition={{ duration: 0.95, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10 11V7a2 2 0 1 1 4 0v4"
                                                stroke="rgba(234,242,255,0.92)"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M10 11l-1.2-1.2a2 2 0 0 0-2.8 2.8l3.7 3.7c.9.9 2.1 1.4 3.4 1.4H14a4 4 0 0 0 4-4v-3.2a2 2 0 1 0-4 0V11"
                                                stroke="rgba(234,242,255,0.92)"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </motion.span>

                                    <span className="relative">
                                        <motion.span
                                            aria-hidden="true"
                                            className="absolute -bottom-[3px] left-0 h-[2px] w-full bg-gc-glow/55"
                                            animate={{ scaleX: [0.35, 1, 0.35] }}
                                            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                                            style={{ transformOrigin: "50% 50%" }}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 transition-opacity opacity-0 pointer-events-none group-hover:opacity-100">
                            <div className="absolute inset-0 border border-gc-glow/25" />
                        </div>
                    </motion.button>
                ))}
            </div>

            <AnimatePresence>
                {open && active && (
                    <motion.div
                        className="fixed inset-0 z-[60]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="absolute inset-0 bg-black/70" onClick={close} />

                        <motion.div
                            className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[760px] px-4 pb-4"
                            initial={{ y: 18, opacity: 0, scale: 0.99 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 18, opacity: 0, scale: 0.99 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                            <div className="border gc-cut bg-gc-dark/55 border-gc-line/25 shadow-glow backdrop-blur">
                                <div className="px-5 pt-5 pb-5">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-4">
                                            <div className="border gc-cut-sm border-gc-line/25 bg-gc-dark/40 shadow-glow overflow-hidden h-[120px] w-[120px]">
                                                <img
                                                    src={active.img}
                                                    alt={active.name}
                                                    draggable={false}
                                                    className="object-contain w-auto h-full mx-auto"
                                                />
                                            </div>

                                            <div className="min-w-0">
                                                <div className="text-lg font-semibold text-gc-text">{active.name}</div>
                                                <div className="mt-1 text-[12px] font-semibold text-gc-muted/90">{active.role}</div>
                                                <div className="mt-2 inline-flex px-3 py-1 text-[10px] font-extrabold tracking-[0.18em] uppercase border gc-cut-sm border-gc-glow/35 bg-gc-dark/85 text-gc-text shadow-glow leading-none">
                                                    {active.tag}
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={close}
                                            className="inline-flex items-center justify-center border rounded-full gc-focus-ring h-9 w-9 border-gc-line/25 bg-gc-dark/35 text-gc-text hover:border-gc-line/45"
                                            aria-label="Close"
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    <div className="mt-4 text-[13px] leading-relaxed text-gc-muted/90">{active.text}</div>

                                    <div className="grid gap-2 mt-4 sm:grid-cols-2">
                                        {active.highlights.map((x) => (
                                            <div key={x} className="flex items-start gap-2 text-[13px] text-gc-muted/90">
                                                <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-gc-glow/60 shadow-glow" />
                                                <span>{x}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-center gap-2 mt-5">
                                        <a
                                            href={whatsappHref}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="gc-cut-sm gc-focus-ring inline-flex items-center justify-center px-3 py-1.5 min-h-[38px] text-sm font-semibold border border-gc-glow/45 bg-gc-dark/45 text-gc-text hover:border-gc-glow/75 shadow-glow"
                                        >
                                            דברו איתנו
                                        </a>

                                        <button
                                            type="button"
                                            onClick={close}
                                            className="gc-cut-sm gc-focus-ring inline-flex items-center justify-center px-3 py-1.5 min-h-[38px] text-sm font-semibold border border-gc-line/30 bg-transparent text-gc-text hover:border-gc-line/55"
                                        >
                                            חזרה
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center mt-3">
                                <div className="h-1.5 w-12 rounded-full bg-white/15" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
