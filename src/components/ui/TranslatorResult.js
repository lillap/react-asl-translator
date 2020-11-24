import React from 'react';
import images from '../../utils/images';

import { setStorage, getStorage } from '../../utils/localstorage';

const TranslatorResult = () => {

    const translations = getStorage('translations') || [];
    const currentTranslation = getStorage('currentTranslation');

    const characters = Array.from(currentTranslation);

    const signCharacters = characters.map((character, index) => 
        <img src={images[character]} alt="1" key={index}/>
    );

    const saveTranslation = (input) => { // currently not working as intended
        if (translations.length >= 10) {
            translations.shift();
            translations.push(input);
        } else {
            translations.push(input);
        }

        setStorage('translations', translations);
    }

    return (
        <div>{signCharacters}</div>
    )
} 

export default TranslatorResult;