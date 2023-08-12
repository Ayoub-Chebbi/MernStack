import React, { useState } from 'react';

const Form = () => {
    const [todoText, setTodoText] = useState("");
    const [displayTexts, setDisplayTexts] = useState([]);

    const handleAddClick = () => {
        setDisplayTexts([...displayTexts, todoText]);
        setTodoText("");
    }

    const handleDeleteClick = (index) => {
        const updatedTexts = [...displayTexts];
        updatedTexts.splice(index);
        setDisplayTexts(updatedTexts);
    }

    return (
        <div>
            <input type='text' onChange={(e) => setTodoText(e.target.value)} value={todoText} />
            <button onClick={handleAddClick}>Add</button>
            {displayTexts.map((text, index) => (
                <div key={index}>
                    <h1>{text}</h1>
                    <button onClick={() => handleDeleteClick(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Form;
