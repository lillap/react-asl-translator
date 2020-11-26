import React from 'react';
import { getStorage } from '../../utils/localstorage';
import images from '../../utils/images';

const TranslatorTable = () => {

    const translations = getStorage('translations') || [];
    const collection = [];
    
    translations.forEach(translation => {
        let characters = Array.from(translation);
        collection.push({translation, characters});
    });

    const listItems = collection.map((entry, index) => 
    <tr key={index}>
        <td>{entry.translation}</td>
        <td>{entry.characters.map((character, index) => <img key={index} src={images[character.toLowerCase()]} alt="1"/>)}</td>
    </tr>
    ); 



    return (
        <div>
            <h4>Saved Translations</h4>
            <table>
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Translation</th>
                    </tr>
                </thead>
                
                <tbody>
                    {listItems}
                </tbody>
            </table>
            {!translations.length > 0 && <p>No translations.</p>}
        </div>
        
    )
}

export default TranslatorTable;