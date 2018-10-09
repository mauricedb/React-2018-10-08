export function addActionCreator(value) {
  return {
    type: "add",
    payload: value
  };
}

// export const loadMovies = () => () => {

// }

function moviesCreated(movies) {
  return {
    type: "movies-loaded",
    payload: movies
  };
}

export function loadMovies() {
  return function thunk(dispatch) {
    fetch("/movies.json")
      .then(rsp => rsp.json())
      .then(movies => {
        dispatch(moviesCreated(movies));
      });
  };
}
