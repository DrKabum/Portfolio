import React from 'react'
import { Hero } from '../components'

export default function Home() {
    return (
        <Hero>
            <Hero.SubContainer>
                <Hero.Title>Hi, I'm <Hero.Em>Nicolas Broca</Hero.Em></Hero.Title>
                <Hero.Code>I'm a junior web dev</Hero.Code>
            </Hero.SubContainer>
        </Hero>
    )
}