import { useQuery } from "react-query";
import api from "../services/backend";

const getStarWars = async () => {
    const response = await api.get(
        "https://akabab.github.io/starwars-api/api/all.json"
    );
    return response.data;
};

export default function useStarWars() {
    return useQuery(["starWars"], () => getStarWars());
}
