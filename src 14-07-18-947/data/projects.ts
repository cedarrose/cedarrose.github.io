import { NanofabProject, NeuralProbeProject, ResearchPaperProject } from '@/types/project'
import { AFEProject } from '@/types/project'
import { AppProject } from '@/types/project'
import { InternshipProject } from '@/types/project'
import { MakerProject } from '@/types/project'

export const nanofabProject: NanofabProject = {
  type: 'nanofab',
  title: 'Semiconductor Nanofabrication',
  location: 'John O\'brien Nanofabrication Laboratory',
  dateRange: 'June 2024 - July 2024',
  description: [
    'I had the privilege of being part of the inaugural cohort of the ME Commons Scholars Program, which launched this summer. The program featured two immersive phases: a two-week CA DREAMS Cleanroom Gateway at USC’s John O’Brien Nanofabrication Laboratory, where I received hands-on training, followed by a six-week internship.',
    'During the Cleanroom Gateway, I gained skills in wafer cleaning and handling, photolithography, deposition, etching, metrology, machine operation, and cleanroom safety practices. This foundational training prepared me for my internship.',
    'My internship began with a couple of weeks of cleanroom machine calibration, where I conducted multiple trials of SiO₂ deposition on cleaved silicon wafers to measure and recalibrate the faulty PECVD deposition rate. I then joined the Biomedical Microsystems Laboratory, which focuses on developing micro/nanotechnologies for biomedical applications. Here, I was fascinated by the fabrication process of a novel silicon-polymer neural probe, and I continued my research into the school year.',
    'Programs that offer such comprehensive and specialized training in this specialized industry are exceptionally rare, and I am grateful to have gained such valuable knowledge and experience in this field.',
  ],
  images: [
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: ''
    },
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: ''
    },
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: ''
    }
  ],
  logos: [
    {
      src: '/placeholder.svg?height=50&width=200',
      alt: 'DREAMS Logo',
      width: 200,
      height: 50
    },
    {
      src: '/placeholder.svg?height=100&width=100',
      alt: 'Commons Scholars Logo',
      width: 100,
      height: 100
    }
  ]
}

export const neuralProbeProject: NeuralProbeProject = {
  type: 'neural-probe',
  title: 'Neural Probe',
  subtitle: 'Design, Fabrication, & Characterization',
  location: 'at the Biomedical Microsystems Laboratory',
  dateRange: 'July 2024 - Present',
  description: [
    'Since July 2024, I\'ve been helping my lab design, fabricate, and characterize a hybrid silicon-polymer neural recording probe.',
    'This neural probe aims to combine the flexibility of polymer-based neural interfaces and the high electrode density of silicon-based neural interfaces. This hybrid approach enforces high spatial resolution neural recordings while maintaining flexible mechanical properties and biocompatibility required for neural implants.',
    'The neural probe is composed of a flexible shank with 1-3 application-specific integrated circuits (ASICs) on the coil. Digitized neural recordings are transmitted via inductive coupling between the ASIC coils and the probe coil. To create this hybrid neural probe, I have assisted my lab in developing and testing the fabrication procedure for the flexible shank.',
    'I joined this lab in July of last summer after a month of training in semiconductor fabrication processes in the cleanroom. I was able to translate this knowledge of fabrication at a nanoscale to my lab’s development of neural interfaces. I truly enjoy the process of creating this device. It’s a ton of trial and error, brainstorming different fabrication methods and figuring out what works and what doesn’t. I can think of at least 6 different fabrication approaches that I have undertaken, and each approach has so many different variations in tweaking the mold CAD file, or the material of the coil, or the method of transferring it to the substrate, or the coil-forming methods that I use.',
    'While there are standard fabrication processes for creating neural probes (deposition, etching, liftoff), our project requires a new approach to fabricate because we dealing with a much thicker layer of conductive material to secure a stable connection from the inductive coupling between the primary coil and the ASIC’s coil.',
    'Within the  process of brainstorming, designing, fabricating, and characterizing the neural probe, I’ve learned a number of new knowledge and sharpened various skills ',
  ],
  skills: [
    {
      title: "Femtosecond Laser Ablation",
      content: "To precisely pattern coils from a titanium sheet for one rendition of the neural probe"
    },
    {
      title: "Fusion 360 CAD",
      content: "Created the mold for forming a wire into the desired shape of the primary coil.\nDeveloped multiple mold variations to optimize both the coil's geometry and the efficiency of the wire-forming process."
    },
    {
      title: "K-Layout",
      content: "Designed 2D coil patterns for fabrication on silicon wafers."
    },
    {
      title: "Device Packaging",
      content: "Soldering and coil molding to create the primary coil and neural probe shank.  Attached SMA connectors for testing and measurements"
    },
    {
      title: "S-param Data Anylitics",
      content: "S to Z conversion to analyze impedence of primary coil and derivation of inductance."
    },
    {
      title: "COMSOL Simulations",
      content: "Learned COMSOL, simulating magnetic field and inductance properties of the probe to optimize coil performance."
    },
    {
      title: "Parylene Deposition & Etching",
      content: "Worked in the cleanroom depositing parylene for various renditions of the probe. Parylene serves as an insulator and a substrate for the probe."
    },
    {
      title: "Analog-to-Digital Converter (ADC)",
      content: "Currently researching/selecting ADC evaluation boards as to digitize probe data. Focusing on specifications such as sampling rate & bit resolution."
    }
  ]
}

