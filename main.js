import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

const Movie = {
  number: Math.random() * (995 - 2) + 2,

  getData(movieNum) {
    fetch(BASE_URL + movieNum + '?api_key=' + API_KEY)
      .then(response => response.json())
      .then(data => {
        movieTitle.textContent = data.original_title
        movieDescription.textContent = data.overview
        moviePoster.src = IMG_URL + data.poster_path
      })
  }
}