'use strict';

/* eslint-env browser */

// const { webFrame } = require('electron');

// const snek = document.getElementById('snek');
// const counter = document.getElementById('boops');

// webFrame.setZoomLevelLimits(1, 1);

// window.boops = 0;
// function boop() {
//   window.boops += 1;
//   counter.innerHTML = `${window.boops} BOOPS`;
// }

// snek.onmousedown = () => {
//   snek.style['font-size'] = '550%';
//   console.log('test');
//   boop();
// };
//
// snek.onmouseup = () => {
//   snek.style['font-size'] = '500%';
// };

window.hero = '';
window.heroName = '';
window.map = '';

function changeHeroTo(hero) {
  window.hero = hero;
  switch (hero) {
    case 'sarge':
      window.heroName = 'Sergant \'Sarge\' Stone';
      break;
    case 'yuri':
      window.heroName = 'Yuri The Yeti';
      break;
    case 'ss':
      window.heroName = 'Sweet Science';
      break;
    case 'cog':
      window.heroName = 'Cogwheel';
      break;
    case 'roly':
      window.heroName = 'Roly Poly Fat Fat';
      break;
    case 'astra':
      window.heroName = 'Astarella';
      break;
    case 'nigel':
      window.heroName = 'Nigel Purdey-Longshot';
      break;
    case 'kira':
      window.heroName = 'Kira-Chan';
      break;
    case 'juan':
      window.heroName = 'O.P. \'Juan\' Shinobi';
      break;
    case 'kreepy':
      window.heroName = 'Kreepy The Klown';
      break;
    case 'genie':
      window.heroName = 'Dream Genie';
      break;
    case 'eliza':
      window.heroName = '\'Doc\' Eliza Doolally';
      break;
    case 'tony':
      window.heroName = 'Anthony \'Tony\' Turretto';
      break;
    case 'vander':
      window.heroName = 'Vander Graaf';
      break;
    case 'trond':
      window.heroName = 'Trondson';
      break;
  }
}

const confirmButton = document.getElementById('confirm');
const mapInput = document.getElementById('map');

confirmButton.onclick = () => {
  window.map = mapInput.value;
};

// const main = document.getElementById('main');
//
// main.onmousedown = function (e) {
//   console.log(e);
//   e = e || window.event;
//   const elementAlt = (e.target || e.srcElement).alt;
//
//   // call your re-create function
//   changeHeroTo(elementAlt);
//   // ...
// }
//
// let elements = document.getElementsByTagName('img');
// for (let i = 0, len = elements.length; i < len; i++) {
//   elements[i].addEventListener("click", function() {
//     changeHeroTo(elements[i].alt);
//   });
// }
