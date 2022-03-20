import React from 'react'
import { Hero, Card } from '../components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function projects() {
  return (
    <Hero id="projects">
        <Hero.SubContainer>
            <Hero.Title>Some of my work</Hero.Title>
            <Hero.ColumnContainer>
                <Card>
                    <Card.Title>
                        Lorem ipsum, oui?
                    </Card.Title>
                    <Card.Preview src="https://codepen.io/Kabum/pen/oNZrpyN/image/small.png" alt="a preview of a binary watch in JS/CSS"/>
                    <Card.Link href="https://codepen.io/Kabum/pen/oNZrpyN">Check on <FontAwesomeIcon icon="fa-brands fa-codepen" />CodePen.io</Card.Link>
                    <Card.Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac. Et malesuada fames ac turpis egestas sed. Tellus mauris a diam maecenas sed enim. 
                    </Card.Description>
                </Card>
                <Card>
                    <Card.Title>
                        Lorem ipsum, oui?
                    </Card.Title>
                    <Card.Preview src="https://codepen.io/Kabum/pen/oNZrpyN/image/small.png" alt="a preview of a binary watch in JS/CSS"/>
                    <Card.Link href="#">Want to know more?</Card.Link>
                    <Card.Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac. Et malesuada fames ac turpis egestas sed. Tellus mauris a diam maecenas sed enim. 
                    </Card.Description>
                </Card>
                <Card>
                    <Card.Title>
                        Lorem ipsum, oui?
                    </Card.Title>
                    <Card.Preview src="https://codepen.io/Kabum/pen/oNZrpyN/image/small.png" alt="a preview of a binary watch in JS/CSS"/>
                    <Card.Link href="#">Want to know more?</Card.Link>
                    <Card.Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac. Et malesuada fames ac turpis egestas sed. Tellus mauris a diam maecenas sed enim. 
                    </Card.Description>
                </Card>
                <Card>
                    <Card.Title>
                        Lorem ipsum, oui?
                    </Card.Title>
                    <Card.Preview src="https://codepen.io/Kabum/pen/oNZrpyN/image/small.png" alt="a preview of a binary watch in JS/CSS"/>
                    <Card.Link href="#">Want to know more?</Card.Link>
                    <Card.Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac. Et malesuada fames ac turpis egestas sed. Tellus mauris a diam maecenas sed enim. 
                    </Card.Description>
                </Card>
                <Card>
                    <Card.Title>
                        Lorem ipsum, oui?
                    </Card.Title>
                    <Card.Preview src="https://codepen.io/Kabum/pen/oNZrpyN/image/small.png" alt="a preview of a binary watch in JS/CSS"/>
                    <Card.Link href="#">Want to know more?</Card.Link>
                    <Card.Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac. Et malesuada fames ac turpis egestas sed. Tellus mauris a diam maecenas sed enim. 
                    </Card.Description>
                </Card>
            </Hero.ColumnContainer>
        </Hero.SubContainer>
    </Hero>
  )
}
