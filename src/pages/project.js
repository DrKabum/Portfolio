import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useParams } from 'react-router-dom'
import { getProject } from '../data/projects-data'

import { Project } from '../components'

export default function ProjectPage() {
  const { id } = useParams()
  const project = getProject(parseInt(id))

  return (
    <Project>
      <Project.Title>{project.title}</Project.Title>
      <Project.Preview src={project.preview} alt={project.title}>
        {project.caption}
      </Project.Preview>
      {project.articleParagraphs.map((p) => {
        return <Project.Text key={uuidv4()}>{p}</Project.Text>
      })}
      <Project.Link href={project.link}>Check this out live</Project.Link>
    </Project>
  )
}
