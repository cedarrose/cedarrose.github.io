'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Linkedin, FileText, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image' // Import Image for the profile picture

export function ProfileSection() {
  return (
    <section
  id="profile"
  className="min-h-screen relative overflow-hidden bg-dot-grid bg-[length:20px_20px] pt-8 md:pt-0"
>
  <div className="container mx-auto px-6 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    {/* Profile Image on top for mobile, side for desktop */}
    <motion.div 
      initial={{ opacity: 0, x: 0, y: -20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center md:order-2 order-1 mb-6 md:mb-0"
    >
      <Image
        src="/profile.jpeg" 
        alt="Cedar Rose Leach"
        width={500}
        height={500}
        className="object-cover w-full max-w-xs md:max-w-full md:w-full md:h-auto"
      />
    </motion.div>
    {/* Text and Links */}
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-start md:order-1 order-2"
    >
      <h1 className="text-xl md:text-2xl text-[#2e2e2e] mb-4 w-full md:text-left">
        <span className="font-semibold text-3xl md:text-5xl mt-2 block">Cedar Rose Leach</span>
      </h1>
      <h2 className="text-lg md:text-2xl text-[#590e0e] mb-2 w-full md:text-left">
        Electrical and Computer Engineering
      </h2>
      <div className="flex items-center gap-2">
        <p className="text-[#5e5e5e] text-lg pt-4 mb-2">University of Southern California</p>
      </div>
      <p className="text-[#5e5e5e] text-lg mb-12">Class of 2027</p>

      <p className="text-lg text-[#5e5e5e] mb-4 leading-relaxed max-w-xl">
          Co-founder of Memoir Photos - the only accessible photo library for the visually impaired. 
      </p>

      <p className="text-lg text-[#5e5e5e] mb-12 leading-relaxed max-w-xl">
          Passionate about innovation at the intersection of electrical engineering and biomedical applications. 
          Focusing on nanofabrication, neural interfaces, wearable sensors, and accessible technology.
      </p>

      <div className="flex flex-wrap items-center gap-3 md:gap-6 text-[#5e5e5e] text-regular">
        <Link href="https://www.linkedin.com/in/cedar-rose-leach" target="_blank" rel="noopener noreferrer">
          <Button
            variant="ghost"
            className="text-xs md:text-base px-2 md:px-4 py-1 md:py-2 text-[#5e5e5e] hover:text-[#2D1B69] hover:bg-[#2D1B69]/10 transition-colors"
          >
            <Linkedin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
            LinkedIn
          </Button>
        </Link>
        <Link href="mailto:cdleach@usc.edu">
          <Button
            variant="ghost"
            className="text-xs md:text-base px-2 md:px-4 py-1 md:py-2 text-[#5e5e5e] hover:text-[#2D1B69] hover:bg-[#2D1B69]/10 transition-colors"
          >
            <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1" />
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
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-transparent border-none cursor-pointer hidden md:block"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <ChevronDown className="w-8 h-8 text-[#2D1B69] opacity-50" />
  </motion.button>
</section>

  )
}
