"use strict";

let menu = window.document.querySelector('.menu');
let iconOpen = window.document.querySelector('.open');
let iconClose = window.document.querySelector('.close');

function openMenu() {
 menu.style.display = 'flex';
 iconOpen.style.display = 'none';
 iconClose.style.display = 'block';
 menu.style.animation ='popUp .3s linear';
};

function closeMenu(){
 menu.style.display = 'none';
 iconOpen.style.display = 'block';
 iconClose.style.display = 'none';
};

function goToHeader(){
 window.scrollTo({
   left: 0,
   top: 0,
   behavior:'smooth',
  });
};