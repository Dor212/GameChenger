import { useEffect, useRef } from "react";

export default function ContentPackagesSection({ whatsappHref }: { whatsappHref: string }) {
    const primaryRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 1023px)").matches;
        if (isMobile) primaryRef.current?.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
    }, []);

    const wrap = [
        {
            title: "מותאם לרשתות החברתיות",
            desc: "כל הסרטונים נערכים בפורמט מקצועי המיועד למקסום חשיפה ואינטראקציה בפלטפורמות הדיגיטל.",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M7 17c4.5-4.5 9.5-5.5 10-5M7 12c2.2-2.2 6-4 10-4"
                        stroke="rgba(234,242,255,0.9)"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                    />
                    <path
                        d="M15.2 17.8l2.9-2.9a2 2 0 0 0 0-2.8l-2.2-2.2a2 2 0 0 0-2.8 0l-2.9 2.9"
                        stroke="rgba(234,242,255,0.9)"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                    />
                </svg>
            ),
        },
        {
            title: "מעטפת הפקה מלאה A to Z",
            desc: "ליווי משלב הפיצוח האסטרטגי, כתיבת תסריטים, בימוי מול מצלמה, צילום ועד עריכה סופית.",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 6v6l4 2"
                        stroke="rgba(234,242,255,0.9)"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M21 12a9 9 0 1 1-9-9"
                        stroke="rgba(234,242,255,0.9)"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                    />
                </svg>
            ),
        },
    ];

    const packs = [
        {
            key: "starter",
            name: "STARTER",
            title: "הצעד הראשון",
            price: "₪2,600",
            note: "+ מע״מ",
            bullets: ["4 סרטונים", "לוקיישן אחד (אולפן או משרד)"],
            cta: "דברו איתנו",
            primary: false,
            badge: undefined as string | undefined,
        },
        {
            key: "premium",
            name: "PREMIUM",
            title: "הפתרון האמיתי (המומלצת)",
            price: "₪5,400",
            note: "+ מע״מ",
            bullets: ["12 סרטונים", "יום צילום היברידי (אולפן וגם חוץ)"],
            badge: "BEST VALUE",
            cta: "אני רוצה את זה",
            primary: true,
        },
        {
            key: "business",
            name: "BUSINESS",
            title: "נוכחות קבועה",
            price: "₪4,000",
            note: "+ מע״מ",
            bullets: ["8 סרטונים", "לוקיישן אחד (אולפן או משרד)"],
            cta: "דברו איתנו",
            primary: false,
            badge: undefined as string | undefined,
        },
    ] as const;

    return (
        <section id="content-packages" className="pt-10 pb-12">
            <div className="text-center">
                <div className="text-xs tracking-[0.22em] uppercase text-gc-muted/80">Packages</div>
                <div className="mt-2 text-[13px] leading-relaxed text-gc-muted">
                    מהרעיון ועד הסרטון המוכן.
                    <br />
                    מעטפת מקצועית כלולה בכל החבילות.
                </div>
            </div>

            <div className="grid gap-3 mt-6 md:grid-cols-2">
                {wrap.map((b) => (
                    <div key={b.title} className="border gc-cut bg-gc-panel/60 border-gc-line/25 shadow-glow gc-scan">
                        <div className="flex items-start gap-3 px-4 py-4">
                            <div className="grid w-10 h-10 border rounded-full place-items-center border-gc-line/25 bg-gc-dark/40 shadow-glow">
                                {b.icon}
                            </div>
                            <div className="text-start">
                                <div className="text-sm font-semibold text-gc-text">{b.title}</div>
                                <div className="mt-1 text-[12px] leading-relaxed text-gc-muted/90">{b.desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 overflow-visible">
                <div className="flex gap-3 pt-6 pb-2 overflow-x-auto overflow-y-visible snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 lg:pt-0">
                    {packs.map((p) => (
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
                                        <div className="text-[13px] tracking-[0.20em] uppercase text-gc-muted/80">{p.name}</div>
                                        <div className="mt-2 text-lg font-semibold text-gc-text">{p.title}</div>
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

                                    <div className="mt-5 text-center">
                                        <div className="text-4xl leading-none font-heading text-gc-text">{p.price}</div>
                                        <div className="mt-2 text-xs font-semibold tracking-[0.16em] uppercase text-gc-muted/80">{p.note}</div>
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

            <div className="mt-4 text-center text-[12px] text-gc-muted/80">המחירים אינם כוללים מע״מ.</div>
        </section>
    );
}
