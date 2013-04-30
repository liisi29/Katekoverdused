var howMany = document.getElementById ('howMany');
var button = document.getElementById ('calculate');	
var result = document.getElementById ('result');

function removeErrors (element){
	var children = element.children;
	var child;
	for (var i = 0; i < children.length; i++) {
		if (children[i].className === 'error'){
			child = children[i];
		}
	}
	if(child !== undefined){
		element.removeChild(child);
	}
}

//nupule vajutamine	
button.addEventListener('click', function(){

	removeErrors(howMany.parentNode);
	if (howMany.value === '' || isNaN(howMany.value)){
		var span = document.createElement ('span');
		span.innerText = 'Kätekõverduste arv peab olema number!';
		span.className = 'error';
		howMany.parentNode.appendChild (span);  
		//weight-i parent element = label. 
		//Lisa child element = span paremale poole
	}
	var howManyNr = parseFloat(howMany.value);	
	
	var li = document.createElement('li');
	if (howManyNr < 10) {
		li.innerText = 'Alla kümne. Olgem ausad.. see on nõrk.' +
			'Pole hullu. Sa ei pea olema tugev, et alustada.' +
			'Aga Sa pead alustama selleks, et SAADA tugevaks!';			
	} else if (howManyNr < 20){		
		li.innerText = 'Pole paha. Alguse kohta.';
	} else if (howManyNr < 30){
		li.innerText = 'Keskmisest naisest oled Sa tugevam! Aga väga kõvani on veel pikk tee minna.';
	} else if (howManyNr < 40){		
		li.innerText = 'Sa oled tugevam kui keskmine mees! Aga mõned mehed (ja ka mõned naised) on ' +
			'ikka veel palju tugevamad.';
	} else if (howManyNr < 50){
		li.innerText = 'Peaaegu 50! Kui Sa oled naine, siis: "Hästi! Jätka samas vaimus". ' +
		'Kui Sa oled mees, siis.. moodsate standardite järgi oled jah kõva. Aga vana kooli ' +
		'meheks siiski ei küündi.';
	} else if (howManyNr < 60){		
		li.innerText = 'Poole peal sajani. Teine pool läheb lihtsamalt. Kuigi.. enamik inimesi' +
		'ei jõua kunagi niigi kaugele. Tubli! Tugev oled!';
	} else if (howManyNr < 70){
		li.innerText = 'Sa oled tugevam kui enamik noori poisse. Vau! Kõva!';
	} else if (howManyNr < 80){		
		li.innerText = 'Kohtume kuu aja pärast! Oled jõudnud siiamaani (KÕVA!!), jõuad ka 100ni!';
	} else if (howManyNr < 90){
		li.innerText = 'See on juba nii suur number, et ma ei oska enam kommentaarigi kirjutada. Kõva!' +
			'Aga tee trenni! 100 on nii lähedal. Sa ei jäta ju ometi praegu pooleli?!';
	} else if (howManyNr < 100){		
		li.innerText = 'Vau! Aga pinguta natuke veel. Üle saja on ikka VEEL kõvem. Sa oled PEAAEGU seal!';
	} else if (howManyNr >= 100){
		li.innerText = 'Ainult üks kommentaar: Ülikõva!';
	} else {
		li.innerText = 'Kirjuta lahtrisse korduste arv numbrina!';
	}
	
	result.appendChild(li);		//alamelemendi juurdepanek
});
