import React from 'react'
import './hero.css'

export default function Hero({children, id, ...props}) {
  return (
    <section id={id} className="hero" {...props}>
      {children}
    </section>
  )
}

Hero.GroupContainer = function FlexContainer({children, direction="column", ...props}) {
  return(
    <div className={direction === "row" ? 'flex-row' : 'flex-column'} {...props}>
      {children}
    </div>
  )
}

Hero.Column = function Column({children, ...props}) {
    return (
      <article className='hero-column' {...props}>
        {children}
      </article>
    )
}

Hero.Title = function HeroTitle({children, ...props}) {
  return (
    <h1 className='hero-title' {...props}>
      {children}
    </h1>
  )
}

Hero.MainTitle = function MainTitle({children, ...props}) {
  return (
    <h2 className="hero-main-title" {...props}>
      {children}
    </h2>
  )
}

Hero.Em = function HeroEm({children, ...props}) {
  return (
    <span className='hero-em' {...props}>{children}</span>
  )
}

Hero.SubTitle = function SubTitle({children, ...props}) {
  return (
    <h3 className='hero-sub-title' {...props}>
      {children}
    </h3>
  )
}

Hero.Code = function HeroCode({children, style, ...props}) {
  return (
    <p className='hero-code' {...props}>> {children}<span className='carret'>|</span></p>
  )
}
