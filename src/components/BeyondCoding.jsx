import React from 'react'
import { Icon } from '@iconify/react';
import PortfolioData from '../data'

const BeyondCoding = () => {
  const { beyond_coding } = PortfolioData;
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-2 space-y-2 group animate-fade-in animation-delay-300">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4" icon="streamline:interface-content-book-open-content-books-book-open" />
        <h2 className="text-lg font-bold">Beyond Coding</h2>
      </div>
      {beyond_coding.map((text, index) => <p key={index} className='text-sm text-foreground/70'>{text} {index === 0 && <br/>}</p>)}
    </div>
  )
}

export default BeyondCoding
