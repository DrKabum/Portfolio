import React from 'react'
import ReactMarkdown from 'react-markdown'
import './project.css'
import '../hero/hero.css'

export default function Project({children, ...props}) {
  return (
    <article className='project-container'{...props}>
      {children}
    </article>
  )
}

Project.Title = function ProjectTitle({children, ...props}) {
    return (
        <h1 className='hero-title project-title' {...props}>{children}</h1>
    )
}

Project.Preview = function ProjectPreview({src, alt, children, ...props}) {
    return (
        <>
            <img className='project-preview' {...props} src={src} alt={alt} />
            <figcaption>{children}</figcaption>
        </>
    )
}

Project.Text = function ProjectText({children, ...props}) {
    return (
        <ReactMarkdown className='project-text' {...props}>{children}</ReactMarkdown>
    )
}

Project.Link = function ProjectLink({children, href, ...props}) {
    return (
        <a href={href} {...props}>{children}</a>
    )
}