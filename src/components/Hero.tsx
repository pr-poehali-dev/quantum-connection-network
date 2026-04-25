import { Header } from "./Header";
import Icon from "@/components/ui/icon";

export function Hero() {
  return (
    <section className="min-h-screen pt-16 flex flex-col" style={{ background: "var(--bg-cream)" }}>
      <Header />
      <div className="flex-1 flex items-center">
        <div className="container grid lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <span className="section-label mb-4 block">Юридический сервис нового поколения</span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: "var(--dark-blue)", fontFamily: "Montserrat, sans-serif" }}
            >
              Юридический сервис, в&nbsp;котором всё под контролем
            </h1>
            <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Налегке делает работу юркомпаний прозрачной, а клиентский опыт — спокойным и понятным.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#demo" className="btn-primary text-base">
                <Icon name="CalendarCheck" size={18} />
                Запросить демо
              </a>
              <a href="#how" className="btn-outline text-base">
                <Icon name="Play" size={18} />
                Посмотреть, как это работает
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              {/* Left phone mockup */}
              <div
                className="absolute -left-6 top-8 w-44 rounded-2xl p-4 card-shadow bg-white z-10"
                style={{ border: "1px solid #e8e8e8" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full gradient-teal flex items-center justify-center">
                    <Icon name="Briefcase" size={12} className="text-white" />
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "var(--dark-blue)" }}>Моё дело</span>
                </div>
                <div className="space-y-2">
                  {["Подача документов", "Ожидание решения", "Оплата услуг"].map((t, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ background: i === 0 ? "var(--cyan)" : i === 1 ? "var(--blue-soft)" : "#e0e0e0" }}
                      />
                      <span className="text-xs text-gray-600">{t}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-lg p-2" style={{ background: "var(--bg-soft)" }}>
                  <div className="text-xs text-gray-400 mb-1">Прогресс</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full" style={{ width: "60%", background: "var(--cyan)" }} />
                  </div>
                  <div className="text-xs font-semibold mt-1" style={{ color: "var(--teal)" }}>Этап 3 из 5</div>
                </div>
              </div>

              {/* Center cat illustration */}
              <div
                className="mx-auto w-48 h-52 rounded-3xl flex flex-col items-center justify-center card-shadow relative z-20"
                style={{ background: "linear-gradient(145deg, #e6f7f7, #c8eaea)", border: "2px solid rgba(0,206,209,0.2)" }}
              >
                <div className="text-7xl mb-2">🐱</div>
                <div
                  className="rounded-xl px-3 py-1.5 text-center"
                  style={{ background: "var(--teal)", color: "white" }}
                >
                  <div className="text-xs font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>НАЛЕГКЕ</div>
                </div>
                <div
                  className="mt-3 rounded-xl p-2 text-center mx-2"
                  style={{ background: "white", boxShadow: "0 2px 8px rgba(0,72,91,0.12)" }}
                >
                  <p className="text-xs text-gray-600 leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    "Всё видно. Всё понятно.<br />Я спокоен."
                  </p>
                </div>
              </div>

              {/* Right phone mockup */}
              <div
                className="absolute -right-6 top-8 w-44 rounded-2xl p-4 card-shadow bg-white z-10"
                style={{ border: "1px solid #e8e8e8" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "var(--teal)" }}>
                    <Icon name="MessageCircle" size={12} className="text-white" />
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "var(--dark-blue)" }}>Чат с юристом</span>
                </div>
                <div className="space-y-2">
                  <div className="rounded-lg p-2 text-xs" style={{ background: "var(--bg-soft)", color: "#555" }}>
                    Добрый день! Статус по делу?
                  </div>
                  <div className="rounded-lg p-2 text-xs text-right" style={{ background: "var(--teal)", color: "white" }}>
                    Документы поданы, ждём ответа.
                  </div>
                  <div className="rounded-lg p-2 text-xs" style={{ background: "var(--bg-soft)", color: "#555" }}>
                    Спасибо, всё понятно!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
