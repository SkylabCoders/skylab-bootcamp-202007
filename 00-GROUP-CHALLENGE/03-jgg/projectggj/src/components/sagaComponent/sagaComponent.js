import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import store from '../../stores/store';
import { loadCharList } from '../../actions/actions';

function SagaComponent(props) {

    let [chars, setChars] = useState(store.getCharacters());
    let series;
    useEffect(() => {
        store.addChangeListener(onChange);
        if (chars.length === 0) loadCharList();
        return () => store.removeChangeListener(onChange);
    }, [chars.length]);

    function onChange() {
        setChars(store.getCharacters());
    }
    function getSeries() {
        let arry = [];
        let repeat = false;
        debugger;
        for (let character of chars) {
            if (arry.length === 0) {
                arry.push(character.series);
            } else {
                for (let ser of arry) {
                    if (character.series === ser) {
                        repeat = true
                    }
                }
                if (!repeat)
                    arry.push(character.series);
                repeat = false
            }

        }
        return arry;
    }

    series = getSeries();


    return (
        <div>
            <p>SagaComponent works!</p>
            <Link to='/charList'>Z</Link>
        </div>

    )
}

export default SagaComponent;