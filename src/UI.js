import utils from "./utils";

const UI = (() => {

    function aggiornamentoPagina (città,idGiorno) {
        const nomeCittà = document.querySelector('.nomePaese');
        const giorno = document.querySelector('.giorno'); //primaParteMain
        const dataOggi = document.querySelector('.oggi');
        const dataDomani = document.querySelector('.domani');
        const dataDopoDomani = document.querySelector('.dopoDomani');
        const iconaOggi = document.getElementById('iconaOggi');
        const iconaDomani = document.getElementById('iconaDomani');
        const iconaDopoDomani = document.getElementById('iconaDopoDomani');
        const gradiMinOggi = document.getElementById('gradiMinOggi');
        const gradiMaxOggi = document.getElementById('gradiMaxOggi');

        const gradiMinDomani = document.getElementById('gradiMinDomani');
        const gradiMaxDomani = document.getElementById('gradiMaxDomani');
        const gradiMinDopoDomani = document.getElementById('gradiMinDopoDomani');
        const gradiMaxDopoDomani = document.getElementById('gradiMaxDopoDomani');

        nomeCittà.textContent = `Previsioni meteo ${città.location.name}`;
        giorno.textContent =  `${utils.getDayName(città.forecast.forecastday[idGiorno].date)}  ${utils.giorniFuturi(idGiorno)}`;

        dataOggi.textContent = `Oggi ${utils.getDayName(città.forecast.forecastday[0].date)}  ${utils.giorniFuturi(idGiorno)}`;
        dataDomani.textContent = `Domani ${utils.getDayName(città.forecast.forecastday[1].date)}  ${utils.giorniFuturi(idGiorno)}`;
        dataDopoDomani.textContent = `${utils.getDayName(città.forecast.forecastday[2].date)}  ${utils.giorniFuturi(idGiorno)}`;
        
        iconaOggi.src = `https:`+città.forecast.forecastday[0].day.condition.icon;
        iconaOggi.alt = città.forecast.forecastday[0].day.condition.text;

        iconaDomani.src = `https:`+città.forecast.forecastday[1].day.condition.icon;
        iconaDomani.alt = città.forecast.forecastday[1].day.condition.text;

        iconaDopoDomani.src =`https:`+città.forecast.forecastday[2].day.condition.icon;
        iconaDopoDomani.alt = città.forecast.forecastday[2].day.condition.text;

        gradiMinOggi.textContent = `${città.forecast.forecastday[0].day.mintemp_c}° `
        gradiMaxOggi.textContent = `${città.forecast.forecastday[0].day.maxtemp_c}° `

        gradiMinDomani.textContent = `${città.forecast.forecastday[1].day.mintemp_c}° `
        gradiMaxDomani.textContent = `${città.forecast.forecastday[1].day.maxtemp_c}° `

        gradiMinDopoDomani.textContent = `${città.forecast.forecastday[2].day.mintemp_c}° `
        gradiMaxDopoDomani.textContent = `${città.forecast.forecastday[2].day.maxtemp_c}° `

        carimentoPrevisioniOrarie(città, idGiorno);
    }

    function carimentoPrevisioniOrarie (città, idGiorno) {
        const contenitorePrevisioniOrarie = document.querySelector('.terzaParteMain');
        contenitorePrevisioniOrarie.innerHTML= '';

        if(idGiorno === 0) {
            let i = utils.approssimaOraAttuale();
            while (i < 24) {
                contenitorePrevisioniOrarie.appendChild(creazioneBoxPrevisione(città,idGiorno, i));
                i++;
            }
        } else {
            for(let i=0 ; i < 24; i++) {
                contenitorePrevisioniOrarie.appendChild(creazioneBoxPrevisione(città,idGiorno, i));
            }
        }

    }

    function creazioneBoxPrevisione (città, idGiorno, idOra) {
        const box = document.createElement('div');
        box.classList.add('boxOra');

        const orario = document.createElement('span');
        orario.textContent = `${idOra < 10 ? '0' + idOra : idOra}:00`;
        box.appendChild(orario);

        const icona = document.createElement('img');
        icona.src = `https:`+città.forecast.forecastday[idGiorno].hour[idOra].condition.icon;
        box.appendChild(icona);

        const condizione = document.createElement('span');
        condizione.textContent= città.forecast.forecastday[idGiorno].hour[idOra].condition.text;
        box.appendChild(condizione);

        const tempMedia = document.createElement('span');
        tempMedia.textContent = ` ${città.forecast.forecastday[idGiorno].hour[idOra].temp_c}°`;
        box.appendChild(tempMedia);

        return box;

    }



    return {
        aggiornamentoPagina
    };
})();

export default UI;