import { Hero } from "@/components/Hero";
import Icon from "@/components/ui/icon";

const painPoints = [
  {
    icon: "HelpCircle",
    title: 'Много вопросов "Что с делом?"',
    desc: "Менеджеры постоянно объясняют одно и то же.",
  },
  {
    icon: "Clock",
    title: "Просрочки и потери платежей",
    desc: "Клиент не видит сроки и забывает оплачивать.",
  },
  {
    icon: "FolderOpen",
    title: "Документы и переписка разбросаны",
    desc: "Сложно найти нужное, легко что-то упустить.",
  },
];

const clientFeatures = [
  { icon: "BarChart2", label: "Статусы дела" },
  { icon: "MessageCircle", label: "Чат с юристом" },
  { icon: "FileText", label: "Документы" },
  { icon: "Bell", label: "Уведомления" },
];

const teamFeatures = [
  { icon: "CheckSquare", label: "Задачи" },
  { icon: "Plug", label: "Интеграции" },
  { icon: "PieChart", label: "Отчёты" },
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
  { num: 1, label: "Диагностика", desc: "Изучаем ваши процессы и задачи" },
  { num: 2, label: "Настройка", desc: "Конфигурируем под ваш сервис" },
  { num: 3, label: "Интеграция", desc: "Подключаем к вашим системам" },
  { num: 4, label: "Онбординг", desc: "Обучаем команду и клиентов" },
  { num: 5, label: "Пилот", desc: "Запускаем в тестовом режиме" },
  { num: 6, label: "Масштабирование", desc: "Разворачиваем на всех клиентов" },
];

const footerLinks = [
  {
    title: "Платформа",
    links: ["Возможности", "Интеграции", "Безопасность"],
  },
  {
    title: "Решения",
    links: ["Для юркомпаний", "White-label", "Партнёрам"],
  },
  {
    title: "Компания",
    links: ["О нас", "Кейсы", "Контакты"],
  },
  {
    title: "База знаний",
    links: ["Статьи", "Вебинары", "Документация"],
  },
];

