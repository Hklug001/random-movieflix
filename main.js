import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

const Movie = {

  getData(movieNum) {
    fetch(BASE_URL + movieNum + '?api_key=' + API_KEY + '&' + language)
      .then(response => response.json())
      .then(data => {
        if (data.adult == true || data.overview == "" || data.poster_path == null) {
          this.getData(parseInt(Math.random() * (715000 - 1) + 1))
        } else {
          movieTitle.textContent = data.original_title
          movieDescription.textContent = data.overview
          moviePoster.src = IMG_URL + data.poster_path
        }
      })
  }
}

document.querySelector('#shuffle-button')
  .addEventListener('click', () => {
    let randomNumber = parseInt(Math.random() * (715000 - 1) + 1)
    Movie.getData(randomNumber);
  })