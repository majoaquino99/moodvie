//MOODS
const STRESSED= ['comedy', 'family', 'sport',];
const JUST_CHILLING= ['comedy', 'animation', 'horror', 'musical', 'thriller'];
const BOREDOM= ['action', 'adventure', 'crime', 'fantasy', 'mystery',];
const LOW_MOOD= ['comedy', 'drama', 'romance', ];
const INSOMIA= ['biography', 'documentary', 'history', 'music', 'news', 'war'];
//Other Constants
const BASE_API = 'https://yts.mx/api/v2/list_movies.json';




//Get results of the mood function
    async function giveResultsByMood (mood, time, not) {

        //Get data function
        async function getData(url){
          const response = await fetch(url)
          const data = await response.json()
          return data;
        }

        // 1ro. Agarrar el array de géneros seleccionado por el MOOD
        // 2do. Eliminar el genero NOT_SHOW del array de generos agarrados

        const deleteGenre = (array, element) => {
            let resultGenreArray =[];
            for(let k=0; k<array.length; k++){
                if(array[k] !== element){
                    resultGenreArray.push(array[k])
                    console.log(resultGenreArray);
                }
            }
            return resultGenreArray;
        }

        const newMoodGenreArray = deleteGenre(mood, not); // se corre la función con los parametros 1 y 3
        
        
        // 3ro. Hacer un randomize de los géneros que quedan
        const randomNumberMood = Math.floor((Math.random() * newMoodGenreArray.length - 1 ) + 1  );
        const randomGenreMood= newMoodGenreArray[randomNumberMood];
        console.log('random Genre Mood' , randomGenreMood); 
        
        // 4to. Obtener datos de las APIs del género random que salió

        const dataForMood = await getData(`${BASE_API}?genre=${randomGenreMood}&sort_by=rating`);
        const movieDataForMood =dataForMood.data.movies;
         
        const idForMood = movieDataForMood.map(singleMovie =>{
            return singleMovie.imdb_code;
        });
          
        idForMood.map(async (id) => {
          const API_KEY = 'ea0e8d2f';
          const infoMoviesForMood = await getData(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
            
          // 5to. Filtrar por el runtime seleccionado
          // 6to. Mostrar/Return información en objeto 
    
          let runtimeStr = infoMoviesForMood.Runtime;
          let runtimeNumber = parseInt(runtimeStr, 10) 

          if(runtimeNumber <= time){
                 
              const resultDataMood ={
                    title: infoMoviesForMood.Title,
                    imgURL: infoMoviesForMood.Poster,
                    year: infoMoviesForMood.Year,
                    runtime: infoMoviesForMood.Runtime,
                    genre: infoMoviesForMood.Genre,
                    summary:infoMoviesForMood.Plot,
                    director: infoMoviesForMood.Director,
                    writer: infoMoviesForMood.Writer,
                    actors : infoMoviesForMood.Actors,
                    language : infoMoviesForMood.Language,
                    country: infoMoviesForMood.Country,
                    imdbRating: infoMoviesForMood.imdbRating,
                    type: infoMoviesForMood.Type,
                }

                console.log(resultDataMood)
                return infoMoviesForMood;
                return resultDataMood;   
                }
        });
    }



//correr función con parametros mock

    giveResultsByMood(JUST_CHILLING, 300, 'animation');