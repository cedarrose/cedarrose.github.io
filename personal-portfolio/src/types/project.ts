'use client'

export interface BaseProject {
  title: string
  subtitle?: string
  location: string
  dateRange: string
  description?: (string | React.ReactNode)[]
}

export interface NanofabProject extends BaseProject {
  type: 'nanofab'
  images: Array<{
    src: string
    caption: string
  }>
  logos: Array<{
    src: string
    alt: string
    width: number
    height: number
  }>
}

export interface NeuralProbeProject extends BaseProject {
  type: 'neural-probe'
  skills: Array<{
    title: string
    content: string
  }>
}

export interface ResearchPaperProject extends BaseProject {
  type: 'research-paper'
  authors: string[]
  journal: string
  publicationDate: string
  paperLink: string
  thumbnailSrc: string
  abstract : string
  figures: Array<{
    src: string
    caption: string
  }>
}

export interface AFEProject extends BaseProject {
  type: 'research-poster'
  curveLink: string
  posterLink: string
  posterThumbnail: string
  funding: string
  images: Array<{
    src: string
    caption: string
  }>
}

export interface AppProject extends BaseProject {
  type: 'app'
  incubatorName: string
  incubatorLink: string
  images: Array<{
    src: string
    caption: string
  }>
}

export interface InternshipProject extends BaseProject {
  type: 'internship'
  companyLogo: {
    src: string
    alt: string
    width: number
    height: number
  }
}

export interface MakerProject extends BaseProject {
  type: 'maker'
  status: 'completed' | 'in-progress'
  images: Array<{
    src: string
    caption: string
  }>
}

export type Project = 
  | NanofabProject 
  | NeuralProbeProject 
  | ResearchPaperProject 
  | AFEProject
  | AppProject
  | InternshipProject
  | MakerProject

