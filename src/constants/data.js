import react from "react";

import images from './images.js'


const posts =[
    {
        personImg:images.person1,
        Img: images.img1,
        name:'Sylvia Beth',
        caption:'Buying Stationary!',
    },
    {
        personImg:images.person2,
        Img: images.img2,
        name:'Annie Joane',
        caption:'Qoutes',
    },
    {
        personImg:images.person3,
        Img: images.img3,
        name:'Jack Silver',
        caption:'Stay Strong!',
    },
    {
        personImg:images.person4,
        Img: images.img4,
        name:'Sam Shaler',
        caption:'Mental Health',
    },
    {
        personImg:images.person5,
        Img: images.img5,
        name:'Ayushman',
        caption:'Cute Dogo!',
    },
    {
        personImg:images.person6,
        Img: images.img6,
        name:'Priya Rathee',
        caption:'Space!',
    },
    {
        personImg:images.person7,
        Img: images.img7,
        name:'Caroline',
        caption:'Cutee',
    },
    {
        personImg:images.person8,
        Img: images.img8,
        name:'Peter Sharma',
        caption:'Book lover',
    },
    {
        personImg:images.person9,
        Img: images.img12,
        name:'Damon',
        caption:'Coffee lovers',
    },
    {
        personImg:images.person1,
        Img: images.img4,
        name:'Penny Bennet',
        caption:'Mental Health',
    },
    {
        personImg:images.person4,
        Img: images.img1,
        name:'Sam Shaler',
        caption:'Studying!',
    },
    {
        personImg:images.person5,
        Img: images.img5,
        name:'Sylvia Beth',
        caption:'Doggo',
    },

]


const stories = [
    {
        imgUrl: images.featured,
        title: 'Featured' ,
    },
    {
        imgUrl: images.india,
        title: 'India' ,
    },
    {
        imgUrl: images.paris,
        title: 'Paris' ,
    },
    {
        imgUrl: images.food,
        title: 'Food' ,
    },
    {
        imgUrl: images.hooman,
        title: 'Hooman' ,
    },
    {
        imgUrl: images.travel,
        title: 'Travel' ,
    },
];

export default {stories,posts};