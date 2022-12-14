import type { NextPage } from "next";
import Head from "next/head";
import CardList from "../components/common/card-list";
import Nav from "../components/nav";
import Section from "../components/section";
import starWarsWorld from "../data/all.json";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Star Wars Project</title>
        <meta
          name="description"
          content="Consuming a cool API that brings stuff from the world of Star Wars"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Section
        title={"Meus personagens favoritos"}
        description={
          "Esses são os meus personagens favoritos do universo Star Wars!"
        }
        content={<CardList arrCharacters={starWarsWorld} />}
      />
    </div>
  );
};

export default Home;
