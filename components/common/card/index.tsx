import Image from "next/image";
import ICharacter from "../../../interfaces/ICharacter";

export default function Card(props: ICharacter) {

    const { id, image, name, species } = props;

    console.log(image == null);

    return (
        <button key={id} className="flex p-4 gap-4 rounded-lg bg-swbdazzledblue border hover:bg-swbdazzledbluelight">
            <Image
                className="rounded-lg"
                src={image}
                alt="Logo"
                width={80}
                height={100}
            />
            <div>
                <h1>
                    {name}
                </h1>
                <p className="text-xs">
                    {species}
                </p>
            </div>
        </button>
    )
}