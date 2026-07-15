import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="pt-20 min-h-[calc(100vh-5rem)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
