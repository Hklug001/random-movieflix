import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

const Util = {
  randoNum() {
    return parseInt(Math.random() * (715000 - 1) + 1);
  }
}

const Movie = {

  async getData() {
    try {
      const response = await fetch(BASE_URL + Util.randoNum() + '?api_key=' + API_KEY + '&' + language)
      const data = await response.json()
      if (data.adult == false && data.overview != "" && data.poster_path != null && data.vote_average >= 7) {
        const movie = {
          title: data.title,
          description: data.overview,
          poster: IMG_URL + data.poster_path,
        }
        console.log(data)
        Movie.display(movie)
      } else {
        Movie.getData()
      }
    } catch (error) {
      console.log('filme invalido')
    }

  },

  display(movie) {
    document.querySelector('main').innerHTML = `
    <img src="${movie.poster}" alt="" id="moviePoster">
    <div id="movieText">
      <h1 id="movieTitle">${movie.title}</h1>
      <p id="movieDescription">${movie.description}</p>
    </div>`
  }
}

const Loading = {
  toggle() {
    document.querySelector('main').innerHTML = `
    <img src="assets/searching.svg" alt="" id="loading-screen" class="sr-only">
    `
    document.querySelector('#loading-screen').classList.toggle("sr-only")
  }
}

document.querySelector('#shuffle-button')
  .addEventListener('click', () => {
    Loading.toggle();
    Movie.getData()
  })