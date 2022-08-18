import { useQuery } from "react-query";
import ICharacter from "../interfaces/ICharacter";
import api from "../services/backend";

const getStarWars = async () => {
    const response = await api.get<ICharacter[]>(
        "https://akabab.github.io/starwars-api/api/all.json"
    );
    return response.data;
};

export default function useStarWars() {
    return useQuery(["starWars"], () => getStarWars());
}
