import scheletroPagina from "./scheletroPagina";
import UI from "./UI";
import meteo from "./weather";
import utils from "./utils";

scheletroPagina();

const formCity = document.querySelector('.secondaParteNav')
const searchBox = document.getElementById('searchBox');
const cambioGradi = document.getElementById('cambioGradi')


let città = utils.loadCittàFromLocalStorage();

if(!città) {
    città = 'Roma';
}
searchBox.placeholder= città;

formCity.addEventListener('submit' , (e) => {
    e.preventDefault();
    città = searchBox.value;
    utils.saveCittàToLocalStorage(città);
    boxOggi.click();
})

const boxOggi = document.getElementById('box1');
const boxDomani = document.getElementById('box2');
const boxDopoDomani = document.getElementById('box3');


cambioGradi.addEventListener('click' , ()=> {
    if(cambioGradi.classList.contains('celsius')) {
        cambioGradi.classList.remove('celsius');
        cambioGradi.classList.add('fahre');
        utils.convertiCelsiusToFahrenheitAndAggiorna('.gradiMin');
        utils.convertiCelsiusToFahrenheitAndAggiorna('.gradiMax');
        utils.convertiCelsiusToFahrenheitAndAggiorna('.tempMedia');
    } else {
        cambioGradi.classList.remove('fahre');
        cambioGradi.classList.add('celsius');
        utils.convertiFahrenheitToCelsiusAndAggiorna('.gradiMin');
        utils.convertiFahrenheitToCelsiusAndAggiorna('.gradiMax');
        utils.convertiFahrenheitToCelsiusAndAggiorna('.tempMedia');
    }
})

boxOggi.addEventListener('click' , async () => {
    boxDomani.classList.remove('giornoSelezionato');
    boxDopoDomani.classList.remove('giornoSelezionato');
    boxOggi.classList.add('giornoSelezionato');
    cambioGradi.classList.remove('fahre');
    cambioGradi.classList.add('celsius');
    let previsioni = await meteo.tempo(città);
    UI.aggiornamentoPagina(previsioni,0);
})
boxOggi.click();

boxDomani.addEventListener('click' , async () => {
    boxOggi.classList.remove('giornoSelezionato');
    boxDopoDomani.classList.remove('giornoSelezionato');
    boxDomani.classList.toggle('giornoSelezionato');
    cambioGradi.classList.remove('fahre');
        cambioGradi.classList.add('celsius');
    let previsioni = await meteo.tempo(città);
    UI.aggiornamentoPagina(previsioni,1);
})

boxDopoDomani.addEventListener('click' , async () => {
    boxOggi.classList.remove('giornoSelezionato');
    boxDomani.classList.remove('giornoSelezionato');
    boxDopoDomani.classList.toggle('giornoSelezionato');
    cambioGradi.classList.remove('fahre');
    cambioGradi.classList.add('celsius');
    let previsioni = await meteo.tempo(città);
    UI.aggiornamentoPagina(previsioni,2);
})