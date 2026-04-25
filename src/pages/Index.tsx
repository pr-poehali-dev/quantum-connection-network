import { Hero } from "@/components/Hero";
import Icon from "@/components/ui/icon";

const painPoints = [
  { icon: "HelpCircle", title: 'Много вопросов "Что с делом?"', desc: "Менеджеры постоянно объясняют одно и то же." },
  { icon: "Clock", title: "Просрочки и потери платежей", desc: "Клиент не видит сроки и забывает оплачивать." },
  { icon: "FolderOpen", title: "Документы разбросаны", desc: "Сложно найти нужное, легко что-то упустить." },
];

const platformFeatures = [
  { icon: "Map", label: "Карта дела", desc: "Полная хронология и следующий шаг" },
  { icon: "MessageSquare", label: "Чат и документы", desc: "Общение и хранение в одном месте" },
  { icon: "CreditCard", label: "Платежи и касса", desc: "Напоминания, онлайн-оплата, история" },
  { icon: "Bell", label: "Уведомления", desc: "Push, email, SMS — ничего не пропустит" },
  { icon: "ShieldCheck", label: "Верификация и ЭЦП", desc: "Безопасная идентификация и подпись" },
  { icon: "TrendingUp", label: "NPS и аналитика", desc: "Мнение клиентов и метрики сервиса" },
  { icon: "Users", label: "Партнёрский модуль", desc: "Рефералы и партнёрские программы" },
  { icon: "Layers", label: "White-label", desc: "Ваш бренд, ваш домен, ваши цвета" },
];

const steps = [
  { num: 1, label: "Диагностика", desc: "Изучаем ваши процессы" },
  { num: 2, label: "Настройка", desc: "Конфигурируем сервис" },
  { num: 3, label: "Интеграция", desc: "Подключаем к системам" },
  { num: 4, label: "Онбординг", desc: "Обучаем команду" },
  { num: 5, label: "Пилот", desc: "Тестовый запуск" },
  { num: 6, label: "Масштаб", desc: "Разворачиваем полностью" },
];

const footerLinks = [
  { title: "Платформа", links: ["Возможности", "Интеграции", "Безопасность"] },
  { title: "Решения", links: ["Для юркомпаний", "White-label", "Партнёрам"] },
  { title: "Компания", links: ["О нас", "Кейсы", "Контакты"] },
  { title: "База знаний", links: ["Статьи", "Вебинары", "Документация"] },
];

const SectionDivider = () => (
  <div className="divider" />
);

