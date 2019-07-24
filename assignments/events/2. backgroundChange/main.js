document.body.style.background = `#${Math.floor( Math.random() * 1000000)}`;
document.body.style.color= `#${Math.floor( Math.random() * 1000000)}`;

document.addEventListener('keydown', (event) => {
	if (event.which == 32) {
		document.body.style.background = `#${Math.floor( Math.random() * 1000000)}`;
		document.body.style.color= `#${Math.floor( Math.random() * 1000000)}`;
	}
})