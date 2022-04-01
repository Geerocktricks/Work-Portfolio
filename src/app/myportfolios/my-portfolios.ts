import { Portfolio } from "../interfaces/portfolio";


export const portfolioArray: Portfolio[] = [
    {
        id: 1,
        image: '../../assets/images/me.jpg',
        title: 'Weather App',
        description: 'Weather app is a weather predicting application....',
        technologies: ['Javascript', 'Fetch'],
        link: 'www.weatherapp.com'
    },

    {
        id: 2,
        image: '../../assets/images/me4.JPG',
        title: 'Recipe App',
        description: 'Gives diferent foods you can make using the ingredients you have....',
        technologies: ['Javascript', 'Fetch'],
        link: 'www.recipeapp.com'
    }
]