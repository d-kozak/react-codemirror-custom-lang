import CodeMirror from 'codemirror';
import './languageMode.css';

const calcLang = () => {

    const tokenNames = {
        '+': 'plus',
        '-': 'minus'
    };

    return {

        // see https://codemirror.net/doc/manual.html#modeapi
        token(stream) {
            let currentChar = stream.next();
            if (currentChar in tokenNames) {
                return tokenNames[currentChar];
            }
            return null;
        }
    };
};


CodeMirror.defineMode("calc", calcLang);