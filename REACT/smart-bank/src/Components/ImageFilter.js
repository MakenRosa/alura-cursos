import React from 'react';
import nutrition from '../assets/images/nutrition.svg';
import others from '../assets/images/others.svg';
import health from '../assets/images/health.svg';
import transport from '../assets/images/transport.svg';
import utilities from '../assets/images/utilities.svg';
import { IconTheme } from '../Components/UI';

export default (type) => {
    const Images = {
        Restaurant: <IconTheme src={nutrition} alt='Restaurant' />,
        Utilities: <IconTheme src={utilities} alt='Utilities' />,
        Health: <IconTheme src={health} alt='Health' />,
        Transport: <IconTheme src={transport} alt='Transport' />,
        default: <IconTheme src={others} alt='Others' />
    }
    return Images[type] || Images.default;
}