import React from 'react'
import { Icon } from '@iconify/react';
import PortfolioData from '../data';

const TechStack = () => {
  const { tech_stack } = PortfolioData;
  const { frontend, backend } = tech_stack;
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in animation-delay-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon icon="material-symbols:computer-outline-rounded" />
          <h2 className="text-lg font-bold">Tech Stack</h2>
        </div>
        <a href="#" className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors">
          View All
          <Icon className='w-3 h-3' icon="material-symbols:arrow-forward-ios"/>
        </a>
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-1.5">
            { frontend.map((tech, index) => <span key={index} className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">{tech}</span>)}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Backend</h3>
          <div className="flex flex-wrap gap-1.5">
            { backend.map((tech, index) => <span key={index} className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">{tech}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
