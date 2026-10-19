import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project, Tool } from "../types";
import { Visual, TechBadge, developmentPeriod } from "./cards";
import { statusLabels } from "../data";
import { assetUrl } from "../asset-url";
type Item = Project | Tool;
function isProject(item: Item): item is Project {
  return "status" in item;
}
export function ItemModal({
  item,
  source,
  onClose,
  kind,
}: {
  item: Item | null;
  source: HTMLElement | null;
  onClose: () => void;
  kind: "projects" | "tools";
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useLayoutEffect(() => {
    if (!item) return;
    setExpandedImage(null);
    setIsClosing(false);
    ref.current?.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      if (closeTimerRef.current !== null)
        window.clearTimeout(closeTimerRef.current);
      if (ref.current?.open) ref.current.close();
      document.body.style.overflow = old;
      source?.focus();
    };
  }, [item, source]);

  if (!item) return null;

  const project = isProject(item) ? item : null;
  const capabilities: string[] = isProject(item)
    ? item.features
    : item.capabilities;
  const projectPeriod = project
    ? developmentPeriod(
        project.developmentStartedAt,
        project.developmentEndedAt,
        project.developmentPeriods,
      )
    : undefined;
  const popupSections = item.popupSections;
  const toggleImage = (src?: string) =>
    setExpandedImage((current) => (current === src ? null : (src ?? null)));
  const closeModal = () => {
    if (isClosing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onClose();
      return;
    }
    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      ref.current?.close();
      onClose();
    }, 280);
  };
  const sourceBounds = source?.getBoundingClientRect();
  const modalStyle = sourceBounds
    ? ({
        "--modal-shift-x": `${sourceBounds.left + sourceBounds.width / 2 - window.innerWidth / 2}px`,
        "--modal-shift-y": `${sourceBounds.top + sourceBounds.height / 2 - window.innerHeight / 2}px`,
      } as CSSProperties)
    : undefined;

  return (
    <dialog
      ref={ref}
      style={modalStyle}
      className={`project-dialog ${popupSections?.length ? "project-brochure-dialog" : ""} ${isClosing ? "is-closing" : "is-opening"}`}
      aria-labelledby="modal-title"
      onCancel={(e) => {
        e.preventDefault();
        closeModal();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
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
        {project?.popupMedia?.length ? (
          <figure
            className={`project-popup-gallery ${project.popupMedia.length === 1 ? "is-single" : ""} ${expandedImage ? "is-expanded" : ""}`}
          >
            {project.popupMedia.map((image) => (
              <button
                type="button"
                className={expandedImage === image.src ? "is-active" : ""}
                key={image.src}
                aria-pressed={expandedImage === image.src}
                aria-label={`${expandedImage === image.src ? "Уменьшить" : "Увеличить"}: ${image.caption ?? image.alt}`}
                onClick={() => toggleImage(image.src)}
              >
                <img src={assetUrl(image.src)} alt={image.alt} />
              </button>
            ))}
          </figure>
        ) : (
          <Visual
            label={item.coverLabel}
            icon={kind === "tools" && !(item as Tool).coverImage?.src}
            image={(item as Tool).coverImage}
          />
        )}
        <div className="project-popup-heading">
          <h2 id="modal-title">{item.title}</h2>
          {(!project?.isPlaceholder || projectPeriod) && (
            <span className="eyebrow project-period">
              {project
                ? (projectPeriod ?? statusLabels[project.status])
                : "UNITY EDITOR TOOL"}
            </span>
          )}
        </div>
        {project?.publicationStatus && (
          <span className="project-status">{project.publicationStatus}</span>
        )}
        {(project?.links?.length || project?.repositoryLinks?.length) ? (
          <div className="project-popup-link-groups">
            {project?.links?.length ? (
              <div className="project-popup-links">
                {project.links.filter((link) => link.href).map((link) => (
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
            {project?.repositoryLinks?.length ? (
              <div className="project-popup-repository-links">
                {project.repositoryLinks.filter((link) => link.href).map((link) => (
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
          </div>
        ) : null}
        {item.description && <p>{item.description}</p>}
        {popupSections?.length ? (
          <div className="project-brochure-sections">
            {popupSections.map((section) => (
              <section key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </section>
            ))}
          </div>
        ) : (
          (!project || (project.id !== "rpg" && !project.isPlaceholder)) && (
            <section className="project-modal-features">
              <h3>
                {project ? "Ключевые технические решения" : "Возможности"}
              </h3>
              <ul className="feature-list">
                {capabilities.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </section>
          )
        )}
        {!project?.isPlaceholder && (
          <div className="tags">
            {item.technologies.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        )}
        {project?.publicationLinks?.length && (
          <section className="project-publications">
            <h3>Площадки</h3>
            <div>
              {project.publicationLinks.map((platform) =>
                platform.href ? (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {platform.label}
                  </a>
                ) : (
                  <span key={platform.label}>{platform.label}</span>
                ),
              )}
            </div>
          </section>
        )}
        <Link
          className="button primary"
          to={`/${kind}/${item.slug}`}
          onClick={onClose}
        >
          Подробнее {kind === "tools" ? "об инструменте" : "о проекте"}{" "}
          <ArrowRight size={17} />
        </Link>
      </div>
    </dialog>
  );
}
