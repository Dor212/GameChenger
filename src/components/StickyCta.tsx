import { FaWhatsapp } from "react-icons/fa";

export default function StickyCta({ whatsappHref }: { whatsappHref: string }) {
    return (
        <div className="fixed left-0 right-0 z-40 px-3 bottom-3 sm:hidden">
            <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="block w-full px-4 py-4 text-sm font-semibold text-center border gc-cut border-gc-glow/40 bg-gc-dark/70 text-gc-text shadow-glow"
            >
                <span className="inline-flex items-center justify-center gap-2">
                    דברו איתנו <FaWhatsapp className="text-[18px]" />
                </span>
            </a>
        </div>
    );
}
