import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen">
      <div className="">
        <DotLottieReact
          className='w-full flex justify-center items-center'
          src="https://lottie.host/7da36a5a-dc2a-46de-9351-ac8dbd901afc/QfD2nxxwHQ.lottie"
          loop
          autoplay
        />
        <div className='text-center mt-8'>
          <Link to='/' className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
            <Icon className='w-4 h-4' icon="material-symbols:arrow-left-alt"/>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
