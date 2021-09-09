var banners =
["Os melhores do Brasil!", "Qualidade e preço baixo!"];
var bannerAtual = 0;
function trocaBanner() {
bannerAtual = (bannerAtual + 1) % 2;
document.querySelector('h2#mensagem').textContent =
banners[bannerAtual];
setInterval(trocaBanner, 2000);
<!-- início do arquivo ... -->
<head>
<!-- tags meta, link e title ... -->
<script src="js/principal.js"></script>
</head>
<!-- restante do arquivo ... -->