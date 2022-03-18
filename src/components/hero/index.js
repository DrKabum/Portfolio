import React from 'react'

export default function Hero({children, ...props}) {
  return (
    <section className="hero" {...props}>
      {children}
    </section>
  )

}

Hero.Column = function Column({children, ...props}) {
    // ?? I have to check...
}