export default function Index() {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif", color: "var(--dark-blue)" }}>
      {/* Hero */}
      <Hero />

      {/* Pain Points */}
      <section id="solutions" className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label mb-3 block">Боли рынка</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--dark-blue)" }}>
              В чём проблема сейчас?
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Клиенты не понимают, что происходит. Команда тратит время на одно и то же.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-8 card-shadow"
                style={{ background: "var(--bg-soft)", border: "1px solid #ececec" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(0,206,209,0.12)" }}
                >
                  <Icon name={p.icon as "HelpCircle"} size={28} style={{ color: "var(--cyan)" }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--dark-blue)" }}>{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="platform" className="py-20" style={{ background: "var(--bg-cream)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label mb-3 block">Принцип работы</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--dark-blue)" }}>
              Как работает Налегке
            </h2>
            <p className="text-gray-500 text-lg">Один процесс — два удобных интерфейса</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Client App */}
            <div
              className="rounded-2xl p-8 card-shadow"
              style={{ background: "#fff", border: "1px solid #ececec" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(0,206,209,0.12)" }}
              >
                <Icon name="Smartphone" size={24} style={{ color: "var(--cyan)" }} />
              </div>
              <h3 className="text-lg font-bold mb-4" style={{ color: "var(--dark-blue)" }}>
                Клиентское приложение
              </h3>
              <div className="space-y-3">
                {clientFeatures.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,206,209,0.1)" }}
                    >
                      <Icon name={f.icon as "BarChart2"} size={16} style={{ color: "var(--cyan)" }} />
                    </div>
                    <span className="text-sm text-gray-600">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center */}
            <div className="flex flex-col items-center justify-center text-center gap-4 py-6">
              <div
                className="text-2xl font-extrabold tracking-wide"
                style={{ color: "var(--teal)", fontFamily: "Montserrat, sans-serif" }}
              >
                НАЛЕГКЕ
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-px" style={{ background: "var(--cyan)" }} />
                <Icon name="ArrowLeftRight" size={24} style={{ color: "var(--cyan)" }} />
                <div className="w-10 h-px" style={{ background: "var(--cyan)" }} />
              </div>
              <p className="text-sm text-gray-500 max-w-[180px]">
                Данные синхронизируются в реальном времени
              </p>
            </div>

            {/* Team Workspace */}
            <div
              className="rounded-2xl p-8 card-shadow"
              style={{ background: "#fff", border: "1px solid #ececec" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(0,128,128,0.1)" }}
              >
                <Icon name="Monitor" size={24} style={{ color: "var(--teal)" }} />
              </div>
              <h3 className="text-lg font-bold mb-1" style={{ color: "var(--dark-blue)" }}>
                Рабочее пространство команды
              </h3>
              <p className="text-xs text-gray-400 mb-4">Bitrix24</p>
              <div className="space-y-3">
                {teamFeatures.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,128,128,0.1)" }}
                    >
                      <Icon name={f.icon as "CheckSquare"} size={16} style={{ color: "var(--teal)" }} />
                    </div>
                    <span className="text-sm text-gray-600">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label mb-3 block">Результаты</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--dark-blue)" }}>
              Что получают клиенты и юркомпании
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* For clients */}
            <div
              className="rounded-2xl p-8 card-shadow"
              style={{ border: "2px solid rgba(0,206,209,0.2)", background: "var(--bg-cream)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "var(--cyan)" }}
              >
                <Icon name="User" size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--dark-blue)" }}>
                Для клиентов
              </h3>
              <p className="text-gray-500 text-sm mb-6">Понятный путь и спокойствие</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Видят статус и следующий шаг",
                  "Получают напоминания о платежах",
                  "Общаются в защищённом чате",
                  "Хранят документы в одном месте",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-gray-600">
                    <Icon name="Check" size={16} style={{ color: "var(--cyan)", flexShrink: 0 }} />
                    {t}
                  </li>
                ))}
              </ul>
              <div
                className="rounded-xl p-4"
                style={{ background: "white", border: "1px solid #e0e0e0" }}
              >
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Прогресс по делу</span>
                  <span style={{ color: "var(--teal)", fontWeight: 600 }}>Этап 3 из 5</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="h-2 rounded-full" style={{ width: "60%", background: "linear-gradient(90deg, var(--teal), var(--cyan))" }} />
                </div>
                <div className="flex justify-between mt-2">
                  {["Заявка", "Анализ", "Работа", "Решение", "Закрытие"].map((s, i) => (
                    <span
                      key={s}
                      className="text-xs"
                      style={{ color: i < 3 ? "var(--teal)" : "#ccc", fontWeight: i === 2 ? 700 : 400 }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* For law firms */}
            <div
              className="rounded-2xl p-8 card-shadow"
              style={{ border: "2px solid rgba(0,128,128,0.2)", background: "#f0fafa" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "var(--teal)" }}
              >
                <Icon name="Building2" size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--dark-blue)" }}>
                Для юркомпаний
              </h3>
              <p className="text-gray-500 text-sm mb-6">Эффективная команда и рост бизнеса</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Снижают нагрузку и рутину",
                  "Уменьшают просрочки и потери",
                  "Повышают лояльность клиентов",
                  "Масштабируют сервис без потери качества",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-gray-600">
                    <Icon name="Check" size={16} style={{ color: "var(--teal)", flexShrink: 0 }} />
                    {t}
                  </li>
                ))}
              </ul>
              <div
                className="rounded-xl p-4 flex items-center gap-5"
                style={{ background: "white", border: "1px solid #d0e8e8" }}
              >
                <div className="relative w-20 h-20 flex-shrink-0">
                  <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e8e8e8" strokeWidth="3" />
                    <circle
                      cx="18" cy="18" r="15.9" fill="none"
                      stroke="var(--teal)" strokeWidth="3"
                      strokeDasharray="37 63"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-extrabold" style={{ color: "var(--teal)" }}>-37%</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: "var(--dark-blue)" }}>Просрочки платежей</div>
                  <div className="text-xs text-gray-400 mt-1">Среднее снижение у клиентов Налегке</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="integrations" className="py-20" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label mb-3 block">Функционал</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--dark-blue)" }}>
              Всё, что нужно для современного сервиса
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl p-6 card-shadow bg-white transition-all duration-200 hover:-translate-y-1"
                style={{ border: "1px solid #ececec" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,206,209,0.1)" }}
                >
                  <Icon name={f.icon as "Map"} size={22} style={{ color: "var(--teal)" }} />
                </div>
                <h4 className="font-bold text-sm mb-2" style={{ color: "var(--dark-blue)" }}>{f.label}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases & Testimonials */}
      <section id="cases" className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label mb-3 block">Кейсы</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--dark-blue)" }}>
              Уже работает и даёт результат
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Case */}
            <div
              className="rounded-2xl p-8 card-shadow"
              style={{ background: "var(--bg-cream)", border: "1px solid #ececec" }}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5"
                style={{ background: "rgba(0,206,209,0.12)", color: "var(--teal)" }}
              >
                <Icon name="Award" size={14} />
                Кейс клиента
              </div>
              <h3 className="text-xl font-bold mb-1" style={{ color: "var(--dark-blue)" }}>
                Юркомпания «Правовой стандарт»
              </h3>
              <p className="text-gray-400 text-sm mb-6">3 месяца с Налегке</p>
              <div className="flex gap-6 mb-6">
                <div>
                  <div className="text-3xl font-extrabold" style={{ color: "var(--cyan)" }}>−42%</div>
                  <div className="text-xs text-gray-400 mt-1">просрочки платежей</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold" style={{ color: "var(--teal)" }}>↑ NPS</div>
                  <div className="text-xs text-gray-400 mt-1">лояльность клиентов</div>
                </div>
              </div>
              <a href="#cases" className="btn-outline text-sm">
                Смотреть кейс
                <Icon name="ArrowRight" size={16} />
              </a>
            </div>

            {/* Testimonial */}
            <div
              className="rounded-2xl p-8 card-shadow flex flex-col justify-between"
              style={{ background: "linear-gradient(145deg, var(--teal), var(--cyan))", color: "white" }}
            >
              <div>
                <Icon name="Quote" size={32} style={{ color: "rgba(255,255,255,0.4)" }} />
                <p className="text-lg font-medium mt-4 leading-relaxed">
                  "Клиенты стали спокойнее, вопросов стало меньше, а сервис — сильнее."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
                  style={{ background: "rgba(255,255,255,0.25)" }}
                >
                  АГ
                </div>
                <div>
                  <div className="font-semibold text-sm">Алексей Громов</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>Управляющий партнёр</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section id="about" className="py-20" style={{ background: "var(--bg-soft)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label mb-3 block">Внедрение</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--dark-blue)" }}>
              Быстрый старт без сложностей
            </h2>
          </div>
          <div className="relative">
            {/* Progress bar */}
            <div
              className="hidden md:block absolute top-7 left-[calc(8.33%+1rem)] right-[calc(8.33%+1rem)] h-0.5"
              style={{ background: "linear-gradient(90deg, var(--cyan), var(--teal))" }}
            />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {steps.map((s) => (
                <div key={s.num} className="flex flex-col items-center text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-extrabold mb-3 relative z-10"
                    style={{ background: "linear-gradient(135deg, var(--cyan), var(--teal))", color: "white" }}
                  >
                    {s.num}
                  </div>
                  <div className="font-bold text-sm mb-1" style={{ color: "var(--dark-blue)" }}>{s.label}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">{s.desc}</div>
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
        style={{ background: "linear-gradient(135deg, var(--dark-blue) 0%, var(--teal) 100%)" }}
      >
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "white" }}>
                Готовы обсудить внедрение?
              </h2>
              <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
                Покажем платформу и подберём решение под ваш бизнес.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl font-bold text-base px-8 py-3"
                style={{ background: "var(--cyan)", color: "white", boxShadow: "0 4px 20px rgba(0,206,209,0.5)" }}
              >
                <Icon name="CalendarCheck" size={20} />
                Запросить демо
              </a>
            </div>
            <div
              className="flex flex-col items-center justify-center w-40 h-44 rounded-3xl flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <div className="text-7xl">🐱</div>
              <div className="text-white text-xs font-bold mt-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                НАЛЕГКЕ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ background: "var(--dark-blue)" }}>
        <div className="container">
          <div className="grid md:grid-cols-5 gap-10 mb-12">
            <div className="md:col-span-1">
              <div
                className="text-xl font-extrabold mb-3 tracking-widest"
                style={{ color: "var(--cyan)", fontFamily: "Montserrat, sans-serif" }}
              >
                НАЛЕГКЕ
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Инфраструктура спокойствия для юркомпаний и их клиентов
              </p>
              <div className="flex gap-3 mt-5">
                {[
                  { icon: "Send", label: "Telegram" },
                  { icon: "Users", label: "VK" },
                  { icon: "Youtube", label: "YouTube" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                    style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }}
                    aria-label={s.label}
                  >
                    <Icon name={s.icon as "Send"} size={16} />
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map((col) => (
              <div key={col.title}>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--cyan)" }}
                >
                  {col.title}
                </div>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm transition-colors"
                        style={{ color: "rgba(255,255,255,0.55)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              © 2023 Nalegke
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              <a href="tel:88005117160" className="hover:text-white transition-colors">8 800 511-71-60</a>
              <a href="mailto:hello@nalegke.ru" className="hover:text-white transition-colors">hello@nalegke.ru</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
