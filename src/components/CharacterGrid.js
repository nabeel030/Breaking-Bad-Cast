import React from 'react';
import Character from './Character';
import Spinner from './Spinner';

const CharacterGrid = ({chars, isLoading}) => {

    return isLoading ? <Spinner /> : <section className='cards'>

    {chars.map(char => (
        <Character  key={char.char_id} char={char}/>
    ))}
    </section>

    
}

export default CharacterGrid
