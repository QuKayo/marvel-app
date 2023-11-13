export function NumberOfCharacters({ characters = []}) {
  const isThereCharacters = characters.length > 0;
  return (
    <p>
      {isThereCharacters ? `Number of characters: ${characters.length}` : 'There is no characters'}
    </p>
  );
}
