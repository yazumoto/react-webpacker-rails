import ReactDOM from 'react-dom';
import React from 'react';
import { Hello } from "./hello/hello";

document.addEventListener('DOMContentLoaded', () => {
    const sampleNode = document.getElementById('sample-data');
    const sampleData = JSON.parse(sampleNode.getAttribute('data'));

    ReactDOM.render(
        <Hello name={sampleData.name} value={sampleData.value}/>,
        document.body.appendChild(document.createElement('div')),
    )
});
