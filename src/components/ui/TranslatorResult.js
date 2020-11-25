import React, { useEffect } from 'react';
import images from '../../utils/images';

import { setStorage, getStorage } from '../../utils/localstorage';

const TranslatorResult = props => {

    const translations = getStorage('translations') || [];
    const { input } = props;

    const characters = Array.from(input);

    const signCharacters = characters.map((character, index) => 
        <img src={images[character]} alt="1" key={index}/>
    );

    useEffect (() => {
        if (input) {
            saveTranslation(input);
        }
    });
    const saveTranslation = (input) => { 
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