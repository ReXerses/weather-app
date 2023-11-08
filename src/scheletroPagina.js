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
        background-color: yellow;
    }
    
    .secondaParteMain {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        font-size: clamp(14px,3vw,4rem);
    }

    .terzaParteMain {
        padding: 10px;
    }

    .boxOra {
        display: flex;
        align-items: center;
        column-gap: 1rem;
        padding: 1rem;
        border: black solid 1px;
        margin-bottom: 10px;
        font-size: clamp(14px,3vw,4rem);
    }

    .boxOra {
        justify-content: space-between; /* 100% della larghezza in modalità mobile */
    }



    @media (max-width: 768px) {
        .boxOra {
          justify-content: space-between; /* 100% della larghezza in modalità mobile */
        }

        .boxOra > span , .boxOra > img {
            flex: 1;
        }
    }
    
    .contenitoreUno, .contenitoreDue, .contenitoreTre {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        cursor: pointer;
    }

    </style>

    <nav>
        <div class="primaParteNav">
            <div class="titolo">adsfgdsg</div>
            <div class="generalButtons">
                <button id="cambioGradi"></button>
            </div>
        </div>
        <form class="secondaParteNav">
            <input type="text" name="citySearch" id="searchBox">
            <button id="searchBtn"></button>
        </form>
    </nav>

    <div class="mainContainer">

        <div class="primaParteMain">
            <div class="nomePaese"></div>
            <div class="giorno"></div>
        </div>

        <div class="secondaParteMain">
            <div class="contenitoreUno" id='box1'>
                <span class="oggi"></span>
                <img src='' alt="" id='iconaOggi'>
                <div class="gradi">
                    <span class="gradiMin" id='gradiMinOggi'></span>
                    <span class="gradiMax" id='gradiMaxOggi'></span>
                </div>
            </div>
            <div class="contenitoreDue" id='box2'>
                <span class="domani"></span>
                <img src='' alt="" id='iconaDomani'>
                <div class="gradi">
                    <span class="gradiMin" id='gradiMinDomani'></span>
                    <span class="gradiMax" id='gradiMaxDomani'></span>
                </div>
            </div>
            <div class="contenitoreTre" id='box3'>
                <span class="dopoDomani"></span>
                <img src="" alt="" id='iconaDopoDomani'>
                <div class="gradi">
                    <span class="gradiMin" id='gradiMinDopoDomani'></span>
                    <span class="gradiMax" id='gradiMaxDopoDomani'></span>
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