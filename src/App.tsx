import { useEffect, useRef, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  GraduationCap,
  X,
} from "lucide-react";
import {
  architecturePatterns,
  categoryLabels,
  competencies,
  competencyArchitectureOverrides,
  competencyDetails,
  competencyExamples,
  competencyIntroOverrides,
  competencyMapTitles,
  competencySectionAddendums,
  competencySectionOverrides,
  competencyVisuals,
  dialogEditorStorySections,
  fsmEditorStorySections,
  profile,
  projects,
  questEditorStorySections,
  resultCards,
  gmoStorySectionsRpgStyle,
  rpgStorySections,
  wizardGameStorySections,
  zombiesInMinoriStorySections,
  technologies,
  toolCategoryLabels,
  tools,
} from "./data";
import type { Project, Tool, ToolCategory } from "./types";
import { Breadcrumbs, PageLayout } from "./components/layout";
import {
  developmentPeriod,
  ProjectCard,
  TechBadge,
  ToolCard,
} from "./components/cards";
import { ItemModal } from "./components/modal";
import {
  CodeSnippet,
  ContentBlocks,
  Related,
  Stats,
  TableOfContents,
} from "./components/article";
import { assetUrl } from "./asset-url";

function Catalog<T extends Project | Tool>({
  items,
  type,
  showFilters = true,
}: {
  items: T[];
  type: "projects" | "tools";
  showFilters?: boolean;
}) {
  const [item, setItem] = useState<T | null>(null);
  const [source, setSource] = useState<HTMLElement | null>(null);
  const [filter, setFilter] = useState<
    "all" | Project["categories"][number] | ToolCategory
  >("all");
  const filtered =
    type === "projects"
      ? (items as Project[]).filter(
          (project) =>
            filter === "all" ||
            project.categories.includes(
              filter as Project["categories"][number],
            ),
        )
      : (items as Tool[]).filter(
          (tool) =>
            filter === "all" ||
            tool.categories.includes(filter as ToolCategory),
        );
  const visible =
    type === "projects"
      ? [...(filtered as Project[])].sort((left, right) => {
          const leftDate = left.developmentEndedAt ?? left.developmentStartedAt;
          const rightDate = right.developmentEndedAt ?? right.developmentStartedAt;
          const leftTimestamp = leftDate ? Date.parse(leftDate) : Number.NEGATIVE_INFINITY;
          const rightTimestamp = rightDate ? Date.parse(rightDate) : Number.NEGATIVE_INFINITY;
          return rightTimestamp - leftTimestamp || left.title.localeCompare(right.title, "ru");
        })
      : type === "tools" && filter === "all"
        ? [...(filtered as Tool[])].sort(
          (left, right) =>
            Number(left.categories.length > 0) -
            Number(right.categories.length > 0),
          )
        : filtered;
  const labels = type === "projects" ? categoryLabels : toolCategoryLabels;
  const open = (value: T, element: HTMLElement) => {
    setItem(value);
    setSource(element);
  };
  return (
    <>
      {showFilters && (
        <div className="filters">
          {Object.entries(labels).map(([id, label]) => (
            <button
              className={filter === id ? "active" : ""}
              onClick={() => setFilter(id as typeof filter)}
              key={id}
            >
              {label}
            </button>
          ))}
        </div>
      )}
      <div className="project-grid">
        {visible.map((value) =>
          type === "projects" ? (
            <ProjectCard
              key={value.id}
              project={value as Project}
              showCoverLabel={filter === "all"}
              onOpen={open as (p: Project, e: HTMLElement) => void}
            />
          ) : (
            <ToolCard
              key={value.id}
              tool={value as Tool}
              onOpen={open as (t: Tool, e: HTMLElement) => void}
            />
          ),
        )}
      </div>
      <ItemModal
        item={item}
        source={source}
        onClose={() => setItem(null)}
        kind={type}
      />
    </>
  );
}
const heroPhotos = [
  {
    src: "/content/site/egor-portrait-01.png",
    alt: "Егор Агеев",
  },
  {
    src: "/content/site/egor-portrait-02.png",
    alt: "Егор Агеев",
  },
];

