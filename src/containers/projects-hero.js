import React from 'react'
import { Hero, Card } from '../components'
import { getProjects } from '../data/projects-data'
import { Link } from 'react-router-dom'

export default function Projects() {
  const projects = getProjects()

  return (
    <Hero id='projects'>
      <Hero.SubContainer>
        <Hero.Title>Some of my work</Hero.Title>
        <Hero.ColumnContainer>
          {projects.map((project) => (
            <Link
              key={project.id}
              className='card-link'
              to={`/projects/${project.id}`}
            >
              <Card>
                <Card.Title>{project.title}</Card.Title>
                <Card.Preview
                  src={project.preview}
                  alt={`a snapshot of ${project.title}`}
                />
                <Card.Description>{project.description}</Card.Description>
              </Card>
            </Link>
          ))}
        </Hero.ColumnContainer>
      </Hero.SubContainer>
    </Hero>
  )
}
