const myApp = {
  // some non-VM functionality would go here -> split the movies into genres using Vue
  movieGenres(data, genres) {
    genres.forEach((genre, index) => {
      myApp.vm.genres.push({
        name : genre,
        movies : data.filter(movie => movie.genre_name === genre)
      })
    })
  },

  vm : new Vue({
    el : "#app",

    data : {
      message : "Welcome to my Netflix ripoff!",
      genres : [], // these get populated from the function at the top of the file
     
      // 
      searchCategory: 'all',
      searchMovie:'',
    },

    methods : {
      filterMovieByName: function (genre) {
        return genre.filter(movie => {
          //console.log(movie);
          return  movie.movies_title.toLowerCase().indexOf(this.searchMovie.toLowerCase()) > -1
        });
      }

    },

    computed : {

      filteredCategoryMovies() {
        if (this.searchCategory !== 'all') {
            return this.genres.filter(genre => {
              //console.log(this.genres);
              return genre.name.toLowerCase().indexOf(this.searchCategory.toLowerCase()) > -1 
            });
        }
        return this.genres;
      },               
    },

    delimiters : ["${", "}"]
  })
}

myApp.movieGenres(appData.movies, ["Family", "Action", "Fantasy"]);









