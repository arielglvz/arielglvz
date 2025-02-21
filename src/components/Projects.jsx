import { Icon } from '@iconify/react';
import ProjectData from '../data';

const Projects = () => {
  const { recent_projects } = ProjectData;
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in animation-delay-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className='w-4 h-4' icon="tdesign:grid-add"/>
          <h2 className="text-lg font-bold">Recent Projects</h2>
        </div>
        <a href="#" className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors">
          View All
          <Icon className='w-3 h-3' icon="material-symbols:arrow-forward-ios"/>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        { recent_projects.map((project, index) => {
            const { name, description, link } = project
          return (
            <div key={index} className="bento-card p-3 space-y-1">
              <a target="_blank" href={link} className="block space-y-1" rel="noopener noreferrer">
                <h3 className="text-sm font-semibold group-hover:text-accent">{name}</h3>
                <p className="text-xs text-foreground/70">{description}</p>
                <p className="text-xs text-foreground/50 font-mono bg-gray-100 px-2 py-1 rounded-md inline-block mt-1 break-all">{link}</p>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