export const researchPaperProject: ResearchPaperProject = {
  type: 'research-paper',
  title: 'Modeling Capacitive Sweat Rate Sensor',
  location: 'Coauthor of Paper Published in Advanced Intelligent Systems',
  dateRange: 'Dec 25, 2024',
  authors: ['Mohammad Shafiqul Islam', 'Sangwon Cha', 'Md Farhad Hassan', 'Wenxin Cai', 'Tahsin Sejat Saniat', 'Cedar Rose Leach', 'Yasser Khan'],
  journal: 'Advanced Intelligent Systems',
  publicationDate: 'December 25, 2024',
  paperLink: 'https://lnkd.in/gq4wVyib',
  thumbnailSrc: '/placeholder.svg?height=300&width=200',
  abstract: '"Sweat rate measures key physiological states such as hydration levels and heat tolerance. Incorporating wearable technology with sweat rate sensors allows individuals to conveniently monitor their health, optimize workouts, and enhance occupational safety. However, challenges persist in such integration techniques, including intricate manufacturing, nonlinear responses to changes in sweat rates, and errors from the intermediate measurement of the distance sweat travels in the sensor. To address these issues, we present a comprehensive wearable platform that includes a fully printed, flexible sensor patch, readout electronics, and a mobile app for continuous, real-time monitoring of sweat rate. We fabricate a sensor patch with an area of 700 mm2 and a weight of 380 mg by utilizing direct 3D printing and scalable microfluidic fabrication. The microfluidic channels are 850 μm wide and 164 μm thick, with serpentine electrodes measuring sweat rate using capacitance..."',
  contribution: ['I helped to visualize and communicate the design of our wearable capacitive sweat sensor by creating detailed 3D models of the capacitive sweat rate sensor in Fusion 360.',
                'Effective communication is one of the most crucial aspects of any advancements in science, and my hope is that I could enhance the understanding and appreciation of our lab\’s capacitive sweat sensor. Through detailed CAD models, I highlighted the sensors structural layers, design features, material composition, and functionality. Here are some of the designs that were published.'
],
  figures: [
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'Capacitive system for the analytical modeling of the Sweat rate sensor’s capacitive systems for analytical modeling. Dielectric encapsulation, two parallel metal electrodes, and the channel by the dielectric encapsulation is shown. Capacitance is formed by the sweat and the air within the channel.'
    },
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'Three layers of the sweat rate sensor. Bottom layer - the encapsulated Ag electrodes on a flexible polyimide substrate. Middle layer -  the patterned microfluidics channel to direct the sweat. Top layer - microfluidics cover. Both the substrate and microfluidic layers are hydrophilic, so they expend a capillary force that directs sweat into the dielectric channel.'
    },
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'Fabrication process - direct 3D writing of two parallel Ag electrodes'
    },
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'Fabrication process -  direct 3D writing of dielectric encapsulation'
    },
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'Fabrication process - assembly of a double-sided microfluidic tape, patterned by using a desktop cutter machine, with the already encapsulated Ag electrodes'
    },
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'Fabrication process - assembly of a microfluidic cover, patterned by using the same desktop cutter machine, concluding the sensor fabrication'
    }
  ]
}

export const electrochemicalAFEProject: AFEProject = {
  type: 'research-poster',
  title: 'Analog Front End of Electrochemical Sensing System',
  location: 'at the Khan Lab',
  dateRange: 'Jan 2024 - May 2024',
  curveLink: 'https://viterbiundergrad.usc.edu/research/curve/',
  posterLink: '/path-to-poster.pdf',
  posterThumbnail: '/placeholder.svg?height=150&width=100',
  funding: 'CURVE (Center for Undergraduate Research in Viterbi Engineering)',
  description: [
    'The Khan Lab at USC focuses on wearable sensors for precision health and psychiatry. As a freshman researcher in the Khan Lab I worked on an electrochemical sensing system for potassium ion sensing. My teammate and I developed firmware and hardware for the Analog Front End of an extended gate transistor-based sensor with differential sensing capabilities.',
    'In an extended gate transistor based electrochemical sensing system, the change in chemical activity of analyte species can be detected in the shift of the silicon transistors’ i-v characteristics. With the transistor gate connected to an appropriate electrochemical sensor, the analyte in contact with the sensor will induce a shift in the transistor’s threshold voltage. To collect this electrochemical data, we needed analog-to-digital conversion and a supply of bias to NMOS transistors through the Analog Front End (AFE). We used Analog Devices’ AD5933 and interfaced it with an Arduino to control the transistors and read the drain-source current.',
    'We created two setups, single-ended and differential printed sensors, and connected the transistor gate to the gold working electrode of the chosen setup. We developed the firmware to interface the Arduino with the digital-to-analog converter (DAC), which provides bias to the NMOS transistors. We created the AFE system from a breadboard, Arduino UNO, and DAC, but I created a PCB layout of the AFE for future use.',
 ],
  images: [
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'Sensor prototype design'
    },
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'Testing setup and calibration'
    }
  ]
}

