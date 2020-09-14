import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translation, setTranslation] = useState('');
    useEffect(() => {
        const doTranslation = async () => {
            const { data }= await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslation(data.data.translations[0].translatedText);
        };
        doTranslation();
       
    }, [language, text]);
    return (
        <h1 className="ui header">{translation}</h1>
    );
};

export default Convert;