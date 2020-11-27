import React from 'react';
import { getStorage } from '../../../utils/localstorage';
import images from '../../../utils/images';
import './translatorTable.css';

const TranslatorTable = () => {

    const translations = getStorage('translations') || []; // create variable which gets the currently saved translations, or if none, an empty a array
    const collection = [];
    
    translations.forEach(translation => { // for each translation, create an array of characters from that translation and then push both to a collection
        translation = translation.replace(/\s+/g, '_').toLowerCase(); // spaces are being replaced with underscores
        let characters = Array.from(translation);
        collection.push({translation, characters});
    });

    const listItems = collection.map((entry, index) => // for each entry in collection, create a listItem, prints the word and translated version to a tr-tag
    <tr key={index}>
        <td id="wordToTranslate">{entry.translation}</td>
        <td id="translation">{entry.characters.map((character, index) => <img key={index} src={images[character.toLowerCase()]} alt="1"/>)}</td>
    </tr>
    ); 

    return (
        <div id="savedTranslationsTable">
            <h4 className="m-4">Saved Translations</h4>
            {!translations.length > 0 ? <p>There are currently no saved translations.</p> : 
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Word</th>
                        <th scope="col">ASL Translation</th>
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