import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from 'react-codemirror';

import './index.css';
// import the codemirror styles, otherwise nothing is shown
import 'codemirror/lib/codemirror.css';
// import the custom mode
import './languageMode';

const App = () => {
    const [code, setCode] = useState('1 + 2 - 3');

    const options = {
        lineNumbers: true,

        // specify the custom mode
        mode: 'calc'
    };

    return (
        <div>
            <h1>React code mirror - custom lang</h1>
            <CodeMirror value={code} onChange={newCode => setCode(newCode)} options={options}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