export const memoirProject: AppProject = {
  type: 'app',
  title: 'Memoir',
  dateRange: 'Oct 2024 - Present',
  location: 'An Interactive & Accessible Photo Library for the Visually Impaired',
  incubatorName: 'SEP (Sigma Eta Pi)',
  incubatorLink: 'https://uscsep.com/',
  description: [
    <>
        For the past few months, I’ve had the privilege of working on something deeply meaningful: 
        <strong style={{ color: '#be5f00', fontWeight: 600 }}> Memoir</strong>.
    </>,
    <>
        People with <span style={{ color: '#be5f00', fontWeight: 600 }}>visual impairment</span> often face challenges understanding images on the web, 
        photos sent by friends, or reliving cherished memories stored in their personal photo libraries. That’s why we’re building 
        Memoir.
    </>,
    <>
        With Memoir, users can interact with, organize, and relive the emotional significance 
        of their photo collections through an <span style={{ color: '#be5f00', fontWeight: 600 }}>audio-based photo library</span>. Our platform creates 
        AI-generated captions to describe every image and allows users to search or filter photos based on content, create and share custom albums, 
        and casually browse through their memories. When paired with screen readers like Apple’s VoiceOver or Google’s TalkBack,  
        <span style={{ color: '#be5f00', fontWeight: 600 }}> Memoir transforms visual information into an interactive, audio-based experience for blind users</span>.
    </>,
    <>
        I’ve had the most incredible time working with my co-founders, Moksh Jhaveri, Marshall Graves, and Isannah Marley. We are currently 
        building and beta testing, and I’m excited to share more about Memoir’s journey in the near future.
    </>,
  ],

  images: [
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'App interface showing main navigation'
    },
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'Accessibility features demonstration'
    }
  ]
}

export const boeingInternship: InternshipProject = {
  type: 'internship',
  title: 'Boeing Intern',
  location: 'FPGAs, Satellites & Systems, Innovation Challenge',
  dateRange: 'June 2022 - Aug 2022',
  description: [
    <>
        The Boeing Satellite Development Center in El Segundo, CA is a massive hub of achievement and inspiration. During my summer internship 
        at Boeing, I found myself immersed in the heart of aerospace and innovation, touring the labs and warehouses that send such complex systems to space.
    </>,
    <>
        Here, I was surrounded by people of passion, expertise, and grit; I tried my best to take every opportunity to absorb their knowledge and insights.
    </>,
    <>
        I undertook two main projects during my internship. My individual project focused on <span style={{ color: '#0066CC', fontWeight: 600 }}>configuring a Field Programmable Gate Array (FPGA)</span> using 
        the Versal VCK190 board. This involved designing, simulating, synthesizing, and implementing FPGA scripts using Xilinx’s Vivado and Vitis tools. 
        This experience introduced me to the fundamentals of FPGA programming, a foundation I have since built upon by strengthening 
        my Verilog skills through Digital Circuits courses at USC.
    </>,
    <>
        I also participated in <span style={{ color: '#0066CC', fontWeight: 600}}>Boeing’s LINC Innovation Challenge</span>, where my team developed a concept 
        for an interactive campus navigation system for Boeing employees and visitors. Advancing through three competitive rounds, 
        our team ultimately won the challenge, judged by Boeing’s Director of Human Resources and President of Commercial Satellite Systems.
    </>,
],
  companyLogo: {
    src: '/boeing-logo.png',
    alt: 'Boeing Logo',
    width: 200,
    height: 100
  }
}

export const smartenderProject: MakerProject = {
  type: 'maker',
  title: 'SmarTender',
  location: 'USC Makers',
  dateRange: 'Aug 2023 - April 2024',
  status: 'completed',
  description: [
    'Last year, I worked with my team to create an autonomous assembly line robot that dispenses and prepares drinks depending on user input'
    'We modeled its movement mechanisms after 3D printer linear rails and implemented different drink combinations with an ice-dispensing function and some really fun LEDS.'
  ],
  images: [
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'Complete SmarTender setup'
    },
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'Internal mechanism detail'
    }
  ]
}

export const bcdProject: MakerProject = {
  type: 'maker',
  title: 'BCD - Brain Controlled Drone',
  location: 'USC Makers',
  dateRange: 'Aug 2024 - Present',
  status: 'in-progress',
  description: [
    'This year, I\'m making an EEG-controlled drone using a homemade brain-computer interface',
    'We\'ve been implementing neural signal processing and will focus on drone flight control algorithms later on'
  ],
  images: [
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'BCI hardware setup'
    },
    {
      src: '/placeholder.svg?height=400&width=800',
      caption: 'Drone control system architecture'
    }
  ]
}

