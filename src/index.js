import scheletroPagina from "./scheletroPagina";
import UI from "./UI";
import meteo from "./weather";

scheletroPagina();


const formCity = document.querySelector('.secondaParteNav')
const searchBox = document.getElementById('searchBox');
let città = 'Roma';


formCity.addEventListener('submit' , (e) => {
    e.preventDefault();
    città = searchBox.value;
    boxOggi.click();
    console.log(città);
})

const boxOggi = document.getElementById('box1');
const boxDomani = document.getElementById('box2');
const boxDopoDomani = document.getElementById('box3');


boxOggi.addEventListener('click' , async () => {
    let previsioni = await meteo.tempo(città);
    UI.aggiornamentoPagina(previsioni,0);
    console.log(previsioni)
})
boxOggi.click();

boxDomani.addEventListener('click' , async () => {
    let previsioni = await meteo.tempo(città);
    UI.aggiornamentoPagina(previsioni,1);
    console.log(previsioni)
})

boxDopoDomani.addEventListener('click' , async () => {
    let previsioni = await meteo.tempo(città);
    UI.aggiornamentoPagina(previsioni,2);
    console.log(previsioni)
})