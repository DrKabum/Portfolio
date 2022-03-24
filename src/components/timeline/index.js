/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import './timeline.css'

export default function Timeline({ children, ...props }) {
  return (
    <article className='timeline' {...props}>
      <Timeline.Start />
      {children}
      <Timeline.End />
    </article>
  )
}

Timeline.Start = function TimelineStart({ ...props }) {
  return <div className='timeline-end' {...props}></div>
}

Timeline.End = function TimelineEnd({ ...props }) {
  return <div className='timeline-end inverted' {...props}></div>
}

Timeline.HoverGroup = function TimelineHover({ children, ...props }) {
  return (
    <div className='timeline-hover' {...props}>
      {children}
    </div>
  )
}

Timeline.Event = function TimelineEvent({ children, ...props }) {
  const [textToggled, setTextToggled] = useState(false)

  function handleToggle() {
    setTextToggled((prev) => setTextToggled(!prev))
  }

  return (
    <div
      onClick={handleToggle}
      className={`timeline-event ${textToggled ? 'text-toggled' : ''}`}
      {...props}
    >
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

Timeline.Extract = function TimelineExtract({ children, ...props }) {
  return (
    <p className='timeline-extract' {...props}>
      {children}
    </p>
  )
}

Timeline.Text = function TimelineText({ children, ...props }) {
  return (
    <p className='timeline-text' {...props}>
      {children}
    </p>
  )
}
