import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectPortfolio = () => {
  const projects = [
    {
      type: "featured",
      title: "Printed Wearable Sweat Rate Sensor",
      location: "Computational Intelligence Laboratory, TTI, Japan",
      period: "2024",
      overview: "Continuous in-situ perspiration measurement system published in multiple prestigious journals.",
      role: "Modeled components of the wearable sensor in fusion 360",
      publications: [
        "Device, a Cell Press Journal",
        "Advanced Functional Materials",
        "Advanced Intelligent Systems"
      ],
      images: ["/api/placeholder/800/600"],
      bgColor: "bg-blue-50"
    },
    {
      type: "split",
      title: "Neural Probe Design",
      location: "Biomedical Microsystems Laboratory",
      period: "2023-2024",
      overview: "Designing, fabricating, and characterizing a hybrid silicon-polymer neural recording probe aimed at integrating the flexibility of polymer-based neural interfaces and the high electrode density of silicon-based neural interfaces.",
      details: [
        "Utilizing femtosecond laser ablation to pattern coil structure",
        "Depositing parylene as neural probe shaft and coil insulation",
        "Embedding integrated circuit neural recording chips"
      ],
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      bgColor: "bg-purple-50"
    },
    {
      type: "full",
      title: "Semiconductor Nanofabrication",
      location: "John O'brien Nanofabrication Laboratory",
      period: "JUNE 2024 - JULY 2024",
      overview: "In 3-4 sentences describe your process, what you've done and what the next steps were. Include an outcome or measurable feedback that you got back that informed your thinking.",
      details: [
        "Trained in semiconductor nanofabrication processes and safe chemical handling in a cleanroom",
        "Practiced machine operation and fabrication techniques (photolithography, etching, deposition, wafer cleaning & handling)"
      ],
      funding: "Funded by the 2020 Chips Act to promote chip research and development in the US",
      program: {
        name: "California Dreams DOD Microelectronics Commons Scholars",
        logo: "/api/placeholder/50/50"
      },
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
      bgColor: "bg-emerald-50"
    }
  ];

  const ImageCarousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    
    return (
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <img 
          src={images[currentImage]}
          alt="Project visualization"
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button 
              onClick={() => setCurrentImage(prev => prev === 0 ? images.length - 1 : prev - 1)}
              className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setCurrentImage(prev => prev === images.length - 1 ? 0 : prev + 1)}
              className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    );
  };

  const FeaturedProject = ({ project }) => (
    <div className={`w-full py-16 ${project.bgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">{project.title}</h2>
            <p className="text-lg text-gray-600 italic">{project.location}</p>
            <p className="text-gray-700">{project.overview}</p>
            {project.publications && (
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase text-gray-900">Publications</h3>
                {project.publications.map((pub, index) => (
                  <p key={index} className="text-gray-700">• {pub}</p>
                ))}
              </div>
            )}
          </div>
          <div className="col-span-7 h-[600px]">
            <ImageCarousel images={project.images} />
          </div>
        </div>
      </div>
    </div>
  );

  const SplitProject = ({ project }) => (
    <div className={`w-full py-16 ${project.bgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-12">
          <div className="h-[500px]">
            <ImageCarousel images={project.images} />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
              <p className="text-gray-600 mt-2 italic">{project.location}</p>
            </div>
            <p className="text-gray-700">{project.overview}</p>
            <div className="space-y-3">
              {project.details.map((detail, index) => (
                <p key={index} className="text-gray-700">• {detail}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FullProject = ({ project }) => (
    <div className={`w-full py-16 ${project.bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">{project.title}</h2>
          <p className="text-xl text-gray-600 italic">{project.location}</p>
        </div>
        
        <div className="h-[400px] w-full">
          <ImageCarousel images={project.images} />
        </div>

        <div className="grid grid-cols-12 gap-8 mt-8">
          <div className="col-span-8">
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <p className="text-gray-700">{project.overview}</p>
            <div className="mt-6 space-y-3">
              {project.details.map((detail, index) => (
                <p key={index} className="text-gray-700">• {detail}</p>
              ))}
            </div>
          </div>
          <div className="col-span-4">
            {project.program && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={project.program.logo} 
                    alt="Program logo"
                    className="w-12 h-12 rounded-full"
                  />
                  <p className="font-medium text-gray-900">{project.program.name}</p>
                </div>
                <p className="text-sm text-gray-700">{project.funding}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {projects.map((project, index) => {
        switch (project.type) {
          case 'featured':
            return <FeaturedProject key={index} project={project} />;
          case 'split':
            return <SplitProject key={index} project={project} />;
          case 'full':
            return <FullProject key={index} project={project} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ProjectPortfolio;