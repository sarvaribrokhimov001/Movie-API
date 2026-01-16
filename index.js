const api = `http://www.omdbapi.com/?s=merlin&apikey=f2dd26fe`;
const elCards = document.querySelector(".cards");
const elLoading = document.querySelector(".loading");
const elSearch = document.querySelector(".search");

    const getMovie = async (url) => {
      const request = await axios.get(url);
        showMovies(request?.data);
    };

elSearch.addEventListener('change' , (e) => {
    const inputValue = e.target.value.trim();
    elCards.innerHTML = '';
    getMovie(`http://www.omdbapi.com/?s=${inputValue}&apikey=f2dd26fe`);
});

try {
    getMovie(api);
} catch(error) {
    throw new Error(error);
}

function showMovies(showmovies) {
    const {Search , Response , totalResults} = showmovies;

    if(Response === 'True' ) {
        elLoading.innerHTML = '';
        Search?.map(({Poster , Year , Title , Type} , index) => {
        elCards.innerHTML += `
            
        <div class="card">
            <img width="300" height="350" src=${Poster} alt="">
            <h2> ${Title} </h2>
            <p class="type"> ${Type} </p>
            <p> ${Year} </p>
        </div> <!-- card -->
        
            `
 console.log(showmovies);
          
        });
    } else {
        elLoading.innerHTML = '';
        elCards.innerHTML = 'Movie is not found'
    }  
}