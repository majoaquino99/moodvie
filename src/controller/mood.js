const axios = require('axios');

//MOODS
const STRESSED= ['comedy', 'family', 'sport',];
const JUST_CHILLING= ['comedy', 'animation', 'horror', 'musical', 'thriller'];
const BOREDOM= ['action', 'adventure', 'crime', 'fantasy', 'mystery',];
const LOW_MOOD= ['comedy', 'drama', 'romance', ];
const INSOMIA= ['biography', 'documentary', 'history', 'music', 'news', 'war'];
//Other Constants
const BASE_API = 'https://yts.mx/api/v2/list_movies.json';




//Get results of the mood function
    async function giveResults (mood, time, blacklist) {

/*
 * 1. Fetch all the data list
 * 2. Fetch all the details from items
 * 3. Filter 
 * 4. Transform
 * 5. Return 
*/


        //Get data function
        async function getData(url){
          const {data} = await axios.get(url)
          return data;
        }

        // 1ro. Agarrar el array de géneros seleccionado por el MOOD
        // 2do. Eliminar el genero blacklist del array de generos agarrados
        const newMoodGenreArray = mood.filter(m => blacklist !== m);

        
        // 3ro. Hacer un randomize de los géneros que quedan
        const randomNumberMood = Math.floor((Math.random() * newMoodGenreArray.length - 1 ) + 1  );
        const randomGenreMood= newMoodGenreArray[randomNumberMood];
        console.log('random Genre Mood' , randomGenreMood); 
        
        // 4to. Obtener datos de las APIs del género random que salió


        const {data: { movies }} = await getData(`${BASE_API}?genre=${randomGenreMood}&sort_by=rating`);
        
          
        const detailPromises = movies.map(async ({imdb_code: id}) => {
          const API_KEY = 'ea0e8d2f';
          return getData(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);           
        });

        
        const moviesData = await Promise.all(detailPromises);
        
        const filteredMovies = moviesData.filter(({Runtime: RuntimeStr})=>{
            const runtime = parseInt(RuntimeStr, 10);
            return runtime <= time;
        });

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

    giveResults(JUST_CHILLING, 300, 'animation')
    .then(console.log)
    .catch(err=>{console.log(err.stack)});


    