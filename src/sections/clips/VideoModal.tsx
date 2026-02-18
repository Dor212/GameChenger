import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import type { VideoItem } from "../../data/videos";


const MODAL_THEME = {
    shootdays: {
        border: "rgba(111,231,255,0.20)",
        bg: "radial-gradient(900px 500px at 20% 15%, rgba(87,242,194,0.10), transparent 55%), linear-gradient(180deg, rgba(4,30,35,0.55), rgba(0,0,0,0.45))",
    },
    branding: {
        border: "rgba(255,79,216,0.22)",
        bg: "radial-gradient(900px 520px at 22% 15%, rgba(255,79,216,0.12), transparent 58%), linear-gradient(180deg, rgba(18,10,30,0.62), rgba(0,0,0,0.48))",
    },
} as const;

export default function VideoModal({
    open,
    items,
    index,
    onClose,
    onPrev,
    onNext,
    whatsappHref,
}: {
    open: boolean;
    items: VideoItem[];
    index: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    whatsappHref: string;
}) {
    const item = items[index];
    const t = item ? MODAL_THEME[item.category] : MODAL_THEME.shootdays;

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const v = videoRef.current;
        if (!open || !item || !v) return;

        v.pause();
        v.currentTime = 0;

        v.muted = false;
        v.volume = 1;

        v.load();

        const kick = async () => {
            try {
                await v.play();
            } catch {
                try {
                    v.muted = true;
                    await v.play();
                } catch { /* empty */ }
            }
        };

        const raf = requestAnimationFrame(kick);
        return () => cancelAnimationFrame(raf);
    }, [open, item?.src]);

    return (
        <AnimatePresence>
            {open && item && (
                <motion.div
                    className="fixed inset-0 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="absolute inset-0 bg-black/70" onClick={onClose} />

                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 0.985 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.985 }}
                        transition={{ type: "spring", stiffness: 360, damping: 34 }}
                    >
                        <div className="relative w-full h-full">
                            <div className="absolute z-20 flex items-center gap-2 left-4 top-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-3 py-2 text-sm font-semibold border gc-cut-sm gc-focus-ring border-gc-line/30 bg-black/35 text-gc-text hover:border-gc-line/45"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="absolute inset-0">
                                <div className="mx-auto h-full w-full max-w-[520px] px-3 sm:px-4">
                                    <div className="relative w-full h-full">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div
                                                className="relative aspect-[9/16] h-[92vh] max-h-[980px] w-auto overflow-hidden gc-cut-sm border shadow-glow"
                                                style={{ borderColor: t.border, background: t.bg }}
                                            >
                                                <video
                                                    ref={videoRef}
                                                    key={item.src}
                                                    src={item.src}
                                                    preload="auto"
                                                    playsInline
                                                    autoPlay
                                                    controls={false}
                                                    muted={false}
                                                    disablePictureInPicture
                                                    controlsList="nodownload noplaybackrate noremoteplayback"
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        </div>

                                        <div className="absolute inset-x-0 z-20 flex justify-center px-3 pointer-events-none bottom-4">
                                            <div className="pointer-events-auto flex w-full max-w-[520px] items-center justify-between gap-2">
                                                <button
                                                    type="button"
                                                    onClick={onPrev}
                                                    className="px-4 py-3 text-sm font-semibold bg-transparent border gc-cut-sm gc-focus-ring border-gc-line/35 text-gc-text hover:border-gc-line/55"
                                                >
                                                    הקודם
                                                </button>

                                                <a
                                                    href={whatsappHref}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold border gc-cut-sm gc-focus-ring border-gc-line/30 bg-black/35 text-gc-text hover:border-gc-line/55"
                                                >
                                                    <FaWhatsapp className="text-[18px]" />
                                                    דברו איתי
                                                </a>

                                                <button
                                                    type="button"
                                                    onClick={onNext}
                                                    className="px-4 py-3 text-sm font-semibold bg-transparent border gc-cut-sm gc-focus-ring border-gc-line/35 text-gc-text hover:border-gc-line/55"
                                                >
                                                    הבא
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
