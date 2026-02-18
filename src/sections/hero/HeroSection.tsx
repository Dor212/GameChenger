import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection({ whatsappHref }: { whatsappHref: string }) {
    return (
        <section className="w-full pt-4 sm:pt-6">
            <div className="min-h-[100svh] flex items-center justify-center">
                <div className="w-full gc-grid">
                    <div className="border gc-cut border-gc-line/20 bg-gc-dark/25 shadow-glow">
                        <div className="px-4 py-4">
                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="gc-logo"
                                >
                                    <img
                                        src="/LogoGC.png"
                                        alt="Game Changer Studio"
                                        className="h-28 w-28 sm:h-32 sm:w-32 object-contain drop-shadow-[0_0_26px_rgba(111,231,255,0.28)]"
                                        draggable={false}
                                    />
                                </motion.div>

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

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.55, delay: 0.06 }}
                                    className="mt-3 max-w-2xl text-center text-[14px] leading-relaxed text-gc-muted"
                                >
                                    <p className="mt-1">
                                        לא טרנדים ריקים ולא רעש אלא רעיונות וסיפורים שמרגישים אותנטיים ומדברים לקהל בגובה העיניים.
                                    </p>
                                    <p className="mt-1">
                                        אנחנו מתמחים ביצירת תוכן מצולם לעסקים שרוצים להיראות מקצועיים, חדים ורלוונטיים, בלי לוותר על האישיות שלהם.
                                    </p>
                                    <p className="mt-1">
                                        המטרה שלנו היא להפוך ידע וניסיון לתוכן מדויק שמחזק נוכחות, בונה אמון ומייצר השפעה אמיתית לאורך זמן.
                                    </p>
                                </motion.div>

                                <div className="mt-3 grid w-full max-w-[360px] grid-cols-2 gap-2">
                                    <a
                                        href={whatsappHref}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="gc-cut-sm gc-focus-ring flex items-center justify-center border border-gc-glow/45 bg-transparent px-3 py-1.5 min-h-[38px] text-center text-[13px] font-semibold text-gc-text hover:border-gc-glow/70"
                                    >
                                        <span className="flex items-center gap-2">
                                            דברו איתנו <FaWhatsapp className="text-[18px]" />
                                        </span>
                                    </a>

                                    <button
                                        type="button"
                                        onClick={() => document.getElementById("clips")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                                        className="gc-cut-sm gc-focus-ring flex items-center justify-center border border-gc-line/30 bg-transparent px-3 py-1.5 min-h-[38px] text-center text-[13px] font-semibold text-gc-text hover:border-gc-line/55"
                                    >
                                        לצפייה בעבודות
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
