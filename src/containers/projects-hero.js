import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Hero, Card } from '../components'
import { getProjects } from '../data/projects-data'
import { Link } from 'react-router-dom'

export default function Projects() {
  let projects = getProjects()

  return (
    <Hero id="projects">
      <Hero.SubContainer>
        <Hero.Title>Some of my work</Hero.Title>
        <Hero.ColumnContainer>
          {projects.map(project => (
            <Link className='card-link' to={`/projects/${project.id}`}>
              <Card key={project.id}>
                <Card.Title>
                  {project.title}
                </Card.Title>
                <Card.Preview src={project.preview} alt={`a snapshot of ${project.title}`} />
                <Card.Description>
                    {project.description}
                </Card.Description>
              </Card>
            </Link>
          ))}
        </Hero.ColumnContainer>
      </Hero.SubContainer>
    </Hero>
  )
}
