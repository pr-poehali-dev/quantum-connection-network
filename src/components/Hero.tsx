import { Header } from "./Header";
import Icon from "@/components/ui/icon";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <Header />

      {/* Ambient glows */}
      <div className="hero-glow w-[600px] h-[500px] top-[-100px] left-1/2 -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(0,206,209,0.12) 0%, transparent 70%)" }} />
      <div className="hero-glow w-[300px] h-[300px] bottom-10 right-10"
        style={{ background: "radial-gradient(ellipse, rgba(0,128,128,0.1) 0%, transparent 70%)" }} />

      <div className="flex-1 flex items-center relative z-10">
        <div className="container py-24 flex flex-col items-center text-center">

          <span className="pill mb-6">
            <Icon name="Sparkles" size={12} />
            Юридический сервис нового поколения
          </span>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 max-w-4xl"
            style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "-0.02em" }}
          >
            Юридический сервис,{" "}
            <span className="text-gradient">в котором всё под контролем</span>
          </h1>

          <p className="text-lg max-w-xl mb-10 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Налегке делает работу юркомпаний прозрачной, а клиентский опыт — спокойным и понятным.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#demo" className="btn-primary" style={{ padding: "0.75rem 1.8rem", fontSize: "0.95rem" }}>
              <Icon name="CalendarCheck" size={18} />
              Запросить демо
            </a>
            <a href="#how" className="btn-outline" style={{ padding: "0.75rem 1.8rem", fontSize: "0.95rem" }}>
              <Icon name="Play" size={16} />
              Как это работает
            </a>
          </div>

          {/* Hero visual — mockup cards */}
          <div className="mt-20 w-full max-w-3xl relative">
            {/* Main card */}
            <div
              className="card-dark rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--border-subtle)", boxShadow: "0 0 60px rgba(0,206,209,0.08), 0 24px 60px rgba(0,0,0,0.5)" }}
            >
              {/* Fake browser bar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ background: "var(--bg-tertiary)", borderBottom: "1px solid var(--border-color)" }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <div
                  className="flex-1 mx-4 rounded-md px-3 py-1 text-xs text-center"
                  style={{ background: "var(--bg-secondary)", color: "var(--text-muted)", maxWidth: 200, margin: "0 auto" }}
                >
                  app.nalegke.ru
                </div>
              </div>

              {/* App UI mockup */}
              <div className="p-6 grid md:grid-cols-3 gap-4" style={{ background: "var(--bg-secondary)" }}>
                {/* Left sidebar */}
                <div className="space-y-2">
                  {["Моё дело", "Документы", "Платежи", "Чат с юристом", "Уведомления"].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm"
                      style={{
                        background: i === 0 ? "rgba(0,206,209,0.12)" : "transparent",
                        color: i === 0 ? "var(--cyan)" : "var(--text-secondary)",
                        borderLeft: i === 0 ? "2px solid var(--cyan)" : "2px solid transparent",
                      }}
                    >
                      <Icon
                        name={["Briefcase","FileText","CreditCard","MessageCircle","Bell"][i] as "Briefcase"}
                        size={15}
                      />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Center — status */}
                <div className="space-y-4">
                  <div className="text-xs font-semibold mb-3" style={{ color: "var(--text-muted)" }}>ПРОГРЕСС ДЕЛА</div>
                  {["Заявка принята", "Анализ документов", "Работа ведётся", "Решение", "Закрытие"].map((s, i) => (
                    <div key={s} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: i < 3 ? "var(--cyan)" : "var(--border-color)",
                          boxShadow: i === 2 ? "0 0 10px rgba(0,206,209,0.5)" : "none",
                        }}
                      >
                        {i < 2 && <Icon name="Check" size={11} style={{ color: "#0d1117" }} />}
                        {i === 2 && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                      </div>
                      <span className="text-xs" style={{ color: i <= 2 ? "var(--text-primary)" : "var(--text-muted)" }}>
                        {s}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right — chat */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold mb-3" style={{ color: "var(--text-muted)" }}>ЧАТ С ЮРИСТОМ</div>
                  <div
                    className="rounded-xl rounded-tl-sm p-3 text-xs"
                    style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)" }}
                  >
                    Добрый день! Какой статус по делу?
                  </div>
                  <div
                    className="rounded-xl rounded-tr-sm p-3 text-xs ml-4"
                    style={{ background: "rgba(0,206,209,0.15)", color: "var(--cyan)" }}
                  >
                    Документы поданы, ждём ответа суда.
                  </div>
                  <div
                    className="rounded-xl rounded-tl-sm p-3 text-xs"
                    style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)" }}
                  >
                    Спасибо! Когда ожидать результат?
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-secondary)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                whiteSpace: "nowrap",
              }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: "var(--cyan)", boxShadow: "0 0 6px var(--cyan)" }} />
              Данные синхронизируются в реальном времени
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
