import { useEffect, useState } from 'react'
import { Check, ChevronLeft, ChevronRight, Copy } from 'lucide-react'
import type { ContentSection, Project } from '../types'
import { ProjectCard, TechBadge } from './cards'
import { ItemModal } from './modal'
import { assetUrl } from '../asset-url'
export function TableOfContents({ sections }: { sections: ContentSection[] }) { const [active, setActive] = useState(sections[0]?.id); useEffect(() => { const observer = new IntersectionObserver(items => { const hit = items.find(x => x.isIntersecting); if (hit) setActive(hit.target.id) }, { rootMargin: '-20% 0px -70% 0px' }); sections.forEach(x => document.getElementById(x.id) && observer.observe(document.getElementById(x.id)!)); return () => observer.disconnect() }, [sections]); return <nav className="toc" aria-label="Содержание"><strong>Содержание</strong>{sections.map(s => <a className={`${s.kind === 'chapter' ? 'toc-chapter' : 'toc-section'} ${active === s.id ? 'active' : ''}`} key={s.id} href={`#${s.id}`}>{s.kind === 'chapter' && s.label ? <small>{s.label}</small> : null}{s.tocTitle ?? s.title}</a>)}</nav> }
export function CodeSnippet({ code }: { code: string }) { const [done, setDone] = useState(false); const copy = async () => { await navigator.clipboard?.writeText(code); setDone(true); window.setTimeout(() => setDone(false), 1600) }; return <div className="code"><button onClick={copy} aria-label="Скопировать код">{done ? <Check size={15} /> : <Copy size={15} />}{done ? 'Скопировано' : 'Копировать'}</button><pre><code>{code}</code></pre></div> }
function SpriteCarousel({ items }: { items: NonNullable<ContentSection['media']> }) {
  const [index, setIndex] = useState(0)
  const item = items[index]
  const move = (step: number) => setIndex(current => (current + step + items.length) % items.length)
  return <section className="context-sprite-carousel" aria-label="Спрайты из репозитория">
    <div className="context-sprite-stage">
      <button type="button" onClick={() => move(-1)} aria-label="Предыдущий спрайт"><ChevronLeft size={22} /></button>
      <figure>
        <div className="context-sprite-image">{item.src ? <img src={assetUrl(item.src)} alt={item.alt} /> : <div className="media-placeholder">[{item.alt}]</div>}</div>
        <figcaption><span>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span><strong>{item.alt}</strong><p>{item.caption}</p></figcaption>
      </figure>
      <button type="button" onClick={() => move(1)} aria-label="Следующий спрайт"><ChevronRight size={22} /></button>
    </div>
    <div className="context-sprite-dots" role="tablist" aria-label="Выбор спрайта">{items.map((sprite, spriteIndex) => <button key={sprite.src ?? sprite.alt} type="button" role="tab" aria-selected={index === spriteIndex} aria-label={`Показать: ${sprite.alt}`} className={index === spriteIndex ? 'active' : ''} onClick={() => setIndex(spriteIndex)} />)}</div>
  </section>
}

function ZombieLogicArchitecture() {
  return <section className="zombie-logic-architecture" aria-label="Архитектурная схема ZombieLogic">
    <div className="zombie-logic-architecture__heading">
      <span>АРХИТЕКТУРНАЯ СХЕМА</span>
      <strong>ZombieLogic и конечный автомат зомби</strong>
    </div>
    <div className="zombie-logic-architecture__inputs">
      <article><span>EntityVisualDetector</span><p>Радиус, угол обзора и проверка препятствий лучами.</p></article>
      <article><span>EntitySoundDetector</span><p>Сфера слышимости вокруг зомби.</p></article>
    </div>
    <div className="zombie-logic-architecture__to-machine">обнаружен герой ↓</div>
    <article className="zombie-logic-architecture__machine">
      <span>StateMachine</span>
      <strong>Выбирает активное состояние на каждом FixedUpdate.</strong>
    </article>
    <div className="zombie-logic-architecture__states">
      <article>
        <span>01</span><strong>RandomWalking</strong><p>Ищет случайную точку на NavMesh.</p><small>дальше Chasing при обнаружении</small>
      </article>
      <article>
        <span>02</span><strong>HeroChasing</strong><p>Передаёт NavMeshAgent позицию героя.</p><small>дальше Attack в радиусе удара</small>
      </article>
      <article>
        <span>03</span><strong>Attacking</strong><p>Останавливает зомби и запускает удар.</p><small>выход из радиуса → Walking</small>
      </article>
    </div>
    <div className="zombie-logic-architecture__outputs">
      <article><span>NavMeshAgent</span><p>Движение к случайной точке или к герою.</p></article>
      <article><span>EnemyAttack</span><p>Триггер собирает цели и наносит урон.</p></article>
      <article><span>ZombieAnimator</span><p>Получает скорость, события атаки и смерти.</p></article>
    </div>
  </section>
}

