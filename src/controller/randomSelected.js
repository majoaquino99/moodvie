const axios = require('axios');

const BASE_API = 'https://yts.mx/api/v2/list_movies.json';

async function randomSelected(){
 
//  * 1. Fetch all the data list
    async function getData(url){
        const {data} = await axios.get(url)
        return data;
    }

    const genreArr = [ 'action', 'adventure', 'animation', 'biography', 'comedy', 'crime', 'documentary', 'drama', 'family', 'fantasy', 'history', 'horror', 'musical', 'music', 'mystery', 'news', 'romance', 'sport', 'thriller', 'war' ];

    const randomNumberMood = Math.floor((Math.random() * genreArr.length - 1 ) + 1  );
    const randomGenreMood= genreArr[randomNumberMood];

//  * 2. Fetch all the details from items

    const {data: { movies }} = await getData(`${BASE_API}?genre=${randomGenreMood}&sort_by=rating`);

    const detailPromises = movies.map(async ({imdb_code: id}) => {
    const API_KEY = 'ea0e8d2f';
    return getData(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);           
    });


const moviesData = await Promise.all(detailPromises);

const randomResults = moviesData.map( movie =>{
    return {
        title: movie.Title,
        imgURL: movie.Poster,
        year: movie.Year,
        runtime: movie.Runtime,
        genre: movie.Genre,
        summary:movie.Plot,
        director: movie.Director,
        writer: movie.Writer,
        actors : movie.Actors,
        language : movie.Language,
        country: movie.Country,
        imdbRating: movie.imdbRating,
        type: movie.Type,
       }
   })
   return randomResults;

};

randomSelected()
.then(console.log)
.catch(err=> console.log(err.stack))
.finally(()=>{
    debugger
})