export default function Index() {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif", background: "var(--bg-primary)" }}>
      <Hero />

      {/* Pain Points */}
      <section id="solutions" className="py-24" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Боли рынка</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              В чём проблема сейчас?
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Клиенты не понимают, что происходит. Команда тратит время на одно и то же.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {painPoints.map((p) => (
              <div key={p.title} className="card-glow p-7">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(0,206,209,0.1)", border: "1px solid rgba(0,206,209,0.2)" }}
                >
                  <Icon name={p.icon as "HelpCircle"} size={22} style={{ color: "var(--cyan)" }} />
                </div>
                <h3 className="text-base font-bold mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* How it works */}
      <section id="platform" className="py-24" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Принцип работы</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как работает Налегке</h2>
            <p style={{ color: "var(--text-secondary)" }}>Один процесс — два удобных интерфейса</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {/* Client app */}
            <div className="card-dark p-7">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(0,206,209,0.1)", border: "1px solid rgba(0,206,209,0.2)" }}
              >
                <Icon name="Smartphone" size={20} style={{ color: "var(--cyan)" }} />
              </div>
              <h3 className="text-base font-bold mb-1">Клиентское приложение</h3>
              <p className="text-xs mb-5" style={{ color: "var(--text-muted)" }}>iOS / Android / Web</p>
              <div className="space-y-3">
                {[
                  { icon: "BarChart2", label: "Статусы и прогресс" },
                  { icon: "MessageCircle", label: "Чат с юристом" },
                  { icon: "FileText", label: "Документы" },
                  { icon: "Bell", label: "Уведомления" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,206,209,0.08)" }}
                    >
                      <Icon name={f.icon as "BarChart2"} size={14} style={{ color: "var(--cyan)" }} />
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center sync */}
            <div className="flex flex-col items-center justify-center gap-5 py-8 lg:py-0">
              <div
                className="text-xl font-extrabold tracking-[0.12em]"
                style={{ color: "var(--cyan)", fontFamily: "Montserrat, sans-serif" }}
              >
                НАЛЕГКЕ
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--cyan))" }} />
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ border: "1px solid rgba(0,206,209,0.4)", background: "rgba(0,206,209,0.08)" }}
                >
                  <Icon name="ArrowLeftRight" size={18} style={{ color: "var(--cyan)" }} />
                </div>
                <div className="w-12 h-px" style={{ background: "linear-gradient(90deg, var(--cyan), transparent)" }} />
              </div>
              <p className="text-xs text-center max-w-[160px]" style={{ color: "var(--text-muted)" }}>
                Данные синхронизируются в реальном времени
              </p>
              <div
                className="pill text-xs"
                style={{ fontSize: "0.68rem" }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Онлайн
              </div>
            </div>

            {/* Team */}
            <div className="card-dark p-7">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(0,128,128,0.12)", border: "1px solid rgba(0,128,128,0.25)" }}
              >
                <Icon name="Monitor" size={20} style={{ color: "var(--teal)" }} />
              </div>
              <h3 className="text-base font-bold mb-1">Рабочее пространство</h3>
              <p className="text-xs mb-5" style={{ color: "var(--text-muted)" }}>Команды · Bitrix24</p>
              <div className="space-y-3">
                {[
                  { icon: "CheckSquare", label: "Задачи и дедлайны" },
                  { icon: "Plug", label: "Интеграции" },
                  { icon: "PieChart", label: "Отчёты и аналитика" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,128,128,0.08)" }}
                    >
                      <Icon name={f.icon as "CheckSquare"} size={14} style={{ color: "var(--teal)" }} />
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Results */}
      <section id="results" className="py-24" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Результаты</span>
            <h2 className="text-3xl md:text-4xl font-bold">Что получают клиенты и юркомпании</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* For clients */}
            <div
              className="card-dark p-8 relative overflow-hidden"
              style={{ borderColor: "rgba(0,206,209,0.2)" }}
            >
              <div className="hero-glow w-48 h-48 -top-12 -right-12" style={{ background: "radial-gradient(ellipse, rgba(0,206,209,0.08) 0%, transparent 70%)" }} />
              <div className="relative z-10">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(0,206,209,0.1)", border: "1px solid rgba(0,206,209,0.25)" }}
                >
                  <Icon name="User" size={18} style={{ color: "var(--cyan)" }} />
                </div>
                <h3 className="text-xl font-bold mb-1">Для клиентов</h3>
                <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>Понятный путь и спокойствие</p>
                <ul className="space-y-3 mb-7">
                  {[
                    "Видят статус и следующий шаг",
                    "Получают напоминания о платежах",
                    "Общаются в защищённом чате",
                    "Хранят документы в одном месте",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <Icon name="Check" size={15} style={{ color: "var(--cyan)", flexShrink: 0 }} />
                      {t}
                    </li>
                  ))}
                </ul>
                {/* Progress bar */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-color)" }}
                >
                  <div className="flex justify-between text-xs mb-2" style={{ color: "var(--text-muted)" }}>
                    <span>Прогресс по делу</span>
                    <span style={{ color: "var(--cyan)", fontWeight: 600 }}>Этап 3 из 5</span>
                  </div>
                  <div className="w-full rounded-full h-1.5" style={{ background: "var(--border-color)" }}>
                    <div
                      className="h-1.5 rounded-full"
                      style={{ width: "60%", background: "linear-gradient(90deg, var(--teal), var(--cyan))", boxShadow: "0 0 8px var(--cyan)" }}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    {["Заявка", "Анализ", "Работа", "Решение", "Закрытие"].map((s, i) => (
                      <span key={s} className="text-xs" style={{ color: i < 3 ? "var(--cyan)" : "var(--text-muted)", fontWeight: i === 2 ? 700 : 400 }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* For law firms */}
            <div
              className="card-dark p-8 relative overflow-hidden"
              style={{ borderColor: "rgba(0,128,128,0.2)" }}
            >
              <div className="hero-glow w-48 h-48 -top-12 -left-12" style={{ background: "radial-gradient(ellipse, rgba(0,128,128,0.1) 0%, transparent 70%)" }} />
              <div className="relative z-10">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(0,128,128,0.1)", border: "1px solid rgba(0,128,128,0.25)" }}
                >
                  <Icon name="Building2" size={18} style={{ color: "var(--teal)" }} />
                </div>
                <h3 className="text-xl font-bold mb-1">Для юркомпаний</h3>
                <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>Эффективная команда и рост бизнеса</p>
                <ul className="space-y-3 mb-7">
                  {[
                    "Снижают нагрузку и рутину",
                    "Уменьшают просрочки и потери",
                    "Повышают лояльность клиентов",
                    "Масштабируют сервис без потери качества",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <Icon name="Check" size={15} style={{ color: "var(--teal)", flexShrink: 0 }} />
                      {t}
                    </li>
                  ))}
                </ul>
                <div
                  className="rounded-xl p-4 flex items-center gap-5"
                  style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-color)" }}
                >
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--border-color)" strokeWidth="3" />
                      <circle
                        cx="18" cy="18" r="15.9" fill="none"
                        stroke="var(--cyan)" strokeWidth="3"
                        strokeDasharray="37 63"
                        strokeLinecap="round"
                        style={{ filter: "drop-shadow(0 0 4px var(--cyan))" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-extrabold" style={{ color: "var(--cyan)" }}>-37%</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold">Просрочки платежей</div>
                    <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>Среднее снижение у клиентов Налегке</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Features Grid */}
      <section id="integrations" className="py-24" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Функционал</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Всё, что нужно для современного сервиса</h2>
            <p style={{ color: "var(--text-secondary)" }}>Готовая инфраструктура — запускайте за недели, не за месяцы</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platformFeatures.map((f) => (
              <div
                key={f.label}
                className="card-glow p-6 group cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-200"
                  style={{ background: "rgba(0,206,209,0.08)", border: "1px solid rgba(0,206,209,0.15)" }}
                >
                  <Icon name={f.icon as "Map"} size={20} style={{ color: "var(--cyan)" }} />
                </div>
                <h4 className="font-bold text-sm mb-2">{f.label}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Cases */}
      <section id="cases" className="py-24" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Кейсы</span>
            <h2 className="text-3xl md:text-4xl font-bold">Уже работает и даёт результат</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-dark p-8">
              <span className="pill mb-5 inline-flex">
                <Icon name="Award" size={12} />
                Кейс клиента
              </span>
              <h3 className="text-xl font-bold mb-1">Юркомпания «Правовой стандарт»</h3>
              <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>3 месяца с Налегке</p>
              <div className="flex gap-8 mb-7">
                <div>
                  <div
                    className="text-3xl font-extrabold"
                    style={{ background: "linear-gradient(90deg, var(--cyan), var(--teal))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    −42%
                  </div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>просрочки платежей</div>
                </div>
                <div>
                  <div
                    className="text-3xl font-extrabold"
                    style={{ background: "linear-gradient(90deg, var(--teal), var(--blue-soft))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    ↑ NPS
                  </div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>лояльность клиентов</div>
                </div>
              </div>
              <a href="#cases" className="btn-outline text-sm">
                Смотреть кейс
                <Icon name="ArrowRight" size={15} />
              </a>
            </div>

            <div
              className="card-dark p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(0,128,128,0.15), rgba(0,206,209,0.08))",
                borderColor: "rgba(0,206,209,0.2)",
              }}
            >
              <div className="hero-glow w-48 h-48 -bottom-10 -right-10"
                style={{ background: "radial-gradient(ellipse, rgba(0,206,209,0.1) 0%, transparent 70%)" }} />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <Icon name="Quote" size={28} style={{ color: "rgba(0,206,209,0.4)" }} />
                  <p className="text-lg font-medium mt-5 leading-relaxed">
                    "Клиенты стали спокойнее, вопросов стало меньше, а сервис — сильнее."
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: "rgba(0,206,209,0.2)", border: "1px solid rgba(0,206,209,0.3)", color: "var(--cyan)" }}
                  >
                    АГ
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Алексей Громов</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>Управляющий партнёр</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Steps */}
      <section id="about" className="py-24" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Внедрение</span>
            <h2 className="text-3xl md:text-4xl font-bold">Быстрый старт без сложностей</h2>
          </div>
          <div className="relative">
            <div
              className="hidden md:block absolute top-7 left-[8%] right-[8%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, var(--border-subtle), var(--cyan), var(--border-subtle), transparent)" }}
            />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {steps.map((s, i) => (
                <div key={s.num} className="flex flex-col items-center text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-extrabold mb-3 relative z-10"
                    style={{
                      background: i < 3
                        ? "linear-gradient(135deg, var(--teal), var(--cyan))"
                        : "var(--bg-secondary)",
                      border: i < 3 ? "none" : "1px solid var(--border-subtle)",
                      color: i < 3 ? "#0d1117" : "var(--text-muted)",
                      boxShadow: i < 3 ? "0 0 20px var(--glow-cyan)" : "none",
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="font-bold text-sm mb-1">{s.label}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="demo"
        className="py-24 relative overflow-hidden"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}
      >
        <div className="hero-glow w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(0,206,209,0.08) 0%, transparent 70%)" }} />
        <div className="container relative z-10 text-center">
          <span className="pill mb-6 inline-flex">
            <Icon name="Zap" size={12} />
            Готовы к старту?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 max-w-2xl mx-auto" style={{ letterSpacing: "-0.02em" }}>
            Готовы обсудить <span className="text-gradient">внедрение?</span>
          </h2>
          <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            Покажем платформу и подберём решение под ваш бизнес.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="btn-primary" style={{ padding: "0.85rem 2rem", fontSize: "1rem" }}>
              <Icon name="CalendarCheck" size={20} />
              Запросить демо
            </a>
            <a href="#cases" className="btn-outline" style={{ padding: "0.85rem 2rem", fontSize: "1rem" }}>
              Смотреть кейсы
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="grid md:grid-cols-5 gap-10 mb-12">
            <div className="md:col-span-1">
              <div
                className="text-xl font-extrabold mb-3 tracking-[0.08em]"
                style={{ color: "var(--cyan)", fontFamily: "Montserrat, sans-serif" }}
              >
                НАЛЕГКЕ
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Инфраструктура спокойствия для юркомпаний и их клиентов
              </p>
              <div className="flex gap-2 mt-5">
                {[
                  { icon: "Send", label: "Telegram" },
                  { icon: "Users", label: "VK" },
                  { icon: "Youtube", label: "YouTube" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150"
                    style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", color: "var(--text-muted)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,206,209,0.4)"; (e.currentTarget as HTMLElement).style.color = "var(--cyan)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                  >
                    <Icon name={s.icon as "Send"} size={15} />
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map((col) => (
              <div key={col.title}>
                <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-secondary)" }}>
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm transition-colors duration-150"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4" style={{ borderTop: "1px solid var(--border-color)" }}>
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>© 2023 Nalegke</div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
              <a href="tel:88005117160" className="transition-colors hover:text-white" style={{ color: "inherit" }}>8 800 511-71-60</a>
              <a href="mailto:hello@nalegke.ru" className="transition-colors hover:text-white" style={{ color: "inherit" }}>hello@nalegke.ru</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
