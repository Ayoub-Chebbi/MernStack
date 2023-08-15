import React from 'react';
import { useParams } from 'react-router-dom';

const Color = () => {
    const { TextColor, backgroundColor, Text } = useParams();

    const containerStyle = {
        backgroundColor: backgroundColor,
        color: TextColor,
    };

    return (
        <div style={containerStyle}>
            <h1>The Word is : {Text}</h1>
        </div>
    );
};

export default Color;
