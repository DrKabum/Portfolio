import React from 'react'
import { v4 as uuidv4 } from 'uuid'; 
import { useParams, useNavigate } from 'react-router-dom'
import { getProject } from '../data/projects-data'

import { Project } from '../components'

export default function ProjectPage() {
  let {id} = useParams()
  let project = getProject(parseInt(id))

  return (
    <Project>
      <Project.Title>{project.title}</Project.Title>
      <Project.Text>{project.description}</Project.Text>
      <Project.Preview src={project.preview} alt="A snapshot of the binary watch">My watch is back to life!</Project.Preview>
      {
        project.articleParagraphs.map(p => {
          return <Project.Text key={uuidv4()}>{p}</Project.Text>
        })
      }
      <Project.Link href={project.link}>Check this out live</Project.Link>
    </Project>
  )
}
