import React from 'react';
import { getStorage } from '../../utils/localstorage';
import images from '../../utils/images';

const TranslatorTable = () => {

    const translations = getStorage('translations') || []; // create variable which gets the currently saved translations, or if none, an empty a array
    const collection = []; // empty array
    
    translations.forEach(translation => { // for each translation, create an array of characters from that translation and then push both to a collection
        let characters = Array.from(translation);
        collection.push({translation, characters});
    });

    const listItems = collection.map((entry, index) => // for each entry in collection, create a listItem, prints the word and translated version to a tr-tag
    <tr key={index}>
        <td>{entry.translation}</td>
        <td>{entry.characters.map((character, index) => <img key={index} src={images[character.toLowerCase()]} alt="1"/>)}</td>
    </tr>
    ); 

    return (
        <div>
            <h4>Saved Translations</h4>
            {!translations.length > 0 ? <p>No translations.</p> : 
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
            </table>}
        </div>
        
    )
}

export default TranslatorTable;