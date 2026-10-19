export type ProjectCategory = 'mobile' | 'web-pc' | 'current'
export type ToolCategory = 'graph'
export type ProjectStatus = 'released' | 'in-development' | 'prototype'
export type ContentKind = 'chapter' | 'text' | 'code' | 'video' | 'gallery' | 'diagram'

export interface ExternalLink { label: string; href?: string; placeholder?: boolean }
export interface MediaAsset { alt: string; src?: string; caption?: string }
export interface ContentDetail { title: string; body: string }
export interface ProjectStat { label: string; value: string; isPlaceholder?: boolean }
export interface ContentSection { id: string; title: string; kind: ContentKind; body: string; label?: string; tocTitle?: string; outline?: { label: string; description: string }[]; flow?: { label: string; description: string }[]; details?: ContentDetail[]; code?: string; language?: 'csharp'; media?: MediaAsset[] }
export interface ProjectPopupSection { title: string; text: string }
export interface Project { id: string; slug: string; title: string; summary: string; description: string; categories: ProjectCategory[]; status: ProjectStatus; technologies: string[]; cardTechnologies?: string[]; platforms?: string[]; featured: boolean; sections: ContentSection[]; role: string; features: string[]; solutions: string[]; developmentStartedAt?: string; developmentEndedAt?: string; developmentPeriods?: { startedAt?: string; endedAt?: string }[]; publicationStatus?: string; coverImage?: MediaAsset; popupSections?: ProjectPopupSection[]; popupMedia?: MediaAsset[]; publicationLinks?: ExternalLink[]; repositoryLinks?: ExternalLink[]; stats?: ProjectStat[]; links?: ExternalLink[]; relatedToolIds?: string[]; coverLabel: string; isPlaceholder?: boolean }
export interface Tool { id: string; slug: string; title: string; summary: string; description: string; technologies: string[]; capabilities: string[]; sections: ContentSection[]; categories: ToolCategory[]; relatedProjectIds?: string[]; links?: ExternalLink[]; coverImage?: MediaAsset; popupSections?: ProjectPopupSection[]; coverLabel: string }
export interface Technology { id: string; name: string; group: string; purpose: string; use: string; projectSlugs?: string[]; toolSlugs?: string[]; demo?: boolean }
export interface Competency { group: string; title: string; text: string }
export interface CompetencyDetail { description: string; source: string; code?: string; architecture?: { label: string; description: string }[]; sections?: { title: string; text: string; code?: string }[] }
export interface CompetencyExample { project: string; chapter: string; description: string; href?: string }
export interface CompetencyVisual { alt: string; caption: string; src?: string; images?: MediaAsset[]; layout?: 'grid' | 'horizontal'; articleHref?: string; articleLabel: string }
