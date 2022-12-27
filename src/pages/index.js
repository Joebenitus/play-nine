import * as React from "react";
import Player from "../components/player";
import Deck from "../components/deck";

const IndexPage = () => {
  return (
    <main>
      <h1>Play 9</h1>
      <Player></Player>
      <Deck></Deck>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
