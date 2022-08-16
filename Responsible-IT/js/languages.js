//define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]");

//language translations
    var language = {
        eng: {
           control: "Accessibility Controls"
        },
        nl: {
            components: "Componenten",
            article:"Artikelen",
            control: "Toegankelijkheid",
            fontup: "Tekst vergroten",
            fontdown: "Tekst verkleinen",
            darkmode: "Donker thema",
            grayscale: "Grijstinten",
            contrasts: "Hoog contrast",
            artworks: "Verberg beeld",
            motions: "Verminder beweging"
            }
    };

//define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#nl") {
        component.textContent = language.nl.components;
        articles.textContent = language.nl.article;
        controlsmenu.textContent = language.nl.control;
        fontplus.textContent = language.nl.fontup;
        fontmin.textContent = language.nl.fontdown;
        dark.textContent = language.nl.darkmode;
        gray.textContent = language.nl.grayscale;
        contrast.textContent = language.nl.contrasts;
        artwork.textContent = language.nl.artworks;
        motion.textContent = language.nl.motions;
    }
}

//define language reload onclick illiteration
for (i = 0; i < dataReload.length; i++) {
    dataReload[i].onclick = function reloadPage() {
        setTimeout(function () {
          location.reload();
        }, 100);
      }
}
