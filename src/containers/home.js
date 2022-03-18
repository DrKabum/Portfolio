import React from 'react'
import { Hero } from '../components'

export default function Home() {
    return (
        <Hero id="home">
            <Hero.SubContainer>
                <Hero.Title>Hi, It's <Hero.Em>Nicolas Broca</Hero.Em></Hero.Title>
                <Hero.Code>I'm a web dev</Hero.Code>
            </Hero.SubContainer>
        </Hero>
    )
}