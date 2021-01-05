import http from "./httpService";
import config from "../config.json";

export function getMovies() {
  return http.get(config.movieEndpoint);
}

export function getMovie(id) {
  return http.get(`${config.movieEndpoint}/${id}`);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(`${config.movieEndpoint}/${movie._id}`, body);
  }

  return http.post(config.movieEndpoint, movie);
}

export function deleteMovie(id) {
  return http.delete(`${config.movieEndpoint}/${id}`);
}
