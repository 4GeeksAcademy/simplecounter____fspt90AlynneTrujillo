import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Index.css
import '../styles/index.css';

// Font Awesome Icons
import './icons.js'; // Import the icons setup

// Components
import Counter from './components/Counter.jsx';

let counter = 0;


const renderApp = () => {
    const digits = [1000, 100, 10, 1].map(divisor => Math.floor(counter / divisor) % 10);
    const [fourthDig, thirdDig, secondDig, firstDig] = digits;

    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <Counter 
                fourthDig={fourthDig} 
                thirdDig={thirdDig} 
                secondDig={secondDig} 
                firstDig={firstDig} 
            />
        </React.StrictMode>
    );
};

renderApp();
setInterval(() => {
    counter++;
    renderApp();
}, 1000);