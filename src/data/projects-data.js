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
            "# The story of a dev nurse",
            "It all started from a simple observation when I was working as a nurse. See, I was working in a particular kind of unit : prehospital care. Depending on where you're from, this kind of unit might work differently, but in France, like in most places, they are the ones going out on emergency calls, for medical problems, normally in case of vital emergency, to help people before bringing them to hospital. But there is another responsability for these people: be ready to manage **big scale disasters** like big fires, multiple cars accidents, up to a plane crash or a terrorist attack.",
            "These operations involve a lot of people, with multiple roles, both on site of the disaster and in HQ and hospitals. It requires a good commmunication between different services, a reliable coordination between field, HQ and hospitals and some good amount of data security",
            "When I started working there, I got involved in the work group about this specific topic (the nurse-side of me is very proud of this, it was very interesting and rewarding), did a couple of training drills and observed a major issue in the process.",
            "When our unit would go on this kind of intervention, one the most important thing to do, is to setup a kind of field hospital where we would triage the victims and apply first aid or damage control care. The quality of the triage part of the operation is paramount, as it allows the HQ to scale the operation (basically, the number of victims, the type of wounds and all that is related to the number and specialization of the staff on the field), it allows to organize as soon as possible operating theaters in hospital, or just to find them an appropriate bed. But, when I started, the triage was noted on paper, and communicated by radio. It was extremely time consuming and even for the most dedicated human on earth, errors (write the same name several time for instance) and miscommunication (on radio : \"How do you spell it again-gzzz\") was the source of many problems.",
            "At this time, even though I was playing a bit with programming, I was far from being able to produce something really helpful right away. But I decided to give it a shot!",
            "## 2 years of learning and development",
            "I then spent basically 2 years developing what I thought would be a very useful app for this problem, mostly on my own time. I didn't know where to start so I picked what looked like the most interesting tech to learn at the time (it was around 2015). I learned PHP, and the framework Symfony for this project. It took me a while, because at that time, I didn't even really know what OOP or even... a framework, to be honest. All I've done before was some very basic but nice looking HTML pages with some CSS.",
            "I came up with a first mock-up a few months after I started, because I started to need to test it, with my fellow colleagues who, basically, hate computers. But they knew the business logic was designed by one of theirs, and I tried my best to make the UX the easiest possible for them.",
            "It took two years to refine it, but now, my colleagues can't do a training without Novilog. They are unanimous that this tool is very useful, and well suited for their need. It ran on dozens of training operations, and other hospitals have shown interest in it with great enthusiasms.",
            "It was a huge milestone in my journey to become a developer. I enjoyed every step of this. I loved to learn that much about something I was always interested in but never really had the opportunity to really dive deep into. I've always been eager to learn more, and there was plenty to learn there.",
            "## What it does",
            "Basically, the idea is to connect three main area in this kind of operational setup:",
            "* **The field: victim entry point.** A place where a first medical triage happens. The victim is stored in the database with as many information as possible, including two that are vital and compulsory : a unique ID number, and the categorization of their level of emergency (red : vital, yellow: needs care but no vital emergency, green : no medical care, needs psyc unit debrief, black : deceased). They have to input the main pathology as well.", 
            "* **HQ: operation management.** There is a group of people working from the first responder HQ (called SAMU in France). They are in charge of scaling the operation (staff, equipment, vehicles, etc), coordination with others services (police, firemen, hospital, authorities, etc), and, more relevant to the app, organizing the victims' evacuation to the right place (appropriate to their problem : do they need OT? Pediatrics? Specialized care like burn unit? etc). With Novilog, they have a real time view of the operation, allowing them to directly look for the approriate place to send to patient to, and arrange with the hospital so they can be ready. Once they have agreement with the various hospitals of the area, they can input the number and type of \"beds\" available for the field.",
            "* **The field: victim exit point**. Here, an evacuation officer will use these available beds and assign them to relevant patients. By doing so in Novilog, the HQ will know what bed are used, and also they can tell the destination hospital that a patient is effectively coming and give them the available informations.",
            "These different roles in Novilog come with specific functionalities and UI. These UI stick to the Standard Operational Procedures as much as possible, including in the wording, so even someone not particularly trained with the app can use it (as such kind of events is rare)",
            "## Areas of improvement",
            "I did that in 2015-2017, and then I went to work for an NGO for a couple of years, exploring the world and exporting my nursing skills where I thought they could be useful. So it's quite outdated. At this stage, like I said, it's very well refined, in terms of business logic, but it needs a severe modernization, or general TLC. It still runs on a rented server (by the hospital in charge of our emergency unit) and it's still used by the unit for trainings. It's a PHP-MySQL server, on an old Symfony version, and the whole process isn't secured enough to be used on live data, only trainings.",
            "If I had to work on it again, I would rewrite it entirerly, with the benefit of all I've learn since then. I would make a backend app, maybe still on PHP, but probably on Express, or another Javascript library and a separate frontend app with React. It would need the input of a data security expert, especially as we are dealing with health data."
        ]
    }
]

export function getProjects() {
    return projects
}

export function getProject(id) {
    return projects.find(project => project.id === id)
}