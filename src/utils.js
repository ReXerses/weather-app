const utils = (() => {
    function getDayName(dateStr, locale) {

    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'short' });        
    }

    function formatoDueCifre(numero) {
        return numero < 10 ? "0" + numero : numero.toString();
    }
      
    function giorniFuturi(offset) {
        const data = new Date();
        data.setDate(data.getDate() + offset);
        const giorno = data.getDate();
        return formatoDueCifre(giorno);
    }

    function approssimaOraAttuale() {
        const data = new Date();
        const ora = data.getHours();
        return ora;
    }

    function convertiCelsiusToFahrenheitAndAggiorna(testoClasse) {
        const temperatureInCelsius = document.querySelectorAll(testoClasse);
      
        temperatureInCelsius.forEach((temperature) => {
          const celsiusValue = parseFloat(temperature.innerText);
          const fahrenheitValue = (celsiusValue * 9/5) + 32;
          temperature.textContent = `${fahrenheitValue.toFixed(1)}° `;
        });
    }

    function convertiFahrenheitToCelsiusAndAggiorna(testoClasse) {
        const temperatureInFahrenheit = document.querySelectorAll(testoClasse);
      
        temperatureInFahrenheit.forEach((temperature) => {
          const fahrenheitValue = parseFloat(temperature.innerText);
          const celsiusValue = (fahrenheitValue - 32) * 5/9;
          temperature.textContent = `${celsiusValue.toFixed(1)}° `;
        });
    }

    function saveCittàToLocalStorage(città) {
        localStorage.setItem("ultimaCittà", città);
    }
    
    // Carica il nome dell'ultima città cercata dall'archivio locale
    function loadCittàFromLocalStorage() {
        return localStorage.getItem("ultimaCittà") || "";
    }
      
    return {
        getDayName,
        giorniFuturi,
        approssimaOraAttuale,
        convertiCelsiusToFahrenheitAndAggiorna,
        convertiFahrenheitToCelsiusAndAggiorna,
        saveCittàToLocalStorage,
        loadCittàFromLocalStorage
    };
})();

export default utils;