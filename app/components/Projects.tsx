'use client'
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {

  const [hoveredIndex, setHoverIndex] = useState<number | null>(null)

  const projects = [
    {
      heading: 'Take a look at some of my favourite projects',
      subheading: 'All of my code is available on GitHub.',
      description: 'A website for tracking live AFL Fantasy player stats. It features a live chat, injury tracking, and a scoring timeline to show when a player scored their points. Users can track the players from their team and view their scores in real-time.',
      projectTitle: 'FootyLive',
      projectSubText: 'FootyLive.onrender.com',
      projectUrl: 'FootyLive.onrender.com',
      imageUrl: '/FootyLive.png',
      projectTechs: ['JavaScript', 'Node', 'Express', 'Mongo'],
    },
    {
      description: 'This is a project I developed during my internship at Insane Marketing. This auditor is a puppeteer based web scraper that will analyse a website and provide actionable feedback to the user regarding the Search Engine Optimisation of their site.',
      projectTitle: 'SEO Website Auditor',
      projectSubText: 'Insane Marketing (defunct)',
      projectUrl: '',
      imageUrl: '/SEOAudit.jpg',
      projectTechs: ['Svelte', 'Puppeteer', 'Node', 'Express'],
    },
    {
      description: 'This React Based site is a simple Blackjack game. It features a dealer and player hand, with the ability to hit or stand. The game will automatically calculate the winner and reset the hands for the next round. This project features heavy use of React Hooks.',
      projectTitle: 'Blackjack React',
      projectSubText: 'BlackjackReact.onrender.com',
      projectUrl: 'BlackjackReact.onrender.com',
      imageUrl: '/BlackjackReact.png',
      projectTechs: ['React', 'JavaScript'],
    },
    {
      description: "This is the very site you're on right now! It features Three JS 3D modelling, Framer Motion animations, and a custom design. The site is built with Next JS, TypeScript and Tailwind CSS.",
      projectTitle: 'My Portfolio Website',
      projectSubText: 'CharlesKay.onrender.com',
      projectUrl: 'CharlesKay.onrender.com',
      imageUrl: '/CharlesKay.png',
      projectTechs: ['Next', 'TypeScript', 'Tailwind'],
    },
  ]

  return (
    <section id='section-2' className='w-[calc(100vw)] flex flex-col justify-center mb-28 xl:mt-60 z-[10]'>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          heading={project.heading ?? ''}
          subheading={project.subheading ?? ''}
          description={project.description}
          projectTitle={project.projectTitle}
          projectSubText={project.projectSubText ?? ''}
          projectUrl={project.projectUrl}
          imageUrl={project.imageUrl}
          projectTechs={project.projectTechs ?? []}
          reverse={index % 2 === 1}
          isDimmed={hoveredIndex !== null && hoveredIndex !== index}
          onHover={() => setHoverIndex(index)}
          onHoverOut={() => setHoverIndex(null)}
        />
      ))}
    </section>
  )
}

export default Projects
