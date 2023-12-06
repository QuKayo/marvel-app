import React from 'react';
import { useState, useEffect } from 'react';
import { getCharacters } from '../api/character-api';
import { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    // to be replaced with the real data
    const [characters, setCharacters] = useState([]);

    // transform the characters to array of label/value objects
    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
        image: character.image, // assuming `image` is the property containing the image URL
    }));

    // set the default options to the first two characters
    const [option1, setOption1] = React.useState(options[0]);
    const [option2, setOption2] = React.useState(options[1]);

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    useEffect(() => {
        const characters = getCharacters();
        setCharacters(characters);
        setOption1(characters[0]);
        setOption2(characters[1]);
    }, []);

    return (
        <>
            <h2>Compare characters</h2>

            <p style={centerStyle}>
            <select
                value={option1?.id}
                onChange={(event) => setOption1(characters.find(character => character.id === event.target.value))}
>
                    {characters.map((character) => (
                        <option key={character.id} value={character.id}>
                            {character.name}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    value={option2?.id}
                    onChange={(event) => setOption2(characters.find(character => character.id === event.target.value))}
>
                    {characters.map((character) => (
                        <option key={character.id} value={character.id}>
                            {character.name}
                        </option>
                    ))}
                </select>
            </p>

            <div style={centerStyle}>
    {/* Display the images of the selected characters */}
    {option1 && <img style={{marginRight: '10px'}} src={`${option1.thumbnail.path}/standard_large.${option1.thumbnail.extension}`} alt={option1.label} />}
    {option2 && <img style={{marginRight: '10px'}} src={`${option2.thumbnail.path}/standard_large.${option2.thumbnail.extension}`} alt={option2.label} />}
</div>
         
            <p style={centerStyle}>
            {option1?.name} vs {option2?.name}
            </p>


    <RadarChart outerRadius={90} width={730} height={250} data={characters}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        {option1 && <Radar name={option1.name} dataKey="capacities" stroke="#800080" fill="#800080" fillOpacity={0.6} />}
        {option2 && <Radar name={option2.name} dataKey="capacities" stroke="#008000" fill="#008000" fillOpacity={0.6} />}
    </RadarChart>

        </>
    );
 
};

export default CompareCharactersPage;