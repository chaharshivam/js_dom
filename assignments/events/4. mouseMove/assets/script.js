const box = document.body.querySelector('.box');

const screenX = document.querySelector('#screen-x');
const screenY = document.querySelector('#screen-y');
const clientX = document.querySelector('#client-x');
const clientY = document.querySelector('#client-y');

box.addEventListener('mousemove', e => {
	screenX.innerText = `Screen-X : ${e.screenX}`;
	screenY.innerText = `Screen-Y : ${e.screenY}`;
	clientX.innerText = `Client-X : ${e.clientX}`;
	clientY.innerText = `Client-Y : ${e.clientY}`;
});