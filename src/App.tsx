import React from 'react';
import './App.css';
import Tooltip from './examples/Tooltip/Tooltip';

function App() {
    return (
        <div className="App">
            <p>
                Lorem ipsum dolor sit amet <Tooltip text="this is a tooltip">consectetur</Tooltip> adipisicing elit.
                Magni, repellendus.
            </p>
        </div>
    );
}

export default App;
