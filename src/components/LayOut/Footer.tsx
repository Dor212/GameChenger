export default function Footer() {
    return (
        <footer className="mt-10 border-t border-gc-line/15 bg-gc-bg/35">
            <div className="py-8 text-center gc-container">
                <div className="text-[12px] tracking-[0.18em] uppercase text-gc-muted/80">Game Changer Studio</div>
                <div className="mt-2 text-[12px] text-gc-muted/70">תוכן. אולפן. תוצאה.</div>
                <div className="mt-4 text-[12px] text-gc-muted/60">© {new Date().getFullYear()} All rights reserved.</div>
            </div>
        </footer>
    );
}
