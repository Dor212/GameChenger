import { motion } from "framer-motion";
import type { CategoryKey } from "../data/videos";
import { categories } from "../data/videos";

export default function HudTabs({
    active,
    onChange,
}: {
    active: CategoryKey;
    onChange: (k: CategoryKey) => void;
}) {
    const tabs: CategoryKey[] = ["shootdays", "branding"];

    return (
        <div className="border gc-cut bg-gc-panel/70 border-gc-line/25 shadow-glow gc-scan">
            <div className="px-4 pt-4 text-center">
                <div className="text-xs tracking-[0.22em] uppercase text-gc-muted/80">Control Panel</div>
                <div className="mt-1 text-[11px] tracking-[0.18em] uppercase text-gc-muted/70">Mode Select</div>
            </div>

            <div className="px-4 pt-3 pb-4">
                <div className="relative grid grid-cols-2 gap-2">
                    {tabs.map((k) => {
                        const isActive = k === active;
                        return (
                            <button
                                key={k}
                                className={[
                                    "gc-cut-sm gc-focus-ring relative overflow-hidden border px-3 py-3 text-start transition",
                                    isActive ? "border-gc-glow/55 shadow-glow" : "border-gc-line/20 hover:border-gc-line/35",
                                    "bg-gc-dark/35",
                                ].join(" ")}
                                onClick={() => onChange(k)}
                                type="button"
                            >
                                <div className="text-sm font-semibold text-gc-text">{categories[k].label}</div>

                                <div className="flex items-center gap-2 mt-2">
                                    <span
                                        className="h-[6px] w-[6px] rounded-full"
                                        style={{ background: categories[k].accent, boxShadow: "0 0 18px rgba(111,231,255,0.25)" }}
                                    />
                                    <span className="text-[11px] text-gc-muted/80">{isActive ? "Active" : "Tap to Switch"}</span>
                                </div>

                                {isActive && (
                                    <motion.div
                                        layoutId="hud-active"
                                        className="absolute inset-x-3 bottom-2 h-[2px] rounded-full"
                                        style={{ background: categories[k].accent, boxShadow: "0 0 18px rgba(111,231,255,0.30)" }}
                                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
