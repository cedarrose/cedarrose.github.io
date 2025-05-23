'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ProfileSection } from "@/components/profile-section"
import { NanofabProject } from "@/components/nanofab-project"
import { NeuralProbeProject } from "@/components/neural-probe-project"
import { ResearchPaperProject } from "@/components/research-paper-project"
import { AFEProject as AFEProjectComponent } from "@/components/research-poster-project"
import { AppProject } from "@/components/memoir-project"
import { InternshipProject } from "@/components/internship-project"
import { MakersProjects } from "@/components/makers-projects"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { 
  nanofabProject, 
  neuralProbeProject, 
  researchPaperProject,
  elecAFEProject,
  memoirProject,
  boeingInternship,
  smartenderProject,
  bcdProject
} from "@/data/projects"
import Link from 'next/link'
import { useState, useEffect } from 'react'

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
  }>
}

export interface NeuralProbeProject extends BaseProject {
  type: 'neural-probe'
  pi: string
  curveLink: string
  provostLink: string
  funding1: string
  funding2: string
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
  pi: string
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
