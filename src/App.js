import React, { useState } from 'react';
import Accordion from './componenets/Accordion';
import Search from './componenets/Search';
import Dropdown from './componenets/Dropdown';
import Translate from './componenets/Translate';
import Route from './componenets/Route';
import Header from './componenets/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is front end javascript framework.',
    },
    {
        title: 'Why use React?',
        content: 'React is favorite JS library among enginner.',
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating componenet',
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade Of Blue',
        value: 'blue'
    }
];





export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path = '/'>
                <Accordion items={items} />
            </Route>
            <Route path = '/list'>
                <Search />
            </Route>
            <Route path = '/dropdown'>
                <Dropdown
                 label="Select a Color"
                 options={options}
                 selected={selected}
                 onSelectedChange={setSelected}
                 />
            </Route>
            <Route path = '/translate'>
                <Translate />    
            </Route>                  
        </div>
    );
}