'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Linkedin, FileText, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ProfileSection() {
  return (
    <section id="profile" className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 min-h-screen flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-2xl text-[#2e2e2e] mb-4">
            Hi, I'm <span className="font-semibold text-5xl mt-2">Cedar Rose Leach</span>
          </h1>
          <h2 className="text-2xl text-[#590e0e] mb-6">
            Electrical and Computer Engineering
          </h2>
          <p className="text-[#5e5e5e] text-lg pt-4 mb-2">University of Southern California</p>
          <p className="text-[#5e5e5e] text-lg mb-12">Class of 2027</p>
          
          <p className="text-lg text-[#5e5e5e] mb-12 leading-relaxed max-w-xl">
            Passionate about innovation at the intersection of electrical engineering and biomedical applications. 
            Focusing on nanofabrication, neural interfaces, and wearable technology while pursuing groundbreaking 
            research in next-generation medical devices.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-[#5e5e5e] text-regular">
            <Link href="https://www.linkedin.com/in/cedar-rose-leach" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                className="text-[#5e5e5e] hover:text-[#2D1B69] hover:bg-[#2D1B69]/10 transition-colors"
              >
                <Linkedin className="w-4 h-4 mr-1" />
                LinkedIn
              </Button>
            </Link>
            <Link href="/your-resume.pdf" target="_blank">
              <Button
                variant="ghost"
                className="text-[#5e5e5e] hover:text-[#2D1B69] hover:bg-[#2D1B69]/10 transition-colors"
              >
                <FileText className="w-4 h-4 mr-1" />
                Resume
              </Button>
            </Link>
            <Link href="mailto:cdleach@usc.edu">
              <Button
                variant="ghost"
                className="text-[#5e5e5e] hover:text-[#2D1B69] hover:bg-[#2D1B69]/10 transition-colors"
              >
                <Mail className="w-4 h-4 mr-1" />
                cdleach@usc.edu
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.button 
        onClick={() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-transparent border-none cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-[#2D1B69] opacity-50" />
      </motion.button>
    </section>
  )
}