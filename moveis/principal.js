let banners = 
	["Os melhores do Brasil!", "Qualidade e preço baixo!"];
let currentBanner = 0;

function bannerChange(){
	currentBanner = (currentBanner + 1) % 2;
	document.querySelector('h2#mensagem').textContent = 
		banners[currentBanner];
}
setInterval(bannerChange, 2000);
