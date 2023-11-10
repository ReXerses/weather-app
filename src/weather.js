const meteo = (() => {
    async function tempo (città) {
        
        try {
            const meteo = await fetch(`http://api.weatherapi.com/v1/forecast.json?q=${città},IT&days=3&lang=it&key=814d944e64c940d1984180548230211`, { mode: "cors" });
            const data = await meteo.json();
            if(data.location.name.toLowerCase() != città.toLowerCase()) {
                throw new Error (`Città ${città} non trovata!`);
            }
            return data;
        }catch(error) {
            console.error('Errore durante la chiamata API:', error);
            alert(error);
            return null;
        }
    }
    
    return {
        tempo
    };
})();

export default meteo;