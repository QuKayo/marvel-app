import { Link } from "react-router-dom";
import { format } from "date-fns";

export function CharactersList({ characters = [] }) {
    const formatModifDate = (isoDate) => {
        const date = new Date(isoDate);
        return format(date, 'MMMM dd, yyyy');
    }
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                    <strong>{character.name} - </strong>
                    {formatModifDate(character.modified)}
                    </Link>
                    </li>
                    ))}

        </ul>
    );
}
