import React from 'react';
import './App.scss';
import Tooltip from '../../examples/Tooltip/Tooltip';

function App() {
    return (
        <div className="App">
            <p>
                В этом тексте где-то есть <Tooltip text="А вот и подсказка">подсказка</Tooltip>...
            </p>
            <p>
                <Tooltip text="Вот эта подсказка">Здесь</Tooltip> находиться еще одна подсказка
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptates nobis voluptatibus! Iusto
                dolore architecto numquam, est ipsum nemo assumenda laboriosam itaque libero repellat? Impedit{' '}
                <Tooltip text="Lorem ipsum">iuress</Tooltip> corporis ratione quo voluptas?
            </p>
        </div>
    );
}

export default App;
