const btn = document.getElementById('nederlands-toggle');
const control = document.getElementById('controls');
const article = document.getElementById('articles');
const components = document.getElementById('component');
const fontup = document.getElementById('fontplus');
const fontdown = document.getElementById('fontmin');
const darkmode = document.getElementById('dark');
const grayscale = document.getElementById('gray');
const contrasts = document.getElementById('contrast');
const artworks = document.getElementById('artwork');
const motions = document.getElementById('motion');

btn.addEventListener('click', function handleClick() {
control.textContent = "Toegankelijkheid opties";
article.textContent = "Artikelen";
components.textContent = "Componenten";
fontup.textContent = "Tekst vergroten";
fontdown.textContent = "Tekst verkleinen";
darkmode.textContent = "Donker thema";
grayscale.textContent = "Grijstinten";
contrasts.textContent = "Verhoog contrast";
artworks.textContent = "Verberg beeld";
motions.textContent = "Verminder beweging";
});