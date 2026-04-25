import { Logo } from "./Logo";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Платформа", href: "#platform" },
  { label: "Решения", href: "#solutions" },
  { label: "Интеграции", href: "#integrations" },
  { label: "Кейсы", href: "#cases" },
  { label: "Тарифы", href: "#pricing" },
  { label: "О компании", href: "#about" },
  { label: "База знаний", href: "#knowledge" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
      style={{
        background: "rgba(13,17,23,0.85)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div className="container flex items-center justify-between h-14">
        <a href="/">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: "var(--text-secondary)", fontFamily: "Montserrat, sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#login" className="btn-outline" style={{ padding: "0.4rem 1rem", fontSize: "0.85rem" }}>
            Войти
          </a>
          <a href="#demo" className="btn-primary" style={{ padding: "0.4rem 1rem", fontSize: "0.85rem" }}>
            Запросить демо
          </a>
        </div>

        <button
          className="lg:hidden p-2 transition-colors"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden px-4 pb-6 pt-3"
          style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}
        >
          <nav className="flex flex-col gap-4 mb-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a href="#login" className="btn-outline justify-center">Войти</a>
            <a href="#demo" className="btn-primary justify-center">Запросить демо</a>
          </div>
        </div>
      )}
    </header>
  );
};
