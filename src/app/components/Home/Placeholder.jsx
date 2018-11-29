import React from 'react';

const Placeholder = () => (
    <div className="flex flex-column align-center">
        {Array.from(Array(20).keys()).map((i) => (<h1 key={i}>Placeholder</h1>))}
    </div>
);

export default Placeholder;