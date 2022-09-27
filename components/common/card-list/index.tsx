import ICardList from "../../../interfaces/ICardList";
import Card from "../card";

export default function CardList(props: ICardList) {
  const { arrCharacters } = props;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {arrCharacters?.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          image={character.image}
          name={character.name}
          species={character.species}
        />
      ))}
    </div>
  );
}
