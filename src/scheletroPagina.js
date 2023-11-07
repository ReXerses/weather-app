const scheletroPagina = (() => {
    const body = document.body;

    body.innerHTML = `<style>

    body {
        margin: 0px;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        max-height: 100%;
        justify-content: space-between;
        font-size: 2rem;
    }
    
    .footer {
        font-size: 2rem;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        display: flex;
        gap: 5px;
        background-color: #b5b5b5;
        justify-content: center;
        z-index: 3;
    }
    
    a{
        text-decoration: none;
    }
    
    a img {
        height: 2.1rem;
        width: 2rem;
        filter:brightness(0) invert(1);
    }
    
    .nome-github {
        color: rgb(255, 255, 255);
    }
    
    nav {
        background-color: aqua;
    }
    
    .primaParteNav {
        display: flex;
        justify-content: space-evenly;
        padding: 5px;
    }
    
    .secondaParteNav {
        display: flex;
        padding-left: 2rem;
        column-gap: 2rem;
        padding: 1rem;
    }
    
    .mainContainer {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    
    .primaParteMain {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 2rem;
    }
    
    .secondaParteMain {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;;
    }
    
    .contenitoreUno, .contenitoreDue, .contenitoreTre {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }

    </style>

    <nav>
        <div class="primaParteNav">
            <div class="titolo">adsfgdsg</div>
            <div class="generalButtons">
                <button id="cambioGradi"></button>
            </div>
        </div>
        <div class="secondaParteNav">
            <input type="text" name="citySearch" id="SearchBox">
            <button id="searchBtn"></button>
        </div>
    </nav>

    <div class="mainContainer">

        <div class="primaParteMain">
            <div class="Nomepaese">Meteo 'citta'</div>
            <div class="giorno">Oggi</div>
        </div>

        <div class="secondaParteMain">
            <div class="contenitoreUno">
                <span class="oggi">Oggi</span>
                <span class="dataOggi">06</span>
            </div>
            <div class="contenitoreDue">
                <span class="domani">Domani</span>
                <img src="iconaMeteoGiornaliero" alt="" srcset="">
                <div class="gradi">
                    <span class="gradiMin">14°</span>
                    <span class="gradiMax">21°</span>
                </div>
            </div>
            <div class="contenitoreTre">
                <span class="dopoDomani">mer 08</span>
                <img src="iconaMeteoGiornaliero" alt="" srcset="">
                <div class="gradi">
                    <span class="gradiMin">9°</span>
                    <span class="gradiMax">17°</span>
                </div>
            </div>
        </div>

        <div class="terzaParteMain">

        </div>
    </div>

    <div class="footer">

        <a href="https://github.com/ReXerses" target="_blank">
            <img src="../src/media/github.svg" alt="Personal Github link">
        </a>
        <a class='nome-github' href="https://github.com/ReXerses" target="_blank">ReXerses</a>

    </div>
    `;

});

export default scheletroPagina;