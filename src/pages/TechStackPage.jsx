import React from 'react';
import PortfolioData from '../data';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const TechStackPage = () => {
  const { tech_stack } = PortfolioData;
  const { frontend, backend, cms, devtools } = tech_stack;

  return (
    <>
      <div className="page-transition max-w-4xl mx-auto px-4 py-8 flex items-center justify-center">
        <div className="bento-card p-4">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <Link to='/' className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
              <Icon className='w-4 h-4' icon="material-symbols:arrow-left-alt"/>
              Back to Home
            </Link>
            <div className="flex items-center gap-2">
              <Icon icon="material-symbols:computer-outline-rounded" />
              <h2 className="text-lg font-bold">Tech Stack</h2>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-sm rounded-md bg-foreground/5 border border-foreground/10">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backend.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-sm rounded-md bg-foreground/5 border border-foreground/10">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">CMS & No-Code</h3>
              <div className="flex flex-wrap gap-2">
                {cms.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-sm rounded-md bg-foreground/5 border border-foreground/10">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                {devtools.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-sm rounded-md bg-foreground/5 border border-foreground/10">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TechStackPage;
