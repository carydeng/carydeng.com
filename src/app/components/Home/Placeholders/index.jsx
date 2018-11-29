import React from 'react';
import {Placeholder} from './elements'

const Placeholders = ({repeat = 1}) => (
    <div className="flex flex-column align-center">
        {Array.from(Array(repeat).keys()).map((i) => (<Placeholder key={i}>Placeholder</Placeholder>))}
    </div>
);

export default Placeholders;