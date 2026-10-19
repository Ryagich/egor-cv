import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { profile, tools } from "../data";

export function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const id = hash.slice(1);
    const timer = window.setTimeout(
      () =>
        id
          ? document.getElementById(id)?.scrollIntoView()
          : window.scrollTo({ top: 0 }),
      0,
    );
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);
  return null;
}
function Palette() {
  const [hue, setHue] = useState(() =>
    Number(localStorage.getItem("cv-hue") ?? 85),
  );
  useEffect(() => {
    document.documentElement.style.setProperty("--hue", String(hue));
    localStorage.setItem("cv-hue", String(hue));
  }, [hue]);
  return (
    <div className="palette header-palette" aria-label="Акцентный цвет">
      {[85, 190, 265, 25].map((value) => (
        <button
          key={value}
          aria-label={`Выбрать акцент ${value}`}
          onClick={() => setHue(value)}
          className={hue === value ? "chosen" : ""}
          style={{ background: `hsl(${value} 85% 70%)` }}
        />
      ))}
    </div>
  );
}
export function Header() {
  const { pathname } = useLocation();
  const toolsOpen = pathname === "/tools" || pathname.startsWith("/tools/");
  const graphEditorsOpen =
    pathname.startsWith("/tools/graph-editors") ||
    tools.some(
      (tool) =>
        tool.categories.includes("graph") && pathname === `/tools/${tool.slug}`,
    );
  return (
    <header className={`header ${toolsOpen ? "has-tools-subnav" : ""}`}>
      <Link to="/" className="brand">
        <span className="brand-icon">
          e<span>.</span>
        </span>
        <span>
          egor<span className="muted">.dev</span>
        </span>
      </Link>
      <nav aria-label="Основная навигация">
        <NavLink to="/" end>
          Главная
        </NavLink>
        <Link to="/#projects">Проекты</Link>
        <NavLink to="/tools">Инструменты</NavLink>
      </nav>
      <div className="header-actions">
        <Palette />
        <Link className="header-contact" to="/#contact">
          Контакты <ArrowUpRight size={16} />
        </Link>
      </div>
      {toolsOpen && (
        <nav className="tools-subnav" aria-label="Разделы инструментов">
          <NavLink to="/tools" end>
            Все
          </NavLink>
          <NavLink
            to="/tools/graph-editors"
            className={({ isActive }) =>
              isActive || graphEditorsOpen ? "active" : undefined
            }
          >
            Графовые редакторы
          </NavLink>
        </nav>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <Link className="brand" to="/">
        <span className="brand-icon">
          e<span>.</span>
        </span>
        <span>
          egor<span className="muted">.dev</span>
        </span>
      </Link>
      <span>{profile.location} · Unity / C# Developer</span>
      <Link to="/">
        Наверх <ArrowUpRight size={15} />
      </Link>
    </footer>
  );
}
export function PageLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const selector =
      "main > .section, .project-card, .stack-preview article, .result-grid article, .education-card, .article-section, .related-grid a, .tools-subnav";
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    let index = 0;
    document
      .querySelectorAll<HTMLElement>(".tools-subnav")
      .forEach((element) => element.classList.remove("is-visible"));
    const observeNew = () =>
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        if (!element.classList.contains("is-visible")) {
          element.style.setProperty(
            "--reveal-delay",
            `${Math.min(index++ * 55, 280)}ms`,
          );
          observer.observe(element);
        }
      });
    observeNew();
    const main = document.querySelector("main");
    const mutations = main ? new MutationObserver(observeNew) : null;
    if (main && mutations)
      mutations.observe(main, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations?.disconnect();
    };
  }, [pathname]);
  return (
    <>
      <ScrollManager />
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>
      <div className="scroll-progress" />
      <Header />
      <main id="main" key={pathname}>
        {children}
      </main>
      <Footer />
    </>
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Хлебные крошки">
      {items.map((item, i) => (
        <span key={item.label}>
          {item.to ? <Link to={item.to}>{item.label}</Link> : item.label}
          {i < items.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}
