import { useEffect, useRef } from "react";

export default function StudioPackagesSection({ whatsappHref }: { whatsappHref: string }) {
    const primaryRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 1023px)").matches;
        if (isMobile) primaryRef.current?.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
    }, []);

    const studio = [
        {
            key: "audio",
            title: "חבילת אודיו בלבד",
            subtitle: "מתאים לפודקאסטרים המיועדים לספוטיפיי / אפל מוזיק בלבד",
            price: "₪350",
            bullets: ["שעה הקלטה (נטו)", "הקלטה מ־2 מיקרופונים מקצועיים של Shure", 'כיוון סאונד מקצועי ע"י איש סאונד', "קובץ ערוך במייל עד 24 שעות"],
            cta: "לקביעת הקלטה",
            primary: false,
            badge: undefined as string | undefined,
        },
        {
            key: "audiovideo",
            title: "חבילת אודיו + וידיאו",
            subtitle: "מתאים לפודקאסטרים המיועדים ליוטיוב ולרשתות החברתיות",
            price: "₪750",
            bullets: [
                "שעה הקלטה והסרטה (נטו)",
                "הקלטה מ־2 מיקרופונים מקצועיים של Shure",
                "צילום: 2 מצלמות 4K + מצלמת WideShot (סה״כ 3 מצלמות)",
                "עריכה בשידור חי (ניתוב מצלמות בזמן ההקלטה)",
                "עריכה בסיסית כלולה במחיר",
                "מחיר מיוחד למזמינים מספר פרקים מראש!",
            ],
            cta: "לקביעת צילום באולפן",
            primary: true,
            badge: "STUDIO",
        },
        {
            key: "interview",
            title: "חבילת ראיון עסקי",
            subtitle: "מתאים לבעלי עסקים שמעוניינים לייצר תוכן וחשיפה ברשתות החברתיות",
            price: "₪1,250",
            bullets: [
                "שיחת ייעוץ עם קופירייטר לניסוח שאלות ותשובות רלוונטיות",
                "ראיון 1 על 1 עם מראיין מקצועי באולפן",
                "כ־3 סרטוני Reels בין 30–40 שניות, ממוקדים למטרות שלכם",
                "עריכה מלאה כולל כתוביות, אפקטים והתאמה לפרסום ברשתות",
                "צילום: 2 מצלמות 4K + WideShot (סה״כ 3 מצלמות)",
            ],
            cta: "לתיאום ראיון עסקי",
            primary: false,
            badge: undefined as string | undefined,
        },
    ] as const;

    const addOns = [
        "שיווק דיגיטלי (קמפיינים ממומנים לצמיחה עסקית)",
        "עריכת סאונד והפקה מוזיקלית מותאמת אישית",
        "עריכת וידיאו לכל צורך",
        "קופירייטינג שמביא תוצאות ומיתוג חזק",
        "צילומי וידיאו וסטילס לסושיאל ולקמפיינים",
    ];

    return (
        <section id="studio-packages" className="pt-12 pb-12">
            <div className="text-center">
                <div className="text-xs tracking-[0.22em] uppercase text-gc-muted/80">Studio</div>
                <div className="mt-2 text-[13px] leading-relaxed text-gc-muted">
                    הקלטה מקצועית, סאונד נקי,
                    <br />
                    וצילום שמוכן לרשתות.
                </div>
            </div>

            <div className="mt-6 overflow-visible">
                <div className="flex gap-3 pt-6 pb-2 overflow-x-auto overflow-y-visible snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 lg:pt-0">
                    {studio.map((p) => (
                        <div
                            key={p.key}
                            ref={p.primary ? primaryRef : undefined}
                            className={["relative snap-center shrink-0 w-[86%] sm:w-[70%] lg:w-auto", p.primary ? "z-10" : "z-0"].join(" ")}
                        >
                            {p.badge && (
                                <div className="absolute top-0 z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2">
                                    <div className="rounded-md border border-gc-glow/55 bg-gc-dark/90 px-5 py-1 text-[11px] font-extrabold tracking-[0.18em] uppercase text-gc-text shadow-glow leading-none">
                                        {p.badge}
                                    </div>
                                </div>
                            )}

                            <div
                                className={[
                                    "h-full border gc-cut bg-gc-dark/25 shadow-glow",
                                    p.primary ? "border-gc-glow/55" : "border-gc-line/25",
                                    p.badge ? "pt-6" : "",
                                ].join(" ")}
                            >
                                <div className="flex flex-col h-full px-5 pt-6 pb-5">
                                    <div className="text-center">
                                        <div className="text-lg font-semibold text-gc-text">{p.title}</div>
                                        <div className="mt-2 text-[12px] leading-relaxed text-gc-muted/90">{p.subtitle}</div>
                                    </div>

                                    <div className="mt-5 text-center">
                                        <div className="text-4xl leading-none font-heading text-gc-text">{p.price}</div>
                                    </div>

                                    <div className="flex items-center justify-center flex-1">
                                        <ul className="mt-4 flex flex-col items-center gap-2 text-[13px] text-gc-muted/90">
                                            {p.bullets.map((x) => (
                                                <li key={x} className="flex items-center justify-center gap-2 text-center">
                                                    <span className="h-[6px] w-[6px] rounded-full bg-gc-glow/70 shadow-glow" />
                                                    <span>{x}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex justify-center mt-5">
                                        <a
                                            href={whatsappHref}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={[
                                                "gc-cut-sm gc-focus-ring inline-flex mx-auto items-center justify-center border text-sm font-semibold text-gc-text transition",
                                                "px-3 py-1.5 min-h-[38px]",
                                                p.primary
                                                    ? "border-gc-glow/55 bg-gc-dark/45 hover:border-gc-glow/80 shadow-glow"
                                                    : "border-gc-line/30 bg-transparent hover:border-gc-line/55",
                                            ].join(" ")}
                                        >
                                            {p.cta}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 border gc-cut bg-gc-panel/60 border-gc-line/25 shadow-glow gc-scan">
                <div className="px-5 py-5">
                    <div className="text-center">
                        <div className="text-xs tracking-[0.22em] uppercase text-gc-muted/80">Add-ons</div>
                        <div className="mt-2 text-lg font-semibold text-gc-text">שירותי מיתוג דיגיטלי</div>
                        <div className="mt-2 text-[12px] leading-relaxed text-gc-muted/90">
                            בהתאמה אישית.
                            <br />
                            בונים ביחד את החבילה לפי המטרה והקהל.
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto mt-4">
                        <ul className="space-y-2 text-[13px] text-gc-muted/90">
                            {addOns.map((x) => (
                                <li key={x} className="flex items-start justify-center gap-2 text-center">
                                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-gc-glow/70 shadow-glow" />
                                    <span>{x}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex justify-center mt-5">
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noreferrer"
                            className="gc-cut-sm gc-focus-ring inline-flex items-center justify-center px-3 py-1.5 min-h-[38px] text-sm font-semibold border border-gc-glow/45 bg-gc-dark/45 text-gc-text hover:border-gc-glow/70 shadow-glow"
                        >
                            דברו איתנו להתאמה
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
