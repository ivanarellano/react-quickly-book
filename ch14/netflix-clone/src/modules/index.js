/* This file combines reducers and exposes them */

const { combineReducers } = require('redux')

/* Take in the movies script and find a reducer key */
const {
  reducer: movies
} = require('./movies')

module.exports = combineReducers({
  movies
})
