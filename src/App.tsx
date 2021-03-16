import React from 'react';
import './App.scss';
import Tooltip from './examples/Tooltip/Tooltip';

function App() {
    return (
        <div className="App">
            <p>
                Lorem ipsum dolor sit amet <Tooltip text="this is a consectetur">consectetur</Tooltip> adipisicing elit.
                Lorem <Tooltip text="this is a ipsum">ipsum</Tooltip> dolor sit amet. Magni, repellendus.
            </p>
        </div>
    );
}

export default App;
