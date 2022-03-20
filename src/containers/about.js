import React from 'react'
import { Hero } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
    return (
        <Hero id="about">
            <Hero.SubContainer>
                <Hero.ColumnContainer>
                    <Hero.Column>
                        <Hero.MainTitle>From Nursing to Web Dev</Hero.MainTitle>
                        <Hero.Text>
                            I spent 10 years working as a nurse in the world. I worked a lot in France in a special unit called SAMU, which stands for Emergency Medical Service in french. I spent most of my time working there, but I also worked for an international NGO called Doctors Without Borders for a couple of years, where I was a headnurse (doing operational and HR management) on the field in Haîti, Nigeria and South Sudan.
                        </Hero.Text>
                        <Hero.Text>
                            But since my childhood, I've been practicing programming, as a hobby! I've always loved that and over the years, I particularly trained for web development.
                        </Hero.Text>
                        <Hero.Text>
                            If you're interested, check my projects, you'll see I even used that skill when I was working for a hospital in France!
                        </Hero.Text>
                    </Hero.Column>
                    <Hero.Column>
                        <Hero.MainTitle>
                            Now, it's time to go pro
                        </Hero.MainTitle>
                        <Hero.Text>
                            Something huge happened : I moved from France to Australia, to live there with my wife (she's an Aussie!). I felt it was the opportunity to not only change hemisphere, but my career too!
                        </Hero.Text>
                        <Hero.Text>
                            So, it's happening : I arrived recently, and now I'm working on getting hired. I know, it's a big deal, both for me than for my futur employer, but hey, you're here to check what I can do, so here we go.
                        </Hero.Text>
                    </Hero.Column>
                </Hero.ColumnContainer>
                <Hero.ColumnContainer small={true}>
                    <Hero.Column style={{textAlign: 'center'}}>
                        <Hero.SubTitle>Javascript</Hero.SubTitle>
                        <FontAwesomeIcon icon="fa-brands fa-js" size="6x"/>
                    </Hero.Column>
                    <Hero.Column style={{textAlign: 'center'}}>
                    <Hero.SubTitle>HTML 5</Hero.SubTitle>
                        <FontAwesomeIcon icon="fa-brands fa-html5" size="6x"/>
                    </Hero.Column>
                    <Hero.Column style={{textAlign: 'center'}}>
                    <Hero.SubTitle>CSS 3</Hero.SubTitle>
                        <FontAwesomeIcon icon="fa-brands fa-css3" size="6x" />
                    </Hero.Column>
                    <Hero.Column style={{textAlign: 'center'}}>
                    <Hero.SubTitle>React</Hero.SubTitle>
                        <FontAwesomeIcon icon="fa-brands fa-react" size="6x" />
                    </Hero.Column>
                </Hero.ColumnContainer>
            </Hero.SubContainer>
        </Hero>
    )
}