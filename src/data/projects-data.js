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
            "## How does it work?",
            "This Pen is actually quite simple, but it does the job really nicely (the style is simple too, but it matches the screen of my old watch, that was in the same spirit. Just a bunch of numbers and two rows of leds). The script turns a `Date` object into a string on base 2. I used a string to be able to easily cut it with `.split()` and use an array of the separate digits. Then it just a matter of adding the light to the appropriate LED!",
            "If you're wondering how it works : the first row of LEDs represents the hours, and the second one represents the minutes. Just add up the numbers above each active LEDs for the first row, and you have the hours, and do that again with the minutes row.",
            "## Areas of improvement",
            "This watch was a quick and dirty pen, just for fun and a bit of practice. Next time I work on it, I would probably add some nice styling. It is true that I loved my old watch, that had a very simple appearance by design, but some css fanciness could help make this pen really appealing maybe."
        ]
    },
    {
        title: "Speed typing game",
        id: 2,
        link: "https://codepen.io/Kabum/pen/BaLgaqB",
        preview: "https://codepen.io/Kabum/pen/BaLgaqB/image/large.png",
        description: "You think you type fast ? Go ahead and have a try.",
        articleParagraphs: [
            "## I like coding mini games",
            "At the start of my training in frontend development, I really enjoyed developping mini games like this one. I find it very interesting as from the most simplest idea, usually comes the need to implement so kind of tricky algorithm (like, the game's logic itself, or some kind of fancy scoring systems, etc). I think the idea for this one came from a course made in my bootcamp on Scrimba.com. The course only taught us how to type text in a limited amount of time, and count it. I was happy to learn how to do that, but after a while I was thinking that it would be interesting to make that game more *clever* or at least more challenging.",
            "## How does it work?",
            "So, I looked for an API that was able to feed the game with random words and [found one](https://random-word-api.herokuapp.com/home). I remade the game using React (one of my first practice project actually with this framework). Thanks to state management, the game only accepts what you type if it's from the words requested, in order.",
            "I also spiced the scoring system a little bit by giving extra points each time you complete a whole word (and not only 1 point for every character typed).",
            "Go ahead and give it a try ! If you can manage to score more than 60 points, you're starting to be a real deal at this game!",
            "## Areas of improvement",
            "The main point I see, when coming back to this project, is about the typed words not staying on top of the generated ones (which are in a separate div, behind the `textarea` which has a low opacity, by the way) when arriving at the end of the line. I don't have a good solution at this stage, but I would look into inserting break lines based on what's happening in the generated words div."
        ]
    },
    {
        title: "Conway's game of life",
        id: 3,
        link: "https://codepen.io/Kabum/pen/OJmPYJL",
        preview: "https://codepen.io/Kabum/pen/OJmPYJL/image/large.png",
        description: "My version of the famous Game of life. I could spend hours watching those cells come to life.",
        articleParagraphs: [
            "## Cellular automaton",
            "Do you know the [Game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)? Invented by the mathematician John Conway in 1970. Bring your friends and... No, actually don't, it's *zero player* game. There is no input there, just an initial state to describe. And let the game do the rest and \"simulate\" your game according to a set of very simple rules.",
            "The game is set on a grid of squares, each square is what we call a *cell*. The cells can have one of two states : alive or dead (usually, an alive cell is colored, and a dead cell is blank). Then, at each step in time, a transition occurs, following the rules.",
            "* Any live cell with fewer than two live neighbours dies, as if by underpopulation.",
            "* Any live cell with two or three live neighbours lives on to the next generation.",
            "* Any live cell with more than three live neighbours dies, as if by overpopulation.",
            "* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.",
            "If you don't know this game, you'd be amazed what this very simple set of rules can produce, illustrating perfectly the concept of [emergence](https://en.wikipedia.org/wiki/Emergence). If you feel like it's interesting to you, beware, this game is a rabbit hole for curious minds!",
            "## How does it work ?",
            "The game generates a 50 by 50 cells grid. You're then left with the choice (and responsibility as a creator of life!) to color the cells you want alive. Simply click and mouve the mouse, like in Paint, to draw on the grid. You also have the option to just randomly color cells with the \"Go Random!\" button in the bar on top of the scren.",
            "Then, just sit and enjoy the show! There is a couple of options there as well, as you can chose to play the game step by step, or automatically (several speed options are available)."
        ]
    },
    {
        title: "Novilog",
        id: 4,
        link: null,
        preview: "https://i.ibb.co/2ZGr7Nv/novilog.png",
        description: "An app made from scratch to manage disasters",
        articleParagraphs: [
            "qzdqdqz"
        ]
    }
]

export function getProjects() {
    return projects
}

export function getProject(id) {
    return projects.find(project => project.id === id)
}