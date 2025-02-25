import React from 'react'
import Profile from '../components/Profile';
import About from '../components/About';
import Experience from '../components/Experience';
import TechStack from '../components/TechStack';
import BeyondCoding from '../components/BeyondCoding';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contacts from '../components/Contacts';
import Blogs from '../components/Blogs';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Profile />
      <section className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <About />
        <Experience />
        <TechStack />
        <BeyondCoding />
        <Projects />
        <Contacts />
        <Blogs />
      </section>
      <Footer />
    </div>
  )
}

export default Home
