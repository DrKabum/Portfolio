import React from 'react'
import { Hero } from '../components'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contacts() {
  return (
    <Hero id="contacts">
            <Hero.Title>Want to work with me? Let's reach out</Hero.Title>
            <Hero.ColumnContainer small={true}>
                <Hero.Column style={{textAlign: 'center'}}>
                    <Hero.Link hoverClass='email' href='mailto:n.broca@gmail.com'>
                        <Hero.SubTitle>Email</Hero.SubTitle>
                        <FontAwesomeIcon icon="fa-solid fa-at" size="6x"/>
                    </Hero.Link>
                </Hero.Column>
                <Hero.Column style={{textAlign: 'center'}}>
                    <Hero.Link hoverClass='github' href='https://github.com/DrKabum/'>
                        <Hero.SubTitle>GitHub</Hero.SubTitle>
                        <FontAwesomeIcon icon="fa-brands fa-github" size="6x"/>
                    </Hero.Link>
                </Hero.Column>
                <Hero.Column style={{textAlign: 'center'}}>
                    <Hero.Link hoverClass='linkedin' href='https://www.linkedin.com/in/nicolas-broca/'>
                        <Hero.SubTitle>LinkedIn</Hero.SubTitle>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" size="6x"/>
                    </Hero.Link>
                </Hero.Column>
            </Hero.ColumnContainer>
            <Hero.Text>I'd be happy to share with you more information, answer some question you might have, or just have a chat!</Hero.Text>
    </Hero>
  )
}
