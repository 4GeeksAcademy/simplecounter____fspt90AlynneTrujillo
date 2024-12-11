import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Counter = ({ fourthDig, thirdDig, secondDig, firstDig }) => {
    return (
        <div className="mainCounter">
            <div className="clockIcon">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="millionsDigit">0</div>
            <div className="hundredsOfThousandsDigit">0</div>
            <div className="tensOfThousandsDigit">{fourthDig}</div>
            <div className="thousandsDigit">{thirdDig}</div>
            <div className="hundredsDigit">{secondDig}</div>
            <div className="tensDigit">{firstDig}</div>
        </div>
    );
};

export default Counter;