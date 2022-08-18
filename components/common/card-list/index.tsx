import ICardList from "../../../interfaces/ICardList";
import Card from "../card";

export default function CardList(props: ICardList) {

    const { arrCharacters } = props;

    return (
        <div className="flex flex-wrap justify-between">
            {arrCharacters?.map(character =>
                <Card id={character.id} image={character.image} name={character.name} species={character.species} />
            )}
        </div>
    )
}