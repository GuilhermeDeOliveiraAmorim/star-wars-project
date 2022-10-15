import ICardList from "../../../interfaces/ICardList";
import Card from "../card";

export default function CardList(props: ICardList) {

    const { arrCharacters } = props;

    return (
        <div className="flex flex-col md:flex-wrap md:flex-row lg:flex-wrap lg:flex-row gap-4">
            {arrCharacters?.map(character =>
                <Card key={character.id} id={character.id} image={character.image} name={character.name} species={character.species} />
            )}
        </div>
    )
}