const axios = require('axios');

//MOODS
const moodList = {STRESSED: ['comedy', 'family', 'sport',],
 JUST_CHILLING: ['comedy', 'animation', 'horror', 'musical', 'thriller'],
 BOREDOM: ['action', 'adventure', 'crime', 'fantasy', 'mystery',],
 LOW_MOOD: ['comedy', 'drama', 'romance', ],
 INSOMIA: ['biography', 'documentary', 'history', 'music', 'news', 'war']};
//Other Constants
const BASE_API = 'https://yts.mx/api/v2/list_movies.json';

//Get results of the mood function
 export default async function giveResults ({mood, time, blacklist}) {

//  * 1. Fetch all the data list

async function getData(url){
    const {data} = await axios.get(url)
    return data;
}

const newMoodGenreArray = moodList[mood].filter(m => blacklist !== m);

const randomNumberMood = Math.floor((Math.random() * newMoodGenreArray.length - 1 ) + 1  );
const randomGenreMood= newMoodGenreArray[randomNumberMood];

//  * 2. Fetch all the details from items

const {data: { movies }} = await getData(`${BASE_API}?genre=${randomGenreMood}&sort_by=rating`);

const detailPromises = movies.map(async ({imdb_code: id}) => {
    const API_KEY = 'ea0e8d2f';
    return getData(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
});


const moviesData = await Promise.all(detailPromises);

//  * 3. Filter
const filteredMovies = moviesData.filter(({Runtime: RuntimeStr})=>{
    const runtime = parseInt(RuntimeStr, 10);
    return runtime <= time;
});

//  * 4. Transform
//  * 5. Return
return filteredMovies.map(movie=>({
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
}));
};
