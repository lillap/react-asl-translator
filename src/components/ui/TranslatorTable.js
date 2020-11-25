import React from 'react';
import { getStorage } from '../../utils/localstorage';

const TranslatorTable = props => {

    const translations = getStorage('translations') || [];

    const listItems = translations.map((translation, index) => 
        <li key={index}>{translation}</li>
    );

    return (
        <div>
            <h4>Saved Translations</h4>
            <ul>{listItems}</ul>
            {!translations.length > 0 && <p>No translations.</p>}
        </div>
        
    )
}

export default TranslatorTable;