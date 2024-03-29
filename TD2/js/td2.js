/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log( message);

function onLoad() {
	console.log( 'Processus de chargement du document terminé…');
	//initSelect();
	select2();
}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;



function initSelect() {
	const root = document.documentElement;
	root.addEventListener('click', function(event) {
		if (event.target instanceof HTMLElement) {
			select(event.target);
		}
	});
}

function select(element) {
	if (element.className === 'selection') {
		element.className = '';
		element.style.backgroundColor = 'white';
	}
	else {
		element.className = 'selection';
		element.style.backgroundColor = 'yellowgreen';
	}
}
function select2() {
	var elements = document.querySelectorAll("body *:not(#insert-div, #insert-div *)");
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.backgroundColor = "blue";
		elements[i].addEventListener("click", function() {
			if (this.style.backgroundColor == "blue") {
				this.style.backgroundColor = "";
			} else {
				this.style.backgroundColor = "blue";
			}
		});
	}
}
