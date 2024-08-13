import aries from '../src/files/icons/aries.svg';
import taurus from '../src/files/icons/taurus.svg';
import gemini from '../src/files/icons/gemini.svg';
import cancer from '../src/files/icons/cancer.svg';
import leo from '../src/files/icons/leo.svg';
import virgo from '../src/files/icons/virgo.svg';
import libra from '../src/files/icons/libra.svg';
import scorpio from '../src/files/icons/scorpio.svg';

import sagittarius from '../src/files/icons/sagittarius.svg';
import capricorn from '../src/files/icons/capricorn.svg';
import aquarius from '../src/files/icons/aquarius.svg';
import pisces from '../src/files/icons/pisces.svg';


const horoscope_data = [
    {
        name: 'Овен',
        date: '21.03 - 12.04',
        img: aries,
        link: 'aries',
        
    },
    {
        name: 'Телец',
        date: '21.04 - 22.05',
        img: taurus,
        link: 'taurus',
    },
    {
        name: 'Близнецы',
        date: '23.05 - 21.06',
        img: gemini,
        link: 'gemini',
    },
    {
        name: 'Рак',
        date: '22.06 - 22.07',
        img: cancer,
        link: 'cancer',
    },
    {
        name: 'Лев',
        date: '23.07 - 22.08',
        img: leo,
        link: 'leo',
    },
    {
        name: 'Дева',
        date: '23.08 - 22.09',
        img: virgo,
        link: 'virgo',
    },
    {
        name: 'Весы',
        date: '23.09 - 22.10',
        img: libra,
        link: 'libra',
    },
    {
        name: 'Скорпион',
        date: '23.10 - 21.11',
        img: scorpio,
        link: 'scorpio',
    },
    {
        name: 'Стрелец',
        date: '22.11 - 22.12',
        img: sagittarius,
        link: 'sagittarius',
    },
    {
        name: 'Козерог',
        date: '23.12 - 20.01',
        img: capricorn,
        link: 'capricorn',
    },
    {
        name: 'Водолей',
        date: '21.01 - 19.02',
        img: aquarius,
        link: 'aquarius',
    },
    {
        name: 'Рыбы',
        date: '20.02 - 20.03',
        img: pisces,
        link: 'pisces',
    },
];

// Convert array to object
const horoscope_data_obj = horoscope_data.reduce((acc, item) => {
    acc[item.link] = item;
    return acc;
}, {});


export default horoscope_data_obj;