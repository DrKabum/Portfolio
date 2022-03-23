/* eslint-disable react/prop-types */
import React from 'react'

export default function Timeline({ children, ...props }) {
  return (
    <article className='timeline' {...props}>
      {children}
    </article>
  )
}

Timeline.Start = function TimelineStart({ ...props }) {
  return <div className='timeline-end' {...props}></div>
}

Timeline.End = function TimelineEnd({ ...props }) {
  return <div className='timeline-end inverted' {...props}></div>
}

Timeline.Event = function TimelineEvent({ children, ...props }) {
  return (
    <div className='timeline-event' {...props}>
      {children}
    </div>
  )
}

Timeline.Title = function TimelineTitle({ children, ...props }) {
  return (
    <h3 className='timeline-title' {...props}>
      {children}
    </h3>
  )
}

Timeline.Text = function TimelineText({ children, ...props }) {
  return (
    <p className='timeline-text' {...props}>
      {children}
    </p>
  )
}
