import { format } from "date-fns";

function CharacterDetail({ character = {} }) {
    const formatModifDate = (isoDate) => {
        const date = new Date(isoDate);
        return format(date, 'MMMM dd, yyyy');
    };

    return (
        <div>
            <h2>{character.name}</h2>
            {
                // if character.thumbnail is not null, then render the image
                character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />
            }
            <p>{character.description}</p>
            <p>{formatModifDate(character.modified)}</p>
        </div>
    );
}

export default CharacterDetail;
