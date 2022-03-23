/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Hero } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
  return (
    <Hero id='about'>
      <Hero.Title>Who I am</Hero.Title>
      <Hero.SubContainer>
        <Hero.ColumnContainer>
          <Hero.Column>
            <Hero.MainTitle>From Nursing to Web Dev</Hero.MainTitle>
            <Hero.Text>
              I spent 10 years working as a nurse in the world. I worked a lot
              in France in a special unit called SAMU, which stands for
              Emergency Medical Service in french. I spent most of my time
              working there, but I also worked for an international NGO called
              Doctors Without Borders for a couple of years, where I was a
              headnurse (doing operational and HR management) on the field in
              Haîti, Nigeria and South Sudan.
            </Hero.Text>
            <Hero.Text>
              But since my childhood, I've been practicing programming, as a
              hobby! I've always loved that and over the years, I particularly
              trained for web development.
            </Hero.Text>
            <Hero.Text>
              If you're interested, check my projects, you'll see I even used
              that skill when I was working for a hospital in France! This
              project, called Novilog, has been a huge part of why I want to
              become a professional developer. Learning from (almost) scratch
              how to build an entire app and do it from start to a usable
              product over 2 years of hard work has been such a great
              experience.
            </Hero.Text>
          </Hero.Column>
          <Hero.Column>
            <Hero.MainTitle>
              Enthusiatic learner, adaptable problem solver
            </Hero.MainTitle>
            <Hero.Text>
              Prehospital care is *all* about being a good learner, to keep up
              with how fast new discoveries are made in this field by science
              and also with how fast rescue techniques evolve. But most of all,
              you *have* to be able to solve unexpected problems, sometimes very
              creatively, in an environment where resources are limited (you're
              not in a hospital where supply is virtually limitless, you have
              your bags and your ambulance or helicopter, that's all) and
              potentially hostile.
            </Hero.Text>
            <Hero.Text>
              Then, when I was hired by the medical NGO Médecins Sans
              Frontières, I had to learn an **entirely** new position as I was
              hired as a manager. Of course, my nursing skills were important to
              be able to assess my staff practices, but being a manager is a
              completely different skill set of its own. Of course, MSF has a
              very good library of protocols and good practices guidelines (aah,
              the importance of a good documentation, right?) and you can always
              count on your team mates to give you support when it's needed.
            </Hero.Text>
          </Hero.Column>
          <Hero.Column>
            <Hero.MainTitle>Now, it's time to go pro</Hero.MainTitle>
            <Hero.Text>
              Something huge happened : I moved from France to Australia, to
              live there with my wife (she's an Aussie!). I felt it was the
              opportunity to not only change hemisphere, but my career too!
            </Hero.Text>
            <Hero.Text>
              So, it's happening : I arrived recently, and now I'm working on
              getting hired. I know, it's a big deal, both for me than for my
              futur employer, but hey, you're here to check what I can do, so
              here we go.
            </Hero.Text>
          </Hero.Column>
          <Hero.Column>
            <Hero.MainTitle>How I trained</Hero.MainTitle>
            <Hero.Text>All my university education is about nursing.</Hero.Text>
            <Hero.Text>
              After my experience (mostly PHP) with Novilog, I wanted to train
              to modern programming and learn good practices. I took an online
              bootcamp on [Scrimba](https://scrimba.com/) where I learned
              frontend development (with a lot of HMTL/CSS/Javascript, and an
              in-depth training on React), but also how to use Git properly. I
              then took this knowledge a bit further with some projects of my
              own and other training aside, especially on
              [FreeCodeCamp](https://www.freecodecamp.org/).
            </Hero.Text>
          </Hero.Column>
        </Hero.ColumnContainer>
        <Hero.ColumnContainer small={true}>
          <Hero.Column style={{ textAlign: 'center' }}>
            <Hero.SubTitle>Javascript</Hero.SubTitle>
            <FontAwesomeIcon icon='fa-brands fa-js' size='6x' />
          </Hero.Column>
          <Hero.Column style={{ textAlign: 'center' }}>
            <Hero.SubTitle>HTML 5</Hero.SubTitle>
            <FontAwesomeIcon icon='fa-brands fa-html5' size='6x' />
          </Hero.Column>
          <Hero.Column style={{ textAlign: 'center' }}>
            <Hero.SubTitle>CSS 3</Hero.SubTitle>
            <FontAwesomeIcon icon='fa-brands fa-css3' size='6x' />
          </Hero.Column>
          <Hero.Column style={{ textAlign: 'center' }}>
            <Hero.SubTitle>React</Hero.SubTitle>
            <FontAwesomeIcon icon='fa-brands fa-react' size='6x' />
          </Hero.Column>
        </Hero.ColumnContainer>
      </Hero.SubContainer>
    </Hero>
  )
}
