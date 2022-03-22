/* eslint-disable react/prop-types */
import React from 'react'
import ReactMarkdown from 'react-markdown'
import './card.css'

export default function Card({ children, ...props }) {
  return (
    <article className='card-container' {...props}>
      {children}
    </article>
  )
}

Card.Title = function CardTitle({ children, ...props }) {
  return (
    <h2 className='card-title' {...props}>
      {children}
    </h2>
  )
}

Card.Preview = function CardPreview({ src, alt, ...props }) {
  return (
    <div className='card-preview-container'>
      <img className='card-preview' src={src} alt={alt} {...props} />
    </div>
  )
}

Card.Link = function CardLink({ href, children, ...props }) {
  return (
    <a className='card-link' href={href} {...props}>
      {children}
    </a>
  )
}

Card.Description = function CardDescription({ children, ...props }) {
  return (
    <ReactMarkdown className='card-description' {...props}>
      {children}
    </ReactMarkdown>
  )
}
