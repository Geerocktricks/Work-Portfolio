import { Portfolio } from "../interfaces/portfolio";


export const portfolioArray: Portfolio[] = [
    {
        id: 1,
        image: 'assets/projects/personal-full.jpg',
        title: 'Sass Mastery',
        description: 'Sass Mastery is a personal website built recently, in personal persuit to master sass. I used sass to customize Bootstrap through a theming kit, to have personalised $variables, $mixins and function.',
        technologies: ['HTML:5 - SCSS', 'Bootstrap', 'Javascript'],
        link: 'https://geerocktricks.github.io/Sass-Mastry/',
        code :'https://github.com/Geerocktricks/Sass-Mastry',
        tag: 'javascript'
    },
    {
        id: 3,
        image: 'assets/projects/dokd.png',
        title: 'Diaries of a Kenyan dreamer',
        description: 'Diaries of a kenyan dreamer is a personal space that i created. It is a blog website that comprises of both a personal space, and a space where i have lessons, to be more specific django related lessons.',
        technologies: ['Python', 'Django'],
        link: 'https://diariesofakenyandreamer.herokuapp.com/',
        code :'404.com',
        tag: 'django'
    },
    {
        id: 2,
        image: 'assets/projects/weather-full.jpg',
        title: 'WeatherForecast',
        description: 'WeatherForecast is an API fetch focused website that focuses on asynchronous javascript to communicate with three different endpoint of the [https://openweathermap.org/api]',
        technologies: ['Javascript', 'Fetch'],
        link: 'https://geerocktricks.github.io/WeatherForecast/',
        code :'https://github.com/Geerocktricks/WeatherForecast',
        tag: 'javascript'
    },
    {
        id: 4,
        image: 'assets/projects/recipePlanner3.jpg',
        title: 'Recipe Planner',
        description: 'Recipe Planner is an API fetch focused website that focuses on asynchronous javascript to communicate with three different endpoint of the [https://openweathermap.org/api]',
        technologies: ['Javascript', 'Fetch'],
        link: 'https://geerocktricks.github.io/Recipe-App/',
        code :'https://github.com/Geerocktricks/Recipe-App',
        tag: 'javascript'
    }
]