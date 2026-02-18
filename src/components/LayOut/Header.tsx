import { FaWhatsapp } from "react-icons/fa";

export default function Header({ whatsappHref }: { whatsappHref: string }) {
    const nav = [
        { id: "content-packages", label: "חבילות תוכן" },
        { id: "clips", label: "קליפים" },
        { id: "studio-packages", label: "חבילות אולפן" },
        { id: "team", label: "הצוות" },
    ];

    const go = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header className="sticky top-0 z-40">
            <div className="border-b backdrop-blur border-gc-line/15 bg-gc-bg/55">
                <div className="flex flex-row-reverse items-center justify-between gap-3 py-3 gc-container md:flex-row">
                    <button
                        type="button"
                        onClick={() => go("top")}
                        className="p-1 rounded-full gc-focus-ring"
                        aria-label="Back to top"
                    >
                        <img
                            src="/LogoGC.png"
                            alt="Game Changer Studio"
                            className="h-12 w-12 md:h-10 md:w-10 object-contain drop-shadow-[0_0_18px_rgba(111,231,255,0.22)]"
                            draggable={false}
                        />
                    </button>

                    <nav className="items-center hidden gap-1 md:flex">
                        {nav.map((n) => (
                            <button
                                key={n.id}
                                type="button"
                                onClick={() => go(n.id)}
                                className="px-4 py-2 text-xs font-semibold border rounded-full gc-focus-ring border-gc-line/20 bg-gc-dark/20 text-gc-muted hover:border-gc-line/35"
                            >
                                {n.label}
                            </button>
                        ))}
                    </nav>

                    <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="gc-cut-sm gc-focus-ring inline-flex items-center justify-center gap-2 border border-gc-glow/40 bg-gc-dark/30 px-3 py-1.5 min-h-[38px] text-sm font-semibold text-gc-text hover:border-gc-glow/65 shadow-glow"
                    >
                        דברו איתנו <FaWhatsapp className="text-[18px]" />
                    </a>
                </div>
            </div>
        </header>
    );
}
