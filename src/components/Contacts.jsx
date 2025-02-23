import React from 'react'
import { Icon } from '@iconify/react';
import PortfolioData from '../data';

const Contacts = () => {
  const { contacts } = PortfolioData;
  const { email, number, social_links } = contacts;
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-2 space-y-3 group animate-fade-in-up animation-delay-500">
      <div className="flex items-center gap-2">
        <Icon className='w-4 h-4' icon="tdesign:grid-add"/>
        <h2 className="text-lg font-bold">Let&#39;s Connect</h2>
      </div>
      <div className="space-y-2">
        <div className="block p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
          <p className="text-xs text-foreground/70">Email</p>
          <p className="text-sm font-medium">{email}</p>
        </div>
        <div>
          <p className="text-xs text-foreground/70 mb-2">Let&#39;s Talk</p>
          <a href="#" className="block p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Schedule a Call</span>
              <Icon className="w-4 h-4" icon="material-symbols:arrow-forward"/>
            </div>
          </a>
        </div>
        <div>
          <p className="text-xs text-foreground/70 mb-2">Social Links</p>
          <div className="grid grid-cols-3 gap-2">
            {social_links.map((social) => {
              const { icon, name, link } = social;
              
              return (
                <a key={name} href={link} className="flex items-center justify-center p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
                  <Icon className='w-5 h-5' icon={icon} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
