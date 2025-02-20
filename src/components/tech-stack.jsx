import React from 'react';
import { Icon } from '@iconify/react';

const TechStack = () => {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in animation-delay-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon icon="material-symbols:computer-outline-rounded" />
          <h2 className="text-lg font-bold">Tech Stack</h2>
        </div>
        <a href="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors">View All</a>
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">JavaScript</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">TypeScript</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">React</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Vue js</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Tailwind CSS</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Styled Components</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">SCSS</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Webpack</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">ESLint</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Backend</h3>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Firebase</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Mongo DB</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Node.js</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Vue js</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Tailwind CSS</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Styled Components</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">SCSS</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Webpack</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">ESLint</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">CMS & No-Code</h3>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Wordpress</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Developer Tools</h3>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Git</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">GitHub</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Gerrit</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">VS Code</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Discord</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Teams</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">JIRA</span>
            <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">Confluence</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
