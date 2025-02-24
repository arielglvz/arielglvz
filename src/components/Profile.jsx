import React from 'react'
import { Icon } from '@iconify/react';
import ProfileImg from '../assets/profile.jpg'
import NightModeBtn from './ui/nightmode-btn';


const Profile = () => {

  const openPDF = () => {
    window.open('/public/assets/cv/galvez-ariel-resume.pdf', '_blank')
  }

  return (
    <section className='mb-8 animate-fade-in-up'>
      <div className="flex items-center gap-4 md:gap-6">
        <img src={ProfileImg} alt="Ariel Galvez" className='rounded-lg w-32 h-32 md:w-40 md:h-40 object-cover flex-shrink-0'/>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h1 className='text-lg md:text-2xl font-bold truncate'>Ariel Galvez</h1>
              <NightModeBtn />
            </div>
            <p className="text-xs  md:text-sm text-foreground/70 mt-0.5 flex items-center gap-1">
              <Icon icon="material-symbols:location-on-outline" />
              <span className="truncate">Bulacan, Philippines</span>
            </p>
            <p className="text-sm md:text-base mt-1.5 md:mt-2">Frontend Web Developer</p>
            <div className="flex flex-col sm:flex-row gap-2 mt-3 md:mt-4">
              <span onClick={openPDF} href="#" className="min-w-[8rem] inline-flex h-7 md:h-8 items-center justify-center rounded-lg bg-foreground px-2.5 md:px-4 text-[10px] md:text-xs font-medium text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap cursor-pointer">
                <Icon className="w-4 h-4" icon="tabler:file-cv" />
                <span className="text-left">My CV</span>
                <Icon className="w-4 h-4" icon="material-symbols:arrow-downward-alt" />
              </span>
              <a target="_blank" href="mailto:arielglvz@gmail.com" className="min-w-[8rem] inline-flex h-7 md:h-8 items-center justify-center rounded-lg border border-border bg-background px-2.5 md:px-4 text-[10px] md:text-xs font-medium transition-all duration-200 hover:bg-muted hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap cursor-pointer">
                <Icon className="w-4 h-4" icon="material-symbols:mail-outline" />
                <span className="text-left">Send Email</span>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
