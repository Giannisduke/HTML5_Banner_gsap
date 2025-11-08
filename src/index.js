import './styles.scss';

import { gsap } from "gsap";
//import { css, elapsedTime, flipClock, theme } from 'flipclock';
import {flipClock, elapsedTime, theme, useCss, css } from 'flipclock';

const parent = document.querySelector('.clock');
// Wait for countdown component to be ready
document.addEventListener('DOMContentLoaded', () => {
flipClock({
    parent,
    face: elapsedTime({
        to: new Date(`${new Date().getFullYear() + 1}-01-01`),
        format: '[DD]:[hh]:[mm]:[ss]'
    }),
    theme: theme({
        dividers: ':',
        labels: [['Ημέρες'], ['Ώρες'], ['Λεπτά'], ['Δευτερόλεπτα']],
        css: css({
            fontSize: '1.4rem'
        })
    })
});
});

// Παράδειγμα animation με gsap
// gsap.to(".element", { duration: 1, x: 100 });

