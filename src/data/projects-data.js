let projects = [
    {
        title: "Binary clock",
        id: 1,
        link: "https://codepen.io/Kabum/pen/oNZrpyN",
        preview: "https://codepen.io/Kabum/pen/oNZrpyN/image/large.png",
        description: "This clock looks weird, isn't it? Does it *actually* display time? Well, yes. But it's binary.",
        articleParagraphs:[ 
            "## Just a bit of context.", 
            "When I was younger, I used to have a very original watch. The time was shown by a series of light representing the hours and minutes in binary (0, LED turned off, 1 LED turned on). I was just caught by the unusual aspect it had (and, I must admit, I loved the questions it was raising from the people around me).", 
            "Unfortunatly, I.. accidently destroyed it at work. Well, it wasn't really the right kind of environment to wear fragile thing, so I should only blame myself. Anyway, some time ago, I figured I would make one in CodePen as a practice, and also to try to give life back to my beloved watch.", 
            "## How does it work ?",
            "This Pen is actually quite simple, but it does the job really nicely (the style is simple too, but it matches the screen of my old watch, that was in the same spirit. Just a bunch of numbers and two rows of leds). The script turns a `Date` object into a string on base 2. I used a string to be able to easily cut it with `.split()` and use an array of the separate digits. Then it just a matter of adding the light to the appropriate LED!"
    ]}
]

export function getProjects() {
    return projects
}

export function getProject(id) {
    return projects.find(project => project.id === id)
}