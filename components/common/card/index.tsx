import Image from "next/image";
import ICharacter from "../../../interfaces/ICharacter";

export default function Card(props: ICharacter) {

    const { id, image, name, species } = props;

    return (
        <div key={id} className="p-4 rounded-lg bg-slate-400 basis-1/6 flex flex-col">
            <Image
                className="rounded-lg"
                src={image}
                alt="Logo"
                width={80}
                height={100}
            />
            <h1>
                {name}
            </h1>
            <p>
                {species}
            </p>
        </div>
    )
}