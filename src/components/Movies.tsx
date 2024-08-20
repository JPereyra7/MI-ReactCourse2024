import { useEffect, useState } from "react"
import { IMovie } from "../services/IMovie"
import axios from "axios";

//API Anrop via Axios
export const Movies = () => {
    const [movie, setMovie] = useState<IMovie[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get<IMovie[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/products");
                setMovie(response.data);
            } catch (error) {
                console.error(`Error retrieving movies ${error}`)
            }
        }
        getData();
    }, []);
    
    return (
        <>
        <ul>{movie.map((individualMovie, index) => (
            <li key={index}>
                <h3>{individualMovie.name} ({individualMovie.year})</h3>
                <img src={individualMovie.imageUrl} alt={individualMovie.name} />
            </li>
        ))}</ul>
        </>
    )
}