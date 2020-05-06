(async function load(){
 
// USE API
    async function getData(url){
        const response = await fetch(url)
        const data = await response.json()
        return data;
    }
// RANDOM  suggestion
const GENRES = [ 'action', 'adventure', 'animation', 'biography', 'comedy', 'crime', 'documentary', 'drama', 'family', 'fantasy', 'history', 'horror', 'musical', 'music', 'mystery', 'news', 'romance', 'sport', 'thriller', 'war' ];

const randomNumber = Math.floor((Math.random() * GENRES.length - 1 ) + 1  );
const randomGenre= GENRES[randomNumber];
const GENRE_SUGGEST = randomGenre;
//selectGenre(GENRE_SUGGEST);   // 1.sugerencia RANDOM

//-----------genre filter YTSI (funcion para buscar por genero)
const BASE_API = 'https://yts.mx/api/v2/list_movies.json';
async function selectGenre(userSelection){
   
    const moviesByGenres = await getData(`${BASE_API}?genre=${userSelection}&sort_by=rating`);  
    const movieDataByGenre =moviesByGenres.data.movies;
    const idForGenre  = movieDataByGenre.map(singleMovie =>{
        return singleMovie.imdb_code;
    });
    idForGenre .map(async id => {
        const API_KEY = 'ea0e8d2f';
        const infoMoviesByGenre = await getData(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);

    const resultDataGenre ={
        title: infoMoviesByGenre.Title,
        imgURL: infoMoviesByGenre.Poster,
        year: infoMoviesByGenre.Year,
        runtime: infoMoviesByGenre.Runtime,
        genre: infoMoviesByGenre.Genre,
        summary:infoMoviesByGenre.Plot,
        director: infoMoviesByGenre.Director,
        writer: infoMoviesByGenre.Writer,
        actors : infoMoviesByGenre.Actors,
        language : infoMoviesByGenre.Language,
        country: infoMoviesByGenre.Country,
        imdbRating: infoMoviesByGenre.imdbRating,
        type: infoMoviesByGenre.Type,
    }
    return (resultDataGenre);
   })
}
//selectGenre('action');   //2. User selected genre

//----------BUSCADOR POR TITULO
// const searchTitle = 'Batman';
async function searchTitleMovie(searchTitle){
    const API_KEY = 'ea0e8d2f';
    const infoMoviesByGenreSearch = await getData(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTitle}`);
    const resultData = infoMoviesByGenreSearch.Search;
    const resultDataObj = resultData.map( infoMoviesByGenre =>{
        return {
            title: infoMoviesByGenre.Title,
            imgURL: infoMoviesByGenre.Poster,
            year: infoMoviesByGenre.Year,
            runtime: infoMoviesByGenre.Runtime,
            genre: infoMoviesByGenre.Genre,
            summary:infoMoviesByGenre.Plot,
            director: infoMoviesByGenre.Director,
            writer: infoMoviesByGenre.Writer,
            actors : infoMoviesByGenre.Actors,
            language : infoMoviesByGenre.Language,
            country: infoMoviesByGenre.Country,
            imdbRating: infoMoviesByGenre.imdbRating,
            type: infoMoviesByGenre.Type,
           }
       })
 console.log(resultDataObj);
}

//searchTitleMovie('Batman');  //3. User search by title

//---------- Result test Recomendation

async function GenreTestResulNoShow(MoodGenreArray){
    let index = MoodGenreArray.indexOf(NO_SHOW)
    const newMoodGenreArray = [...MoodGenreArray]
    newMoodGenreArray.splice(index, 1)
    console.log('new stressed', newMoodGenreArray);

        //randomGENRE =newARRAY[randomNUMBER]
      
        const randomNumberMood = Math.floor((Math.random() * newMoodGenreArray.length - 1 ) + 1  );
      const randomGenreMood= newMoodGenreArray[randomNumberMood];
      console.log('random Genre Mood' , randomGenreMood); 
        const dataForMood = await getData(`${BASE_API}?genre=${randomGenreMood}&sort_by=rating`);
        const movieDataForMood =dataForMood.data.movies;
       
        const idForMood = movieDataForMood.map(singleMovie =>{
            return singleMovie.imdb_code;
        });
        
        idForMood.map(async id => {
        const API_KEY = 'ea0e8d2f';
        const infoMoviesForMood = await getData(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
        let runtimeStr = infoMoviesForMood.Runtime;
        let runtimeNumber = parseInt(runtimeStr, 10)  
        if(runtimeNumber <= RUNTIME){
             console.log(RUNTIME, infoMoviesForMood);
             return infoMoviesForMood;
        }
      });
}

async function GenreTestResul(newMoodGenreArray){
    
    const randomNumberMood = Math.floor((Math.random() * newMoodGenreArray.length - 1 ) + 1  );
    const randomGenreMood= newMoodGenreArray[randomNumberMood];
    console.log('random Genre Mood' , randomGenreMood); 
      const dataForMood = await getData(`${BASE_API}?genre=${randomGenreMood}&sort_by=rating`);
      const movieDataForMood =dataForMood.data.movies;
     
      const idForMood = movieDataForMood.map(singleMovie =>{
          return singleMovie.imdb_code;
      });
      
      idForMood.map(async id => {
      const API_KEY = 'ea0e8d2f';
      const infoMoviesForMood = await getData(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
      let runtimeStr = infoMoviesForMood.Runtime;
      let runtimeNumber = parseInt(runtimeStr, 10)  
      if(runtimeNumber <= RUNTIME){
           console.log(RUNTIME, infoMoviesForMood);
           return infoMoviesForMood;
      }
    });
}

const STRESSED= ['comedy', 'family', 'sport',];
const JUST_CHILLING= ['comedy', 'animation', 'horror', 'musical', 'thriller'];
const BOREDOM= ['action', 'adventure', 'crime', 'fantasy', 'mystery',];
const LOW_MOOD= ['comedy', 'drama', 'romance', ];
const INSOMIA= ['biography', 'documentary', 'history', 'music', 'news', 'war'];


const FEELING= INSOMIA;
    const RUNTIME_OPTION1 = 100;
    const RUNTIME_OPTION2= 300;
const RUNTIME = RUNTIME_OPTION1;
const NO_SHOW = 'action'


switch(FEELING){
    case STRESSED :
        for( let i= 0; i<STRESSED.length; i++){
            if(STRESSED[i] == NO_SHOW ){
                console.log('no quiero:' + NO_SHOW);
            let MoodGenreArray = STRESSED;
            GenreTestResulNoShow(MoodGenreArray);
            } else{
                
            GenreTestResul(STRESSED);  
            }   
        }
        break;
        case JUST_CHILLING :
            for( let i= 0; i<JUST_CHILLING.length; i++){
                if(JUST_CHILLING[i] == NO_SHOW ){
                    console.log('no quiero:' + NO_SHOW);
                let MoodGenreArray = JUST_CHILLING;
                GenreTestResulNoShow(MoodGenreArray);
                } else{
                    
                GenreTestResul(JUST_CHILLING);  
                }   
            }
            break;
            case BOREDOM :
                for( let i= 0; i<BOREDOM.length; i++){
                    if(BOREDOM[i] == NO_SHOW ){
                        console.log('no quiero:' + NO_SHOW);
                    let MoodGenreArray = BOREDOM;
                    GenreTestResulNoShow(MoodGenreArray);
                    } else{
                        
                    GenreTestResul(BOREDOM);  
                    }   
                }
                break;
                case LOW_MOOD :
                    for( let i= 0; i<LOW_MOOD.length; i++){
                        if(LOW_MOOD[i] == NO_SHOW ){
                            console.log('no quiero:' + NO_SHOW);
                        let MoodGenreArray = LOW_MOOD;
                        GenreTestResulNoShow(MoodGenreArray);
                        } else{
                            
                        GenreTestResul(LOW_MOOD);  
                        }   
                    }
                    break;
                    case INSOMIA :
                        for( let i= 0; i<INSOMIA.length; i++){
                            if(INSOMIA[i] == NO_SHOW ){
                                console.log('no quiero:' + NO_SHOW);
                            let MoodGenreArray = INSOMIA;
                            GenreTestResulNoShow(MoodGenreArray);
                            } else{
                                
                            GenreTestResul(INSOMIA);  
                            }   
                        }
                        break;
        
    
      
}
})()

