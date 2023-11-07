import scheletroPagina from "./scheletroPagina"


scheletroPagina();

async function tempo () {
    const meteo = await fetch(`http://api.weatherapi.com/v1/forecast.json?q=milano,IT&days=3&lang=it&key=814d944e64c940d1984180548230211`, { mode: "cors" });
    const data = await meteo.json();
    console.log(data.forecast);
}



tempo().catch( err => {
    console.log(err);
});

