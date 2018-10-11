import React from "react";
import reactTestRenderer from "react-test-renderer";
import MovieList from "./MovieList";

describe("The MovieList component", () => {
  it("renders the same tree with no movies", () => {
    const tree = reactTestRenderer.create(<MovieList movies={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders the same tree with a movie", () => {
    const tree = reactTestRenderer
      .create(
        <MovieList
          movies={[
            {
              id: 1,
              title: "A movie",
              backdrop_path: "the image url",
              overview: "The coool movie"
            }
          ]}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
