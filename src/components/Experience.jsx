import React from 'react'
import { Icon } from '@iconify/react';
import PortfolioData from '../data'

const Experience = () => {
  const { experiences } = PortfolioData

  return (
    <div className="bento-card experience p-4 col-span-1 md:col-span-2 md:row-span-2 space-y-2 group animate-fade-in-up animation-delay-800">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4" icon="mdi:briefcase-outline" />
        <h2 className='text-lg font-bold'>Experience</h2>
      </div>
      <div className="relative space-y-4 mt-4">
        <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-border"></div>
        { experiences.map((experience, index) => {
          const { title, company, years } = experience
          return (
            <div key={index} className="relative pl-6 group/role">
              <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-accent ${index === 0 ? 'bg-accent' : 'bg-white'} transition-color`}></div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-accent transition-colors">{title}</h3>
                <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground/70 text-accent/70">{company}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 border border-foreground/10
                      bg-accent/10 border-accent/20 min-w-max text-center">{years}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience
