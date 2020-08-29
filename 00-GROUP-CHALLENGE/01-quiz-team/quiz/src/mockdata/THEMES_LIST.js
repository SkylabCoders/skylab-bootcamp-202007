/* quizteam - skylab bootcamp 202007 */
'use strict';

const THEMES_LIST = [
    {title: 'General Knowledge', id: 9, slug: 'general-knowledge', url: 'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Books', id: 10, slug: 'books', url: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Film', id: 11, slug: 'films', url: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Music', id: 12, slug: 'music', url: 'https://images.pexels.com/photos/462510/pexels-photo-462510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Musicals & Theatre', id: 13, slug: 'theatre', url: 'https://images.pexels.com/photos/11437/dance-scene-free-license-cc0.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Television', id: 14, slug: 'television', url: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Video Games', id: 15, slug: 'video-games', url: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Board Games', id: 16, slug: 'board-games', url: 'https://images.pexels.com/photos/957312/chess-checkmated-chess-pieces-black-white-957312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Science & Nature', id: 17, slug: 'science-nature', url: 'https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Computers', id: 18, slug: 'computers', url: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Mathematics', id: 19, slug: 'mathematics', url: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Mythology', id: 20, slug: 'mythology', url: 'https://images.pexels.com/photos/4039923/pexels-photo-4039923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Sports', id: 21, slug: 'sports', url: 'https://images.pexels.com/photos/34514/spot-runs-start-la.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {title: 'Geography', id: 22, slug: 'geography', url: 'https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'History', id: 23, slug: 'history', url: 'https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Politics', id: 24, slug: 'politics', url: 'https://images.pexels.com/photos/64057/pexels-photo-64057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Art', id: 25, slug: 'art', url: 'https://images.pexels.com/photos/206064/pexels-photo-206064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Celebrities', id: 26, slug: 'celebrities', url: 'https://images.pexels.com/photos/270968/pexels-photo-270968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Animals', id: 27, slug: 'animals', url: 'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Vehicles', id: 28, slug: 'vehicles', url: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Comics', id: 29, slug: 'comics', url: 'https://images.pexels.com/photos/2678108/pexels-photo-2678108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {title: 'Gadgets', id: 30, slug: 'gadgets', url: 'https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Anime & Manga', id: 31, slug: 'anime-manga', url: 'https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'Cartoons', id: 32, slug: 'cartoons', url: 'https://images.pexels.com/photos/3706/black-and-white-cartoon-donald-duck-spotlight.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {title: 'All', id: undefined, slug: 'mix', url: 'https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
];		

 export default THEMES_LIST;


 /* pasar objecte theme i al dashboard descpomsar amb 2 props: themeTitle i themeImgurl */
