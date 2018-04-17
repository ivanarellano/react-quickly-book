const { handleActions } = require('redux-actions')

const FETCH_MOVIES = 'movies/FETCH_MOVIES'
const FETCH_MOVIE = 'movies/FETCH_MOVIE'

module.exports = {
  // Defines FETCH_MOVIES action creator that returns an action object
  fetchMoviesActionCreator: (movies) => ({
    type: FETCH_MOVIES,
    movies
  }),
  fetchMovieActionCreator: (index) => ({
    type: FETCH_MOVIE,
    index
  }),
  /* handleActions from redux-actions */
  /* Takes a map-like plain object where keys 
     are action types and values are functions */
  reducer: handleActions({
    [FETCH_MOVIES]: (state, action) => ({
      ...state,
      all: action.movies
    }),
    [FETCH_MOVIE]: (state, action) => ({
      ...state,
      current: state.all[action.index - 1]
    })
  }, {
    movies: [],
    movie: {}
  })
}

/* The following comment block is the equivalent code to the top block of this file 
   Here, we aren't using the redux-actions package but instead create a switch/case
   to handle action object creation.  */
/*
const FETCH_MOVIES = 'movies/FETCH_MOVIES'
const FETCH_MOVIE = 'movies/FETCH_MOVIE'

const initialState = {
  movies: [],
  movie: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      // Pass state object key by key
      // Saves or changes the list of all movies in the store
      return {
        ...state, 
        all: action.movies
      }
    case FETCH_MOVIE:
      return {
        ...state,
        current: action.movie
      }
  }
}

module.exports = {
  reducer
}
*/