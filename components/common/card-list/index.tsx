import ICardList from "../../../interfaces/ICardList";
import Card from "../card";

export default function CardList(props: ICardList) {
  const { arrCharacters } = props;

<<<<<<< HEAD
    const { arrCharacters } = props;

    return (
        <div className="flex flex-col md:flex-wrap md:flex-row lg:flex-wrap lg:flex-row gap-4">
            {arrCharacters?.map(character =>
                <Card key={character.id} id={character.id} image={character.image} name={character.name} species={character.species} />
            )}
        </div>
    )
}
=======
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
>>>>>>> 74d5aab86c8813684fb48bb7766435ebd60d7a63
