import React, { useEffect } from 'react';
import images from '../../utils/images';

import { setStorage, getStorage } from '../../utils/localstorage';

const TranslatorResult = props => {

    const translations = getStorage('translations') || [];  // create variable which gets the currently saved translations, or if none, an empty a array
    const { input } = props; // get variable input from parent through props

    const characters = Array.from(input); // create array of characters from input value

    const signCharacters = characters.map((character, index) => // for each character, create an img tag that takes the image from an object called images
        <img src={images[character.toLowerCase()]} alt="1" key={index}/>
    );

    useEffect (() => {
        if (input) { // if there is an input, run this
            let value = input; 
            value = value.replace(/_/g, ' ').toLowerCase(); // replace the underscores with spaces again, before saving to array
            saveTranslation(value);
        }
    });
    const saveTranslation = (input) => { // save the translations in an array that is max 10 entries long, if longer shift oldest entry and push the new one 
        if (translations.length >= 10) {
            translations.shift();
            translations.push(input);
        } else {
            translations.push(input);
        }

        setStorage('translations', translations); // send translations to localstorage
    }

    return (
        <div>{signCharacters}</div>
    )
} 

export default TranslatorResult;