import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollTop}
      data-testid="back-to-top-button"
      aria-label="Voltar ao topo"
      className={`fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-navy text-cream border border-cream/20 shadow-lg shadow-navy/40 flex items-center justify-center transition-all duration-300 hover:bg-orange-brand hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
};
