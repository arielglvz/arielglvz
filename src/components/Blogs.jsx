import React from 'react'
import { Icon } from '@iconify/react';
import PortfolioData from '../data';

const Blogs = () => {
  const { blogs } = PortfolioData;

  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in animation-delay-500">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Recent Blog Posts</h2>
          <a href="#" className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors">
            View All
            <Icon className='w-3 h-3' icon="material-symbols:arrow-forward-ios"/>
          </a>
        </div>
      </div>
      <div className="space-y-3">
        { blogs.length === 0 
          ? 
          <div className="h-full flex items-center">
            <p>Coming Soon...</p>
          </div>
          : <div className="bento-card p-3 space-y-1.5">
          <a href="#" className="block space-y-1.5">
            <h3 className="text-sm font-semibold group-hover:text-accent">CMS Me</h3>
            <div className="flex items-center gap-2 text-[10px] text-foreground/50">
              <time>January 30, 2025</time>
              <span>•</span>
              <span>3 min read</span>
            </div>
            <p className="text-xs text-foreground/70 line-clamp-2">This post explores effective ways to handle form data validation in Laravel, using practical examples and best practices to enhance your application&#39;s robustness and user experience.</p>
          </a>
          <div className="flex flex-wrap gap-1 mt-2">
            <span className="px-1.5 py-0.5 text-[10px] rounded-md bg-foreground/5 border border-foreground/10">React JS</span>
            <span className="px-1.5 py-0.5 text-[10px] rounded-md bg-foreground/5 border border-foreground/10">Tailwind CSS</span>
            <span className="px-1.5 py-0.5 text-[10px] rounded-md bg-foreground/5 border border-foreground/10">Redux</span>
            <span className="px-1.5 py-0.5 text-[10px] rounded-md bg-foreground/5 border border-foreground/10">Router</span>
            <span className="px-1.5 py-0.5 text-[10px] rounded-md bg-foreground/5 border border-foreground/10">Firebase</span>
            <span className="px-1.5 py-0.5 text-[10px] rounded-md bg-foreground/5 border border-foreground/10">AntDesign</span>
            <span className="px-1.5 py-0.5 text-[10px] rounded-md bg-foreground/5 border border-foreground/10">SCSS</span>
            <span className="px-1.5 py-0.5 text-[10px] rounded-md bg-foreground/5 border border-foreground/10">Node JS</span>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Blogs
