import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
    children,
    whatsappHref,
}: {
    children: React.ReactNode;
    whatsappHref: string;
}) {
    return (
        <div className="min-h-screen gc-grid">
            <Header whatsappHref={whatsappHref} />
            <main className="gc-container">{children}</main>
            <Footer />
        </div>
    );
}
