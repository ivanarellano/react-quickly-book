const React = require('react')
const {
  Router,
  Route,
  IndexRoute,
  browserHistory
} = require('react-router')
const App = require('components/app/app')
const Movies = require('components/movies/movies.js')
const Movie = require('components/movie/movie.js')

module.exports = (
  // Provides either browser or hash history to the router
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* Defines the index route: the route for the empty URL */}
      <IndexRoute component={Movies} /> 
      <Route path="movies" component={Movies}>
        {/* Defines the movie ID URL parameter with a colon */}
        <Route path=":id" component={Movie} />
      </Route>
    </Route>
  </Router>
)
