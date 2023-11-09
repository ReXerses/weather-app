const scheletroPagina = (() => {
    const body = document.body;

    body.innerHTML = `<style>
    .animateFromLeft {
        animation: animateFromLeft 0.5s ease-out;
    }
    
    @keyframes animateFromLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

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
        background-color: #1461a1;
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
        background-color: #1461a1;
        filter: drop-shadow(0px 0vh 2vh #000000);
        position: sticky;
        top: 0;
    }
    
    .primaParteNav {
        display: flex;
        justify-content: space-evenly;
        padding: 10px;
        color: white;
        font-weight: bold;
        font-size: 3rem;
    }
    
    .secondaParteNav {
        padding: 1rem;
    }

    .inputCittà {
        display: flex;
        height: 40px;
    }

    #searchBtn {
        width: 55px;
        height: 38px;
        border: none;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        background-image: url(../src/media/magnify.svg);
        background-size: 100% 100%;
        background-color: rgb(0 255 208);
        filter: invert(1);
        cursor: pointer;
    }

    #searchBox {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        padding: 8px;
        height: 22px;
        border: none;
        color: rgb(5 38 133);
        font-size: 1.0rem;
        letter-spacing: 1px;
    }

    #searchBox:focus {
        outline: none;
    }

    #cambioGradi {
        height: 35px;
        width: 35px;
        border: 4px solid black;
        background-color: #00000000;
        border-radius: 16px;
        cursor: pointer;
        filter: brightness(0) invert(1);
    }

    #cambioGradi:hover {
        transform: scale(.9);
        box-shadow: 0 3px 15px -2px;
    }

    .celsius {
        background-image: url(../src/media/celsius.svg);
        background-size: 100% 100%;
    }
    .fahre {
        background-image: url(../src/media/fahre.svg);
        background-size: 100% 100%;
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
        text-align: center;
        border-bottom: 1px solid #1461a1;
    }

    .nomePaese {
        border-bottom: 1px solid #1461a1;
    }
    
    .secondaParteMain {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: clamp(14px,3vw,4rem);
        border-bottom: 1px solid #1461a1;
    }

    .boxIcona > img {
        height: 50px;
    }


    .boxPrevisioneOraria {
        display: flex;
        align-items: center;
        column-gap: 1rem;
        padding: 1rem;
        font-size: clamp(14px,3vw,4rem);
    }

    .boxOrario, .boxIcona, .boxTempMedia {
        flex: 1;
        font-size: clamp(14px,2vw,4rem);
        display: flex;
    }

    .boxCondizione {
        flex: 3;
        font-size: clamp(14px,1.5vw,4rem);
    }

    /*.secondaParteMain > :nth-child(odd) {
        background-color:  #8080800a;
    }*/

    .terzaParteMain > :nth-child(odd) {
        background-color:  #1461a117;
    }

    .contenitoreUno, .contenitoreDue, .contenitoreTre {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        cursor: pointer;
        font-size: clamp(14px,1.5vw,4rem);
        gap: 6px;
        padding: 10px;
    }

    .giornoSelezionato {
        background-color: #1461a1;
        color: white;
    }


    </style>

    <nav>
        <div class="primaParteNav">
            <div class="titolo">Meteo APP</div>
            <div class="generalButtons">
                <button id="cambioGradi" class='celsius'></button>
            </div>
        </div>
        <form class="secondaParteNav">
            <div class='inputCittà'>
                <input type="text" name="citySearch" id="searchBox" autocomplete='off'>
                <button id="searchBtn"></button>
            </div>
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