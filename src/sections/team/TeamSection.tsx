export default function OwnersSection({ whatsappHref }: { whatsappHref: string }) {
    const p1Img = encodeURI("/Photos/ShonP.png");
    const p2Img = encodeURI("/Photos/AmitP.png");

    const people = [
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
            highlights: ["הנדסאי אלקטרוניקה ומחשבים", "איש סאונד ועורך: וידאו, אודיו וסטילס", "בניית קונספטים, סצנות ואילוסטרציות", "בחזית כלי AI לתוכן חדשני"],
            text: "הלב הקריאייטיבי והטכנולוגי. מחבר בין טכנולוגיה לאומנות הסיפור, ומתרגם רעיונות לתוצרים ויזואליים מדויקים, נקיים ופורצי דרך.",
        },
    ] as const;

    return (
        <section id="team" className="pt-12 pb-16">
            <div className="text-center">
                <div className="text-xs tracking-[0.22em] uppercase text-gc-muted/80">Co-op</div>
            </div>

            <div className="flex gap-4 pb-2 mt-6 overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 lg:overflow-visible">
                {people.map((p) => (
                    <div key={p.key} className="snap-center shrink-0 w-[86%] sm:w-[70%] lg:w-auto border gc-cut bg-gc-dark/25 border-gc-line/25 shadow-glow">
                        <div className="px-5 pt-6 pb-5">
                            <div className="flex items-start gap-4">
                                <div className="relative shrink-0">
                                    <div className="border gc-cut-sm border-gc-line/25 bg-gc-dark/40 shadow-glow overflow-hidden h-[140px] w-[140px] sm:h-[152px] sm:w-[152px]">
                                        <img src={p.img} alt={p.name} draggable={false} className="object-contain w-auto h-full mx-auto" />
                                    </div>

                                    <div className="mt-2 text-center">
                                        <div className="inline-flex px-3 py-1 text-[11px] font-bold tracking-[0.18em] uppercase border gc-cut-sm border-gc-glow/35 bg-gc-dark/70 text-gc-text shadow-glow">
                                            {p.tag}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 text-start">
                                    <div className="text-lg font-semibold text-gc-text">{p.name}</div>
                                    <div className="mt-1 text-[12px] font-semibold text-gc-muted/90">{p.role}</div>
                                    <div className="mt-3 text-[13px] leading-relaxed text-gc-muted/90">{p.text}</div>
                                </div>
                            </div>

                            <div className="grid gap-2 mt-5 sm:grid-cols-2">
                                {p.highlights.map((x) => (
                                    <div key={x} className="flex items-start gap-2 text-[13px] text-gc-muted/90">
                                        <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-gc-glow/60 shadow-glow" />
                                        <span>{x}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center mt-5">
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="gc-cut-sm gc-focus-ring inline-flex items-center justify-center px-3 py-1.5 min-h-[38px] text-sm font-semibold bg-transparent border border-gc-line/30 text-gc-text hover:border-gc-line/55"
                                >
                                    דברו איתנו
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
