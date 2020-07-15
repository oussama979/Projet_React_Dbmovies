// API/TMDBApi.js

const API_TOKEN = "4103a8e91cfb81b7a10de4620fc7ce4d";

export function getFilmsFromApiWithSearchedText (text,page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page='+page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }