import womanTShirt from '../assets/t-shirt1.jpg';
import fourwheelsTShirt from '../assets/t-shirt2.jpg';
import youNeverKTShirt from '../assets/t-shirt3.jpg';
import wolfTShirt from '../assets/t-shirt4.jpg';
import trippedTShirt from '../assets/t-shirt5.jpg';
import breakingBadTShirt from '../assets/t-shirt6.jpg';
import coolLionTShirt from '../assets/t-shirt7.jpg';
import mineCraftTShirt from '../assets/t-shirt8.jpg';
import marvelTShirt from '../assets/t-shirt9.jpg';
import hatersGHTShirt from '../assets/t-shirt10.jpg';

const ipsum = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

const mockArray = [
    {
        id: '1',
        img: womanTShirt,
        title: 'Woman T-Shirt',
        description: ipsum,
        status: 'danger',
        statusText: 'Out of stock'
    },
    {
        id: '2',
        img: fourwheelsTShirt,
        title: 'Four wheels porn T-Shirt',
        description: ipsum,
        status: 'success',
        statusText: '350 in stock'
    },
    {
        id: '3',
        img: youNeverKTShirt,
        title: 'You Never Know T-Shirt',
        description: ipsum,
        status: 'success',
        statusText: '200 in stock'
    },
    {
        id: '4',
        img: wolfTShirt,
        title: 'Wolf T-Shirt',
        description: ipsum,
        status: 'warning',
        statusText: '5 in stock'
    },
    {
        id: '5',
        img: trippedTShirt,
        title: 'Tripped T-Shirt',
        description: ipsum,
        status: 'warning',
        statusText: '9 in stock'
    },
    {
        id: '6',
        img: breakingBadTShirt,
        title: 'Breaking Bad T-Shirt',
        description: ipsum,
        status: 'danger',
        statusText: 'Out of stock'
    },
    {
        id: '7',
        img: coolLionTShirt,
        title: 'Cool Lion T-Shirt',
        description: ipsum,
        status: 'success',
        statusText: '450 in stock'
    },
    {
        id: '8',
        img: mineCraftTShirt,
        title: 'Mine Craft T-Shirt',
        description: ipsum,
        status: 'warning',
        statusText: '12 in stock'
    },
    {
        id: '9',
        img: marvelTShirt,
        title: 'Marvel T-Shirt',
        description: ipsum,
        status: 'success',
        statusText: '700 in stock'
    },
    {
        id: '10',
        img: hatersGHTShirt,
        title: 'Haters Gonna Hate T-Shirt',
        description: ipsum,
        status: 'success',
        statusText: '900 in stock'
    }
];

export default mockArray;