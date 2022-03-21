let projects = [
    {
        title: "Binary clock",
        id: 1,
        link: "https://codepen.io/Kabum/pen/oNZrpyN",
        preview: "https://codepen.io/Kabum/pen/oNZrpyN/image/small.png",
        description: "This clock *looks* weird, isn't it? **Does** it actually display time? Well, yes. But it's binary.",
        articleParagraphs: "When I was younger, I used to have a binary watch. I was just caught by the unusual aspect it had (and, I must admit, I loved the question it was raising from the people around me). Unfortunatly, I.. accidently destroyed it at work. Well, it wasn't really the right kind of environment to wear this kind of fragile things, so I should only blame myself. Anyway, some time ago, I figured I would make on in CodePen as a practice, and also to try to give life back to my loved watch. This Pen is actually quite simple, but it does the job really nicely (the style is simple too, but it matches the screen of my old watch, that was in the same spirit. Just a bunch of numbers and two rows of leds). The script turns a Date object into a string on base 2. I use a string to be able to easily cut the string in its separate digit with"
    },
    {
        title: "Lorem ipsum : shkoupidou",
        id: 2,
        link: "https://codepen.io/Kabum/pen/oNZrpyN",
        preview: "https://codepen.io/Kabum/pen/oNZrpyN/image/small.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac. Et malesuada fames ac turpis egestas sed. Tellus mauris a diam maecenas sed enim. "
    },
    {
        title: "Lorem ipsum : shkoupidou",
        id: 3,
        link: "https://codepen.io/Kabum/pen/oNZrpyN",
        preview: "https://codepen.io/Kabum/pen/oNZrpyN/image/small.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac. Et malesuada fames ac turpis egestas sed. Tellus mauris a diam maecenas sed enim. "
    },
    {
        title: "Lorem ipsum : shkoupidou",
        id: 4,
        link: "https://codepen.io/Kabum/pen/oNZrpyN",
        preview: "https://codepen.io/Kabum/pen/oNZrpyN/image/small.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac. Et malesuada fames ac turpis egestas sed. Tellus mauris a diam maecenas sed enim. "
    },
    {
        title: "Lorem ipsum : shkoupidou",
        id: 5,
        link: "https://codepen.io/Kabum/pen/oNZrpyN",
        preview: "https://codepen.io/Kabum/pen/oNZrpyN/image/small.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac. Et malesuada fames ac turpis egestas sed. Tellus mauris a diam maecenas sed enim. "
    },
    {
        title: "Lorem ipsum : shkoupidou",
        id: 6,
        link: "https://codepen.io/Kabum/pen/oNZrpyN",
        preview: "https://codepen.io/Kabum/pen/oNZrpyN/image/small.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac. Et malesuada fames ac turpis egestas sed. Tellus mauris a diam maecenas sed enim. "
    }
]

export function getProjects() {
    return projects
}

export function getProject(id) {
    return projects.find(project => project.id === id)
}