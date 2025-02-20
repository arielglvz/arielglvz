import React from 'react'
import { Icon } from '@iconify/react';
import PortfolioData from '../data';

const About = () => {
  const { about } = PortfolioData

  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in-up">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4" icon="mdi:briefcase-outline" />
        <h2 className='text-lg font-bold'>About</h2>
      </div>
      <p className="text-sm text-foreground/70 leading-relaxed">
        { about }
      </p>
    </div>
  )
}

export default About
