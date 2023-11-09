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

        dataOggi.textContent = `Oggi ${utils.getDayName(città.forecast.forecastday[0].date)}  ${utils.giorniFuturi(0)}`;
        dataDomani.textContent = `Domani ${utils.getDayName(città.forecast.forecastday[1].date)}  ${utils.giorniFuturi(1)}`;
        dataDopoDomani.textContent = `${utils.getDayName(città.forecast.forecastday[2].date)}  ${utils.giorniFuturi(2)}`;
        
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
        box.classList.add('boxPrevisioneOraria');

        const boxOrario = document.createElement('div');
        boxOrario.classList.add('boxOrario');
        const orario = document.createElement('span');
        orario.textContent = `${idOra < 10 ? '0' + idOra : idOra}:00`;
        boxOrario.appendChild(orario);
        box.appendChild(boxOrario);

        const boxIcona = document.createElement('div');
        boxIcona.classList.add('boxIcona');
        const icona = document.createElement('img');
        icona.src = `https:`+città.forecast.forecastday[idGiorno].hour[idOra].condition.icon;
        boxIcona.appendChild(icona);
        box.appendChild(boxIcona);

        const boxCondizione = document.createElement('div');
        boxCondizione.classList.add('boxCondizione');
        const condizione = document.createElement('span');
        condizione.textContent= città.forecast.forecastday[idGiorno].hour[idOra].condition.text;
        boxCondizione.appendChild(condizione);
        box.appendChild(boxCondizione);

        const boxTempMedia = document.createElement('div');
        boxTempMedia.classList.add('boxTempMedia');
        const tempMedia = document.createElement('span');
        tempMedia.textContent = ` ${città.forecast.forecastday[idGiorno].hour[idOra].temp_c}°`;
        tempMedia.classList.add('tempMedia');
        boxTempMedia.appendChild(tempMedia);
        box.appendChild(boxTempMedia);
        //Aggiunta animazione per una sola volta
        box.classList.add('animateFromLeft');
        box.addEventListener('animationend', () => {
            box.classList.remove('animateFromLeft');
        });

        return box;

    }

    return {
        aggiornamentoPagina
    };
})();

export default UI;