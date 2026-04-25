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
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm"
      style={{ boxShadow: "0 1px 12px rgba(0,72,91,0.07)", borderBottom: "1px solid #f0f0f0" }}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="/">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium transition-colors duration-150 hover:text-teal"
              style={{ color: "#555", fontFamily: "Montserrat, sans-serif" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#login" className="btn-outline text-sm" style={{ padding: "0.45rem 1.1rem" }}>
            Войти
          </a>
          <a href="#demo" className="btn-primary text-sm" style={{ padding: "0.45rem 1.1rem" }}>
            Запросить демо
          </a>
        </div>

        <button
          className="lg:hidden p-2"
          style={{ color: "var(--dark-blue)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white px-4 pb-6 pt-2" style={{ borderTop: "1px solid #f0f0f0" }}>
          <nav className="flex flex-col gap-4 mb-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium"
                style={{ color: "#444", fontFamily: "Montserrat, sans-serif" }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a href="#login" className="btn-outline text-center justify-center">Войти</a>
            <a href="#demo" className="btn-primary justify-center">Запросить демо</a>
          </div>
        </div>
      )}
    </header>
  );
};
