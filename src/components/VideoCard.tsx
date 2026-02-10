import type { VideoItem } from "../data/videos";

const THEMES = {
    shootdays: {
        bg: "radial-gradient(900px 500px at 20% 15%, rgba(87,242,194,0.14), transparent 55%), radial-gradient(700px 450px at 80% 35%, rgba(111,231,255,0.10), transparent 55%), linear-gradient(180deg, #041E23 0%, #041016 100%)",
        line: "rgba(87,242,194,0.75)",
        ctaBorder: "rgba(87,242,194,0.38)",
        ctaGlow: "rgba(87,242,194,0.10)",
        pillBg: "rgba(87,242,194,0.10)",
        pillBorder: "rgba(87,242,194,0.35)",
    },
    branding: {
        bg: "radial-gradient(900px 520px at 22% 15%, rgba(255,79,216,0.18), transparent 58%), radial-gradient(700px 460px at 82% 40%, rgba(155,124,255,0.14), transparent 60%), linear-gradient(180deg, #120A1E 0%, #07040F 100%)",
        line: "rgba(255,79,216,0.78)",
        ctaBorder: "rgba(255,79,216,0.42)",
        ctaGlow: "rgba(255,79,216,0.12)",
        pillBg: "rgba(255,79,216,0.10)",
        pillBorder: "rgba(255,79,216,0.38)",
    },
} as const;

export default function VideoCard({
    item,
    onOpen,
}: {
    item: VideoItem;
    onOpen: () => void;
}) {
    const t = THEMES[item.category];

    return (
        <button
            type="button"
            onClick={onOpen}
            className="relative w-full overflow-hidden transition border gc-cut-sm gc-focus-ring group border-gc-line/20 bg-gc-dark/40 hover:border-gc-line/35 hover:shadow-glow"
            aria-label={`Open video: ${item.title}`}
        >
            <div className="relative aspect-[9/16] w-full overflow-hidden">
                <div className="absolute inset-0" style={{ background: t.bg }} />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />

                <div className="absolute inset-0 grid place-items-center">
                    <div className="gc-logo">
                        <img
                            src="/LogoGC.png"
                            alt="Game Changer Studio"
                            className="w-[170px] max-w-[55%] select-none opacity-[0.92] drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)] transition duration-300 group-hover:scale-[1.02]"
                            draggable={false}
                        />
                    </div>
                </div>

                <div className="absolute inset-0 flex items-end justify-center pb-5">
                    <div
                        className="px-4 py-3 transition border gc-cut-sm shadow-glow"
                        style={{
                            background: "rgba(0,0,0,0.28)",
                            borderColor: t.ctaBorder,
                            boxShadow: `0 0 24px ${t.ctaGlow}`,
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <span
                                className="grid rounded-full h-9 w-9 place-items-center"
                                style={{
                                    background: t.pillBg,
                                    border: `1px solid ${t.pillBorder}`,
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 7l10 5-10 5V7z" fill="rgba(234,242,255,0.95)" />
                                </svg>
                            </span>
                            <span className="text-sm font-semibold text-gc-text">Play</span>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] opacity-70 bg-gradient-to-r from-transparent to-transparent"
                    style={{ backgroundImage: `linear-gradient(to right, transparent, ${t.line}, transparent)` }}
                />
            </div>
        </button>
    );
}
