import { useRef, type CSSProperties } from "react";
import { ArrowUpRight, Wrench } from "lucide-react";
import type { Project, Tool } from "../types";
import { statusLabels } from "../data";
import { assetUrl } from "../asset-url";
export function TechBadge({ children }: { children: string }) {
  return <span className="tag">{children}</span>;
}
export function Visual({
  label,
  icon = false,
  image,
  showLabel = true,
}: {
  label: string;
  icon?: boolean;
  image?: Project["coverImage"];
  showLabel?: boolean;
}) {
  return (
    <div className={`card-visual ${image?.src ? "has-image" : ""}`}>
      {image?.src ? (
        <img src={assetUrl(image.src)} alt={image.alt} />
      ) : (
        <span className="visual-grid" />
      )}
      {showLabel && label ? <span className="cover-label">{label}</span> : null}
      {icon && <Wrench size={56} strokeWidth={1} />}
    </div>
  );
}
export function developmentPeriod(
  startedAt?: string,
  endedAt?: string,
  periods?: { startedAt?: string; endedAt?: string }[],
) {
  const format = (value: string) => {
    const date = new Date(value);
    return [
      String(date.getUTCDate()).padStart(2, "0"),
      String(date.getUTCMonth() + 1).padStart(2, "0"),
      date.getUTCFullYear(),
    ].join(".");
  };
  const formatPeriod = (start?: string, end?: string) => {
    if (!start) return end ? `? — ${format(end)}` : undefined;
    return `${format(start)} — ${end ? format(end) : "now"}`;
  };
  if (periods?.length) {
    return periods
      .map((period) => formatPeriod(period.startedAt, period.endedAt))
      .filter((period): period is string => Boolean(period))
      .join("\n");
  }
  return formatPeriod(startedAt, endedAt);
}
export function ProjectCard({
  project,
  onOpen,
  showCoverLabel = true,
  style,
}: {
  project: Project;
  onOpen: (p: Project, source: HTMLElement) => void;
  showCoverLabel?: boolean;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const period = developmentPeriod(
    project.developmentStartedAt,
    project.developmentEndedAt,
    project.developmentPeriods,
  );
  const cardTechnologies =
    project.cardTechnologies ?? project.technologies.slice(0, 3);
  return (
    <article className="project-card" style={style}>
      <button
        ref={ref}
        type="button"
        className="project-card-main"
        onClick={() => ref.current && onOpen(project, ref.current)}
      >
        <Visual
          label={project.coverLabel}
          image={project.coverImage}
          showLabel={showCoverLabel}
        />
        <div className="project-content">
          {project.isPlaceholder ? (
            <>
              <div className="project-card-heading">
                <h3>{project.title}</h3>
                {period && <span className="eyebrow project-period">{period}</span>}
              </div>
              {project.publicationStatus && (
                <span className="project-status">
                  {project.publicationStatus}
                </span>
              )}
              {project.summary && <p>{project.summary}</p>}
              <div className="tags">
                {cardTechnologies.map((technology) => (
                  <TechBadge key={technology}>{technology}</TechBadge>
                ))}
              </div>
              {project.platforms?.length ? (
                <div className="tags project-platforms">
                  {project.platforms.map((platform) => (
                    <TechBadge key={platform}>{platform}</TechBadge>
                  ))}
                </div>
              ) : null}
            </>
          ) : (
            <>
              <div className="project-card-heading">
                <h3>{project.title}</h3>
                <span className="eyebrow project-period">
                  {period ?? statusLabels[project.status]}
                </span>
              </div>
              <span className="project-status">
                {project.publicationStatus ?? statusLabels[project.status]}
              </span>
              <p>{project.summary}</p>
              <div className="tags">
                {cardTechnologies.map((t) => (
                  <TechBadge key={t}>{t}</TechBadge>
                ))}
              </div>
              {project.platforms?.length ? (
                <div className="tags project-platforms">
                  {project.platforms.map((platform) => (
                    <TechBadge key={platform}>{platform}</TechBadge>
                  ))}
                </div>
              ) : null}
            </>
          )}
        </div>
      </button>
      {project.links?.length ? (
        <div className="project-links">
          {project.links
            .filter((link) => link.href)
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
      {project.repositoryLinks?.length ? (
        <div className="project-repository-links">
          {project.repositoryLinks
            .filter((link) => link.href)
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
    </article>
  );
}
export function ToolCard({
  tool,
  onOpen,
}: {
  tool: Tool;
  onOpen: (t: Tool, source: HTMLElement) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <button
      ref={ref}
      className="project-card tool-card"
      onClick={() => ref.current && onOpen(tool, ref.current)}
    >
      <Visual
        label={tool.coverLabel}
        icon={!tool.coverImage?.src}
        image={tool.coverImage}
      />
      <div className="project-content">
        <div className="card-line">
          <span className="eyebrow">UNITY EDITOR</span>
          <ArrowUpRight size={17} />
        </div>
        <h3>{tool.title}</h3>
        <p>{tool.summary}</p>
        <div className="tags">
          {tool.technologies.slice(0, 3).map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>
      </div>
    </button>
  );
}