function MinoriComparisonScrollers({ items }: { items: NonNullable<ContentSection['media']> }) {
  const pairs = [
    { title: 'Первое сравнение', items: items.slice(0, 2) },
    { title: 'Второе сравнение', items: items.slice(2, 4) },
  ]
  return <div className="minori-comparison-scrollers">
    {pairs.map(pair => <section className="minori-comparison-scroller" key={pair.title} aria-label={pair.title}>
      <div className="minori-comparison-scroller__heading"><strong>{pair.title}</strong><span>Листайте вправо →</span></div>
      <div className="minori-comparison-scroller__track">
        {pair.items.map((media, index) => <figure key={media.src ?? media.alt}>
          <div className="minori-comparison-scroller__label">{index === 0 ? 'ГОРОД МИНОРИ' : 'ИГРА'}</div>
          {media.src ? <img src={assetUrl(media.src)} alt={media.alt} /> : <div className="media-placeholder">[{media.alt}]</div>}
          {media.caption && <figcaption>{media.caption}</figcaption>}
        </figure>)}
      </div>
    </section>)}
  </div>
}

const sectionKindLabels: Record<ContentSection['kind'], string> = {
  chapter: 'ГЛАВА',
  text: 'ОПИСАНИЕ',
  code: 'ФРАГМЕНТ КОДА',
  video: 'ВИДЕО',
  gallery: 'СКРИНШОТ',
  diagram: 'СХЕМА',
}

export function ContentBlocks({ sections }: { sections: ContentSection[] }) {
  return <>{sections.map(section => <section id={section.id} className={`article-section ${section.kind === 'chapter' ? 'article-chapter' : ''}`} key={section.id}>
    {section.label ? <div className="eyebrow">{section.label}</div> : section.kind !== 'chapter' ? <div className="eyebrow">{sectionKindLabels[section.kind]}</div> : null}
    <h2>{section.title}</h2>
    {section.body.split('\n\n').map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    {section.outline?.length ? <ol className="article-outline">{section.outline.map((item, index) => <li key={item.label}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{item.label}</strong><p>{item.description}</p></div></li>)}</ol> : null}
    {section.details?.length ? <div className="article-details">{section.details.map(detail => <article key={detail.title}>
      <h3>{detail.title}</h3><p>{detail.body}</p>
    </article>)}</div> : null}
    {section.id === 'minori-zombies' ? <ZombieLogicArchitecture /> : null}
    {section.flow?.length && section.id !== 'minori-zombies' ? <div className="article-flow">{section.flow.map((item, index) => <article key={item.label}>
      <span>{String(index + 1).padStart(2, '0')}</span><strong>{item.label}</strong><p>{item.description}</p>
    </article>)}</div> : null}
    {section.code && <CodeSnippet code={section.code} />}
    {section.media?.length && section.media.some(media => media.src?.includes('/gmo-sprites/')) ? <SpriteCarousel items={section.media} /> : null}
    {section.id === 'minori-street' && section.media?.length ? <MinoriComparisonScrollers items={section.media} /> : null}
    {section.media?.length && section.id !== 'minori-street' ? <div className={`article-media-gallery ${section.media.some(media => media.src?.includes('/gmo-sprites/')) ? 'is-sprite-gallery' : ''}`}>{section.media.map(media => <figure key={media.src ?? media.alt}>
      {media.src ? <img src={assetUrl(media.src)} alt={media.alt} /> : <div className="media-placeholder">[{media.alt}]</div>}
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>)}</div> : section.id !== 'minori-zombies' && section.media === undefined && (section.kind === 'video' || section.kind === 'gallery' || section.kind === 'diagram') && <div className="media-placeholder">[{section.kind === 'video' ? 'Видео демонстрации' : section.kind === 'gallery' ? 'Скриншот механики' : 'Архитектурная схема'}]</div>}
  </section>)}</>
}
export function Related({ title, items = [], projects = [] }: { title: string; items?: { title: string; href: string; technologies: string[] }[]; projects?: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null)
  const [source, setSource] = useState<HTMLElement | null>(null)
  if (!items.length && !projects.length) return null
  return <section className="related"><div className="eyebrow">СВЯЗАННЫЕ МАТЕРИАЛЫ</div><h2>{title}</h2>{projects.length ? <div className="project-grid">{projects.map(project => <ProjectCard key={project.id} project={project} onOpen={(value, element) => { setSelected(value); setSource(element) }} />)}</div> : <div className="related-grid">{items.map(item => <a href={item.href} key={item.href}><h3>{item.title}</h3><div className="tags">{item.technologies.map(t => <TechBadge key={t}>{t}</TechBadge>)}</div></a>)}</div>}{projects.length ? <ItemModal item={selected} source={source} onClose={() => setSelected(null)} kind="projects" /> : null}</section>
}
export function Stats({ stats }: { stats: { label: string; value: string }[] }) { return <div className="stats">{stats.map(s => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</div> }
