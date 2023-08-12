import React from 'react';
import Tabs from './Components/Tabs'; // Make sure to adjust the import path

const App = () => {
    const tabItems = [
        {
            label: 'Tab 1',
            content: <div>This is the content of Tab 1.</div>,
        },
        {
            label: 'Tab 2',
            content: <div>This is the content of Tab 2.</div>,
        },
        {
            label: 'Tab 3',
            content: <div>This is the content of Tab 3.</div>,
        },
    ];

    return (
        <div className="App">
            <Tabs items={tabItems} />
        </div>
    );
};

export default App;
