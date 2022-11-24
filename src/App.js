import React from 'react';
import ReactDOM from'react-dom';
const heading = React.createElement("h1",{ id: 'title'},"Hello World");
//assigning root to html element by ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render will replace whaterver there is in the root with heading 2
root.render(heading);