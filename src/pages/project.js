import React from 'react'
import { useParams } from 'react-router-dom'
import { getProject } from '../data/projects-data'

import { Project } from '../components'

export default function ProjectPage() {
  let {id} = useParams()
  let project = getProject(parseInt(id))

  return (
    <Project>
      <Project.Title>{project.title}</Project.Title>
      <Project.Text>{project.description}</Project.Text>
      <Project.Preview src={project.preview} alt="A snapshot of the binary watch"/>
      <Project.Text>{project.articleParagraphs}</Project.Text>
    </Project>
  )
}