function Hero() {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % heroPhotos.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const trackPointer = (element: HTMLDivElement, x: number, y: number) => {
    const bounds = element.getBoundingClientRect();
    element.style.setProperty("--mouse-x", `${x - bounds.left}px`);
    element.style.setProperty("--mouse-y", `${y - bounds.top}px`);
    element.classList.add("pointer-active");
  };
  return (
    <section className="hero section">
      <div className="hero-copy">
        <div className="intro-label">● C# PROGRAMMER / UNITY DEVELOPER</div>
        <h1>
          Игровые системы,
          <br />
          <span className="accent-text">которые работают.</span>
        </h1>
        <p className="hero-description">{profile.description}</p>
        <div className="hero-buttons">
          <a className="button primary" href="#projects">
            Смотреть проекты <ArrowUpRight size={18} />
          </a>
          {profile.resume ? (
            <a className="button secondary" href={profile.resume}>
              Скачать резюме
            </a>
          ) : null}
        </div>
        <div className="hero-meta">
          <span>
            <MapPin size={14} /> {profile.location}
          </span>
          <span>Полный цикл Unity-разработки</span>
        </div>
      </div>
      <div
        className="hero-visual"
        onPointerMove={(event) =>
          trackPointer(event.currentTarget, event.clientX, event.clientY)
        }
        onPointerLeave={(event) =>
          event.currentTarget.classList.remove("pointer-active")
        }
      >
        <div className="hero-photo-stack" aria-live="off">
          {heroPhotos.map((photo, index) => (
            <img
              key={photo.src}
              className={`hero-photo${index === activePhoto ? " is-active" : ""}`}
              src={assetUrl(photo.src)}
              alt={photo.alt}
              aria-hidden={index !== activePhoto}
            />
          ))}
        </div>
        <div className="floating-tag tag-csharp">C#</div>
        <div className="floating-tag tag-unity">Unity</div>
        <div className="floating-tag tag-editor">Unity Editor</div>
        <div className="floating-tag tag-code">игровые системы</div>
        <div className="hero-photo-controls" role="group" aria-label="Фотографии">
          <button
            type="button"
            aria-label="Предыдущая фотография"
            onClick={() =>
              setActivePhoto(
                (current) => (current - 1 + heroPhotos.length) % heroPhotos.length,
              )
            }
          >
            <ChevronLeft size={17} />
          </button>
          <span>
            {activePhoto + 1} / {heroPhotos.length}
          </span>
          <button
            type="button"
            aria-label="Следующая фотография"
            onClick={() =>
              setActivePhoto((current) => (current + 1) % heroPhotos.length)
            }
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
function CompetencyModal({
  item,
  source,
  onClose,
}: {
  item: (typeof competencies)[number] | null;
  source: HTMLElement | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  useEffect(() => {
    if (!item) return;
    dialogRef.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const bodyPaddingRight =
      Number.parseFloat(window.getComputedStyle(document.body).paddingRight) ||
      0;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0)
      document.body.style.paddingRight = `${bodyPaddingRight + scrollbarWidth}px`;
    return () => {
      if (closeTimerRef.current !== null)
        window.clearTimeout(closeTimerRef.current);
      if (dialogRef.current?.open) dialogRef.current.close();
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      source?.focus();
    };
  }, [item, source]);
  if (!item) return null;
  const closeModal = () => {
    if (isClosing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onClose();
      return;
    }
    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      dialogRef.current?.close();
      onClose();
    }, 280);
  };
  const detail = competencyDetails[item.title];
  const description =
    competencyIntroOverrides[item.title] ?? detail.description;
  const architecture =
    competencyArchitectureOverrides[item.title] ?? detail.architecture;
  const mapTitle = competencyMapTitles[item.title];
  const sections = [
    ...(competencySectionOverrides[item.title] ?? detail.sections ?? []),
    ...(competencySectionAddendums[item.title] ?? []),
  ];
  const examples = competencyExamples[item.title] ?? [];
  const visual = competencyVisuals[item.title];
  const sourceBounds = source?.getBoundingClientRect();
  const modalStyle = sourceBounds
    ? ({
        "--modal-shift-x": `${sourceBounds.left + sourceBounds.width / 2 - window.innerWidth / 2}px`,
        "--modal-shift-y": `${sourceBounds.top + sourceBounds.height / 2 - window.innerHeight / 2}px`,
      } as React.CSSProperties)
    : undefined;
  return (
    <dialog
      ref={dialogRef}
      style={modalStyle}
      className={`project-dialog competency-dialog ${isClosing ? "is-closing" : "is-opening"}`}
      aria-labelledby="competency-title"
      onCancel={(event) => {
        event.preventDefault();
        closeModal();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <div className="dialog-inner">
        <button
          className="dialog-close"
          aria-label="Закрыть"
          onClick={closeModal}
        >
          <X />
        </button>
        <div className="eyebrow">{item.group}</div>
        <h2 id="competency-title">{item.title}</h2>
        <p>{description}</p>
        {visual && (
          <figure className="competency-visual">
            {visual.images?.length ? (
              <div
                className={`competency-media-gallery ${visual.layout === "horizontal" ? "is-horizontal" : ""}`}
              >
                {visual.images.map((image) => (
                  <article key={image.src}>
                    <img src={assetUrl(image.src)} alt={image.alt} />
                    <p>{image.caption}</p>
                  </article>
                ))}
              </div>
            ) : visual.src ? (
              <img src={assetUrl(visual.src)} alt={visual.alt} />
            ) : (
              <div
                className="competency-visual-placeholder"
                role="img"
                aria-label={visual.alt}
              >
                <span>UNITY EDITOR / FSM</span>
                <strong>{visual.caption}</strong>
              </div>
            )}
            <figcaption>
              {visual.articleHref ? (
                <Link to={visual.articleHref}>
                  {visual.articleLabel} <ArrowRight size={14} />
                </Link>
              ) : (
                visual.articleLabel
              )}
            </figcaption>
          </figure>
        )}
        {architecture && (
          <section className="scope-architecture">
            <h3>{mapTitle ?? "Структура компетенции"}</h3>
            <ol>
              {architecture.map((node, index) => (
                <li key={node.label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{node.label}</strong>
                    <p>{node.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}
        {sections.map((section) => (
          <section className="competency-detail-section" key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
            {section.code && <CodeSnippet code={section.code} />}
          </section>
        ))}
        {examples.length > 0 && (
          <section className="competency-examples">
            <h3>Примеры реализации</h3>
            {examples.map((example) => (
              <article key={`${example.project}-${example.chapter}`}>
                <div>
                  <span>{example.project}</span>
                  <strong>{example.chapter}</strong>
                  <p>{example.description}</p>
                </div>
                {example.href ? (
                  <a href={example.href}>
                    Открыть пример <ArrowRight size={15} />
                  </a>
                ) : (
                  <small>
                    Ссылка появится после публикации страницы проекта
                  </small>
                )}
              </article>
            ))}
          </section>
        )}
        <div className="competency-source">
          <span>Материалы</span>
          <p>
            Фрагменты кода приведены как иллюстрация подхода. Публичная ссылка
            на репозиторий или техническую главу будет добавлена после
            подготовки материалов.
          </p>
        </div>
        {detail.code && <CodeSnippet code={detail.code} />}
      </div>
    </dialog>
  );
}
function Competencies() {
  const [expanded, setExpanded] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [gridHeight, setGridHeight] = useState<number | null>(null);
  const [selected, setSelected] = useState<
    (typeof competencies)[number] | null
  >(null);
  const [source, setSource] = useState<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const collapseTimerRef = useRef<number | null>(null);
  const resizeTimerRef = useRef<number | null>(null);
  const animationFrameRefs = useRef<number[]>([]);
  useEffect(
    () => () => {
      if (collapseTimerRef.current !== null)
        window.clearTimeout(collapseTimerRef.current);
      if (resizeTimerRef.current !== null)
        window.clearTimeout(resizeTimerRef.current);
      animationFrameRefs.current.forEach((frame) =>
        window.cancelAnimationFrame(frame),
      );
    },
    [],
  );
  const visible =
    expanded || isCollapsing ? competencies : competencies.slice(0, 6);
  const toggleExpanded = () => {
    if (isCollapsing) return;
    if (!expanded) {
      setExpanded(true);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setExpanded(false);
      return;
    }
    setIsCollapsing(true);
    collapseTimerRef.current = window.setTimeout(() => {
      const expandedHeight = gridRef.current?.getBoundingClientRect().height;
      if (!expandedHeight) {
        setExpanded(false);
        setIsCollapsing(false);
        return;
      }

      setIsResizing(true);
      setGridHeight(expandedHeight);
      setExpanded(false);
      setIsCollapsing(false);

      const measureFrame = window.requestAnimationFrame(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const currentHeight = grid.getBoundingClientRect().height;
        grid.style.height = "auto";
        const collapsedHeight = grid.getBoundingClientRect().height;
        grid.style.height = `${currentHeight}px`;

        const resizeFrame = window.requestAnimationFrame(() => {
          setGridHeight(collapsedHeight);
          resizeTimerRef.current = window.setTimeout(() => {
            setGridHeight(null);
            setIsResizing(false);
          }, 520);
        });
        animationFrameRefs.current.push(resizeFrame);
      });
      animationFrameRefs.current.push(measureFrame);
    }, 720);
  };
  return (
    <section className="section competencies-section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">КОМПЕТЕНЦИИ</div>
          <h2>Инженерный подход.</h2>
        </div>
        <p>Практика в Unity-проектах разного жанра.</p>
      </div>
      <div
        ref={gridRef}
        className={`competency-grid ${isCollapsing ? "is-collapsing" : ""} ${isResizing ? "is-resizing" : ""}`}
        style={gridHeight !== null ? { height: `${gridHeight}px` } : undefined}
      >
        {visible.map((item, index) => (
          <button
            className="competency-card"
            key={item.title}
            onClick={(event) => {
              setSource(event.currentTarget);
              setSelected(item);
            }}
            style={
              {
                "--competency-delay": `${expanded ? Math.max(0, index - 6) * 55 : index * 65}ms`,
                "--competency-exit-delay": `${Math.max(0, competencies.length - index - 1) * 30}ms`,
              } as React.CSSProperties
            }
          >
            <span className="competency-group">{item.group}</span>
            <span className="tiny-dot" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span className="competency-more">
              Открыть подробнее <ArrowRight size={14} />
            </span>
          </button>
        ))}
      </div>
      {competencies.length > 6 && (
        <button
          className="competencies-toggle"
          disabled={isCollapsing || isResizing}
          aria-expanded={expanded}
          onClick={toggleExpanded}
        >
          {expanded ? "Скрыть" : "Показать все компетенции"}{" "}
          <ArrowRight size={16} />
        </button>
      )}
      {selected && (
        <CompetencyModal
          item={selected}
          source={source}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
function Patterns() {
  const [expanded, setExpanded] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [gridHeight, setGridHeight] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const collapseTimerRef = useRef<number | null>(null);
  const resizeTimerRef = useRef<number | null>(null);
  const animationFrameRefs = useRef<number[]>([]);

  useEffect(
    () => () => {
      if (collapseTimerRef.current !== null)
        window.clearTimeout(collapseTimerRef.current);
      if (resizeTimerRef.current !== null)
        window.clearTimeout(resizeTimerRef.current);
      animationFrameRefs.current.forEach((frame) =>
        window.cancelAnimationFrame(frame),
      );
    },
    [],
  );

  const visible =
    expanded || isCollapsing
      ? architecturePatterns
      : architecturePatterns.slice(0, 6);
  const toggleExpanded = () => {
    if (isCollapsing) return;
    if (!expanded) {
      setExpanded(true);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setExpanded(false);
      return;
    }

    setIsCollapsing(true);
    collapseTimerRef.current = window.setTimeout(() => {
      const expandedHeight = gridRef.current?.getBoundingClientRect().height;
      if (!expandedHeight) {
        setExpanded(false);
        setIsCollapsing(false);
        return;
      }

      setIsResizing(true);
      setGridHeight(expandedHeight);
      setExpanded(false);
      setIsCollapsing(false);

      const measureFrame = window.requestAnimationFrame(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const currentHeight = grid.getBoundingClientRect().height;
        grid.style.height = "auto";
        const collapsedHeight = grid.getBoundingClientRect().height;
        grid.style.height = `${currentHeight}px`;

        const resizeFrame = window.requestAnimationFrame(() => {
          setGridHeight(collapsedHeight);
          resizeTimerRef.current = window.setTimeout(() => {
            setGridHeight(null);
            setIsResizing(false);
          }, 520);
        });
        animationFrameRefs.current.push(resizeFrame);
      });
      animationFrameRefs.current.push(measureFrame);
    }, 720);
  };

  return (
    <section className="section patterns-section" id="patterns">
      <div className="section-heading">
        <div>
          <div className="eyebrow">ПАТТЕРНЫ И ПОДХОДЫ</div>
          <h2>Паттерны в рабочих системах.</h2>
        </div>
      </div>
      <div
        ref={gridRef}
        className={`pattern-grid ${isCollapsing ? "is-collapsing" : ""} ${isResizing ? "is-resizing" : ""}`}
        style={gridHeight !== null ? { height: `${gridHeight}px` } : undefined}
      >
        {visible.map((pattern, index) => (
          <article
            className="pattern-card"
            key={pattern.title}
            style={
              {
                "--pattern-delay": `${expanded ? Math.max(0, index - 6) * 55 : index * 65}ms`,
                "--pattern-exit-delay": `${Math.max(0, architecturePatterns.length - index - 1) * 30}ms`,
              } as React.CSSProperties
            }
          >
            <span className="pattern-group">{pattern.group}</span>
            <span className="tiny-dot" />
            <h3>{pattern.title}</h3>
            {pattern.text.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
      <button
        className="competencies-toggle"
        disabled={isCollapsing || isResizing}
        aria-expanded={expanded}
        onClick={toggleExpanded}
      >
        {expanded ? "Скрыть" : "Показать все паттерны"} <ArrowRight size={16} />
      </button>
    </section>
  );
}

function FeaturedProjects() {
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState<"all" | Project["categories"][number]>("all");
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [gridHeight, setGridHeight] = useState<number | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);
  const [source, setSource] = useState<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const collapseTimerRef = useRef<number | null>(null);
  const resizeTimerRef = useRef<number | null>(null);
  const animationFrameRefs = useRef<number[]>([]);
  const featuredProjects = [...projects.filter(
    (project) =>
      project.featured &&
      (filter === "all" || project.categories.includes(filter)),
  )].sort(
    (left, right) => {
      const leftDate = left.developmentEndedAt ?? left.developmentStartedAt;
      const rightDate = right.developmentEndedAt ?? right.developmentStartedAt;
      const leftTimestamp = leftDate
        ? Date.parse(leftDate)
        : Number.NEGATIVE_INFINITY;
      const rightTimestamp = rightDate
        ? Date.parse(rightDate)
        : Number.NEGATIVE_INFINITY;
      return (
        rightTimestamp - leftTimestamp ||
        left.title.localeCompare(right.title, "ru")
      );
    },
  );

  useEffect(
    () => () => {
      if (collapseTimerRef.current !== null)
        window.clearTimeout(collapseTimerRef.current);
      if (resizeTimerRef.current !== null)
        window.clearTimeout(resizeTimerRef.current);
      animationFrameRefs.current.forEach((frame) =>
        window.cancelAnimationFrame(frame),
      );
    },
    [],
  );

  const visible =
    expanded || isCollapsing
      ? featuredProjects
      : featuredProjects.slice(0, 6);

  const toggleExpanded = () => {
    if (isCollapsing) return;
    if (!expanded) {
      setExpanded(true);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setExpanded(false);
      return;
    }

    setIsCollapsing(true);
    collapseTimerRef.current = window.setTimeout(() => {
      const expandedHeight = gridRef.current?.getBoundingClientRect().height;
      if (!expandedHeight) {
        setExpanded(false);
        setIsCollapsing(false);
        return;
      }

      setIsResizing(true);
      setGridHeight(expandedHeight);
      setExpanded(false);
      setIsCollapsing(false);

      const measureFrame = window.requestAnimationFrame(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const currentHeight = grid.getBoundingClientRect().height;
        grid.style.height = "auto";
        const collapsedHeight = grid.getBoundingClientRect().height;
        grid.style.height = `${currentHeight}px`;

        const resizeFrame = window.requestAnimationFrame(() => {
          setGridHeight(collapsedHeight);
          resizeTimerRef.current = window.setTimeout(() => {
            setGridHeight(null);
            setIsResizing(false);
          }, 520);
        });
        animationFrameRefs.current.push(resizeFrame);
      });
      animationFrameRefs.current.push(measureFrame);
    }, 720);
  };

  const selectFilter = (value: typeof filter) => {
    if (isCollapsing || isResizing) return;
    setFilter(value);
    setExpanded(false);
    setGridHeight(null);
  };

  return (
    <>
      <div className="filters">
        {Object.entries(categoryLabels).map(([id, label]) => (
          <button
            className={filter === id ? "active" : ""}
            onClick={() => selectFilter(id as typeof filter)}
            key={id}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        ref={gridRef}
        className={`project-grid featured-projects-grid ${isCollapsing ? "is-collapsing" : ""} ${isResizing ? "is-resizing" : ""}`}
        style={gridHeight !== null ? { height: `${gridHeight}px` } : undefined}
      >
        {visible.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            showCoverLabel={filter === "all"}
            onOpen={(value, element) => {
              setSelected(value);
              setSource(element);
            }}
            style={
              {
                "--project-delay": `${expanded ? Math.max(0, index - 6) * 55 : index * 65}ms`,
                "--project-exit-delay": `${Math.max(0, featuredProjects.length - index - 1) * 30}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      {featuredProjects.length > 6 && (
        <button
          className="competencies-toggle"
          disabled={isCollapsing || isResizing}
          aria-expanded={expanded}
          onClick={toggleExpanded}
        >
          {expanded ? "Скрыть" : "Показать все проекты"} <ArrowRight size={16} />
        </button>
      )}
      <ItemModal
        item={selected}
        source={source}
        onClose={() => setSelected(null)}
        kind="projects"
      />
    </>
  );
}

function Home() {
  return (
    <PageLayout>
      <Hero />
      <Competencies />
      <section className="section" id="projects">
        <div className="section-heading">
          <div>
            <div className="eyebrow">ПРОЕКТЫ</div>
            <h2>Реализованные игры.</h2>
          </div>
        </div>
        <FeaturedProjects />
      </section>
      <section className="section" id="tools">
        <div className="section-heading">
          <div>
            <div className="eyebrow">ИНСТРУМЕНТЫ РАЗРАБОТКИ</div>
            <h2>Собственные инструменты.</h2>
          </div>
          <Link to="/tools" className="text-link">
            Все инструменты <ArrowRight size={16} />
          </Link>
        </div>
        <Catalog items={tools} type="tools" />
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">ТЕХНОЛОГИИ</div>
            <h2>Стек в контексте задач.</h2>
          </div>
        </div>
        <div className="stack-preview">
          {technologies.slice(0, 6).map((t) => (
            <article key={t.id}>
              <h3>{t.name}</h3>
              <p>{t.purpose}</p>
            </article>
          ))}
        </div>
      </section>
      <Patterns />
      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">ПРАКТИЧЕСКИЙ ОПЫТ</div>
            <h2>От идеи до развития продукта.</h2>
          </div>
        </div>
        <div className="result-grid">
          {resultCards.map((x) => (
            <article key={x.title}>
              <span className="tiny-dot" />
              <h3>{x.title}</h3>
              <p>{x.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section education-section">
        <div className="education-title">
          <div className="eyebrow">ОБРАЗОВАНИЕ</div>
          <h2>Инженерная база.</h2>
        </div>
        <div className="education-list">
          <article className="education-card">
            <GraduationCap className="education-icon" size={26} />
            <div>
              <span className="education-year">2024–2026</span>
              <h3>Магистратура</h3>
              <p>
                Уральский федеральный университет имени первого Президента
                России Б. Н. Ельцина
              </p>
              <small>ИРИТ-РТФ · Программная инженерия</small>
            </div>
          </article>
          <article className="education-card">
            <GraduationCap className="education-icon" size={26} />
            <div>
              <span className="education-year">2020–2024</span>
              <h3>Бакалавриат</h3>
              <p>
                Уральский федеральный университет имени первого Президента
                России Б. Н. Ельцина
              </p>
              <small>ИРИТ-РТФ · Программная инженерия</small>
            </div>
          </article>
        </div>
      </section>
      <Contact />
    </PageLayout>
  );
}
function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-heading">
        <div>
          <div className="eyebrow">КОНТАКТЫ</div>
          <h2>Где найти мои работы и связаться со мной.</h2>
        </div>
      </div>
      <div className="contact-links">
        {profile.contacts.map((x) => (
          <a
            className="contact-link"
            href={x.href}
            key={x.label}
            target="_blank"
            rel="noreferrer"
          >
            <strong>{x.label}</strong>
            {x.value}
          </a>
        ))}
      </div>
    </section>
  );
}
function CatalogPage({ type }: { type: "projects" | "tools" }) {
  const content =
    type === "projects" ? (
      <Catalog items={projects} type="projects" />
    ) : (
      <Catalog items={tools} type="tools" />
    );
  return (
    <PageLayout>
      <section className="section page-head">
        <Breadcrumbs
          items={[
            { label: "Главная", to: "/" },
            { label: type === "projects" ? "Проекты" : "Инструменты" },
          ]}
        />
        <div className="eyebrow">КАТАЛОГ</div>
        <h1>
          {type === "projects" ? "Игровые проекты." : "Инструменты Unity."}
        </h1>
        <p>
          {type === "projects"
            ? "Игры, системы и технические решения."
            : "Самостоятельные технические разработки для Unity."}
        </p>
      </section>
      <section className="section catalog-section">{content}</section>
    </PageLayout>
  );
}
function GraphEditorsPage() {
  const canvasCode = `public sealed class RetainedGraphCanvas<TNode, TConnection>
    : VisualElement, IGraphEditorCanvasView
    where TNode : class
    where TConnection : class
{
    private readonly IRetainedGraphCanvasSource<TNode, TConnection> source;
    private readonly IRetainedGraphCanvasNodePresenter<TNode> nodePresenter;
    private readonly IRetainedGraphCanvasInteraction<TNode> interaction;
    private readonly IRetainedGraphCanvasConnectionRenderer<TNode, TConnection> connectionRenderer;
}`;
  const analysisCode = `public static bool IsOrphanState(StateMachineGraph graph, State state)
{
    if (graph?.Nodes == null || state == null || GetStartState(graph) == state)
        return false;

    return !graph.Nodes.Where(node => node?.State != null)
        .SelectMany(node => node.State.Transitions ?? new List<Transition>())
        .Any(transition => transition?.TargetState == state);
}`;
  const virtualizerCode = `foreach (var pair in nodeRects)
{
    if (ReferenceEquals(pair.Key, draggedNode) || pair.Value.Overlaps(visibleRect))
        visibleNodes.Add(pair.Key);
}

pendingNodes.RemoveWhere(node => !visibleNodes.Contains(node));`;
  const portableGraphCode = `{
  "id": "village-elder-dialogue",
  "entryNodeId": "greeting",
  "nodes": [
    {
      "id": "greeting",
      "phraseKey": "VillageElder.Greeting",
      "answers": [
        { "textKey": "Talk.Quest", "targetNodeId": "quest-topic" }
      ]
    }
  ]
}`;
  return (
    <PageLayout>
      <section className="section page-head graph-page-head">
        <Breadcrumbs
          items={[
            { label: "Главная", to: "/" },
            { label: "Инструменты", to: "/tools" },
            { label: "Графовые редакторы" },
          ]}
        />
        <div className="eyebrow">СЕМЕЙСТВО ИНСТРУМЕНТОВ</div>
        <h1>Графовые редакторы.</h1>
        <p>
          Универсальная основа для визуального проектирования графовых моделей:
          структура данных, связи, правила и инструменты анализа — без привязки
          к конкретной предметной области.
        </p>
      </section>
      <section className="section graph-intro">
        <div className="graph-copy">
          <div className="eyebrow">ПОЧЕМУ ГРАФ</div>
          <h2>Структура логики должна быть видна целиком.</h2>
          <p>
            В коде и инспекторе зависимость часто сводится к набору ссылок. На
            графе она становится обозримой: узлы задают сущности, связи —
            допустимые переходы и зависимости. Это позволяет видеть модель
            целиком, находить тупиковые ветви и проверять структуру до
            интеграции в runtime.
          </p>
        </div>
        <div
          className="graph-map"
          aria-label="Общая основа графовых редакторов"
        >
          <div className="graph-core">
            Общее
            <br />
            графовое ядро
          </div>
          <div className="graph-branches">
            <span>Сценарии</span>
            <span>Процессы</span>
            <span>Состояния</span>
          </div>
        </div>
      </section>
      <section className="section graph-foundation">
        <div className="graph-foundation-heading">
          <div className="eyebrow">УНИВЕРСАЛЬНАЯ МОДЕЛЬ</div>
          <h2>Одна формальная модель — множество предметных областей.</h2>
          <p>
            Граф фиксирует две базовые вещи: какие сущности существуют и как они
            соотносятся. Поэтому его можно применять к состояниям, репликам,
            задачам или этапам процесса — меняется смысл данных, но не способ
            выражать структуру, переходы и ограничения.
          </p>
        </div>
        <div
          className="graph-model-list"
          aria-label="Соответствие графовой модели игровым данным"
        >
          <div>
            <span>01</span>
            <strong>Узел</strong>
            <p>
              Прикладная сущность и её данные; положение на холсте хранится
              отдельно от логики.
            </p>
          </div>
          <div>
            <span>02</span>
            <strong>Связь</strong>
            <p>
              Направленный переход или зависимость с собственными условиями и
              правилами.
            </p>
          </div>
          <div>
            <span>03</span>
            <strong>Анализ</strong>
            <p>
              Проверки старта, достижимости, изолированных и терминальных узлов.
            </p>
          </div>
        </div>
      </section>
      <section className="section graph-theory">
        <div className="graph-theory-heading">
          <div className="eyebrow">КАК РАБОТАЕТ МОДЕЛЬ</div>
          <h2>Ориентированный граф и конечный автомат.</h2>
          <p>
            Формально ориентированный граф задаётся множеством вершин V и
            множеством направленных рёбер E. Ребро A → B фиксирует не просто
            связь, а её направление: из A можно перейти в B. Из рёбер
            складываются пути, ветвления, циклы, источники и терминальные точки.
          </p>
          <p>
            Конечный автомат — частный случай такой модели. У него есть конечный
            набор состояний, начальное состояние и правила перехода. Текущее
            состояние вместе с событием или условием определяет, может ли
            система перейти дальше. Поэтому автомат естественно представляется
            ориентированным графом: состояние — вершина, переход — ребро.
          </p>
        </div>
        <div className="graph-theory-cards">
          <article>
            <span>СОСТОЯНИЕ</span>
            <h3>Фиксирует текущий режим системы.</h3>
            <p>
              В нём описывается, что система делает сейчас, а не весь набор
              возможных действий сразу.
            </p>
          </article>
          <article>
            <span>ПЕРЕХОД</span>
            <h3>Задаёт правило смены режима.</h3>
            <p>
              Связь хранит направление и, при необходимости, условие, событие
              или действие, сопровождающее переход.
            </p>
          </article>
          <article>
            <span>АНАЛИЗ</span>
            <h3>Проверяет структуру до исполнения.</h3>
            <p>
              Обход графа выявляет недостижимые фрагменты, отсутствие точки
              входа, тупики и циклы — если они противоречат правилам модели.
            </p>
          </article>
        </div>
        <div className="graph-inline-code">
          <div>
            <span>ПРОВЕРКА ГРАФА</span>
            <h3>Поиск изолированного состояния</h3>
            <p>
              Фрагмент проверки из редактора FSM: состояние считается
              изолированным, если в него не ведёт ни один переход.
            </p>
          </div>
          <CodeSnippet code={analysisCode} />
        </div>
      </section>
      <section className="section graph-thesis">
        <div className="eyebrow">МАГИСТЕРСКАЯ ДИССЕРТАЦИЯ</div>
        <h2>
          Универсальная графовая система визуального моделирования поведения
          объектов.
        </h2>
        <p>
          Эта тема стала основой моей магистерской диссертации. В работе я
          исследовал конечные автоматы и ориентированные графы, требования к
          визуальному редактору, анализ достижимости и маршрутизацию связей. В
          практической части разработана графовая архитектура для Unity, которую
          можно применять к разным прикладным моделям. Магистерская диссертация
          успешно защищена.
        </p>
      </section>
      <section className="section graph-value">
        <div className="graph-value-heading">
          <div className="eyebrow">КОМУ И ЗАЧЕМ ЭТО НУЖНО</div>
          <h2>Разделить работу над логикой между кодом и данными.</h2>
          <p>
            Программист создаёт состояния, условия, действия и механизм
            выполнения. Их конкретная последовательность и связи хранятся в
            графе как данные. За счёт этого сценарная логика не расползается по
            классам, а изменения в структуре не требуют переписывать код.
          </p>
        </div>
        <div className="graph-value-cards">
          <article>
            <span>ДЛЯ РАЗРАБОТЧИКА</span>
            <h3>Логика не дублируется в сценарном коде.</h3>
            <p>
              Состояния, условия, действия и runtime-исполнитель реализуются
              один раз. Порядок, ветвления и комбинации задаются в графе. Код
              остаётся компактнее, а изменение одного сценария не тянет за собой
              правки в нескольких классах.
            </p>
          </article>
          <article>
            <span>ДЛЯ АВТОРА КОНТЕНТА</span>
            <h3>Сложная модель настраивается без программиста.</h3>
            <p>
              Геймдизайнер или сценарист собирает граф из подготовленных
              состояний и правил, видит все связи и получает подсказки о
              проблемах структуры. Программист подключается, когда требуется
              новый тип состояния, условия или действия.
            </p>
          </article>
        </div>
      </section>
      <section className="section graph-editor-principles">
        <div className="graph-editor-principles-heading">
          <div className="eyebrow">ЗАДАЧА РЕДАКТОРА</div>
          <h2>Работа с графовой моделью.</h2>
          <p>
            Его задача — синхронизировать три представления одной системы:
            данные, визуальную композицию и операции автора. Пользователь меняет
            узел или связь на холсте; редактор изменяет сохраняемую модель, а
            прикладная система затем использует эти данные независимо от
            расположения элементов на экране.
          </p>
        </div>
        <ol className="graph-editor-principles-list">
          <li>
            <span>01</span>
            <div>
              <strong>Авторинг</strong>
              <p>
                Создание и редактирование узлов, связей и параметров
                непосредственно в контексте всей модели.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <strong>Навигация</strong>
              <p>
                Панорамирование, масштабирование, поиск и работа с крупным
                полотном без потери контекста.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <strong>Диагностика</strong>
              <p>
                Проверка структурных правил в момент авторинга, когда
                исправление ещё не превращается в runtime-баг.
              </p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <strong>Читаемость</strong>
              <p>
                Маршрутизация связей и компоновка уменьшают пересечения, лишние
                изгибы и визуальный шум.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <section className="section graph-reuse">
        <div className="graph-reuse-copy">
          <div className="eyebrow">АРХИТЕКТУРА РЕДАКТОРА</div>
          <h2>
            Редактор растёт вместе с моделью, а не переписывается под неё.
          </h2>
          <p>
            Базовый слой отвечает за взаимодействие с полотном: панорамирование,
            масштабирование, перетаскивание, маршрутизацию связей, виртуализацию
            узлов и отслеживание изменений ассетов. Он не зависит от того, какие
            именно данные автор размещает на графе.
          </p>
          <p>
            Специализация начинается в адаптере предметной модели: он определяет
            содержимое узла, смысл связи, доступные операции и правила
            валидации. Поэтому новый тип графа добавляется как новая модель
            поверх устойчивой инфраструктуры — без копирования редактора и без
            пересборки UX с нуля.
          </p>
          <div className="graph-architecture-code">
            <span>ОБЩИЙ CANVAS</span>
            <CodeSnippet code={canvasCode} />
          </div>
        </div>
        <div
          className="graph-reuse-map"
          aria-label="Общая основа и специализации редакторов"
        >
          <div className="reuse-core">
            <span>ОБЩЕЕ ЯДРО</span>
            <strong>
              Графовая модель
              <br />
              Полотно · взаимодействие · связи
            </strong>
            <small>canvas · layout · interaction · validation</small>
          </div>
          <div className="reuse-specializations">
            <article>
              <span>МОДЕЛЬ</span>
              <strong>данные узла</strong>
              <p>содержимое, свойства и жизненный цикл доменной сущности</p>
            </article>
            <article>
              <span>АДАПТЕР</span>
              <strong>семантика связи</strong>
              <p>правила перехода, отображение и доступные операции</p>
            </article>
            <article>
              <span>АНАЛИЗ</span>
              <strong>инварианты графа</strong>
              <p>валидация структуры и диагностика проблемных участков</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section graph-portability">
        <div className="graph-portability-copy">
          <div className="eyebrow">ХРАНЕНИЕ И ПЕРЕНОС ДАННЫХ</div>
          <h2>Граф остаётся данными, когда редактор закрыт.</h2>
          <p>
            Диалог, квест или машина состояний сохраняются как набор узлов,
            связей и параметров предметной модели. Canvas помогает автору
            собрать и проверить эту структуру, после сохранения её читает
            runtime-система. Позиции карточек на полотне относятся к
            редакторскому представлению; логика переходов, условия и ссылки на
            контент существуют отдельно.
          </p>
          <p>
            В текущих Unity-проектах графы лежат в ScriptableObject-ассетах.
            Этот выбор удобен для авторинга: Unity сериализует данные, хранит
            ссылки между ассетами и позволяет вести их вместе с проектом. При
            переносе в другой проект граф сохраняет свою структуру и работает
            там, где подключены совместимые типы узлов, условия, действия и
            связанный контент.
          </p>
          <p>
            Формат хранения можно заменить или дополнить импортом и экспортом.
            Достаточно описать преобразование между моделью графа и внешней
            записью: JSON, текстовый файл, данные сервера или формат, принятый в
            другом проекте. Редактор и runtime продолжают работать с той же
            моделью после загрузки.
          </p>
        </div>
        <div className="graph-portability-side">
          <div
            className="graph-portability-steps"
            aria-label="Путь данных графа"
          >
            <article>
              <span>01</span>
              <div>
                <strong>Модель графа</strong>
                <p>
                  Идентификаторы, узлы, связи, условия, действия и ссылки на
                  контент.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <strong>Формат хранения</strong>
                <p>
                  Сейчас — Unity ScriptableObject. Внешняя форма может быть JSON
                  или другим сериализуемым форматом.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <strong>Загрузка в проект</strong>
                <p>
                  Совместимая система читает модель и исполняет те же переходы и
                  правила.
                </p>
              </div>
            </article>
          </div>
          <div className="graph-inline-code graph-portability-code">
            <div>
              <span>ПРИМЕР ВНЕШНЕГО ПРЕДСТАВЛЕНИЯ</span>
              <h3>Один граф можно записать в переносимый файл.</h3>
              <p>
                Схема JSON показана как возможный формат экспорта. Поля
                повторяют данные графа, а не устройство Unity Editor.
              </p>
            </div>
            <CodeSnippet code={portableGraphCode} />
          </div>
        </div>
      </section>
      <section className="section graph-editor-tech">
        <div className="section-heading">
          <div>
            <div className="eyebrow">ТЕХНИЧЕСКАЯ ОСНОВА</div>
            <h2>Что умеет общий слой редактора.</h2>
          </div>
          <p>
            Возможности, которые не зависят от содержания конкретного графа.
          </p>
        </div>
        <div className="graph-editor-tech-grid">
          <article>
            <h3>Рабочее полотно</h3>
            <p>
              Панорамирование, масштабирование и перемещение узлов для работы с
              графами любого размера.
            </p>
          </article>
          <article>
            <h3>Модель отдельно от вида</h3>
            <p>
              Данные узлов и переходов хранятся отдельно от координат и
              маршрутов на полотне.
            </p>
          </article>
          <article>
            <h3>Маршрутизация связей</h3>
            <p>
              Линии обходят узлы, уменьшая пересечения и сохраняя направление
              переходов читаемым.
            </p>
          </article>
          <article>
            <h3>Работа с крупными графами</h3>
            <p>
              Виртуализация узлов и пространственный поиск соединений снижают
              нагрузку на интерфейс.
            </p>
          </article>
          <article>
            <h3>Проверка структуры</h3>
            <p>
              Редактор может находить недостижимые, изолированные и терминальные
              узлы до запуска системы.
            </p>
          </article>
        </div>
        <div className="graph-inline-code graph-virtualizer-code">
          <div>
            <span>ВИРТУАЛИЗАЦИЯ УЗЛОВ</span>
            <h3>Отрисовка только видимой части графа</h3>
            <p>
              Canvas отслеживает узлы в области экрана и не создаёт визуальные
              элементы для остальных.
            </p>
          </div>
          <CodeSnippet code={virtualizerCode} />
        </div>
      </section>
      <section className="section graph-cases">
        <div className="section-heading">
          <div>
            <div className="eyebrow">РЕАЛИЗАЦИИ</div>
            <h2>Одна основа, разные модели данных.</h2>
          </div>
          <p>
            В каждом случае меняется содержимое узлов и связей; механика работы
            с графом остаётся общей.
          </p>
        </div>
        <div className="graph-case-grid">
          <Link className="graph-case-card" to="/tools/dialog-editor">
            <img
              src={assetUrl("/content/tools/dialogue-editor/dialogue-quest-demo.jpg")}
              alt="Редактор диалогов с узлами реплик и ответов"
            />
            <div>
              <h3>Редактор диалогов</h3>
              <p>Создание и настройка диалоговых веток.</p>
              <b>
                Подробнее <ArrowRight size={16} />
              </b>
            </div>
          </Link>
          <Link className="graph-case-card" to="/tools/quest-editor">
            <img
              src={assetUrl("/content/tools/quest-editor/quest-editor-graph.jpg")}
              alt="Графовый редактор квеста в Unity Editor"
            />
            <div>
              <h3>Редактор квестов</h3>
              <p>Настройка этапов и логики прохождения задания.</p>
              <b>
                Подробнее <ArrowRight size={16} />
              </b>
            </div>
          </Link>
          <Link className="graph-case-card" to="/tools/fsm-editor">
            <img
              src={assetUrl("/content/tools/fsm-editor/state-machine-editor.jpg")}
              alt="Редактор конечных автоматов со связями между состояниями"
            />
            <div>
              <h3>Редактор FSM</h3>
              <p>Настройка состояний и переходов объекта.</p>
              <b>
                Подробнее <ArrowRight size={16} />
              </b>
            </div>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
const gmoSpriteGroups = [
  {
    label: "Овощи",
    title: "Враги первого этапа",
    description:
      "В первой части истории сад атакуют ожившие овощи. Для каждого подготовлены исходный спрайт и отдельный вариант после разрезания.",
    items: [
      ["broccoli.png", "Брокколи", "Крупный силуэт с ветвистыми ножками."],
      ["cabage.png", "Капуста", "Один из овощных противников сада."],
      ["carrot.png", "Морковь", "Персонаж из набора овощных врагов."],
      ["cucumber.png", "Огурец", "Персонаж из набора овощных врагов."],
      ["eggplant.png", "Баклажан", "Персонаж из набора овощных врагов."],
      ["pepper.png", "Перец", "Персонаж из набора овощных врагов."],
      ["potato.png", "Картофель", "Персонаж из набора овощных врагов."],
      ["radish.png", "Редис", "Персонаж из набора овощных врагов."],
    ],
  },
  {
    label: "Арсенал",
    title: "Оружие и категории",
    description:
      "В данных WeaponInfo есть три категории: пистолет, винтовка и дробовик. Визуальные варианты соединяют экран выбора оружия с prefab-ами игровых пушек.",
    items: [
      ["glock18.png", "Glock 18", "Пистолетный визуальный вариант."],
      ["five_seven.png", "Five-SeveN", "Пистолетный визуальный вариант."],
      ["deagle.png", "Deagle", "Пистолетный визуальный вариант."],
      ["ak47.png", "AK-47", "Винтовочный визуальный вариант."],
      ["m4a4.png", "M4A4", "Винтовочный визуальный вариант."],
      ["ump.png", "UMP", "Автоматический визуальный вариант."],
      ["uzi.png", "Uzi", "Компактный автоматический визуальный вариант."],
      ["nova.png", "Nova", "Дробовик: контекст для выстрела несколькими пулями."],
      ["sawed_off.png", "Sawed-Off", "Дробовик: второй визуальный вариант."],
      ["awp.png", "AWP", "Длинноствольный визуальный вариант."],
    ],
  },
  {
    label: "Разрезание",
    title: "Состояние врага после поражения",
    description:
      "Для овощей подготовлены отдельные sliced-спрайты. EnemySlicer отсоединяет их при смерти, а SliceParticle добавляет разлёт, вращение и гравитацию.",
    items: [
      ["broccoli_sliced.png", "Брокколи: sliced", "Дольки, которые EnemySlicer выпускает после смерти."],
      ["cabage_sliced.png", "Капуста: sliced", "Дольки, которые EnemySlicer выпускает после смерти."],
      ["carrot_sliced.png", "Морковь: sliced", "Дольки, которые EnemySlicer выпускает после смерти."],
      ["cucumber_sliced.png", "Огурец: sliced", "Дольки, которые EnemySlicer выпускает после смерти."],
      ["eggplant_sliced.png", "Баклажан: sliced", "Дольки, которые EnemySlicer выпускает после смерти."],
      ["pepper_sliced.png", "Перец: sliced", "Дольки, которые EnemySlicer выпускает после смерти."],
      ["potato_sliced.png", "Картофель: sliced", "Дольки, которые EnemySlicer выпускает после смерти."],
      ["radish_sliced.png", "Редис: sliced", "Дольки, которые EnemySlicer выпускает после смерти."],
    ],
  },
  {
    label: "Роботы",
    title: "Второй набор противников",
    description:
      "В Assets есть отдельная линейка роботов, Boss-спрайт и код процедурной постановки конечностей. Это визуальная основа запланированного заводского этапа и существующей битвы с боссом.",
    items: [
      ["robot1.png", "Robot 01", "Модульный робот из набора второго уровня."],
      ["robot2.png", "Robot 02", "Модульный робот из набора второго уровня."],
      ["robot3.png", "Robot 03", "Модульный робот из набора второго уровня."],
      ["robot4.png", "Robot 04", "Модульный робот из набора второго уровня."],
      ["robot5.png", "Robot 05", "Модульный робот из набора второго уровня."],
      ["robot6.png", "Robot 06", "Модульный робот из набора второго уровня."],
      ["robot7.png", "Robot 07", "Модульный робот из набора второго уровня."],
      ["robot8.png", "Robot 08", "Модульный робот из набора второго уровня."],
      ["robot9.png", "Robot 09", "Модульный робот из набора второго уровня."],
      ["RobotBoss.png", "Robot Boss", "Босс и его отделяемые элементы: руки, глаз и корпус."],
    ],
  },
] as const;

export function GmoSpriteCarousel() {
  const [groupIndex, setGroupIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const group = gmoSpriteGroups[groupIndex];
  const item = group.items[itemIndex];
  const show = (next: number) =>
    setItemIndex((next + group.items.length) % group.items.length);

  return (
    <section className="gmo-sprite-carousel" aria-label="Витрина спрайтов GMO Shooter">
      <div className="gmo-sprite-copy">
        <div className="eyebrow">ОРИГИНАЛЬНЫЕ АССЕТЫ ИЗ РЕПОЗИТОРИЯ</div>
        <h3>{group.title}</h3>
        <p>{group.description}</p>
        <div className="gmo-sprite-tabs" role="tablist" aria-label="Категория спрайтов">
          {gmoSpriteGroups.map((candidate, index) => (
            <button
              key={candidate.label}
              type="button"
              role="tab"
              aria-selected={groupIndex === index}
              className={groupIndex === index ? "active" : ""}
              onClick={() => {
                setGroupIndex(index);
                setItemIndex(0);
              }}
            >
              {candidate.label}
            </button>
          ))}
        </div>
      </div>
      <div className="gmo-sprite-stage">
        <button
          type="button"
          className="gmo-sprite-arrow"
          aria-label="Предыдущий спрайт"
          onClick={() => show(itemIndex - 1)}
        >
          <ChevronLeft size={21} />
        </button>
        <figure>
          <div className="gmo-sprite-image-wrap">
            <img src={assetUrl(`/content/projects/gmo-shooter/sprites/${item[0]}`)} alt={item[1]} />
          </div>
          <figcaption>
            <span>{String(itemIndex + 1).padStart(2, "0")} / {String(group.items.length).padStart(2, "0")}</span>
            <strong>{item[1]}</strong>
            <p>{item[2]}</p>
          </figcaption>
        </figure>
        <button
          type="button"
          className="gmo-sprite-arrow"
          aria-label="Следующий спрайт"
          onClick={() => show(itemIndex + 1)}
        >
          <ChevronRight size={21} />
        </button>
      </div>
    </section>
  );
}

function DetailPage({ type }: { type: "projects" | "tools" }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = type === "projects" ? projects : tools;
  const item = data.find((x) => x.slug === slug);
  if (!item) return <Navigate to="/404" replace />;

  const isProject = type === "projects";
  const isGraphTool = !isProject && (item as Tool).categories.includes("graph");
  const isDialogueEditor = !isProject && item.id === "dialog-editor";
  const isQuestEditor = !isProject && item.id === "quest-editor";
  const isFsmEditor = !isProject && item.id === "fsm-editor";
  const isRpgProject = isProject && item.id === "rpg";
  const isGmoProject = isProject && item.id === "save-the-planet-2d-shooter";
  const isZombiesInMinoriProject = isProject && item.id === "zombies-in-minori";
  const isWizardGameProject = isProject && item.id === "wizard-game";
  const isPlaceholderProject = isProject && (item as Project).isPlaceholder;
  const projectPeriod = isProject
    ? developmentPeriod(
        (item as Project).developmentStartedAt,
        (item as Project).developmentEndedAt,
        (item as Project).developmentPeriods,
      )
    : undefined;
  const editorCover =
    !isProject && (item as Tool).coverImage
      ? (item as Tool).coverImage
      : isDialogueEditor
        ? {
            src: "/content/tools/dialogue-editor/dialogue-quest-demo.jpg",
            alt: "Окно диалогового редактора в Unity Editor",
          }
        : !isProject && item.id === "quest-editor"
          ? {
              src: "/content/tools/quest-editor/quest-editor-graph.jpg",
              alt: "Окно редактора квестов в Unity Editor",
            }
          : !isProject && item.id === "fsm-editor"
            ? {
                src: "/content/tools/fsm-editor/state-machine-editor.jpg",
                alt: "Окно редактора конечных автоматов в Unity Editor",
              }
            : null;
  const articleCover = isRpgProject
    ? {
        src: "/content/projects/rpg/rpg-cover.png",
        alt: "Персонаж у кузницы в поселении RPG",
      }
    : isProject
      ? (item as Project).coverImage
      : editorCover;
  const breadcrumbs = isProject
    ? [
        { label: "Главная", to: "/" },
        { label: "Проекты", to: "/#projects" },
        { label: item.title },
      ]
    : isGraphTool
      ? [
          { label: "Главная", to: "/" },
          { label: "Графовые редакторы", to: "/tools/graph-editors" },
          { label: item.title },
        ]
      : [
          { label: "Главная", to: "/" },
          { label: "Инструменты", to: "/tools" },
          { label: item.title },
        ];
  const related = isProject
    ? tools
        .filter((t) => (item as Project).relatedToolIds?.includes(t.id))
        .map((t) => ({
          title: t.title,
          href: `/tools/${t.slug}`,
          technologies: t.technologies,
        }))
    : [];
  const relatedProjects = isProject
    ? []
    : projects.filter((p) => (item as Tool).relatedProjectIds?.includes(p.id));
  const sections = isRpgProject
    ? rpgStorySections
    : isGmoProject
      ? gmoStorySectionsRpgStyle
    : isZombiesInMinoriProject
      ? zombiesInMinoriStorySections
    : isWizardGameProject
      ? wizardGameStorySections
    : isDialogueEditor
      ? dialogEditorStorySections
      : isQuestEditor
        ? questEditorStorySections
        : isFsmEditor
          ? fsmEditorStorySections
          : item.sections;
  const projectOverview = isRpgProject || isGmoProject || isZombiesInMinoriProject || isWizardGameProject ? null : <p>{(item as Project).role}</p>;

  return (
    <PageLayout>
      <section className="section article-head">
        <Breadcrumbs items={breadcrumbs} />
        <button
          className="back"
          onClick={() =>
            navigate(
              isGraphTool
                ? "/tools/graph-editors"
                : type === "projects"
                  ? "/#projects"
                  : `/${type}`,
            )
          }
        >
          ← Вернуться к каталогу
        </button>
        {(!isPlaceholderProject || articleCover) && (
          <div
            className={`article-cover ${articleCover ? "article-media-cover" : ""}`}
          >
            {articleCover && <img src={assetUrl(articleCover.src)} alt={articleCover.alt} />}
            <span>{item.coverLabel}</span>
          </div>
        )}
        {!isProject && (
          <div className="eyebrow">ТЕХНИЧЕСКАЯ СТРАНИЦА ИНСТРУМЕНТА</div>
        )}
        <h1>{item.title}</h1>
        {projectPeriod && <div className="eyebrow project-period">{projectPeriod}</div>}
        {isProject && (item as Project).publicationStatus && (
          <span className="project-status">
            {(item as Project).publicationStatus}
          </span>
        )}
        {!isWizardGameProject && item.description && <p>{item.description}</p>}
        {isProject && (item as Project).links?.length ? (
          <div className="article-project-links">
            {(item as Project)
              .links!.filter((link) => link.href)
              .map((link) => (
                <a
                  className="project-link"
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} <ArrowUpRight size={13} />
                </a>
              ))}
          </div>
        ) : null}
        {isProject && (item as Project).repositoryLinks?.length ? (
          <div className="article-project-repository-links">
            {(item as Project)
              .repositoryLinks!.filter((link) => link.href)
              .map((link) => (
                <a
                  className="project-link"
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} <ArrowUpRight size={13} />
                </a>
              ))}
          </div>
        ) : null}
        {!isPlaceholderProject && (
          <div className="tags">
            {item.technologies.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        )}
        {isProject && (item as Project).stats?.length ? (
          <Stats stats={(item as Project).stats!} />
        ) : null}
      </section>
      {!isPlaceholderProject && <div className="article-layout section">
        <aside>
          {sections.length ? (
            <TableOfContents sections={sections} />
          ) : (
            <div className="toc">
              <strong>Содержание</strong>
              <span>Материалы будут добавлены.</span>
            </div>
          )}
        </aside>
        <article className="article">
          {!isRpgProject && !isGmoProject && !isZombiesInMinoriProject && !isWizardGameProject && (
            <section id="overview" className="article-section">
              <div className="eyebrow">ОБЗОР</div>
              <h2>
                {isProject
                  ? isRpgProject
                    ? "О проекте"
                    : "Роль и зона ответственности"
                  : isDialogueEditor
                    ? "Диалоговый граф в составе игры"
                    : isQuestEditor
                      ? "Квестовый граф в составе игры"
                      : isFsmEditor
                        ? "От графа к исполняемому поведению"
                        : "Задачи инструмента"}
              </h2>
              {isProject ? (
                projectOverview
              ) : isDialogueEditor ? (
                <>
                  <p>
                    Интерактивному объекту назначается <code>DialogGraph</code>{" "}
                    — набор фраз и переходов, доступных в разговоре. Граф
                    собирается в Unity Editor, сохраняется как контент проекта и
                    используется runtime-системой при каждом запуске диалога.
                  </p>
                  <p>
                    Во время разговора игра читает состояние игрока и мира:
                    этапы квестов, предметы, деньги, временные флаги. Эти данные
                    определяют состав доступных ответов. Один граф поддерживает
                    несколько сценарных ситуаций: торговец предлагает покупку
                    при наличии денег, персонаж реагирует на выполненный этап
                    задания, обязательная сцена открывается по своему
                    приоритету.
                  </p>
                  <div className="article-details">
                    <article>
                      <h3>Что редактирует автор</h3>
                      <p>
                        Фразы, ответы, связи, локализованный текст, условия,
                        последствия выбора и расположение узлов на полотне.
                      </p>
                    </article>
                    <article>
                      <h3>Что хранит игра</h3>
                      <p>
                        Прогресс квестов, ресурсы и флаги. Эти данные определяют
                        доступность веток, сохраняя граф авторским контентом.
                      </p>
                    </article>
                    <article>
                      <h3>Что делает редактор</h3>
                      <p>
                        Помогает собрать сценарий в одном месте, показывает
                        связи и предупреждает о нарушенной структуре до запуска
                        сцены.
                      </p>
                    </article>
                  </div>
                </>
              ) : isQuestEditor ? (
                <>
                  <p>
                    <code>QuestGraph</code> описывает квест как авторский
                    контент: этапы, переходы, текст для журнала, цель на карте,
                    условия и результаты. Он собирается в Unity Editor и
                    используется одинаково всеми игровыми системами, которым
                    нужен контекст задания.
                  </p>
                  <p>
                    Во время игры контроллер создаёт отдельный объект прогресса.
                    В нём находится текущий узел, история завершённых этапов и
                    состояние завершения. Журнал, диалоги, карта, уведомления и
                    сохранения читают этот прогресс, поэтому у квеста нет
                    параллельных списков целей в разных подсистемах.
                  </p>
                  <div className="article-details">
                    <article>
                      <h3>Что редактирует автор</h3>
                      <p>
                        Структуру этапов, переходы, локализованный текст,
                        требования, результаты, иконки и цели на карте.
                      </p>
                    </article>
                    <article>
                      <h3>Что меняется во время игры</h3>
                      <p>
                        Текущий этап, история прохождения и статус квеста. Эти
                        данные живут в QuestProgress и в файле сохранения.
                      </p>
                    </article>
                    <article>
                      <h3>Что делает редактор</h3>
                      <p>
                        Показывает квест целиком, помогает связать этапы, хранит
                        композицию полотна и поддерживает целостность ссылок.
                      </p>
                    </article>
                  </div>
                </>
              ) : isFsmEditor ? (
                <>
                  <p>
                    <code>StateMachineGraph</code> — авторская схема состояний,
                    поведений и переходов. Редактор собирает её в набор
                    связанных ассетов, а runtime создаёт для каждого объекта
                    собственный экземпляр <code>StateMachine</code>.
                  </p>
                  <p>
                    Исполнитель обновляется каждый кадр: вызывает{" "}
                    <code>Logic</code> всех поведений текущего состояния,
                    последовательно проверяет переходы, выполняет действия
                    первого подходящего перехода и проводит объект через{" "}
                    <code>Exit</code> и <code>Enter</code>. В статье ниже этот
                    цикл разобран по исходному коду.
                  </p>
                  <div className="article-details">
                    <article>
                      <h3>На полотне</h3>
                      <p>
                        Карточки состояний, связи, порядок переходов, состав
                        Behaviours и условия каждой стрелки.
                      </p>
                    </article>
                    <article>
                      <h3>Во время запуска</h3>
                      <p>
                        Отдельные CurrentState, время и StateMachineContext для
                        каждого экземпляра, использующего граф.
                      </p>
                    </article>
                    <article>
                      <h3>В коде</h3>
                      <p>
                        Runner собирает контекст; StateMachine исполняет цикл;
                        компоненты поведения, условий и действий остаются
                        небольшими самостоятельными asset-классами.
                      </p>
                    </article>
                  </div>
                </>
              ) : (
                <ul className="feature-list tool-capabilities">
                  {(item as Tool).capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              )}
            </section>
          )}
          {isProject && !isRpgProject && !isZombiesInMinoriProject && !isWizardGameProject && (
            <section className="article-section">
              <h2>Ключевые решения</h2>
              <ul className="feature-list">
                {(item as Project).solutions.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
          )}
          <ContentBlocks sections={sections} />
          {!sections.some((section) => section.media?.length) && (
            <section className="article-section">
              <h2>Медиа</h2>
              <div className="media-placeholder">
                [Видео демонстрации / скриншоты / архитектурная схема]
              </div>
            </section>
          )}
        </article>
      </div>}
      {!isPlaceholderProject && <section className="section">
          <Related
            title={isProject ? "Связанные инструменты" : "Связанные проекты"}
            items={related}
            projects={relatedProjects}
          />
        </section>}
    </PageLayout>
  );
}
function NotFound() {
  const location = useLocation();
  return (
    <PageLayout>
      <section className="section not-found">
        <div className="eyebrow">404</div>
        <h1>Страница не найдена.</h1>
        <p>
          Адрес <code>{location.pathname}</code> не ведёт к материалу портфолио.
        </p>
        <Link className="button primary" to="/">
          На главную
        </Link>
      </section>
    </PageLayout>
  );
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<DetailPage type="projects" />} />
      <Route path="/tools" element={<CatalogPage type="tools" />} />
      <Route path="/tools/graph-editors" element={<GraphEditorsPage />} />
      <Route path="/tools/:slug" element={<DetailPage type="tools" />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
