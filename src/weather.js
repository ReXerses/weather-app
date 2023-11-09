const meteo = (() => {
    async function tempo (città) {
        const meteo = await fetch(`http://api.weatherapi.com/v1/forecast.json?q=${città},IT&days=3&lang=it&key=814d944e64c940d1984180548230211`, { mode: "cors" });
        const data = await meteo.json();
        return data;
    }
    
    
    
    tempo().catch( err => {
        console.log(err);
    });

    return {
        tempo
    };
})();

export default meteo;