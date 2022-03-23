/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Hero, Timeline } from '../components'

export default function About() {
  return (
    <Hero id='about'>
      <Hero.ColumnContainer>
        <Hero.Column>
          <Hero.Title>My journey so far</Hero.Title>
          <Hero.Text>
            I am changing career and this is my journey from nursing to
            development. I am an enthusiastic learner, an adaptable problem
            solver and a natural team player. I was, and still am, always
            looking to work in environments that reward that.
          </Hero.Text>
        </Hero.Column>
      </Hero.ColumnContainer>
      <Hero.MainTitle>
        Click on an element of the timeline to know more.
      </Hero.MainTitle>
      <Hero.ColumnContainer>
        <Timeline>
          <Timeline.Event>
            <Timeline.Title>2011 : Nurse in prehospital care</Timeline.Title>
            <Timeline.Extract>
              Where I learned how to handle stress and pressure, and where
              always learning is a way of life.
            </Timeline.Extract>
            <Timeline.Text>
              During 10 years, I've been working as a nurse in a very specific
              area of healthcare : prehospital care. Depending on where you're
              from, you could understand it as a paramedic, or a first responder
              but with a high level of ICU care. I was also involved and very
              commited in the disaster response group, where I developed an app
              to help manage operations in the context of those events (more on
              that below). <br />
              This kind of environment was satisfying as I'm naturally eager to
              learn. Rescue techniques evolve all the time, and medical
              breakthrough are changing practices often. You have to be very
              reactive and proactive to have the best practices, but I loved
              that about my job. <br />
              I also thrived in this environment because it's a place where
              teamplay must be a second nature. When you're in an intervention,
              you only have your colleagues, but they're all you need if you're
              playing this game right. <br />
              This job was also about solving unexpected problems, with creative
              solutions. When working, you have limited resources (you just have
              what's in your bag and your ambulance or helicopter) and available
              help (just your team), unlike when you work in a hospital, where
              supplies and staffing is (virtually) limitless. You have to
              accomplish your mission anyway, even when the environment itself
              can be hostile.
            </Timeline.Text>
          </Timeline.Event>
          <Timeline.Event>
            <Timeline.Title>2015 : Novilog</Timeline.Title>
            <Timeline.Extract>
              We were missing the tools to answer disaster events properly so I
              decided to learn code to build an app from scratch. 2 years of
              learning and development, and Novilog was born. It's still used
              for training purposes as the hospital couldn't find a better tool.
            </Timeline.Extract>
            <Timeline.Text>
              When I joined the disaster response group, I was trained to
              disaster medicine and I quickly joined the team in real life
              trainings. We were playing scenariis in which we would deploy the
              response as if it was real. <br />
              On my first one, I was shocked to see that tracking the victims
              was still done by hand, on paper and that, this operation being
              coordinated between the field and hospitals by HQ, information
              were transmitted by radio. Of course, the lead to many human
              erros, misunderstandings and, at the end of the day, it was very
              difficult to have reliable data of the operation in real time.{' '}
              <br />
              Of course, this situation was known as very problematic by
              everyone, but there was basically nothing on the market
              specialized enough to answer the needs of this kind of operation.
              They tried some solutions with Excel or other ways but it was just
              not very practical for people with no IT background at all. <br />
              So I decided I would build this tool myself. It took me 2 years of
              learning (it was build with PHP-MySQL on Symfony), was tested on
              the field on multiple training operations, and to this day, it's a
              very good proof of concept (there would still be a lot of work to
              do to have a proper production-ready app, so it's only used on
              trainings with fake data). You can know more about it in the
              project section down below.
            </Timeline.Text>
          </Timeline.Event>
          <Timeline.Event>
            <Timeline.Title>
              2017 : NGO nurse, managing hospitals in the world
            </Timeline.Title>
            <Timeline.Extract>
              It was already my first change of career, sort of, as I had to
              learn an entirely new position : one of a manager. A succesful
              change that was possible thanks to my ability to learn quick, a
              fit in a team rapidly.
            </Timeline.Extract>
            <Timeline.Text>
              In 2017, I joined Doctors Without Borders (Médecins sans
              Frontières or MSF) and was assigned a mission in South Sudan for 7
              months. There, I was put in a position of a manager for several
              units (ER, at first, and then In-Patient department) for a
              children hospital in the context of a seasonal malaria outbreak.
              <br />
              Jumping to a manager position wasn't easy or natural, it's two
              different jobs. I had to work hard, and learn quick, to be
              efficient. But, in MSF you always work in a team that supports
              you, and there is also a very well maintained and useful library
              of protocols and guideline (the importance of a good
              documentation, right?)
              <br />
              It worked so well for me there, that before the end my fourth
              month of mission, my supervisor had to go back home and he said I
              could cover for him, leaving time for the HQ to find a good fit
              for his replacement. I was "promoted" to the manager of the entire
              hospital staff (except doctors) as he was headnurse.
              <br />
              Again, adaptation abilities and quick learning was key, but I have
              to thank a very supportive and helpful team in this adventure! I
              liked this experience so much that I decided to go again in other
              mission at the end of this one. MSF was very happy with my work in
              South Sudan, and I then did two other mission as headnurse in
              Nigeria and Haiti.
            </Timeline.Text>
          </Timeline.Event>
          <Timeline.Event>
            <Timeline.Title>
              2020 and ongoing : Training in programming.
            </Timeline.Title>
            <Timeline.Extract>
              The very exciting experience with Novilog has been in my head
              since all this time. I wanted more : so I trained in frontend
              development online over an estimated 600+ hours on Scrimba.com and
              FreeCodeCamp.org.
            </Timeline.Extract>
            <Timeline.Text>
              Since 2020, I started to really train in modern programming, and I
              chose frontend development. I did a quite comprehensive training
              on Scrimba.com where I learned about HTML/CSS and Javascript. I
              learned how to use Git and its workflow. I learned React,
              including some more advanced concepts.
              <br />
              I had a great time learning all this, I love coding. I also love
              frontend in particular, as the product of your code is very
              visual, and interactive. But I also trained a little with Python,
              and some other backend technologies, like NodeJS and some
              frameworks, like express. I'm far from an expert in these domains,
              but I loved it as well.
              <br />
              The initial idea was to do it for fun, I would code as a hobby or
              for improving Novilog, or other small projects in my work. But
              gradually, I felt like I wanted more of it.
              <br />I still have much to learn, but I feel ready to take a
              junior position. I'm equiped with a good basic knowledge and I'm
              very excited about the idea of learning more and more in a
              professional team.
            </Timeline.Text>
          </Timeline.Event>
          <Timeline.Event>
            <Timeline.Title>
              2022 : Moving to Australia to live with my wife
            </Timeline.Title>
            <Timeline.Extract>
              I moved to Australia and it gives me the opportunity to start a
              new career
            </Timeline.Extract>
            <Timeline.Text>
              What better time than a time where you have to start a new life,
              in a new place?
            </Timeline.Text>
          </Timeline.Event>
        </Timeline>
      </Hero.ColumnContainer>
    </Hero>
  )
}
