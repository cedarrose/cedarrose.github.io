'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ProfileSection } from "@/components/profile-section"
import { AFEProject } from "@/components/research-poster-project"
import { NanofabProject } from "@/components/nanofab-project"
import { NeuralProbeProject } from "@/components/neural-probe-project"
import { ResearchPaperProject } from "@/components/research-paper-project"
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
  memoirProject,
  boeingInternship,
  smartenderProject,
  bcdProject,
  elecAFEProject
} from "@/data/projects"
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Page() {
  const [dots, setDots] = useState('');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const y = useTransform(scrollY, [0, 300], [100, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length < 3 ? prev + '.' : '');
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <ProfileSection />
      <motion.section 
        id="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ opacity, y }}
        className="container mx-auto md:px-20 max-w-[400px] py-16"
      > 
          <h2 className="text-lg mt-8 text-[#5e5e5e] leading-relaxed max-w-xl ml-4 mb-2">
          What I've Been Working On<span className="inline-block w-[30px]">{dots}</span>
        </h2>
        <div className="border-t border-gray-200 py-4 mb-6 mt-2"></div>
        <Accordion type="multiple" className="w-full [&>*]:mt-0">
          <AccordionItem value="item-1">
            <AccordionTrigger className="w-full hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4 group">
              <div className="flex justify-between items-start w-full flex-nowrap">
                <div className="text-left w-full">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#4A332F] transition-colors duration-200 group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-[#007d92] group-data-[state=open]:to-[#00a1b3] group-data-[state=open]:bg-clip-text group-data-[state=open]:text-transparent">
                    {neuralProbeProject.title}
                  </h2>
                  <span className="block font-normal text-gray-600">
                    {neuralProbeProject.subtitle && (
                      <span className="block">{neuralProbeProject.subtitle}</span>
                    )}
                    <span className="block">
                      at the{' '}
                      <Link href="https://biomems.usc.edu/" className="italic underline hover:underline" target="_blank" rel="noopener noreferrer"> 
                        Biomedical Microsystems Laboratory
                      </Link>
                    </span>
                  </span>
                  <span className="block md:hidden font-normal text-gray-500 mt-1">{neuralProbeProject.dateRange}</span>
                </div>
                <span className="hidden md:inline font-normal text-gray-500 ml-4 text-right whitespace-nowrap min-w-[120px]">{neuralProbeProject.dateRange}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <NeuralProbeProject project={neuralProbeProject} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="w-full hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4 group">
              <div className="flex justify-between items-start w-full flex-nowrap">
                <div className="text-left w-full">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#4A332F] transition-colors duration-200 group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-[#007d92] group-data-[state=open]:to-[#00a1b3] group-data-[state=open]:bg-clip-text group-data-[state=open]:text-transparent">
                    {researchPaperProject.title}
                  </h2>
                  <span className="block font-normal text-gray-600">
                    {researchPaperProject.location}
                  </span>
                  <span className="block md:hidden font-normal text-gray-500 mt-1">{researchPaperProject.dateRange}</span>
                </div>
                <span className="hidden md:inline font-normal text-gray-500 ml-4 text-right whitespace-nowrap min-w-[120px]">{researchPaperProject.dateRange}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <ResearchPaperProject project={researchPaperProject} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="w-full hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4 group">
              <div className="flex justify-between items-start w-full flex-nowrap">
                <div className="text-left w-full">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#4A332F] transition-colors duration-200 group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-[#e66000] group-data-[state=open]:to-[#ffc329] group-data-[state=open]:bg-clip-text group-data-[state=open]:text-transparent">
                    {nanofabProject.title}
                  </h2>
                  <span className="block font-normal text-gray-600">
                    {nanofabProject.subtitle && (
                      <span className="block">{nanofabProject.subtitle}</span>
                    )}
                    <span className="block">
                      at the{' '}
                      <Link href="https://nanofab.usc.edu/" className="italic underline hover:underline" target="_blank" rel="noopener noreferrer">
                        {nanofabProject.location}
                      </Link>
                    </span>
                  </span>
                  <span className="block md:hidden font-normal text-gray-500 mt-1">{nanofabProject.dateRange}</span>
                </div>
                <span className="hidden md:inline font-normal text-gray-500 ml-4 text-right whitespace-nowrap min-w-[120px]">{nanofabProject.dateRange}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <NanofabProject project={nanofabProject} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="w-full hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4 group">
              <div className="flex justify-between items-start w-full flex-nowrap">
                <div className="text-left w-full">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#4A332F] transition-colors duration-200 group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-[#0788a2] group-data-[state=open]:to-[#14AEBA] group-data-[state=open]:bg-clip-text group-data-[state=open]:text-transparent">
                    {elecAFEProject.title}
                  </h2>
                  <span className="block font-normal text-gray-600">
                    {elecAFEProject.subtitle && (
                      <span className="block">{elecAFEProject.subtitle}</span>
                    )}
                    <span className="block">
                      at the{' '}
                      <Link href="https://khan.usc.edu/" className="italic underline hover:underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                        Khan Lab
                      </Link>
                    </span>
                  </span>
                  <span className="block md:hidden font-normal text-gray-500 mt-1">{elecAFEProject.dateRange}</span>
                </div>
                <span className="hidden md:inline font-normal text-gray-500 ml-4 text-right whitespace-nowrap min-w-[120px]">{elecAFEProject.dateRange}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <AFEProject project={elecAFEProject} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="w-full hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4 group">
              <div className="flex justify-between items-start w-full flex-nowrap">
                <div className="text-left w-full">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#4A332F] transition-colors duration-200 group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-[#d46a00] group-data-[state=open]:to-[#f0a500] group-data-[state=open]:bg-clip-text group-data-[state=open]:text-transparent">
                    {memoirProject.title}
                  </h2>
                  <span className="block font-normal text-gray-600">
                    {memoirProject.subtitle && (
                      <span className="block">{memoirProject.subtitle}</span>
                    )}
                    <span className="block">{memoirProject.location}</span>
                  </span>
                  <span className="block md:hidden font-normal text-gray-500 mt-1">{memoirProject.dateRange}</span>
                </div>
                <span className="hidden md:inline font-normal text-gray-500 ml-4 text-right whitespace-nowrap min-w-[120px]">{memoirProject.dateRange}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <AppProject project={memoirProject} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="w-full hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4 group">
              <div className="flex justify-between items-start w-full flex-nowrap">
                <div className="text-left w-full">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#4A332F] transition-colors duration-200 group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-[#0066CC] group-data-[state=open]:to-[#1E90FF] group-data-[state=open]:bg-clip-text group-data-[state=open]:text-transparent">
                    {boeingInternship.title}
                  </h2>
                  <span className="block font-normal text-gray-600">
                    {boeingInternship.subtitle && (
                      <span className="block">{boeingInternship.subtitle}</span>
                    )}
                    <span className="block">{boeingInternship.location}</span>
                  </span>
                  <span className="block md:hidden font-normal text-gray-500 mt-1">{boeingInternship.dateRange}</span>
                </div>
                <span className="hidden md:inline font-normal text-gray-500 ml-4 text-right whitespace-nowrap min-w-[120px]">{boeingInternship.dateRange}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <InternshipProject project={boeingInternship} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="w-full hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4 group">
              <div className="flex justify-between items-start w-full flex-nowrap">
                <div className="text-left w-full">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#4A332F] transition-colors duration-200 group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-[#b34700] group-data-[state=open]:to-[#d98a0b] group-data-[state=open]:bg-clip-text group-data-[state=open]:text-transparent">
                    USC Makers
                  </h2>
                  <span className="block font-normal text-gray-600">
                    <span className="block">
                    <Link href="https://viterbimakers.usc.edu/" className="italic underline hover:underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                      University Electrical Engineering Club
                    </Link>
                    </span>
                  </span>
                  <span className="block md:hidden font-normal text-gray-500 mt-1">Sept 2023 - Present</span>
                </div>
                <span className="hidden md:inline font-normal text-gray-500 ml-4 text-right whitespace-nowrap min-w-[120px]">Sept 2023 - Present</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <MakersProjects projects={[smartenderProject, bcdProject]} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.section>
      <footer className="mb-4 py-4 text-center text-sm text-gray-500"></footer>
      <footer className="mb-4 py-4 text-center text-sm text-gray-500"></footer>
      <footer className="mb-4 py-4 text-center text-sm text-gray-500">
        <p>&copy; 2024 Cedar Rose Leach.</p>
      </footer>
    </main>
  )
}
